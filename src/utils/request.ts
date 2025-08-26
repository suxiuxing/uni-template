import { getToken } from '@/utils/token.ts';
import type { UnConfig, UnResponse } from '@uni-helper/uni-network';
import { un } from '@uni-helper/uni-network';

/**
 * 后端请求响应结构体
 */
interface ResponseStructure<D = unknown> {
  msg?: string;
  code?: number;
  data?: D;
}

export type QueryParamsType = Record<string | number, unknown>;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export interface FullRequestParams extends Omit<UnConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
  /** 是否跳过业务逻辑处理 */
  skipBizLogic?: boolean;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path' | 'skipBizLogic'>;

const stringifyFormItem = (formItem: unknown) => {
  if (typeof formItem === 'object' && formItem !== null) {
    return JSON.stringify(formItem);
  } else {
    return `${formItem}`;
  }
};

const createFormData = (input: Record<string, unknown>): FormData => {
  const formData = new FormData();

  return Object.keys(input || {}).reduce((formData, key) => {
    const property = input[key];
    const propertyContent: unknown[] = property instanceof Array ? property : [property];

    for (const formItem of propertyContent) {
      const isFileType = formItem instanceof Blob || formItem instanceof File;
      formData.append(key, isFileType ? formItem : stringifyFormItem(formItem));
    }

    return formData;
  }, formData);
};

const instance = un.create({
  baseUrl: import.meta.env.VITE_API_HOST,
});

instance.interceptors.request.use((config) => {
  config.headers!.Authorization = getToken();

  return config;
});

instance.interceptors.response.use(
  (axiosResponse) => {
    return axiosResponse;
  },
  async (error) => {
    console.error(error);
    uni.showToast({
      title: '网络错误，请稍后再试',
      icon: 'error',
    });
  },
);

const redirectToLoginPage = () => {
  console.log('redirectToLoginPage');
};

export function request<D = unknown>(
  params: { skipBizLogic?: false } & Omit<FullRequestParams, 'skipBizLogic'>,
): Promise<D extends ResponseStructure ? D['data'] : D>;
export function request<D = unknown>(
  params: { skipBizLogic: true } & Omit<FullRequestParams, 'skipBizLogic'>,
): Promise<UnResponse<D>>;
export function request({
  secure,
  path,
  type,
  query,
  format,
  body,
  skipBizLogic,
  ...params
}: ({ skipBizLogic?: false } | { skipBizLogic: true }) & Omit<FullRequestParams, 'skipBizLogic'>) {
  if (secure && !getToken()) {
    redirectToLoginPage();
    return;
  }

  let data = body;

  if (type === ContentType.FormData && body && typeof body === 'object') {
    data = createFormData(body);
  }

  if (type === ContentType.Text && body && typeof body !== 'string') {
    data = JSON.stringify(body);
  }

  return instance<ResponseStructure>({
    ...params,
    headers: {
      ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      ...(params.headers || {}),
    },
    params: query,
    responseType: format,
    data,
    url: path,
  }).then((value) => {
    if (skipBizLogic) {
      return value.data;
    }

    const code = value.data?.code;

    if (code === 0) {
      return value?.data?.data ?? value?.data;
    }

    if (code === 401) {
      redirectToLoginPage();
      throw new Error('登录已过期');
    }

    uni.showToast({
      title: value.data?.msg ?? '网络错误，请稍后再试',
      icon: 'error',
    });

    throw value.data;
  });
}
