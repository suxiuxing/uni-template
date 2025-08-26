 
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { RequestParams } from '@/utils/request';
import { ContentType, request } from '@/utils/request';
import type {
  CommonResultAppTenantRespVO,
  CommonResultFilePresignedUrlRespVO,
  CommonResultListAppAreaNodeRespVO,
  CommonResultListAppDictDataRespVO,
  CommonResultLong,
  CommonResultString,
  FileCreateReqVO,
} from './data-contracts';

/**
 * No description
 *
 * @tags 用户 App - 文件存储
 * @name postInfraFileUpload
 * @summary 上传文件
 * @request POST:/app-api/infra/file/upload
 * @secure
 */
export const postInfraFileUpload = (
  query?: {
    /**
     * 文件目录
     * @example "XXX/YYY"
     */
    directory?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/app-api/infra/file/upload`,
    method: 'POST',
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件
 *
 * @tags 用户 App - 文件存储
 * @name postInfraFileCreate
 * @summary 创建文件
 * @request POST:/app-api/infra/file/create
 * @secure
 */
export const postInfraFileCreate = (data: FileCreateReqVO, params: RequestParams = {}) =>
  request<CommonResultLong>({
    path: `/app-api/infra/file/create`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 根据用户的域名，获得租户信息
 *
 * @tags 用户 App - 租户
 * @name getSystemTenantGetByWebsite
 * @summary 使用域名，获得租户信息
 * @request GET:/app-api/system/tenant/get-by-website
 * @secure
 */
export const getSystemTenantGetByWebsite = (
  query: {
    /**
     * 域名
     * @example "www.iocoder.cn"
     */
    website: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultAppTenantRespVO>({
    path: `/app-api/system/tenant/get-by-website`,
    method: 'GET',
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 用户 App - 字典数据
 * @name getSystemDictDataType
 * @summary 根据字典类型查询字典数据信息
 * @request GET:/app-api/system/dict-data/type
 * @secure
 */
export const getSystemDictDataType = (
  query: {
    /**
     * 字典类型
     * @example "common_status"
     */
    type: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListAppDictDataRespVO>({
    path: `/app-api/system/dict-data/type`,
    method: 'GET',
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 用户 App - 地区
 * @name getSystemAreaTree
 * @summary 获得地区树
 * @request GET:/app-api/system/area/tree
 * @secure
 */
export const getSystemAreaTree = (params: RequestParams = {}) =>
  request<CommonResultListAppAreaNodeRespVO>({
    path: `/app-api/system/area/tree`,
    method: 'GET',
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器
 *
 * @tags 用户 App - 文件存储
 * @name getInfraFilePresignedUrl
 * @summary 获取文件预签名地址（上传）
 * @request GET:/app-api/infra/file/presigned-url
 * @secure
 */
export const getInfraFilePresignedUrl = (
  query: {
    /** 文件名称 */
    name: string;
    /** 文件目录 */
    directory?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultFilePresignedUrlRespVO>({
    path: `/app-api/infra/file/presigned-url`,
    method: 'GET',
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });
