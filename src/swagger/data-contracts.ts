 
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 管理后台 - 用户创建/修改 Request VO */
export interface UserSaveReqVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 用户账号
   * @minLength 4
   * @maxLength 30
   * @pattern ^[a-zA-Z0-9]+$
   * @example "yudao"
   */
  username: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 备注
   * @example "我是一个用户"
   */
  remark?: string;
  /**
   * 部门编号
   * @format int64
   * @example "我是一个用户"
   */
  deptId?: number;
  /**
   * 岗位编号数组
   * @uniqueItems true
   * @example 1
   */
  postIds?: number[];
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xxx.png"
   */
  avatar?: string;
  /**
   * 密码
   * @example 123456
   */
  password: string;
}

export interface CommonResultBoolean {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: boolean;
}

/** 管理后台 - 用户更新状态 Request VO */
export interface UserUpdateStatusReqVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 状态，见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
}

/** 管理后台 - 用户更新密码 Request VO */
export interface UserUpdatePasswordReqVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 密码
   * @minLength 1
   * @example 123456
   */
  password: string;
}

/** 管理后台 - 用户个人信息更新 Request VO */
export interface UserProfileUpdateReqVO {
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   * @example "芋艿"
   */
  nickname?: string;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
  /**
   * 角色头像
   * @example "https://www.iocoder.cn/1.png"
   */
  avatar?: string;
}

/** 管理后台 - 用户个人中心更新密码 Request VO */
export interface UserProfileUpdatePasswordReqVO {
  /**
   * 旧密码
   * @minLength 1
   * @example 123456
   */
  oldPassword: string;
  /**
   * 新密码
   * @minLength 1
   * @example 654321
   */
  newPassword: string;
}

/** 管理后台 - 租户创建/修改 Request VO */
export interface TenantSaveReqVO {
  /**
   * 租户编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 租户名
   * @example "芋道"
   */
  name: string;
  /**
   * 联系人
   * @example "芋艿"
   */
  contactName: string;
  /**
   * 联系手机
   * @example 15601691300
   */
  contactMobile?: string;
  /**
   * 租户状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 绑定域名数组
   * @example "https://www.iocoder.cn"
   */
  websites?: string[];
  /**
   * 租户套餐编号
   * @format int64
   * @example 1024
   */
  packageId: number;
  /**
   * 过期时间
   * @format date-time
   */
  expireTime: string;
  /**
   * 账号数量
   * @format int32
   * @example 1024
   */
  accountCount: number;
  /**
   * 用户账号
   * @minLength 4
   * @maxLength 30
   * @pattern ^[a-zA-Z0-9]{4,30}$
   * @example "yudao"
   */
  username: string;
  /**
   * 密码
   * @example 123456
   */
  password: string;
}

/** 管理后台 - 租户套餐创建/修改 Request VO */
export interface TenantPackageSaveReqVO {
  /**
   * 套餐编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 套餐名
   * @minLength 1
   * @example "VIP"
   */
  name: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "好"
   */
  remark?: string;
  /**
   * 关联的菜单编号
   * @uniqueItems true
   */
  menuIds: number[];
}

/** 管理后台 - 社交客户端创建/修改 Request VO */
export interface SocialClientSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 27162
   */
  id?: number;
  /**
   * 应用名
   * @example "yudao商城"
   */
  name: string;
  /**
   * 社交平台的类型
   * @format int32
   * @example 31
   */
  socialType: number;
  /**
   * 用户类型
   * @format int32
   * @example 2
   */
  userType: number;
  /**
   * 客户端编号
   * @example "wwd411c69a39ad2e54"
   */
  clientId: string;
  /**
   * 客户端密钥
   * @example "peter"
   */
  clientSecret: string;
  /**
   * 授权方的网页应用编号
   * @example 2000045
   */
  agentId: string;
  /**
   * 状态
   * @format int32
   * @example 1
   */
  status: number;
}

/** 管理后台 - 短信模板创建/修改 Request VO */
export interface SmsTemplateSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 短信类型，参见 SmsTemplateTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 开启状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 模板编码
   * @example "test_01"
   */
  code: string;
  /**
   * 模板名称
   * @example "yudao"
   */
  name: string;
  /**
   * 模板内容
   * @example "你好，{name}。你长的太{like}啦！"
   */
  content: string;
  /**
   * 备注
   * @example "哈哈哈"
   */
  remark?: string;
  /**
   * 短信 API 的模板编号
   * @example 4383920
   */
  apiTemplateId: string;
  /**
   * 短信渠道编号
   * @format int64
   * @example 10
   */
  channelId: number;
}

/** 管理后台 - 短信渠道创建/修改 Request VO */
export interface SmsChannelSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 短信签名
   * @example "芋道源码"
   */
  signature: string;
  /**
   * 渠道编码，参见 SmsChannelEnum 枚举类
   * @example "YUN_PIAN"
   */
  code: string;
  /**
   * 启用状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "好吃！"
   */
  remark?: string;
  /**
   * 短信 API 的账号
   * @example "yudao"
   */
  apiKey: string;
  /**
   * 短信 API 的密钥
   * @example "yuanma"
   */
  apiSecret?: string;
  /**
   * 短信发送回调 URL
   * @example "http://www.iocoder.cn"
   */
  callbackUrl?: string;
}

/** 管理后台 - 角色创建/更新 Request VO */
export interface RoleSaveReqVO {
  /**
   * 角色编号
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 角色名称
   * @minLength 0
   * @maxLength 30
   * @example "管理员"
   */
  name: string;
  /**
   * 角色标志
   * @minLength 0
   * @maxLength 100
   * @example "ADMIN"
   */
  code: string;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 状态
   * @format int32
   * @example 0
   */
  status: number;
  /**
   * 备注
   * @minLength 0
   * @maxLength 500
   * @example "我是一个角色"
   */
  remark?: string;
}

/** 管理后台 - 岗位创建/修改 Request VO */
export interface PostSaveReqVO {
  /**
   * 岗位编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 岗位名称
   * @minLength 0
   * @maxLength 50
   * @example "小土豆"
   */
  name: string;
  /**
   * 岗位编码
   * @minLength 0
   * @maxLength 64
   * @example "yudao"
   */
  code: string;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "快乐的备注"
   */
  remark?: string;
}

/** 管理后台 - OAuth2 更新用户基本信息 Request VO */
export interface OAuth2UserUpdateReqVO {
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
}

/** 管理后台 - OAuth2 客户端创建/修改 Request VO */
export interface OAuth2ClientSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 客户端编号
   * @example "tudou"
   */
  clientId: string;
  /**
   * 客户端密钥
   * @example "fan"
   */
  secret: string;
  /**
   * 应用名
   * @example "土豆"
   */
  name: string;
  /**
   * 应用图标
   * @example "https://www.iocoder.cn/xx.png"
   */
  logo: string;
  /**
   * 应用描述
   * @example "我是一个应用"
   */
  description?: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 访问令牌的有效期
   * @format int32
   * @example 8640
   */
  accessTokenValiditySeconds: number;
  /**
   * 刷新令牌的有效期
   * @format int32
   * @example 8640000
   */
  refreshTokenValiditySeconds: number;
  /**
   * 可重定向的 URI 地址
   * @example "https://www.iocoder.cn"
   */
  redirectUris: string[];
  /**
   * 授权类型，参见 OAuth2GrantTypeEnum 枚举
   * @example "password"
   */
  authorizedGrantTypes: string[];
  /**
   * 授权范围
   * @example "user_info"
   */
  scopes?: string[];
  /**
   * 自动通过的授权范围
   * @example "user_info"
   */
  autoApproveScopes?: string[];
  /**
   * 权限
   * @example "system:user:query"
   */
  authorities?: string[];
  /**
   * 资源
   * @example 1024
   */
  resourceIds?: string[];
  /**
   * 附加信息
   * @example "{yunai: true}"
   */
  additionalInformation?: string;
  additionalInformationJson?: boolean;
}

/** 管理后台 - 站内信模版创建/修改 Request VO */
export interface NotifyTemplateSaveReqVO {
  /**
   * ID
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 模版名称
   * @minLength 1
   * @example "测试模版"
   */
  name: string;
  /**
   * 模版编码
   * @example "SEND_TEST"
   */
  code: string;
  /**
   * 模版类型，对应 system_notify_template_type 字典
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 发送人名称
   * @minLength 1
   * @example "土豆"
   */
  nickname: string;
  /**
   * 模版内容
   * @minLength 1
   * @example "我是模版内容"
   */
  content: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
}

/** 管理后台 - 通知公告创建/修改 Request VO */
export interface NoticeSaveReqVO {
  /**
   * 岗位公告编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 公告标题
   * @minLength 0
   * @maxLength 50
   * @example "小博主"
   */
  title: string;
  /**
   * 公告类型
   * @format int32
   * @example "小博主"
   */
  type: number;
  /**
   * 公告内容
   * @example "半生编码"
   */
  content: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
}

/** 管理后台 - 菜单创建/修改 Request VO */
export interface MenuSaveVO {
  /**
   * 菜单编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 50
   * @example "芋道"
   */
  name: string;
  /**
   * 权限标识,仅菜单类型为按钮时，才需要传递
   * @minLength 0
   * @maxLength 100
   * @example "sys:menu:add"
   */
  permission?: string;
  /**
   * 类型，参见 MenuTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 父菜单 ID
   * @format int64
   * @example 1024
   */
  parentId: number;
  /**
   * 路由地址,仅菜单类型为菜单或者目录时，才需要传
   * @minLength 0
   * @maxLength 200
   * @example "post"
   */
  path?: string;
  /**
   * 菜单图标,仅菜单类型为菜单或者目录时，才需要传
   * @example "/menu/list"
   */
  icon?: string;
  /**
   * 组件路径,仅菜单类型为菜单时，才需要传
   * @minLength 0
   * @maxLength 200
   * @example "system/post/index"
   */
  component?: string;
  /**
   * 组件名
   * @example "SystemUser"
   */
  componentName?: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 是否可见
   * @example false
   */
  visible?: boolean;
  /**
   * 是否缓存
   * @example false
   */
  keepAlive?: boolean;
  /**
   * 是否总是显示
   * @example false
   */
  alwaysShow?: boolean;
}

/** 管理后台 - 邮件模版创建/修改 Request VO */
export interface MailTemplateSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 模版名称
   * @example "测试名字"
   */
  name: string;
  /**
   * 模版编号
   * @example "test"
   */
  code: string;
  /**
   * 发送的邮箱账号编号
   * @format int64
   * @example 1
   */
  accountId: number;
  /**
   * 发送人名称
   * @example "芋头"
   */
  nickname?: string;
  /**
   * 标题
   * @minLength 1
   * @example "注册成功"
   */
  title: string;
  /**
   * 内容
   * @minLength 1
   * @example "你好，注册成功啦"
   */
  content: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "奥特曼"
   */
  remark?: string;
}

/** 管理后台 - 邮箱账号创建/修改 Request VO */
export interface MailAccountSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 邮箱
   * @example "yudaoyuanma@123.com"
   */
  mail: string;
  /**
   * 用户名
   * @example "yudao"
   */
  username: string;
  /**
   * 密码
   * @example 123456
   */
  password: string;
  /**
   * SMTP 服务器域名
   * @example "www.iocoder.cn"
   */
  host: string;
  /**
   * SMTP 服务器端口
   * @format int32
   * @example 80
   */
  port: number;
  /**
   * 是否开启 ssl
   * @example true
   */
  sslEnable: boolean;
  /**
   * 是否开启 starttls
   * @example true
   */
  starttlsEnable: boolean;
}

/** 管理后台 - 字典类型创建/修改 Request VO */
export interface DictTypeSaveReqVO {
  /**
   * 字典类型编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 字典名称
   * @minLength 0
   * @maxLength 100
   * @example "性别"
   */
  name: string;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   * @example "sys_common_sex"
   */
  type: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "快乐的备注"
   */
  remark?: string;
}

/** 管理后台 - 字典数据创建/修改 Request VO */
export interface DictDataSaveReqVO {
  /**
   * 字典数据编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 字典标签
   * @minLength 0
   * @maxLength 100
   * @example "芋道"
   */
  label: string;
  /**
   * 字典值
   * @minLength 0
   * @maxLength 100
   * @example "iocoder"
   */
  value: string;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   * @example "sys_common_sex"
   */
  dictType: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 颜色类型,default、primary、success、info、warning、danger
   * @example "default"
   */
  colorType?: string;
  /**
   * css 样式
   * @example "btn-visible"
   */
  cssClass?: string;
  /**
   * 备注
   * @example "我是一个角色"
   */
  remark?: string;
}

/** 管理后台 - 部门创建/修改 Request VO */
export interface DeptSaveReqVO {
  /**
   * 部门编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 部门名称
   * @minLength 0
   * @maxLength 30
   * @example "芋道"
   */
  name: string;
  /**
   * 父部门 ID
   * @format int64
   * @example 1024
   */
  parentId?: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 负责人的用户编号
   * @format int64
   * @example 2048
   */
  leaderUserId?: number;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   * @example 15601691000
   */
  phone?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 50
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
}

/** 管理后台 - 定时任务创建/修改 Request VO */
export interface JobSaveReqVO {
  /**
   * 任务编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 任务名称
   * @minLength 1
   * @example "测试任务"
   */
  name: string;
  /**
   * 处理器的名字
   * @minLength 1
   * @example "sysUserSessionTimeoutJob"
   */
  handlerName: string;
  /**
   * 处理器的参数
   * @example "yudao"
   */
  handlerParam?: string;
  /**
   * CRON 表达式
   * @minLength 1
   * @example "0/10 * * * * ? *"
   */
  cronExpression: string;
  /**
   * 重试次数
   * @format int32
   * @example 3
   */
  retryCount: number;
  /**
   * 重试间隔
   * @format int32
   * @example 1000
   */
  retryInterval: number;
  /**
   * 监控超时时间
   * @format int32
   * @example 1000
   */
  monitorTimeout?: number;
}

/** 管理后台 - 文件配置创建/修改 Request VO */
export interface FileConfigSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 配置名
   * @example "S3 - 阿里云"
   */
  name: string;
  /**
   * 存储器，参见 FileStorageEnum 枚举类
   * @format int32
   * @example 1
   */
  storage: number;
  /** 存储配置,配置是动态参数，所以使用 Map 接收 */
  config: Record<string, any>;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
}

export interface Demo03CourseDO {
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  studentId?: number;
  name?: string;
  /** @format int32 */
  score?: number;
}

export interface Demo03GradeDO {
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  studentId?: number;
  name?: string;
  teacher?: string;
}

/** 管理后台 - 学生新增/修改 Request VO */
export interface Demo03StudentNormalSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @minLength 1
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @minLength 1
   * @example "随便"
   */
  description: string;
  /** 学生课程列表 */
  demo03Courses?: Demo03CourseDO[];
  /** 学生班级 */
  demo03Grade?: Demo03GradeDO;
}

/** 管理后台 - 学生新增/修改 Request VO */
export interface Demo03StudentInnerSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @minLength 1
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @minLength 1
   * @example "随便"
   */
  description: string;
  /** 学生课程列表 */
  demo03Courses?: Demo03CourseDO[];
  /** 学生班级 */
  demo03Grade?: Demo03GradeDO;
}

/** 管理后台 - 学生新增/修改 Request VO */
export interface Demo03StudentErpSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @minLength 1
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @minLength 1
   * @example "随便"
   */
  description: string;
}

/** 管理后台 - 示例分类新增/修改 Request VO */
export interface Demo02CategorySaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 10304
   */
  id: number;
  /**
   * 名字
   * @minLength 1
   * @example "芋艿"
   */
  name: string;
  /**
   * 父级编号
   * @format int64
   * @example 6080
   */
  parentId: number;
}

/** 管理后台 - 示例联系人新增/修改 Request VO */
export interface Demo01ContactSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 21555
   */
  id: number;
  /**
   * 名字
   * @minLength 1
   * @example "张三"
   */
  name: string;
  /**
   * 性别
   * @format int32
   * @example 1
   */
  sex: number;
  /**
   * 出生年
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @minLength 1
   * @example "你说的对"
   */
  description: string;
  /** 头像 */
  avatar?: string;
}

/** 管理后台 - 数据源配置创建/修改 Request VO */
export interface DataSourceConfigSaveReqVO {
  /**
   * 主键编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 数据源名称
   * @example "test"
   */
  name: string;
  /**
   * 数据源连接
   * @example "jdbc:mysql://127.0.0.1:3306/ruoyi-vue-pro"
   */
  url: string;
  /**
   * 用户名
   * @example "root"
   */
  username: string;
  /**
   * 密码
   * @example 123456
   */
  password: string;
}

/** 管理后台 - 参数配置创建/修改 Request VO */
export interface ConfigSaveReqVO {
  /**
   * 参数配置序号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 参数分组
   * @minLength 0
   * @maxLength 50
   * @example "biz"
   */
  category: string;
  /**
   * 参数名称
   * @minLength 0
   * @maxLength 100
   * @example "数据库名"
   */
  name: string;
  /**
   * 参数键名
   * @minLength 0
   * @maxLength 100
   * @example "yunai.db.username"
   */
  key: string;
  /**
   * 参数键值
   * @minLength 0
   * @maxLength 500
   * @example 1024
   */
  value: string;
  /**
   * 是否可见
   * @example true
   */
  visible: boolean;
  /**
   * 备注
   * @example "备注一下很帅气！"
   */
  remark?: string;
}

/** 管理后台 - 代码生成字段定义创建/修改 Request VO */
export interface CodegenColumnSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 表编号
   * @format int64
   * @example 1
   */
  tableId: number;
  /**
   * 字段名
   * @example "user_age"
   */
  columnName: string;
  /**
   * 字段类型
   * @example "int(11)"
   */
  dataType: string;
  /**
   * 字段描述
   * @example "年龄"
   */
  columnComment: string;
  /**
   * 是否允许为空
   * @example true
   */
  nullable: boolean;
  /**
   * 是否主键
   * @example false
   */
  primaryKey: boolean;
  /**
   * 排序
   * @format int32
   * @example 10
   */
  ordinalPosition: number;
  /**
   * Java 属性类型
   * @example "userAge"
   */
  javaType: string;
  /**
   * Java 属性名
   * @example "Integer"
   */
  javaField: string;
  /**
   * 字典类型
   * @example "sys_gender"
   */
  dictType?: string;
  /**
   * 数据示例
   * @example 1024
   */
  example?: string;
  /**
   * 是否为 Create 创建操作的字段
   * @example true
   */
  createOperation: boolean;
  /**
   * 是否为 Update 更新操作的字段
   * @example false
   */
  updateOperation: boolean;
  /**
   * 是否为 List 查询操作的字段
   * @example true
   */
  listOperation: boolean;
  /**
   * List 查询操作的条件类型，参见 CodegenColumnListConditionEnum 枚举
   * @example "LIKE"
   */
  listOperationCondition: string;
  /**
   * 是否为 List 查询操作的返回字段
   * @example true
   */
  listOperationResult: boolean;
  /**
   * 显示类型
   * @example "input"
   */
  htmlType: string;
}

/** 管理后台 - 代码生成表定义创建/修改 Response VO */
export interface CodegenTableSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 生成场景，参见 CodegenSceneEnum 枚举
   * @format int32
   * @example 1
   */
  scene: number;
  /**
   * 表名称
   * @example "yudao"
   */
  tableName: string;
  /**
   * 表描述
   * @example "芋道"
   */
  tableComment: string;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
  /**
   * 模块名
   * @example "system"
   */
  moduleName: string;
  /**
   * 业务名
   * @example "codegen"
   */
  businessName: string;
  /**
   * 类名称
   * @example "CodegenTable"
   */
  className: string;
  /**
   * 类描述
   * @example "代码生成器的表定义"
   */
  classComment: string;
  /**
   * 作者
   * @example "芋道源码"
   */
  author: string;
  /**
   * 模板类型，参见 CodegenTemplateTypeEnum 枚举
   * @format int32
   * @example 1
   */
  templateType: number;
  /**
   * 前端类型，参见 CodegenFrontTypeEnum 枚举
   * @format int32
   * @example 20
   */
  frontType: number;
  /**
   * 父菜单编号
   * @format int64
   * @example 1024
   */
  parentMenuId?: number;
  /**
   * 主表的编号
   * @format int64
   * @example 2048
   */
  masterTableId?: number;
  /**
   * 子表关联主表的字段编号
   * @format int64
   * @example 4096
   */
  subJoinColumnId?: number;
  /**
   * 主表与子表是否一对多
   * @example 4096
   */
  subJoinMany?: boolean;
  /**
   * 树表的父字段编号
   * @format int64
   * @example 8192
   */
  treeParentColumnId?: number;
  /**
   * 树表的名字字段编号
   * @format int64
   * @example 16384
   */
  treeNameColumnId?: number;
}

/** 管理后台 - 代码生成表和字段的修改 Request VO */
export interface CodegenUpdateReqVO {
  /** 管理后台 - 代码生成表定义创建/修改 Response VO */
  table: CodegenTableSaveReqVO;
  columns: CodegenColumnSaveReqVO[];
}

/** 管理后台 - 用户组创建/修改 Request VO */
export interface BpmUserGroupSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 组名
   * @example "芋道"
   */
  name: string;
  /**
   * 描述
   * @example "芋道源码"
   */
  description?: string;
  /**
   * 成员编号数组
   * @uniqueItems true
   * @example "1,2,3"
   */
  userIds: number[];
  /**
   * 状态
   * @format int32
   * @example 1
   */
  status: number;
}

/** 管理后台 - 流程任务的转办 Request VO */
export interface BpmTaskTransferReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 新审批人的用户编号
   * @format int64
   * @example 2048
   */
  assigneeUserId: number;
  /**
   * 转办原因
   * @minLength 1
   * @example "做不了决定，需要你先帮忙瞅瞅"
   */
  reason: string;
}

/** 管理后台 - 退回流程任务的 Request VO */
export interface BpmTaskReturnReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 退回到的任务 Key
   * @minLength 1
   * @example 1
   */
  targetTaskDefinitionKey: string;
  /**
   * 退回意见
   * @minLength 1
   * @example "我就是想驳回"
   */
  reason: string;
}

/** 管理后台 - 不通过流程任务的 Request VO */
export interface BpmTaskRejectReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 审批意见
   * @example "不错不错！"
   */
  reason: string;
}

/** 管理后台 - 委派流程任务的 Request VO */
export interface BpmTaskDelegateReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 被委派人 ID
   * @format int64
   * @example 1
   */
  delegateUserId: number;
  /**
   * 委派原因
   * @minLength 1
   * @example "做不了决定，需要你先帮忙瞅瞅"
   */
  reason: string;
}

/** 管理后台 - 加签任务的创建（加签） Request VO */
export interface BpmTaskSignCreateReqVO {
  /**
   * 需要加签的任务编号
   * @minLength 1
   * @example 1
   */
  id: string;
  /**
   * 加签的用户编号
   * @minItems 1
   * @uniqueItems true
   * @example 888
   */
  userIds: number[];
  /**
   * 加签类型
   * @minLength 1
   * @example "before"
   */
  type: string;
  /**
   * 加签原因
   * @minLength 1
   * @example "需要加签"
   */
  reason: string;
}

/** 管理后台 - 抄送流程任务的 Request VO */
export interface BpmTaskCopyReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 抄送的用户编号数组
   * @minItems 1
   * @example [1,2]
   */
  copyUserIds: number[];
  /**
   * 抄送意见
   * @example "帮忙看看！"
   */
  reason?: string;
}

/** 管理后台 - 通过流程任务的 Request VO */
export interface BpmTaskApproveReqVO {
  /**
   * 任务编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 审批意见
   * @example "不错不错！"
   */
  reason?: string;
  /**
   * 签名
   * @example "https://www.iocoder.cn/sign.png"
   */
  signPicUrl?: string;
  /** 变量实例（动态表单） */
  variables: Record<string, any>;
  /**
   * 下一个节点审批人
   * @example "{nodeId:[1, 2]}"
   */
  nextAssignees?: Record<string, number[]>;
}

/** 管理后台 - BPM 流程监听器新增/修改 Request VO */
export interface BpmProcessListenerSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 13089
   */
  id: number;
  /**
   * 监听器名字
   * @minLength 1
   * @example "赵六"
   */
  name: string;
  /**
   * 监听器类型
   * @minLength 1
   * @example "execution"
   */
  type: string;
  /**
   * 监听器状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 监听事件
   * @minLength 1
   * @example "start"
   */
  event: string;
  /**
   * 监听器值类型
   * @minLength 1
   * @example "class"
   */
  valueType: string;
  /**
   * 监听器值
   * @minLength 1
   */
  value: string;
}

/** 管理后台 - BPM 流程表达式新增/修改 Request VO */
export interface BpmProcessExpressionSaveReqVO {
  /**
   * 编号
   * @format int64
   * @example 3870
   */
  id: number;
  /**
   * 表达式名字
   * @minLength 1
   * @example "李四"
   */
  name: string;
  /**
   * 表达式状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 表达式
   * @minLength 1
   */
  expression: string;
}

/** 空处理策略 */
export interface AssignEmptyHandler {
  /**
   * 空处理类型
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 指定人员审批的用户编号数组
   * @example 1
   */
  userIds?: number[];
}

/** 管理后台 - 流程模型的保存 Request VO */
export interface BpmModelSaveReqVO {
  /**
   * 流程图标
   * @example "https://www.iocoder.cn/yudao.jpg"
   */
  icon?: string;
  /**
   * 流程描述
   * @example "我是描述"
   */
  description?: string;
  /**
   * 流程类型
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 表单类型
   * @format int32
   * @example 10
   */
  formType: number;
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  formId?: number;
  /**
   * 自定义表单的提交路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/create"
   */
  formCustomCreatePath?: string;
  /**
   * 自定义表单的查看路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/view"
   */
  formCustomViewPath?: string;
  /**
   * 是否可见
   * @example true
   */
  visible: boolean;
  /**
   * 可发起用户编号数组
   * @example [1,2,3]
   */
  startUserIds?: number[];
  /**
   * 可发起部门编号数组
   * @example [2,4,6]
   */
  startDeptIds?: number[];
  /**
   * 可管理用户编号数组
   * @minItems 1
   * @example [2,4,6]
   */
  managerUserIds: number[];
  /**
   * 排序
   * @format int64
   * @example 1
   */
  sort?: number;
  /**
   * 允许撤销审批中的申请
   * @example true
   */
  allowCancelRunningProcess?: boolean;
  /**
   * 允许允许审批人撤回任务
   * @example false
   */
  allowWithdrawTask?: boolean;
  /**
   * 流程 ID 规则
   * @example {}
   */
  processIdRule?: ProcessIdRule;
  /**
   * 自动去重类型
   * @format int32
   * @example 1
   */
  autoApprovalType?: number;
  /**
   * 标题设置
   * @example {}
   */
  titleSetting?: TitleSetting;
  /**
   * 摘要设置
   * @example {}
   */
  summarySetting?: SummarySetting;
  /**
   * 流程前置通知设置
   * @example {}
   */
  processBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 流程后置通知设置
   * @example {}
   */
  processAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 任务前置通知设置
   * @example {}
   */
  taskBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 任务后置通知设置
   * @example {}
   */
  taskAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 编号
   * @example 1024
   */
  id?: string;
  /**
   * 流程标识
   * @minLength 1
   * @example "process_yudao"
   */
  key: string;
  /**
   * 流程名称
   * @minLength 1
   * @example "芋道"
   */
  name: string;
  /**
   * 流程分类
   * @example 1
   */
  category?: string;
  /** BPMN XML */
  bpmnXml?: string;
  /** 仿钉钉流程设计模型对象 */
  simpleModel?: BpmSimpleModelNodeVO;
}

/** 管理后台 - 仿钉钉流程设计模型节点 VO */
export interface BpmSimpleModelNodeVO {
  /**
   * 模型节点编号
   * @minLength 1
   * @example "StartEvent_1"
   */
  id: string;
  /**
   * 模型节点类型
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 模型节点名称
   * @example "领导审批"
   */
  name?: string;
  /**
   * 节点展示内容
   * @example "指定成员: 芋道源码"
   */
  showText?: string;
  /** 子节点 */
  childNode?: BpmSimpleModelNodeVO;
  /**
   * 候选人策略
   * @format int32
   * @example 30
   */
  candidateStrategy?: number;
  /** 候选人参数 */
  candidateParam?: string;
  /**
   * 审批节点类型
   * @format int32
   * @example 1
   */
  approveType?: number;
  /**
   * 多人审批方式
   * @format int32
   * @example 1
   */
  approveMethod?: number;
  /**
   * 通过比例
   * @format int32
   * @example 100
   */
  approveRatio?: number;
  /**
   * 表单权限
   * @example []
   */
  fieldsPermission?: Record<string, string>[];
  /**
   * 操作按钮设置
   * @example []
   */
  buttonsSetting?: OperationButtonSetting[];
  /**
   * 是否需要签名
   * @example false
   */
  signEnable?: boolean;
  /**
   * 是否填写审批意见
   * @example false
   */
  reasonRequire?: boolean;
  /**
   * 跳过表达式
   * @example "{true}"
   */
  skipExpression?: string;
  /** 审批节点拒绝处理策略 */
  rejectHandler?: RejectHandler;
  /** 审批节点超时处理策略 */
  timeoutHandler?: TimeoutHandler;
  /**
   * 审批节点的审批人与发起人相同时，对应的处理类型
   * @format int32
   * @example 1
   */
  assignStartUserHandlerType?: number;
  /** 空处理策略 */
  assignEmptyHandler?: AssignEmptyHandler;
  /** 任务监听器 */
  taskCreateListener?: ListenerHandler;
  /** 任务监听器 */
  taskAssignListener?: ListenerHandler;
  /** 任务监听器 */
  taskCompleteListener?: ListenerHandler;
  /**
   * 延迟器设置
   * @example {}
   */
  delaySetting?: DelaySetting;
  /** 条件节点 */
  conditionNodes?: {
    /**
     * 模型节点编号
     * @minLength 1
     * @example "StartEvent_1"
     */
    id: string;
    /**
     * 模型节点类型
     * @format int32
     * @example 1
     */
    type: number;
    /**
     * 模型节点名称
     * @example "领导审批"
     */
    name?: string;
    /**
     * 节点展示内容
     * @example "指定成员: 芋道源码"
     */
    showText?: string;
    /** 子节点 */
    childNode?: any;
    /**
     * 候选人策略
     * @format int32
     * @example 30
     */
    candidateStrategy?: number;
    /** 候选人参数 */
    candidateParam?: string;
    /**
     * 审批节点类型
     * @format int32
     * @example 1
     */
    approveType?: number;
    /**
     * 多人审批方式
     * @format int32
     * @example 1
     */
    approveMethod?: number;
    /**
     * 通过比例
     * @format int32
     * @example 100
     */
    approveRatio?: number;
    /**
     * 表单权限
     * @example []
     */
    fieldsPermission?: Record<string, string>[];
    /**
     * 操作按钮设置
     * @example []
     */
    buttonsSetting?: OperationButtonSetting[];
    /**
     * 是否需要签名
     * @example false
     */
    signEnable?: boolean;
    /**
     * 是否填写审批意见
     * @example false
     */
    reasonRequire?: boolean;
    /**
     * 跳过表达式
     * @example "{true}"
     */
    skipExpression?: string;
    /** 审批节点拒绝处理策略 */
    rejectHandler?: RejectHandler;
    /** 审批节点超时处理策略 */
    timeoutHandler?: TimeoutHandler;
    /**
     * 审批节点的审批人与发起人相同时，对应的处理类型
     * @format int32
     * @example 1
     */
    assignStartUserHandlerType?: number;
    /** 空处理策略 */
    assignEmptyHandler?: AssignEmptyHandler;
    /** 任务监听器 */
    taskCreateListener?: ListenerHandler;
    /** 任务监听器 */
    taskAssignListener?: ListenerHandler;
    /** 任务监听器 */
    taskCompleteListener?: ListenerHandler;
    /**
     * 延迟器设置
     * @example {}
     */
    delaySetting?: DelaySetting;
    /** 条件节点 */
    conditionNodes?: any[];
    /** 条件设置 */
    conditionSetting?: ConditionSetting;
    /**
     * 路由分支组
     * @example []
     */
    routerGroups?: RouterSetting[];
    /** 触发器节点配置 */
    triggerSetting?: TriggerSetting;
    /** 子流程节点配置 */
    childProcessSetting?: ChildProcessSetting;
  }[];
  /** 条件设置 */
  conditionSetting?: ConditionSetting;
  /**
   * 路由分支组
   * @example []
   */
  routerGroups?: RouterSetting[];
  /** 触发器节点配置 */
  triggerSetting?: TriggerSetting;
  /** 子流程节点配置 */
  childProcessSetting?: ChildProcessSetting;
}

/** 子流程节点配置 */
export interface ChildProcessSetting {
  /**
   * 被调用流程
   * @minLength 1
   * @example "xxx"
   */
  calledProcessDefinitionKey: string;
  /**
   * 被调用流程名称
   * @minLength 1
   * @example "xxx"
   */
  calledProcessDefinitionName: string;
  /**
   * 是否异步
   * @example false
   */
  async: boolean;
  /**
   * 输入参数(主->子)
   * @example []
   */
  inVariables?: IOParameter[];
  /**
   * 输出参数(子->主)
   * @example []
   */
  outVariables?: IOParameter[];
  /**
   * 是否自动跳过子流程发起节点
   * @example false
   */
  skipStartUserNode: boolean;
  /**
   * 子流程发起人配置
   * @example {}
   */
  startUserSetting: StartUserSetting;
  /**
   * 超时设置
   * @example {}
   */
  timeoutSetting: TimeoutSetting;
  /**
   * 多实例设置
   * @example {}
   */
  multiInstanceSetting: MultiInstanceSetting;
}

/** 条件 */
export interface Condition {
  /**
   * 条件下的规则关系是否为与关系
   * @example true
   */
  and: boolean;
  /**
   * 条件下的规则
   * @minItems 1
   * @example []
   */
  rules: ConditionRule[];
}

/** 条件组 */
export interface ConditionGroups {
  /**
   * 条件组下的条件关系是否为与关系
   * @example true
   */
  and: boolean;
  /**
   * 条件组下的条件
   * @minItems 1
   * @example []
   */
  conditions: Condition[];
}

/** 条件规则 */
export interface ConditionRule {
  /**
   * 运行符号
   * @minLength 1
   * @example "=="
   */
  opCode: string;
  /**
   * 运算符左边的值,例如某个流程变量
   * @minLength 1
   * @example "startUserId"
   */
  leftSide: string;
  /**
   * 运算符右边的值
   * @minLength 1
   * @example 1
   */
  rightSide: string;
}

/** 条件设置 */
export interface ConditionSetting {
  /**
   * 条件类型
   * @format int32
   * @example 1
   */
  conditionType?: number;
  /**
   * 条件表达式
   * @example "${day>3}"
   */
  conditionExpression?: string;
  /**
   * 是否默认条件
   * @example true
   */
  defaultFlow?: boolean;
  /** 条件组 */
  conditionGroups?: ConditionGroups;
}

/** 延迟器 */
export interface DelaySetting {
  /**
   * 延迟时间类型
   * @format int32
   * @example 1
   */
  delayType: number;
  /**
   * 延迟时间表达式
   * @minLength 1
   * @example "PT1H,2025-01-01T00:00:00"
   */
  delayTime: string;
}

export interface ExtensionAttribute {
  name?: string;
  value?: string;
  namespacePrefix?: string;
  namespace?: string;
  values?: any;
}

export interface ExtensionElement {
  id?: string;
  /** @format int32 */
  xmlRowNumber?: number;
  /** @format int32 */
  xmlColumnNumber?: number;
  attributes?: Record<string, ExtensionAttribute[]>;
  name?: string;
  namespacePrefix?: string;
  namespace?: string;
  elementText?: string;
  values?: any;
}

/**
 * 流程表单触发器设置
 * @example {}
 */
export interface FormTriggerSetting {
  /**
   * 条件类型
   * @format int32
   * @example 1
   */
  conditionType?: number;
  /**
   * 条件表达式
   * @example "${day>3}"
   */
  conditionExpression?: string;
  /**
   * 条件组
   * @example {}
   */
  conditionGroups?: ConditionGroups;
  /**
   * 修改的表单字段
   * @example {}
   */
  updateFormFields?: Record<string, any>;
  /**
   * 删除表单字段
   * @uniqueItems true
   * @example []
   */
  deleteFields?: string[];
}

/** HTTP 请求参数设置 */
export interface HttpRequestParam {
  /**
   * 值类型
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 键
   * @minLength 1
   * @example "xxx"
   */
  key: string;
  /**
   * 值
   * @minLength 1
   * @example "xxx"
   */
  value: string;
}

/**
 * http 请求通知设置
 * @example {}
 */
export interface HttpRequestSetting {
  /**
   * 请求路径
   * @minLength 1
   * @example "http://127.0.0.1"
   */
  url: string;
  /**
   * 请求头参数设置
   * @example []
   */
  header?: HttpRequestParam[];
  /**
   * 请求头参数设置
   * @example []
   */
  body?: HttpRequestParam[];
  /**
   * 请求返回处理设置
   * @example []
   */
  response?: KeyValueStringString[];
}

/**
 * http 请求触发器设置
 * @example {}
 */
export interface HttpRequestTriggerSetting {
  /**
   * 请求路径
   * @minLength 1
   * @example "http://127.0.0.1"
   */
  url: string;
  /**
   * 请求头参数设置
   * @example []
   */
  header?: HttpRequestParam[];
  /**
   * 请求头参数设置
   * @example []
   */
  body?: HttpRequestParam[];
  /**
   * 请求返回处理设置
   * @example []
   */
  response?: KeyValueStringString[];
}

export interface IOParameter {
  id?: string;
  /** @format int32 */
  xmlRowNumber?: number;
  /** @format int32 */
  xmlColumnNumber?: number;
  extensionElements?: Record<string, ExtensionElement[]>;
  attributes?: Record<string, ExtensionAttribute[]>;
  source?: string;
  sourceExpression?: string;
  target?: string;
  targetExpression?: string;
  transient?: boolean;
  values?: any;
}

export interface KeyValueStringString {
  key?: string;
  value?: string;
}

/** 任务监听器 */
export interface ListenerHandler {
  /**
   * 是否开启任务监听器
   * @example false
   */
  enable: boolean;
  /**
   * 请求路径
   * @example "http://xxxxx"
   */
  path?: string;
  /**
   * 请求头
   * @example []
   */
  header?: HttpRequestParam[];
  /**
   * 请求体
   * @example []
   */
  body?: HttpRequestParam[];
}

/** 多实例设置 */
export interface MultiInstanceSetting {
  /**
   * 是否开启多实例
   * @example false
   */
  enable: boolean;
  /**
   * 是否串行
   * @example false
   */
  sequential: boolean;
  /**
   * 完成比例
   * @format int32
   * @example 100
   */
  approveRatio: number;
  /**
   * 多实例来源类型
   * @format int32
   * @example 1
   */
  sourceType: number;
  /**
   * 多实例来源
   * @example 1
   */
  source: string;
}

/** 操作按钮设置 */
export interface OperationButtonSetting {
  /**
   * 按钮 Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * 显示名称
   * @example "审批"
   */
  displayName?: string;
  /**
   * 是否启用
   * @example true
   */
  enable?: boolean;
}

/** 流程 ID 规则 */
export interface ProcessIdRule {
  /**
   * 是否启用
   * @example false
   */
  enable: boolean;
  /**
   * 前缀
   * @example "XX"
   */
  prefix?: string;
  /**
   * 中缀
   * @example 20250120
   */
  infix?: string;
  /**
   * 后缀
   * @example "YY"
   */
  postfix?: string;
  /**
   * 序列长度
   * @format int32
   * @example 5
   */
  length: number;
}

/** 审批节点拒绝处理策略 */
export interface RejectHandler {
  /**
   * 拒绝处理类型
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * 任务拒绝后驳回的节点 Id
   * @example "Activity_1"
   */
  returnNodeId?: string;
}

/** 路由分支 */
export interface RouterSetting {
  /**
   * 节点 Id
   * @minLength 1
   * @example "Activity_xxx"
   */
  nodeId: string;
  /**
   * 条件类型
   * @format int32
   * @example 1
   */
  conditionType: number;
  /**
   * 条件表达式
   * @example "${day>3}"
   */
  conditionExpression?: string;
  /**
   * 条件组
   * @example {}
   */
  conditionGroups?: ConditionGroups;
}

/** 子流程发起人配置 */
export interface StartUserSetting {
  /**
   * 子流程发起人类型
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 表单
   * @example "xxx"
   */
  formField?: string;
  /**
   * 当子流程发起人为空时类型
   * @format int32
   * @example 1
   */
  emptyType: number;
}

/** 摘要设置 */
export interface SummarySetting {
  /**
   * 是否自定义
   * @example false
   */
  enable: boolean;
  /**
   * 摘要字段数组
   * @example []
   */
  summary?: string[];
}

/** 审批节点超时处理策略 */
export interface TimeoutHandler {
  /**
   * 是否开启超时处理
   * @example false
   */
  enable: boolean;
  /**
   * 任务超时未处理的行为
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 超时时间
   * @minLength 1
   * @example "PT6H"
   */
  timeDuration: string;
  /**
   * 最大提醒次数
   * @format int32
   * @example 1
   */
  maxRemindCount?: number;
}

/** 超时设置 */
export interface TimeoutSetting {
  /**
   * 是否开启超时设置
   * @example false
   */
  enable: boolean;
  /**
   * 时间类型
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * 时间表达式
   * @example "PT1H,2025-01-01T00:00:00"
   */
  timeExpression?: string;
}

/** 标题设置 */
export interface TitleSetting {
  /**
   * 是否自定义
   * @example false
   */
  enable: boolean;
  /**
   * 标题
   * @example "流程标题"
   */
  title?: string;
}

/** 触发器节点配置 */
export interface TriggerSetting {
  /**
   * 触发器类型
   * @format int32
   * @example 1
   */
  type: number;
  /** http 请求触发器设置 */
  httpRequestSetting?: HttpRequestTriggerSetting;
  formSettings?: FormTriggerSetting[];
}

/** 管理后台 - 流程模型更新状态 Request VO */
export interface BpmModelUpdateStateReqVO {
  /**
   * 编号
   * @example 1024
   */
  id: string;
  /**
   * 状态
   * @format int32
   * @example 1
   */
  state: number;
}

/** 管理后台 - 流程模型的更新 BPMN XML Request VO */
export interface BpmModeUpdateBpmnReqVO {
  /**
   * 流程编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * BPMN XML
   * @minLength 1
   */
  bpmnXml: string;
}

/** 管理后台 - 动态表单创建/更新 Request VO */
export interface BpmFormSaveReqVO {
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 表单名称
   * @example "芋道"
   */
  name: string;
  /** 表单的配置-JSON 字符串 */
  conf: string;
  /** 表单项的数组-JSON 字符串的数组 */
  fields: string[];
  /**
   * 表单状态-参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
}

/** 管理后台 - BPM 流程分类新增/修改 Request VO */
export interface BpmCategorySaveReqVO {
  /**
   * 分类编号
   * @format int64
   * @example 3167
   */
  id: number;
  /**
   * 分类名
   * @minLength 1
   * @example "王五"
   */
  name: string;
  /**
   * 分类描述
   * @example "你猜"
   */
  description?: string;
  /**
   * 分类标志
   * @minLength 1
   * @example "OA"
   */
  code: string;
  /**
   * 分类状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 分类排序
   * @format int32
   */
  sort: number;
}

export interface CommonResultString {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: string;
}

/** 管理后台 - 文件创建 Request VO */
export interface FileCreateReqVO {
  /**
   * 文件配置编号
   * @format int64
   * @example 11
   */
  configId: number;
  /**
   * 文件路径
   * @example "yudao.jpg"
   */
  path: string;
  /**
   * 原文件名
   * @example "yudao.jpg"
   */
  name: string;
  /**
   * 文件 URL
   * @example "https://www.iocoder.cn/yudao.jpg"
   */
  url: string;
  /**
   * 文件 MIME 类型
   * @example "application/octet-stream"
   */
  type?: string;
  /**
   * 文件大小
   * @format int32
   * @example 2048
   */
  size: number;
}

export interface CommonResultLong {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** @format int64 */
  data?: number;
}

export interface CommonResultUserImportRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 用户导入 Response VO */
  data?: UserImportRespVO;
}

/** 管理后台 - 用户导入 Response VO */
export interface UserImportRespVO {
  /** 创建成功的用户名数组 */
  createUsernames: string[];
  /** 更新成功的用户名数组 */
  updateUsernames: string[];
  /** 导入失败的用户集合，key 为用户名，value 为失败原因 */
  failureUsernames: Record<string, string>;
}

/** 管理后台 - 社交绑定 Request VO，使用 code 授权码 */
export interface SocialUserBindReqVO {
  /**
   * 社交平台的类型，参见 UserSocialTypeEnum 枚举值
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 授权码
   * @minLength 1
   * @example 1024
   */
  code: string;
  /**
   * state
   * @minLength 1
   * @example "9b2ffbc1-7425-4155-9894-9d5c08541d62"
   */
  state: string;
}

export interface SocialWxaSubscribeMessageSendReqDTO {
  /** @format int64 */
  userId: number;
  /** @format int32 */
  userType: number;
  /** @minLength 1 */
  templateTitle: string;
  page?: string;
  messages?: Record<string, string>;
}

/** 管理后台 - 短信模板的发送 Request VO */
export interface SmsTemplateSendReqVO {
  /**
   * 手机号
   * @example 15601691300
   */
  mobile: string;
  /**
   * 模板编码
   * @example "test_01"
   */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, any>;
}

/** 管理后台 - 赋予用户角色 Request VO */
export interface PermissionAssignUserRoleReqVO {
  /**
   * 用户编号
   * @format int64
   * @example 1
   */
  userId: number;
  /**
   * 角色编号列表
   * @uniqueItems true
   * @example "1,3,5"
   */
  roleIds?: number[];
}

/** 管理后台 - 赋予角色菜单 Request VO */
export interface PermissionAssignRoleMenuReqVO {
  /**
   * 角色编号
   * @format int64
   * @example 1
   */
  roleId: number;
  /**
   * 菜单编号列表
   * @uniqueItems true
   * @example "1,3,5"
   */
  menuIds?: number[];
}

/** 管理后台 - 赋予角色数据权限 Request VO */
export interface PermissionAssignRoleDataScopeReqVO {
  /**
   * 角色编号
   * @format int64
   * @example 1
   */
  roleId: number;
  /**
   * 数据范围，参见 DataScopeEnum 枚举类
   * @format int32
   * @example 1
   */
  dataScope: number;
  /**
   * 部门编号列表，只有范围类型为 DEPT_CUSTOM 时，该字段才需要
   * @uniqueItems true
   * @example "1,3,5"
   */
  dataScopeDeptIds?: number[];
}

export interface CommonResultOAuth2OpenAccessTokenRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 【开放接口】访问令牌 Response VO */
  data?: OAuth2OpenAccessTokenRespVO;
}

/** 管理后台 - 【开放接口】访问令牌 Response VO */
export interface OAuth2OpenAccessTokenRespVO {
  /**
   * 授权范围,如果多个授权范围，使用空格分隔
   * @example "user_info"
   */
  scope?: string;
  /**
   * 访问令牌
   * @example "tudou"
   */
  access_token: string;
  /**
   * 刷新令牌
   * @example "nice"
   */
  refresh_token: string;
  /**
   * 令牌类型
   * @example "bearer"
   */
  token_type: string;
  /**
   * 过期时间,单位：秒
   * @format int64
   * @example 42430
   */
  expires_in: number;
}

export interface CommonResultOAuth2OpenCheckTokenRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 【开放接口】校验令牌 Response VO */
  data?: OAuth2OpenCheckTokenRespVO;
}

/** 管理后台 - 【开放接口】校验令牌 Response VO */
export interface OAuth2OpenCheckTokenRespVO {
  /**
   * 授权范围
   * @example "user_info"
   */
  scopes: string[];
  /**
   * 过期时间，时间戳 / 1000，即单位：秒
   * @format int64
   * @example 1593092157
   */
  exp: number;
  /**
   * 用户编号
   * @format int64
   * @example 666
   */
  user_id: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format int32
   * @example 2
   */
  user_type: number;
  /**
   * 租户编号
   * @format int64
   * @example 1024
   */
  tenant_id: number;
  /**
   * 客户端编号
   * @example "car"
   */
  client_id: string;
  /**
   * 访问令牌
   * @example "tudou"
   */
  access_token: string;
}

/** 管理后台 - 站内信模板的发送 Request VO */
export interface NotifyTemplateSendReqVO {
  /**
   * 用户id
   * @format int64
   * @example 1
   */
  userId: number;
  /**
   * 用户类型
   * @format int32
   * @example 1
   */
  userType: number;
  /**
   * 模板编码
   * @minLength 1
   * @example "01"
   */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, any>;
}

/** 管理后台 - 邮件发送 Req VO */
export interface MailTemplateSendReqVO {
  /**
   * 接收邮箱
   * @minItems 1
   * @example "[user1@example.com, user2@example.com]"
   */
  toMails: string[];
  /**
   * 抄送邮箱
   * @example "[user3@example.com, user4@example.com]"
   */
  ccMails: string[];
  /**
   * 密送邮箱
   * @example "[user5@example.com, user6@example.com]"
   */
  bccMails: string[];
  /**
   * 模板编码
   * @example "test_01"
   */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, any>;
}

export interface CaptchaVO {
  captchaId?: string;
  projectCode?: string;
  captchaType?: string;
  captchaOriginalPath?: string;
  captchaFontType?: string;
  /** @format int32 */
  captchaFontSize?: number;
  secretKey?: string;
  originalImageBase64?: string;
  point?: PointVO;
  jigsawImageBase64?: string;
  wordList?: string[];
  pointList?: {
    /** @format double */
    x?: number;
    /** @format double */
    y?: number;
  }[];
  pointJson?: string;
  token?: string;
  result?: boolean;
  captchaVerification?: string;
  clientUid?: string;
  /** @format int64 */
  ts?: number;
  browserInfo?: string;
}

export interface PointVO {
  secretKey?: string;
  /** @format int32 */
  x?: number;
  /** @format int32 */
  y?: number;
}

export interface ResponseModel {
  repCode?: string;
  repMsg?: string;
  repData?: any;
  repCodeEnum?:
    | 'SUCCESS'
    | 'ERROR'
    | 'EXCEPTION'
    | 'BLANK_ERROR'
    | 'NULL_ERROR'
    | 'NOT_NULL_ERROR'
    | 'NOT_EXIST_ERROR'
    | 'EXIST_ERROR'
    | 'PARAM_TYPE_ERROR'
    | 'PARAM_FORMAT_ERROR'
    | 'API_CAPTCHA_INVALID'
    | 'API_CAPTCHA_COORDINATE_ERROR'
    | 'API_CAPTCHA_ERROR'
    | 'API_CAPTCHA_BASEMAP_NULL'
    | 'API_REQ_LIMIT_GET_ERROR'
    | 'API_REQ_INVALID'
    | 'API_REQ_LOCK_GET_ERROR'
    | 'API_REQ_LIMIT_CHECK_ERROR'
    | 'API_REQ_LIMIT_VERIFY_ERROR';
  success?: boolean;
}

/** 管理后台 - 社交绑定登录 Request VO，使用 code 授权码 + 账号密码 */
export interface AuthSocialLoginReqVO {
  /**
   * 社交平台的类型，参见 UserSocialTypeEnum 枚举值
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 授权码
   * @minLength 1
   * @example 1024
   */
  code: string;
  /**
   * state
   * @minLength 1
   * @example "9b2ffbc1-7425-4155-9894-9d5c08541d62"
   */
  state: string;
}

/** 管理后台 - 登录 Response VO */
export interface AuthLoginRespVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  userId: number;
  /**
   * 访问令牌
   * @example "happy"
   */
  accessToken: string;
  /**
   * 刷新令牌
   * @example "nice"
   */
  refreshToken: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiresTime: string;
}

export interface CommonResultAuthLoginRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 登录 Response VO */
  data?: AuthLoginRespVO;
}

/** 管理后台 - 短信验证码的登录 Request VO */
export interface AuthSmsLoginReqVO {
  /**
   * 手机号
   * @minLength 1
   * @example "yudaoyuanma"
   */
  mobile: string;
  /**
   * 短信验证码
   * @minLength 1
   * @example 1024
   */
  code: string;
}

/** 管理后台 - 发送手机验证码 Request VO */
export interface AuthSmsSendReqVO {
  /**
   * 验证码，验证码开启时，需要传递
   * @example "PfcH6mgr8tpXuMWFjvW6YVaqrswIuwmWI5dsVZSg7sGpWtDCUbHuDEXl3cFB1+VvCC/rAkSwK8Fad52FSuncVg=="
   */
  captchaVerification: string;
  /**
   * 手机号
   * @minLength 1
   * @example "yudaoyuanma"
   */
  mobile: string;
  /**
   * 短信场景
   * @format int32
   * @example 1
   */
  scene: number;
}

/** 管理后台 - 短信重置账号密码 Request VO */
export interface AuthResetPasswordReqVO {
  /**
   * 密码
   * @minLength 1
   * @example 1234
   */
  password: string;
  /**
   * 手机号
   * @minLength 1
   * @example 13312341234
   */
  mobile: string;
  /**
   * 手机短信验证码
   * @minLength 1
   * @example 123456
   */
  code: string;
}

/** 管理后台 - Register Request VO */
export interface AuthRegisterReqVO {
  /**
   * 验证码，验证码开启时，需要传递
   * @example "PfcH6mgr8tpXuMWFjvW6YVaqrswIuwmWI5dsVZSg7sGpWtDCUbHuDEXl3cFB1+VvCC/rAkSwK8Fad52FSuncVg=="
   */
  captchaVerification: string;
  /**
   * 用户账号
   * @minLength 4
   * @maxLength 30
   * @pattern ^[a-zA-Z0-9]{4,30}$
   * @example "yudao"
   */
  username: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 密码
   * @minLength 1
   * @example 123456
   */
  password: string;
}

/** 管理后台 - 账号密码登录 Request VO，如果登录并绑定社交用户，需要传递 social 开头的参数 */
export interface AuthLoginReqVO {
  /**
   * 验证码，验证码开启时，需要传递
   * @example "PfcH6mgr8tpXuMWFjvW6YVaqrswIuwmWI5dsVZSg7sGpWtDCUbHuDEXl3cFB1+VvCC/rAkSwK8Fad52FSuncVg=="
   */
  captchaVerification: string;
  /**
   * 账号
   * @minLength 1
   * @pattern ^[A-Za-z0-9]+$
   * @example "yudaoyuanma"
   */
  username: string;
  /**
   * 密码
   * @minLength 1
   * @example "buzhidao"
   */
  password: string;
  /**
   * 社交平台的类型，参见 SocialTypeEnum 枚举值
   * @format int32
   * @example 10
   */
  socialType: number;
  /**
   * 授权码
   * @example 1024
   */
  socialCode: string;
  /**
   * state
   * @example "9b2ffbc1-7425-4155-9894-9d5c08541d62"
   */
  socialState: string;
  socialCodeValid?: boolean;
}

/** 管理后台 - 基于数据库的表结构，创建代码生成器的表和字段定义 Request VO */
export interface CodegenCreateListReqVO {
  /**
   * 数据源配置的编号
   * @format int64
   * @example 1
   */
  dataSourceConfigId: number;
  /**
   * 表名数组
   * @example [1,2,3]
   */
  tableNames: string[];
}

export interface CommonResultListLong {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: number[];
}

/** 管理后台 - 流程实例的创建 Request VO */
export interface BpmProcessInstanceCreateReqVO {
  /**
   * 流程定义的编号
   * @minLength 1
   * @example 1024
   */
  processDefinitionId: string;
  /** 变量实例（动态表单） */
  variables?: Record<string, any>;
  /**
   * 发起人自选审批人 Map
   * @example "{taskKey1: [1, 2]}"
   */
  startUserSelectAssignees?: Record<string, number[]>;
}

/** 管理后台 - 请假申请创建 Request VO */
export interface BpmOALeaveCreateReqVO {
  /**
   * 请假的开始时间
   * @format date-time
   */
  startTime: string;
  /**
   * 请假的结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * 请假类型-参见 bpm_oa_type 枚举
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 原因
   * @example "阅读芋道源码"
   */
  reason: string;
  /**
   * 发起人自选审批人 Map
   * @example "{taskKey1: [1, 2]}"
   */
  startUserSelectAssignees?: Record<string, number[]>;
  endTimeValid?: boolean;
}

/** 管理后台 - 仿钉钉流程设计模型的新增/修改 Request VO */
export interface BpmSimpleModelUpdateReqVO {
  /**
   * 流程模型编号
   * @minLength 1
   * @example 1
   */
  id: string;
  /** 仿钉钉流程设计模型对象 */
  simpleModel: BpmSimpleModelNodeVO;
}

/** 用户 App - 租户 Response VO */
export interface AppTenantRespVO {
  /**
   * 租户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 租户名
   * @example "芋道"
   */
  name: string;
}

export interface CommonResultAppTenantRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 用户 App - 租户 Response VO */
  data?: AppTenantRespVO;
}

/** 用户 App - 字典数据信息 Response VO */
export interface AppDictDataRespVO {
  /**
   * 字典数据编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 字典标签
   * @example "芋道"
   */
  label: string;
  /**
   * 字典值
   * @example "iocoder"
   */
  value: string;
  /**
   * 字典类型
   * @example "sys_common_sex"
   */
  dictType: string;
}

export interface CommonResultListAppDictDataRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: AppDictDataRespVO[];
}

/** 用户 App - 地区节点 Response VO */
export interface AppAreaNodeRespVO {
  /**
   * 编号
   * @format int32
   * @example 110000
   */
  id: number;
  /**
   * 名字
   * @example "北京"
   */
  name: string;
}

export interface CommonResultListAppAreaNodeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: AppAreaNodeRespVO[];
}

export interface CommonResultFilePresignedUrlRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 文件预签名地址 Response VO */
  data?: FilePresignedUrlRespVO;
}

/** 管理后台 - 文件预签名地址 Response VO */
export interface FilePresignedUrlRespVO {
  /**
   * 配置编号
   * @format int64
   * @example 11
   */
  configId: number;
  /**
   * 文件上传 URL
   * @example "https://s3.cn-south-1.qiniucs.com/ruoyi-vue-pro/758d3a5387507358c7236de4c8f96de1c7f5097ff6a7722b34772fb7b76b140f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=3TvrJ70gl2Gt6IBe7_IZT1F6i_k0iMuRtyEv4EyS%2F20240217%2Fcn-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240217T123222Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=a29f33770ab79bf523ccd4034d0752ac545f3c2a3b17baa1eb4e280cfdccfda5"
   */
  uploadUrl: string;
  /**
   * 文件访问 URL
   * @example "https://test.yudao.iocoder.cn/758d3a5387507358c7236de4c8f96de1c7f5097ff6a7722b34772fb7b76b140f.png"
   */
  url: string;
  /**
   * 文件路径
   * @example "xxx.png"
   */
  path: string;
}

export interface CommonResultUserProfileRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 用户个人中心信息 Response VO */
  data?: UserProfileRespVO;
}

/** 管理后台 - 部门精简信息 Response VO */
export interface DeptSimpleRespVO {
  /**
   * 部门编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 部门名称
   * @example "芋道"
   */
  name: string;
  /**
   * 父部门 ID
   * @format int64
   * @example 1024
   */
  parentId: number;
}

/** 管理后台 - 岗位信息的精简 Response VO */
export interface PostSimpleRespVO {
  /**
   * 岗位序号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 岗位名称
   * @example "小土豆"
   */
  name: string;
}

/** 管理后台 - 角色精简信息 Response VO */
export interface RoleSimpleRespVO {
  /**
   * 角色编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 角色名称
   * @example "芋道"
   */
  name: string;
}

/** 管理后台 - 用户个人中心信息 Response VO */
export interface UserProfileRespVO {
  /**
   * 用户编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 用户账号
   * @example "yudao"
   */
  username: string;
  /**
   * 用户昵称
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 用户邮箱
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xxx.png"
   */
  avatar?: string;
  /**
   * 最后登录 IP
   * @example "192.168.1.1"
   */
  loginIp: string;
  /**
   * 最后登录时间
   * @format date-time
   * @example "时间戳格式"
   */
  loginDate: string;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
  roles?: RoleSimpleRespVO[];
  /** 管理后台 - 部门精简信息 Response VO */
  dept?: DeptSimpleRespVO;
  posts?: PostSimpleRespVO[];
}

export interface CommonResultPageResultUserRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultUserRespVO;
}

/** 分页结果 */
export interface PageResultUserRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: UserRespVO[];
}

/** 管理后台 - 用户信息 Response VO */
export interface UserRespVO {
  /**
   * 用户编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 用户账号
   * @example "yudao"
   */
  username: string;
  /**
   * 用户昵称
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 备注
   * @example "我是一个用户"
   */
  remark?: string;
  /**
   * 部门ID
   * @format int64
   * @example "我是一个用户"
   */
  deptId?: number;
  /**
   * 部门名称
   * @example "IT 部"
   */
  deptName?: string;
  /**
   * 岗位编号数组
   * @uniqueItems true
   * @example 1
   */
  postIds?: number[];
  /**
   * 用户邮箱
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xxx.png"
   */
  avatar?: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 最后登录 IP
   * @example "192.168.1.1"
   */
  loginIp: string;
  /**
   * 最后登录时间
   * @format date-time
   * @example "时间戳格式"
   */
  loginDate: string;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

export interface CommonResultListUserSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: UserSimpleRespVO[];
}

/** 管理后台 - 用户精简信息 Response VO */
export interface UserSimpleRespVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 用户昵称
   * @example "芋道"
   */
  nickname: string;
  /**
   * 部门ID
   * @format int64
   * @example "我是一个用户"
   */
  deptId?: number;
  /**
   * 部门名称
   * @example "IT 部"
   */
  deptName?: string;
}

export interface CommonResultUserRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 用户信息 Response VO */
  data?: UserRespVO;
}

export interface CommonResultListTenantRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: TenantRespVO[];
}

/** 管理后台 - 租户 Response VO */
export interface TenantRespVO {
  /**
   * 租户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 租户名
   * @example "芋道"
   */
  name: string;
  /**
   * 联系人
   * @example "芋艿"
   */
  contactName: string;
  /**
   * 联系手机
   * @example 15601691300
   */
  contactMobile?: string;
  /**
   * 租户状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 绑定域名数组
   * @example "https://www.iocoder.cn"
   */
  websites?: string[];
  /**
   * 租户套餐编号
   * @format int64
   * @example 1024
   */
  packageId: number;
  /**
   * 过期时间
   * @format date-time
   */
  expireTime: string;
  /**
   * 账号数量
   * @format int32
   * @example 1024
   */
  accountCount: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultTenantRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultTenantRespVO;
}

/** 分页结果 */
export interface PageResultTenantRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: TenantRespVO[];
}

export interface CommonResultTenantRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 租户 Response VO */
  data?: TenantRespVO;
}

export interface CommonResultPageResultTenantPackageRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultTenantPackageRespVO;
}

/** 分页结果 */
export interface PageResultTenantPackageRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: TenantPackageRespVO[];
}

/** 管理后台 - 租户套餐 Response VO */
export interface TenantPackageRespVO {
  /**
   * 套餐编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 套餐名
   * @example "VIP"
   */
  name: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "好"
   */
  remark?: string;
  /**
   * 关联的菜单编号
   * @uniqueItems true
   */
  menuIds: number[];
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultTenantPackageRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 租户套餐 Response VO */
  data?: TenantPackageRespVO;
}

export interface CommonResultListTenantPackageSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: TenantPackageSimpleRespVO[];
}

/** 管理后台 - 租户套餐精简 Response VO */
export interface TenantPackageSimpleRespVO {
  /**
   * 套餐编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 套餐名
   * @example "VIP"
   */
  name: string;
}

export interface CommonResultPageResultSocialUserRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultSocialUserRespVO;
}

/** 分页结果 */
export interface PageResultSocialUserRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: SocialUserRespVO[];
}

/** 管理后台 - 社交用户 Response VO */
export interface SocialUserRespVO {
  /**
   * 主键(自增策略)
   * @format int64
   * @example 14569
   */
  id: number;
  /**
   * 社交平台的类型
   * @format int32
   * @example 30
   */
  type: number;
  /**
   * 社交 openid
   * @example 666
   */
  openid: string;
  /**
   * 社交 token
   * @example 666
   */
  token: string;
  /**
   * 原始 Token 数据，一般是 JSON 格式
   * @example {}
   */
  rawTokenInfo: string;
  /**
   * 用户昵称
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xxx.png"
   */
  avatar?: string;
  /**
   * 原始用户数据，一般是 JSON 格式
   * @example {}
   */
  rawUserInfo: string;
  /**
   * 最后一次的认证 code
   * @example 666666
   */
  code: string;
  /**
   * 最后一次的认证 state
   * @example 123456
   */
  state: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
}

export interface CommonResultSocialUserRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 社交用户 Response VO */
  data?: SocialUserRespVO;
}

export interface CommonResultListSocialUserRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: SocialUserRespVO[];
}

export interface CommonResultPageResultSocialClientRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultSocialClientRespVO;
}

/** 分页结果 */
export interface PageResultSocialClientRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: SocialClientRespVO[];
}

/** 管理后台 - 社交客户端 Response VO */
export interface SocialClientRespVO {
  /**
   * 编号
   * @format int64
   * @example 27162
   */
  id: number;
  /**
   * 应用名
   * @example "yudao商城"
   */
  name: string;
  /**
   * 社交平台的类型
   * @format int32
   * @example 31
   */
  socialType: number;
  /**
   * 用户类型
   * @format int32
   * @example 2
   */
  userType: number;
  /**
   * 客户端编号
   * @example "wwd411c69a39ad2e54"
   */
  clientId: string;
  /**
   * 客户端密钥
   * @example "peter"
   */
  clientSecret: string;
  /**
   * 授权方的网页应用编号
   * @example 2000045
   */
  agentId: string;
  /**
   * 状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultSocialClientRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 社交客户端 Response VO */
  data?: SocialClientRespVO;
}

export interface CommonResultPageResultSmsTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultSmsTemplateRespVO;
}

/** 分页结果 */
export interface PageResultSmsTemplateRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: SmsTemplateRespVO[];
}

/** 管理后台 - 短信模板 Response VO */
export interface SmsTemplateRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 短信类型，参见 SmsTemplateTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 开启状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 模板编码
   * @example "test_01"
   */
  code: string;
  /**
   * 模板名称
   * @example "yudao"
   */
  name: string;
  /**
   * 模板内容
   * @example "你好，{name}。你长的太{like}啦！"
   */
  content: string;
  /**
   * 参数数组
   * @example "name,code"
   */
  params?: string[];
  /**
   * 备注
   * @example "哈哈哈"
   */
  remark?: string;
  /**
   * 短信 API 的模板编号
   * @example 4383920
   */
  apiTemplateId: string;
  /**
   * 短信渠道编号
   * @format int64
   * @example 10
   */
  channelId: number;
  /**
   * 短信渠道编码
   * @example "ALIYUN"
   */
  channelCode: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultSmsTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 短信模板 Response VO */
  data?: SmsTemplateRespVO;
}

export interface CommonResultPageResultSmsLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultSmsLogRespVO;
}

/** 分页结果 */
export interface PageResultSmsLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: SmsLogRespVO[];
}

/** 管理后台 - 短信日志 Response VO */
export interface SmsLogRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 短信渠道编号
   * @format int64
   * @example 10
   */
  channelId: number;
  /**
   * 短信渠道编码
   * @example "ALIYUN"
   */
  channelCode: string;
  /**
   * 模板编号
   * @format int64
   * @example 20
   */
  templateId: number;
  /**
   * 模板编码
   * @example "test-01"
   */
  templateCode: string;
  /**
   * 短信类型
   * @format int32
   * @example 1
   */
  templateType: number;
  /**
   * 短信内容
   * @example "你好，你的验证码是 1024"
   */
  templateContent: string;
  /**
   * 短信参数
   * @example "name,code"
   */
  templateParams: Record<string, any>;
  /**
   * 短信 API 的模板编号
   * @example "SMS_207945135"
   */
  apiTemplateId: string;
  /**
   * 手机号
   * @example 15601691300
   */
  mobile: string;
  /**
   * 用户编号
   * @format int64
   * @example 10
   */
  userId?: number;
  /**
   * 用户类型
   * @format int32
   * @example 1
   */
  userType?: number;
  /**
   * 发送状态
   * @format int32
   * @example 1
   */
  sendStatus: number;
  /**
   * 发送时间
   * @format date-time
   */
  sendTime?: string;
  /**
   * 短信 API 发送结果的编码
   * @example "SUCCESS"
   */
  apiSendCode?: string;
  /**
   * 短信 API 发送失败的提示
   * @example "成功"
   */
  apiSendMsg?: string;
  /**
   * 短信 API 发送返回的唯一请求 ID
   * @example "3837C6D3-B96F-428C-BBB2-86135D4B5B99"
   */
  apiRequestId?: string;
  /**
   * 短信 API 发送返回的序号
   * @example 62923244790
   */
  apiSerialNo?: string;
  /**
   * 接收状态
   * @format int32
   * @example 0
   */
  receiveStatus: number;
  /**
   * 接收时间
   * @format date-time
   */
  receiveTime?: string;
  /**
   * API 接收结果的编码
   * @example "DELIVRD"
   */
  apiReceiveCode?: string;
  /**
   * API 接收结果的说明
   * @example "用户接收成功"
   */
  apiReceiveMsg?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultSmsChannelRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultSmsChannelRespVO;
}

/** 分页结果 */
export interface PageResultSmsChannelRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: SmsChannelRespVO[];
}

/** 管理后台 - 短信渠道 Response VO */
export interface SmsChannelRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 短信签名
   * @example "芋道源码"
   */
  signature: string;
  /**
   * 渠道编码，参见 SmsChannelEnum 枚举类
   * @example "YUN_PIAN"
   */
  code: string;
  /**
   * 启用状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "好吃！"
   */
  remark?: string;
  /**
   * 短信 API 的账号
   * @example "yudao"
   */
  apiKey: string;
  /**
   * 短信 API 的密钥
   * @example "yuanma"
   */
  apiSecret?: string;
  /**
   * 短信发送回调 URL
   * @example "https://www.iocoder.cn"
   */
  callbackUrl?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultListSmsChannelSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: SmsChannelSimpleRespVO[];
}

/** 管理后台 - 短信渠道精简 Response VO */
export interface SmsChannelSimpleRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 短信签名
   * @example "芋道源码"
   */
  signature: string;
  /**
   * 渠道编码，参见 SmsChannelEnum 枚举类
   * @example "YUN_PIAN"
   */
  code: string;
}

export interface CommonResultSmsChannelRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 短信渠道 Response VO */
  data?: SmsChannelRespVO;
}

export interface CommonResultPageResultRoleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultRoleRespVO;
}

/** 分页结果 */
export interface PageResultRoleRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: RoleRespVO[];
}

/** 管理后台 - 角色信息 Response VO */
export interface RoleRespVO {
  /**
   * 角色编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 角色名称
   * @example "管理员"
   */
  name: string;
  /**
   * 角色标志
   * @minLength 1
   * @example "admin"
   */
  code: string;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 角色类型，参见 RoleTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 备注
   * @example "我是一个角色"
   */
  remark?: string;
  /**
   * 数据范围，参见 DataScopeEnum 枚举类
   * @format int32
   * @example 1
   */
  dataScope: number;
  /**
   * 数据范围(指定部门数组)
   * @uniqueItems true
   * @example 1
   */
  dataScopeDeptIds?: number[];
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

export interface CommonResultListRoleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: RoleRespVO[];
}

export interface CommonResultRoleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 角色信息 Response VO */
  data?: RoleRespVO;
}

export interface CommonResultPageResultPostRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultPostRespVO;
}

/** 分页结果 */
export interface PageResultPostRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: PostRespVO[];
}

/** 管理后台 - 岗位信息 Response VO */
export interface PostRespVO {
  /**
   * 岗位序号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 岗位名称
   * @example "小土豆"
   */
  name: string;
  /**
   * 岗位编码
   * @example "yudao"
   */
  code: string;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "快乐的备注"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultListPostSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: PostSimpleRespVO[];
}

export interface CommonResultPostRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 岗位信息 Response VO */
  data?: PostRespVO;
}

export interface CommonResultSetLong {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** @uniqueItems true */
  data?: number[];
}

export interface CommonResultPageResultOperateLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultOperateLogRespVO;
}

/** 管理后台 - 操作日志 Response VO */
export interface OperateLogRespVO {
  /**
   * 日志编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 链路追踪编号
   * @example "89aca178-a370-411c-ae02-3f0d672be4ab"
   */
  traceId: string;
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  userId: number;
  /**
   * 用户昵称
   * @example "芋艿"
   */
  userName: string;
  /**
   * 操作模块类型
   * @example "订单"
   */
  type: string;
  /**
   * 操作名
   * @example "创建订单"
   */
  subType: string;
  /**
   * 操作模块业务编号
   * @format int64
   * @example 1
   */
  bizId: number;
  /**
   * 操作明细
   * @example "修改编号为 1 的用户信息，将性别从男改成女，将姓名从芋道改成源码。"
   */
  action?: string;
  /**
   * 拓展字段
   * @example "{'orderId': 1}"
   */
  extra?: string;
  /**
   * 请求方法名
   * @minLength 1
   * @example "GET"
   */
  requestMethod: string;
  /**
   * 请求地址
   * @example "/xxx/yyy"
   */
  requestUrl: string;
  /**
   * 用户 IP
   * @example "127.0.0.1"
   */
  userIp: string;
  /**
   * 浏览器 UserAgent
   * @example "Mozilla/5.0"
   */
  userAgent: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  transMap?: Record<string, any>;
}

/** 分页结果 */
export interface PageResultOperateLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: OperateLogRespVO[];
}

export interface CommonResultOAuth2UserInfoRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - OAuth2 获得用户基本信息 Response VO */
  data?: OAuth2UserInfoRespVO;
}

/** 部门 */
export interface Dept {
  /**
   * 部门编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 部门名称
   * @example "研发部"
   */
  name: string;
}

/** 管理后台 - OAuth2 获得用户基本信息 Response VO */
export interface OAuth2UserInfoRespVO {
  /**
   * 用户编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 用户账号
   * @example "芋艿"
   */
  username: string;
  /**
   * 用户昵称
   * @example "芋道"
   */
  nickname: string;
  /**
   * 用户邮箱
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 手机号码
   * @example 15601691300
   */
  mobile?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   * @format int32
   * @example 1
   */
  sex?: number;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xxx.png"
   */
  avatar?: string;
  /** 部门 */
  dept?: Dept;
  posts?: Post[];
}

/** 岗位 */
export interface Post {
  /**
   * 岗位编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 岗位名称
   * @example "开发"
   */
  name: string;
}

export interface Client {
  /**
   * 应用名
   * @example "土豆"
   */
  name: string;
  /**
   * 应用图标
   * @example "https://www.iocoder.cn/xx.png"
   */
  logo: string;
}

export interface CommonResultOAuth2OpenAuthorizeInfoRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 授权页的信息 Response VO */
  data?: OAuth2OpenAuthorizeInfoRespVO;
}

export interface KeyValueStringBoolean {
  key?: string;
  value?: boolean;
}

/** 管理后台 - 授权页的信息 Response VO */
export interface OAuth2OpenAuthorizeInfoRespVO {
  client?: Client;
  /** scope 的选中信息,使用 List 保证有序性，Key 是 scope，Value 为是否选中 */
  scopes: KeyValueStringBoolean[];
}

export interface CommonResultPageResultOAuth2AccessTokenRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultOAuth2AccessTokenRespVO;
}

/** 管理后台 - 访问令牌 Response VO */
export interface OAuth2AccessTokenRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 访问令牌
   * @example "tudou"
   */
  accessToken: string;
  /**
   * 刷新令牌
   * @example "nice"
   */
  refreshToken: string;
  /**
   * 用户编号
   * @format int64
   * @example 666
   */
  userId: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format int32
   * @example 2
   */
  userType: number;
  /**
   * 客户端编号
   * @example 2
   */
  clientId: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiresTime: string;
}

/** 分页结果 */
export interface PageResultOAuth2AccessTokenRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: OAuth2AccessTokenRespVO[];
}

export interface CommonResultPageResultOAuth2ClientRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultOAuth2ClientRespVO;
}

/** 管理后台 - OAuth2 客户端 Response VO */
export interface OAuth2ClientRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 客户端编号
   * @example "tudou"
   */
  clientId: string;
  /**
   * 客户端密钥
   * @example "fan"
   */
  secret: string;
  /**
   * 应用名
   * @example "土豆"
   */
  name: string;
  /**
   * 应用图标
   * @example "https://www.iocoder.cn/xx.png"
   */
  logo: string;
  /**
   * 应用描述
   * @example "我是一个应用"
   */
  description?: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 访问令牌的有效期
   * @format int32
   * @example 8640
   */
  accessTokenValiditySeconds: number;
  /**
   * 刷新令牌的有效期
   * @format int32
   * @example 8640000
   */
  refreshTokenValiditySeconds: number;
  /**
   * 可重定向的 URI 地址
   * @example "https://www.iocoder.cn"
   */
  redirectUris: string[];
  /**
   * 授权类型，参见 OAuth2GrantTypeEnum 枚举
   * @example "password"
   */
  authorizedGrantTypes: string[];
  /**
   * 授权范围
   * @example "user_info"
   */
  scopes?: string[];
  /**
   * 自动通过的授权范围
   * @example "user_info"
   */
  autoApproveScopes?: string[];
  /**
   * 权限
   * @example "system:user:query"
   */
  authorities?: string[];
  /**
   * 资源
   * @example 1024
   */
  resourceIds?: string[];
  /**
   * 附加信息
   * @example "{yunai: true}"
   */
  additionalInformation?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultOAuth2ClientRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: OAuth2ClientRespVO[];
}

export interface CommonResultOAuth2ClientRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - OAuth2 客户端 Response VO */
  data?: OAuth2ClientRespVO;
}

export interface CommonResultPageResultNotifyTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultNotifyTemplateRespVO;
}

/** 管理后台 - 站内信模版 Response VO */
export interface NotifyTemplateRespVO {
  /**
   * ID
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 模版名称
   * @example "测试模版"
   */
  name: string;
  /**
   * 模版编码
   * @example "SEND_TEST"
   */
  code: string;
  /**
   * 模版类型，对应 system_notify_template_type 字典
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 发送人名称
   * @example "土豆"
   */
  nickname: string;
  /**
   * 模版内容
   * @example "我是模版内容"
   */
  content: string;
  /**
   * 参数数组
   * @example "name,code"
   */
  params?: string[];
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultNotifyTemplateRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: NotifyTemplateRespVO[];
}

export interface CommonResultNotifyTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 站内信模版 Response VO */
  data?: NotifyTemplateRespVO;
}

export interface CommonResultPageResultNotifyMessageRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultNotifyMessageRespVO;
}

/** 管理后台 - 站内信 Response VO */
export interface NotifyMessageRespVO {
  /**
   * ID
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 用户编号
   * @format int64
   * @example 25025
   */
  userId: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format byte
   * @example 1
   */
  userType: string;
  /**
   * 模版编号
   * @format int64
   * @example 13013
   */
  templateId: number;
  /**
   * 模板编码
   * @example "test_01"
   */
  templateCode: string;
  /**
   * 模版发送人名称
   * @example "芋艿"
   */
  templateNickname: string;
  /**
   * 模版内容
   * @example "测试内容"
   */
  templateContent: string;
  /**
   * 模版类型
   * @format int32
   * @example 2
   */
  templateType: number;
  /** 模版参数 */
  templateParams: Record<string, any>;
  /**
   * 是否已读
   * @example true
   */
  readStatus: boolean;
  /**
   * 阅读时间
   * @format date-time
   */
  readTime?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultNotifyMessageRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: NotifyMessageRespVO[];
}

export interface CommonResultNotifyMessageRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 站内信 Response VO */
  data?: NotifyMessageRespVO;
}

export interface CommonResultListNotifyMessageRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: NotifyMessageRespVO[];
}

export interface CommonResultPageResultNoticeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultNoticeRespVO;
}

/** 管理后台 - 通知公告信息 Response VO */
export interface NoticeRespVO {
  /**
   * 通知公告序号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 公告标题
   * @example "小博主"
   */
  title: string;
  /**
   * 公告类型
   * @format int32
   * @example "小博主"
   */
  type: number;
  /**
   * 公告内容
   * @example "半生编码"
   */
  content: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultNoticeRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: NoticeRespVO[];
}

export interface CommonResultNoticeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 通知公告信息 Response VO */
  data?: NoticeRespVO;
}

export interface CommonResultListMenuRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: MenuRespVO[];
}

/** 管理后台 - 菜单信息 Response VO */
export interface MenuRespVO {
  /**
   * 菜单编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 50
   * @example "芋道"
   */
  name: string;
  /**
   * 权限标识,仅菜单类型为按钮时，才需要传递
   * @minLength 0
   * @maxLength 100
   * @example "sys:menu:add"
   */
  permission?: string;
  /**
   * 类型，参见 MenuTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 父菜单 ID
   * @format int64
   * @example 1024
   */
  parentId: number;
  /**
   * 路由地址,仅菜单类型为菜单或者目录时，才需要传
   * @minLength 0
   * @maxLength 200
   * @example "post"
   */
  path?: string;
  /**
   * 菜单图标,仅菜单类型为菜单或者目录时，才需要传
   * @example "/menu/list"
   */
  icon?: string;
  /**
   * 组件路径,仅菜单类型为菜单时，才需要传
   * @minLength 0
   * @maxLength 200
   * @example "system/post/index"
   */
  component?: string;
  /**
   * 组件名
   * @example "SystemUser"
   */
  componentName?: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 是否可见
   * @example false
   */
  visible?: boolean;
  /**
   * 是否缓存
   * @example false
   */
  keepAlive?: boolean;
  /**
   * 是否总是显示
   * @example false
   */
  alwaysShow?: boolean;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

export interface CommonResultListMenuSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: MenuSimpleRespVO[];
}

/** 管理后台 - 菜单精简信息 Response VO */
export interface MenuSimpleRespVO {
  /**
   * 菜单编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 菜单名称
   * @example "芋道"
   */
  name: string;
  /**
   * 父菜单 ID
   * @format int64
   * @example 1024
   */
  parentId: number;
  /**
   * 类型，参见 MenuTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  type: number;
}

export interface CommonResultMenuRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 菜单信息 Response VO */
  data?: MenuRespVO;
}

export interface CommonResultPageResultMailTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultMailTemplateRespVO;
}

/** 管理后台 - 邮件末班 Response VO */
export interface MailTemplateRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 模版名称
   * @example "测试名字"
   */
  name: string;
  /**
   * 模版编号
   * @example "test"
   */
  code: string;
  /**
   * 发送的邮箱账号编号
   * @format int64
   * @example 1
   */
  accountId: number;
  /**
   * 发送人名称
   * @example "芋头"
   */
  nickname?: string;
  /**
   * 标题
   * @example "注册成功"
   */
  title: string;
  /**
   * 内容
   * @example "你好，注册成功啦"
   */
  content: string;
  /**
   * 参数数组
   * @example "name,code"
   */
  params?: string[];
  /**
   * 状态，参见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "奥特曼"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultMailTemplateRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: MailTemplateRespVO[];
}

export interface CommonResultListMailTemplateSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: MailTemplateSimpleRespVO[];
}

/** 管理后台 - 邮件模版的精简 Response VO */
export interface MailTemplateSimpleRespVO {
  /**
   * 模版编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 模版名字
   * @example "哒哒哒"
   */
  name: string;
}

export interface CommonResultMailTemplateRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 邮件末班 Response VO */
  data?: MailTemplateRespVO;
}

export interface CommonResultPageResultMailLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultMailLogRespVO;
}

/** 管理后台 - 邮件日志 Response VO */
export interface MailLogRespVO {
  /**
   * 编号
   * @format int64
   * @example 31020
   */
  id: number;
  /**
   * 用户编号
   * @format int64
   * @example 30883
   */
  userId?: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format byte
   * @example 2
   */
  userType?: string;
  /**
   * 接收邮箱地址
   * @example "user1@example.com, user2@example.com"
   */
  toMails: string[];
  /**
   * 抄送邮箱地址
   * @example "user3@example.com, user4@example.com"
   */
  ccMails: string[];
  /**
   * 密送邮箱地址
   * @example "user5@example.com, user6@example.com"
   */
  bccMails: string[];
  /**
   * 邮箱账号编号
   * @format int64
   * @example 18107
   */
  accountId: number;
  /**
   * 发送邮箱地址
   * @example "85757@qq.com"
   */
  fromMail: string;
  /**
   * 模板编号
   * @format int64
   * @example 5678
   */
  templateId: number;
  /**
   * 模板编码
   * @example "test_01"
   */
  templateCode: string;
  /**
   * 模版发送人名称
   * @example "李四"
   */
  templateNickname?: string;
  /**
   * 邮件标题
   * @example "测试标题"
   */
  templateTitle: string;
  /**
   * 邮件内容
   * @example "测试内容"
   */
  templateContent: string;
  /** 邮件参数 */
  templateParams: Record<string, any>;
  /**
   * 发送状态，参见 MailSendStatusEnum 枚举
   * @format byte
   * @example 1
   */
  sendStatus: string;
  /**
   * 发送时间
   * @format date-time
   */
  sendTime?: string;
  /**
   * 发送返回的消息 ID
   * @example 28568
   */
  sendMessageId?: string;
  /** 发送异常 */
  sendException?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultMailLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: MailLogRespVO[];
}

export interface CommonResultMailLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 邮件日志 Response VO */
  data?: MailLogRespVO;
}

export interface CommonResultPageResultMailAccountRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultMailAccountRespVO;
}

/** 管理后台 - 邮箱账号 Response VO */
export interface MailAccountRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 邮箱
   * @example "yudaoyuanma@123.com"
   */
  mail: string;
  /**
   * 用户名
   * @example "yudao"
   */
  username: string;
  /**
   * 密码
   * @example 123456
   */
  password: string;
  /**
   * SMTP 服务器域名
   * @example "www.iocoder.cn"
   */
  host: string;
  /**
   * SMTP 服务器端口
   * @format int32
   * @example 80
   */
  port: number;
  /**
   * 是否开启 ssl
   * @example true
   */
  sslEnable: boolean;
  /**
   * 是否开启 starttls
   * @example true
   */
  starttlsEnable: boolean;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultMailAccountRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: MailAccountRespVO[];
}

export interface CommonResultListMailAccountSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: MailAccountSimpleRespVO[];
}

/** 管理后台 - 邮箱账号的精简 Response VO */
export interface MailAccountSimpleRespVO {
  /**
   * 邮箱编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 邮箱
   * @example "768541388@qq.com"
   */
  mail: string;
}

export interface CommonResultMailAccountRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 邮箱账号 Response VO */
  data?: MailAccountRespVO;
}

export interface CommonResultPageResultLoginLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultLoginLogRespVO;
}

/** 管理后台 - 登录日志 Response VO */
export interface LoginLogRespVO {
  /**
   * 日志编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 日志类型，参见 LoginLogTypeEnum 枚举类
   * @format int32
   * @example 1
   */
  logType: number;
  /**
   * 用户编号
   * @format int64
   * @example 666
   */
  userId?: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format int32
   * @example 2
   */
  userType: number;
  /**
   * 链路追踪编号
   * @example "89aca178-a370-411c-ae02-3f0d672be4ab"
   */
  traceId?: string;
  /**
   * 用户账号
   * @example "yudao"
   */
  username: string;
  /**
   * 登录结果，参见 LoginResultEnum 枚举类
   * @format int32
   * @example 1
   */
  result: number;
  /**
   * 用户 IP
   * @example "127.0.0.1"
   */
  userIp: string;
  /**
   * 浏览器 UserAgent
   * @example "Mozilla/5.0"
   */
  userAgent?: string;
  /**
   * 登录时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultLoginLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: LoginLogRespVO[];
}

export interface CommonResultPageResultDictTypeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDictTypeRespVO;
}

/** 管理后台 - 字典类型信息 Response VO */
export interface DictTypeRespVO {
  /**
   * 字典类型编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 字典名称
   * @example "性别"
   */
  name: string;
  /**
   * 字典类型
   * @example "sys_common_sex"
   */
  type: string;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "快乐的备注"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDictTypeRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: DictTypeRespVO[];
}

export interface CommonResultListDictTypeSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DictTypeSimpleRespVO[];
}

/** 管理后台 - 字典类型精简信息 Response VO */
export interface DictTypeSimpleRespVO {
  /**
   * 字典类型编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 字典类型名称
   * @example "芋道"
   */
  name: string;
  /**
   * 字典类型
   * @example "sys_common_sex"
   */
  type: string;
}

export interface CommonResultDictTypeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 字典类型信息 Response VO */
  data?: DictTypeRespVO;
}

export interface CommonResultPageResultDictDataRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDictDataRespVO;
}

/** 管理后台 - 字典数据信息 Response VO */
export interface DictDataRespVO {
  /**
   * 字典数据编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 字典标签
   * @example "芋道"
   */
  label: string;
  /**
   * 字典值
   * @example "iocoder"
   */
  value: string;
  /**
   * 字典类型
   * @example "sys_common_sex"
   */
  dictType: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 颜色类型,default、primary、success、info、warning、danger
   * @example "default"
   */
  colorType?: string;
  /**
   * css 样式
   * @example "btn-visible"
   */
  cssClass?: string;
  /**
   * 备注
   * @example "我是一个角色"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDictDataRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: DictDataRespVO[];
}

export interface CommonResultListDictDataSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DictDataSimpleRespVO[];
}

/** 管理后台 - 数据字典精简 Response VO */
export interface DictDataSimpleRespVO {
  /**
   * 字典类型
   * @example "gender"
   */
  dictType: string;
  /**
   * 字典键值
   * @example 1
   */
  value: string;
  /**
   * 字典标签
   * @example "男"
   */
  label: string;
  /**
   * 颜色类型，default、primary、success、info、warning、danger
   * @example "default"
   */
  colorType?: string;
  /**
   * css 样式
   * @example "btn-visible"
   */
  cssClass?: string;
}

export interface CommonResultDictDataRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 字典数据信息 Response VO */
  data?: DictDataRespVO;
}

export interface CommonResultListDeptRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DeptRespVO[];
}

/** 管理后台 - 部门信息 Response VO */
export interface DeptRespVO {
  /**
   * 部门编号
   * @format int64
   * @example 1024
   */
  id?: number;
  /**
   * 部门名称
   * @example "芋道"
   */
  name: string;
  /**
   * 父部门 ID
   * @format int64
   * @example 1024
   */
  parentId?: number;
  /**
   * 显示顺序
   * @format int32
   * @example 1024
   */
  sort: number;
  /**
   * 负责人的用户编号
   * @format int64
   * @example 2048
   */
  leaderUserId?: number;
  /**
   * 联系电话
   * @example 15601691000
   */
  phone?: string;
  /**
   * 邮箱
   * @example "yudao@iocoder.cn"
   */
  email?: string;
  /**
   * 状态,见 CommonStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

export interface CommonResultListDeptSimpleRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DeptSimpleRespVO[];
}

export interface CommonResultDeptRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 部门信息 Response VO */
  data?: DeptRespVO;
}

/** 管理后台 - 登录用户的权限信息 Response VO，额外包括用户信息和角色列表 */
export interface AuthPermissionInfoRespVO {
  /** 用户信息 */
  user: UserVO;
  /**
   * 角色标识数组
   * @uniqueItems true
   */
  roles: string[];
  /**
   * 操作权限数组
   * @uniqueItems true
   */
  permissions: string[];
  /** 菜单树 */
  menus: MenuVO[];
}

export interface CommonResultAuthPermissionInfoRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 登录用户的权限信息 Response VO，额外包括用户信息和角色列表 */
  data?: AuthPermissionInfoRespVO;
}

/** 管理后台 - 登录用户的菜单信息 Response VO */
export interface MenuVO {
  /**
   * 菜单名称
   * @format int64
   * @example "芋道"
   */
  id: number;
  /**
   * 父菜单 ID
   * @format int64
   * @example 1024
   */
  parentId: number;
  /**
   * 菜单名称
   * @example "芋道"
   */
  name: string;
  /**
   * 路由地址,仅菜单类型为菜单或者目录时，才需要传
   * @example "post"
   */
  path?: string;
  /**
   * 组件路径,仅菜单类型为菜单时，才需要传
   * @example "system/post/index"
   */
  component?: string;
  /**
   * 组件名
   * @example "SystemUser"
   */
  componentName?: string;
  /**
   * 菜单图标,仅菜单类型为菜单或者目录时，才需要传
   * @example "/menu/list"
   */
  icon?: string;
  /**
   * 是否可见
   * @example false
   */
  visible: boolean;
  /**
   * 是否缓存
   * @example false
   */
  keepAlive: boolean;
  /**
   * 是否总是显示
   * @example false
   */
  alwaysShow?: boolean;
}

/** 用户信息 VO */
export interface UserVO {
  /**
   * 用户编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 用户昵称
   * @example "芋道源码"
   */
  nickname: string;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/xx.jpg"
   */
  avatar: string;
  /**
   * 部门编号
   * @format int64
   * @example 2048
   */
  deptId: number;
  /**
   * 用户账号
   * @example "yudao"
   */
  username: string;
  /**
   * 用户邮箱
   * @example "yudao@iocoder.cn"
   */
  email?: string;
}

/** 管理后台 - 地区节点 Response VO */
export interface AreaNodeRespVO {
  /**
   * 编号
   * @format int32
   * @example 110000
   */
  id: number;
  /**
   * 名字
   * @example "北京"
   */
  name: string;
}

export interface CommonResultListAreaNodeRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: AreaNodeRespVO[];
}

/** Redis 命令统计结果 */
export interface CommandStat {
  /**
   * Redis 命令
   * @example "get"
   */
  command: string;
  /**
   * 调用次数
   * @format int64
   * @example 1024
   */
  calls: number;
  /**
   * 消耗 CPU 秒数
   * @format int64
   * @example 666
   */
  usec: number;
}

export interface CommonResultRedisMonitorRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - Redis 监控信息 Response VO */
  data?: RedisMonitorRespVO;
}

/** 管理后台 - Redis 监控信息 Response VO */
export interface RedisMonitorRespVO {
  /** Redis info 指令结果,具体字段，查看 Redis 文档 */
  info: Record<string, string>;
  /**
   * Redis key 数量
   * @format int64
   * @example 1024
   */
  dbSize: number;
  /** CommandStat 数组 */
  commandStats: CommandStat[];
}

export interface CommonResultPageResultJobRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultJobRespVO;
}

/** 管理后台 - 定时任务 Response VO */
export interface JobRespVO {
  /**
   * 任务编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 任务名称
   * @example "测试任务"
   */
  name: string;
  /**
   * 任务状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 处理器的名字
   * @example "sysUserSessionTimeoutJob"
   */
  handlerName: string;
  /**
   * 处理器的参数
   * @example "yudao"
   */
  handlerParam?: string;
  /**
   * CRON 表达式
   * @example "0/10 * * * * ? *"
   */
  cronExpression: string;
  /**
   * 重试次数
   * @format int32
   * @example 3
   */
  retryCount: number;
  /**
   * 重试间隔
   * @format int32
   * @example 1000
   */
  retryInterval: number;
  /**
   * 监控超时时间
   * @format int32
   * @example 1000
   */
  monitorTimeout?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultJobRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: JobRespVO[];
}

export interface CommonResultListLocalDateTime {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: string[];
}

export interface CommonResultJobRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 定时任务 Response VO */
  data?: JobRespVO;
}

export interface CommonResultPageResultJobLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultJobLogRespVO;
}

/** 管理后台 - 定时任务日志 Response VO */
export interface JobLogRespVO {
  /**
   * 日志编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 任务编号
   * @format int64
   * @example 1024
   */
  jobId: number;
  /**
   * 处理器的名字
   * @example "sysUserSessionTimeoutJob"
   */
  handlerName: string;
  /**
   * 处理器的参数
   * @example "yudao"
   */
  handlerParam?: string;
  /**
   * 第几次执行
   * @format int32
   * @example 1
   */
  executeIndex: number;
  /**
   * 开始执行时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束执行时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 执行时长
   * @format int32
   * @example 123
   */
  duration?: number;
  /**
   * 任务状态，参见 JobLogStatusEnum 枚举
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 结果数据
   * @example "执行成功"
   */
  result?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultJobLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: JobLogRespVO[];
}

export interface CommonResultJobLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 定时任务日志 Response VO */
  data?: JobLogRespVO;
}

export interface CommonResultPageResultFileRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultFileRespVO;
}

/** 管理后台 - 文件 Response VO,不返回 content 字段，太大 */
export interface FileRespVO {
  /**
   * 文件编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 配置编号
   * @format int64
   * @example 11
   */
  configId: number;
  /**
   * 文件路径
   * @example "yudao.jpg"
   */
  path: string;
  /**
   * 原文件名
   * @example "yudao.jpg"
   */
  name: string;
  /**
   * 文件 URL
   * @example "https://www.iocoder.cn/yudao.jpg"
   */
  url: string;
  /**
   * 文件MIME类型
   * @example "application/octet-stream"
   */
  type?: string;
  /**
   * 文件大小
   * @format int32
   * @example 2048
   */
  size: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultFileRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: FileRespVO[];
}

export interface CommonResultPageResultFileConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultFileConfigRespVO;
}

export type FileClientConfig = any;

/** 管理后台 - 文件配置 Response VO */
export interface FileConfigRespVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 配置名
   * @example "S3 - 阿里云"
   */
  name: string;
  /**
   * 存储器，参见 FileStorageEnum 枚举类
   * @format int32
   * @example 1
   */
  storage: number;
  /**
   * 是否为主配置
   * @example true
   */
  master: boolean;
  /** 存储配置 */
  config: FileClientConfig;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultFileConfigRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: FileConfigRespVO[];
}

export interface CommonResultFileConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 文件配置 Response VO */
  data?: FileConfigRespVO;
}

export interface CommonResultPageResultDemo03StudentNormalRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo03StudentNormalRespVO;
}

/** 管理后台 - 学生 Response VO */
export interface Demo03StudentNormalRespVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @example "随便"
   */
  description: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDemo03StudentNormalRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo03StudentNormalRespVO[];
}

export interface CommonResultDemo03StudentNormalRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 学生 Response VO */
  data?: Demo03StudentNormalRespVO;
}

export interface CommonResultDemo03GradeDO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: Demo03GradeDO;
}

export interface CommonResultListDemo03CourseDO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: Demo03CourseDO[];
}

export interface CommonResultPageResultDemo03StudentInnerRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo03StudentInnerRespVO;
}

/** 管理后台 - 学生 Response VO */
export interface Demo03StudentInnerRespVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @example "随便"
   */
  description: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDemo03StudentInnerRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo03StudentInnerRespVO[];
}

export interface CommonResultDemo03StudentInnerRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 学生 Response VO */
  data?: Demo03StudentInnerRespVO;
}

export interface CommonResultPageResultDemo03StudentErpRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo03StudentErpRespVO;
}

/** 管理后台 - 学生 Response VO */
export interface Demo03StudentErpRespVO {
  /**
   * 编号
   * @format int64
   * @example 8525
   */
  id: number;
  /**
   * 名字
   * @example "芋艿"
   */
  name: string;
  /**
   * 性别
   * @format int32
   */
  sex: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @example "随便"
   */
  description: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDemo03StudentErpRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo03StudentErpRespVO[];
}

export interface CommonResultDemo03StudentErpRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 学生 Response VO */
  data?: Demo03StudentErpRespVO;
}

export interface CommonResultPageResultDemo03GradeDO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo03GradeDO;
}

/** 分页结果 */
export interface PageResultDemo03GradeDO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo03GradeDO[];
}

export interface CommonResultPageResultDemo03CourseDO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo03CourseDO;
}

/** 分页结果 */
export interface PageResultDemo03CourseDO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo03CourseDO[];
}

export interface CommonResultDemo03CourseDO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: Demo03CourseDO;
}

export interface CommonResultListDemo02CategoryRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: Demo02CategoryRespVO[];
}

/** 管理后台 - 示例分类 Response VO */
export interface Demo02CategoryRespVO {
  /**
   * 编号
   * @format int64
   * @example 10304
   */
  id: number;
  /**
   * 名字
   * @example "芋艿"
   */
  name: string;
  /**
   * 父级编号
   * @format int64
   * @example 6080
   */
  parentId: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultDemo02CategoryRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 示例分类 Response VO */
  data?: Demo02CategoryRespVO;
}

export interface CommonResultPageResultDemo01ContactRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultDemo01ContactRespVO;
}

/** 管理后台 - 示例联系人 Response VO */
export interface Demo01ContactRespVO {
  /**
   * 编号
   * @format int64
   * @example 21555
   */
  id: number;
  /**
   * 名字
   * @example "张三"
   */
  name: string;
  /**
   * 性别
   * @format int32
   * @example 1
   */
  sex: number;
  /**
   * 出生年
   * @format date-time
   */
  birthday: string;
  /**
   * 简介
   * @example "你说的对"
   */
  description: string;
  /** 头像 */
  avatar?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultDemo01ContactRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: Demo01ContactRespVO[];
}

export interface CommonResultDemo01ContactRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 示例联系人 Response VO */
  data?: Demo01ContactRespVO;
}

export interface CommonResultListDataSourceConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DataSourceConfigRespVO[];
}

/** 管理后台 - 数据源配置 Response VO */
export interface DataSourceConfigRespVO {
  /**
   * 主键编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 数据源名称
   * @example "test"
   */
  name: string;
  /**
   * 数据源连接
   * @example "jdbc:mysql://127.0.0.1:3306/ruoyi-vue-pro"
   */
  url: string;
  /**
   * 用户名
   * @example "root"
   */
  username: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultDataSourceConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 数据源配置 Response VO */
  data?: DataSourceConfigRespVO;
}

export interface CommonResultPageResultConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultConfigRespVO;
}

/** 管理后台 - 参数配置信息 Response VO */
export interface ConfigRespVO {
  /**
   * 参数配置序号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 参数分类
   * @example "biz"
   */
  category: string;
  /**
   * 参数名称
   * @example "数据库名"
   */
  name: string;
  /**
   * 参数键名
   * @example "yunai.db.username"
   */
  key: string;
  /**
   * 参数键值
   * @example 1024
   */
  value: string;
  /**
   * 参数类型，参见 SysConfigTypeEnum 枚举
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 是否可见
   * @example true
   */
  visible: boolean;
  /**
   * 备注
   * @example "备注一下很帅气！"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   * @example "时间戳格式"
   */
  createTime: string;
}

/** 分页结果 */
export interface PageResultConfigRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: ConfigRespVO[];
}

export interface CommonResultConfigRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 参数配置信息 Response VO */
  data?: ConfigRespVO;
}

/** 管理后台 - 代码生成表定义 Response VO */
export interface CodegenTableRespVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 生成场景，参见 CodegenSceneEnum 枚举
   * @format int32
   * @example 1
   */
  scene: number;
  /**
   * 表名称
   * @example "yudao"
   */
  tableName: string;
  /**
   * 表描述
   * @example "芋道"
   */
  tableComment: string;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
  /**
   * 模块名
   * @example "system"
   */
  moduleName: string;
  /**
   * 业务名
   * @example "codegen"
   */
  businessName: string;
  /**
   * 类名称
   * @example "CodegenTable"
   */
  className: string;
  /**
   * 类描述
   * @example "代码生成器的表定义"
   */
  classComment: string;
  /**
   * 作者
   * @example "芋道源码"
   */
  author: string;
  /**
   * 模板类型，参见 CodegenTemplateTypeEnum 枚举
   * @format int32
   * @example 1
   */
  templateType: number;
  /**
   * 前端类型，参见 CodegenFrontTypeEnum 枚举
   * @format int32
   * @example 20
   */
  frontType: number;
  /**
   * 父菜单编号
   * @format int64
   * @example 1024
   */
  parentMenuId?: number;
  /**
   * 主表的编号
   * @format int64
   * @example 2048
   */
  masterTableId?: number;
  /**
   * 子表关联主表的字段编号
   * @format int64
   * @example 4096
   */
  subJoinColumnId?: number;
  /**
   * 主表与子表是否一对多
   * @example 4096
   */
  subJoinMany?: boolean;
  /**
   * 树表的父字段编号
   * @format int64
   * @example 8192
   */
  treeParentColumnId?: number;
  /**
   * 树表的名字字段编号
   * @format int64
   * @example 16384
   */
  treeNameColumnId?: number;
  /**
   * 主键编号
   * @format int32
   * @example 1024
   */
  dataSourceConfigId: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
}

export interface CommonResultPageResultCodegenTableRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultCodegenTableRespVO;
}

/** 分页结果 */
export interface PageResultCodegenTableRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: CodegenTableRespVO[];
}

export interface CommonResultListCodegenTableRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: CodegenTableRespVO[];
}

/** 管理后台 - 代码生成预览 Response VO，注意，每个文件都是一个该对象 */
export interface CodegenPreviewRespVO {
  /**
   * 文件路径
   * @example "java/cn/iocoder/yudao/adminserver/modules/system/controller/test/SysTestDemoController.java"
   */
  filePath: string;
  /**
   * 代码
   * @example "Hello World"
   */
  code: string;
}

export interface CommonResultListCodegenPreviewRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: CodegenPreviewRespVO[];
}

/** 管理后台 - 代码生成字段定义 Response VO */
export interface CodegenColumnRespVO {
  /**
   * 编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 表编号
   * @format int64
   * @example 1
   */
  tableId: number;
  /**
   * 字段名
   * @example "user_age"
   */
  columnName: string;
  /**
   * 字段类型
   * @example "int(11)"
   */
  dataType: string;
  /**
   * 字段描述
   * @example "年龄"
   */
  columnComment: string;
  /**
   * 是否允许为空
   * @example true
   */
  nullable: boolean;
  /**
   * 是否主键
   * @example false
   */
  primaryKey: boolean;
  /**
   * 排序
   * @format int32
   * @example 10
   */
  ordinalPosition: number;
  /**
   * Java 属性类型
   * @example "userAge"
   */
  javaType: string;
  /**
   * Java 属性名
   * @example "Integer"
   */
  javaField: string;
  /**
   * 字典类型
   * @example "sys_gender"
   */
  dictType?: string;
  /**
   * 数据示例
   * @example 1024
   */
  example?: string;
  /**
   * 是否为 Create 创建操作的字段
   * @example true
   */
  createOperation: boolean;
  /**
   * 是否为 Update 更新操作的字段
   * @example false
   */
  updateOperation: boolean;
  /**
   * 是否为 List 查询操作的字段
   * @example true
   */
  listOperation: boolean;
  /**
   * List 查询操作的条件类型，参见 CodegenColumnListConditionEnum 枚举
   * @example "LIKE"
   */
  listOperationCondition: string;
  /**
   * 是否为 List 查询操作的返回字段
   * @example true
   */
  listOperationResult: boolean;
  /**
   * 显示类型
   * @example "input"
   */
  htmlType: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

/** 管理后台 - 代码生成表和字段的明细 Response VO */
export interface CodegenDetailRespVO {
  /** 表定义 */
  table?: CodegenTableRespVO;
  /** 字段定义 */
  columns?: CodegenColumnRespVO[];
}

export interface CommonResultCodegenDetailRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 代码生成表和字段的明细 Response VO */
  data?: CodegenDetailRespVO;
}

export interface CommonResultListDatabaseTableRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: DatabaseTableRespVO[];
}

/** 管理后台 - 数据库的表定义 Response VO */
export interface DatabaseTableRespVO {
  /**
   * 表名称
   * @example "yuanma"
   */
  name: string;
  /**
   * 表描述
   * @example "芋道源码"
   */
  comment: string;
}

/** 管理后台 - API 错误日志 Response VO */
export interface ApiErrorLogRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 链路追踪编号
   * @example "66600cb6-7852-11eb-9439-0242ac130002"
   */
  traceId: string;
  /**
   * 用户编号
   * @format int64
   * @example 666
   */
  userId: number;
  /**
   * 用户类型
   * @format int32
   * @example 1
   */
  userType: number;
  /**
   * 应用名
   * @example "dashboard"
   */
  applicationName: string;
  /**
   * 请求方法名
   * @example "GET"
   */
  requestMethod: string;
  /**
   * 请求地址
   * @example "/xx/yy"
   */
  requestUrl: string;
  /** 请求参数 */
  requestParams: string;
  /**
   * 用户 IP
   * @example "127.0.0.1"
   */
  userIp: string;
  /**
   * 浏览器 UA
   * @example "Mozilla/5.0"
   */
  userAgent: string;
  /**
   * 异常发生时间
   * @format date-time
   */
  exceptionTime: string;
  /** 异常名 */
  exceptionName: string;
  /** 异常导致的消息 */
  exceptionMessage: string;
  /** 异常导致的根消息 */
  exceptionRootCauseMessage: string;
  /** 异常的栈轨迹 */
  exceptionStackTrace: string;
  /** 异常发生的类全名 */
  exceptionClassName: string;
  /** 异常发生的类文件 */
  exceptionFileName: string;
  /** 异常发生的方法名 */
  exceptionMethodName: string;
  /**
   * 异常发生的方法所在行
   * @format int32
   */
  exceptionLineNumber: number;
  /**
   * 处理状态
   * @format int32
   * @example 0
   */
  processStatus: number;
  /**
   * 处理时间
   * @format date-time
   */
  processTime: string;
  /**
   * 处理用户编号
   * @format int32
   * @example 233
   */
  processUserId?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultApiErrorLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultApiErrorLogRespVO;
}

/** 分页结果 */
export interface PageResultApiErrorLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: ApiErrorLogRespVO[];
}

/** 管理后台 - API 访问日志 Response VO */
export interface ApiAccessLogRespVO {
  /**
   * 日志主键
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 链路追踪编号
   * @example "66600cb6-7852-11eb-9439-0242ac130002"
   */
  traceId: string;
  /**
   * 用户编号
   * @format int64
   * @example 666
   */
  userId: number;
  /**
   * 用户类型，参见 UserTypeEnum 枚举
   * @format int32
   * @example 2
   */
  userType: number;
  /**
   * 应用名
   * @example "dashboard"
   */
  applicationName: string;
  /**
   * 请求方法名
   * @example "GET"
   */
  requestMethod: string;
  /**
   * 请求地址
   * @example "/xxx/yyy"
   */
  requestUrl: string;
  /** 请求参数 */
  requestParams?: string;
  /** 响应结果 */
  responseBody?: string;
  /**
   * 用户 IP
   * @example "127.0.0.1"
   */
  userIp: string;
  /**
   * 浏览器 UA
   * @example "Mozilla/5.0"
   */
  userAgent: string;
  /**
   * 操作模块
   * @example "商品模块"
   */
  operateModule: string;
  /**
   * 操作名
   * @example "创建商品"
   */
  operateName: string;
  /**
   * 操作分类
   * @format int32
   * @example 1
   */
  operateType: number;
  /**
   * 开始请求时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束请求时间
   * @format date-time
   */
  endTime: string;
  /**
   * 执行时长
   * @format int32
   * @example 100
   */
  duration: number;
  /**
   * 结果码
   * @format int32
   * @example 0
   */
  resultCode: number;
  /**
   * 结果提示
   * @example "芋道源码，牛逼！"
   */
  resultMsg?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultApiAccessLogRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultApiAccessLogRespVO;
}

/** 分页结果 */
export interface PageResultApiAccessLogRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: ApiAccessLogRespVO[];
}

/** 管理后台 - 用户组 Response VO */
export interface BpmUserGroupRespVO {
  /**
   * 编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 组名
   * @example "芋道"
   */
  name: string;
  /**
   * 描述
   * @example "芋道源码"
   */
  description: string;
  /**
   * 成员编号数组
   * @uniqueItems true
   * @example "1,2,3"
   */
  userIds: number[];
  /**
   * 状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultListBpmUserGroupRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmUserGroupRespVO[];
}

export interface CommonResultPageResultBpmUserGroupRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmUserGroupRespVO;
}

/** 分页结果 */
export interface PageResultBpmUserGroupRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmUserGroupRespVO[];
}

export interface CommonResultBpmUserGroupRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 用户组 Response VO */
  data?: BpmUserGroupRespVO;
}

/** 管理后台 - 流程任务 Response VO */
export interface BpmTaskRespVO {
  /**
   * 任务编号
   * @example 1024
   */
  id: string;
  /**
   * 任务名字
   * @example "芋道"
   */
  name: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * 持续时间
   * @format int64
   * @example 1000
   */
  durationInMillis?: number;
  /**
   * 任务状态
   * @format int32
   * @example 2
   */
  status: number;
  /**
   * 审批理由
   * @example 2
   */
  reason: string;
  /** 用户精简信息 VO */
  ownerUser?: UserSimpleBaseVO;
  /** 用户精简信息 VO */
  assigneeUser?: UserSimpleBaseVO;
  /**
   * 任务定义的标识
   * @example "Activity_one"
   */
  taskDefinitionKey: string;
  /**
   * 所属流程实例编号
   * @example 8888
   */
  processInstanceId: string;
  /** 流程实例 */
  processInstance?: ProcessInstance;
  /**
   * 父任务编号
   * @example 1024
   */
  parentTaskId: string;
  /**
   * 子任务列表（由加签生成）
   * @example "childrenTask"
   */
  children: any;
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  formId?: number;
  /**
   * 表单名字
   * @example "请假表单"
   */
  formName?: string;
  /** 表单的配置，JSON 字符串 */
  formConf?: string;
  /** 表单项的数组 */
  formFields?: string[];
  /** 提交的表单值 */
  formVariables: Record<string, any>;
  /** 操作按钮设置值 */
  buttonsSetting?: Record<string, OperationButtonSetting>;
  /**
   * 是否需要签名
   * @example false
   */
  signEnable?: boolean;
  /**
   * 是否填写审批意见
   * @example false
   */
  reasonRequire?: boolean;
  /**
   * 节点类型
   * @format int32
   * @example 10
   */
  nodeType?: number;
}

export interface CommonResultPageResultBpmTaskRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmTaskRespVO;
}

/** 分页结果 */
export interface PageResultBpmTaskRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmTaskRespVO[];
}

/** 流程实例 */
export interface ProcessInstance {
  /**
   * 流程实例编号
   * @example 1024
   */
  id: string;
  /**
   * 流程实例名称
   * @example "芋道"
   */
  name: string;
  /**
   * 提交时间
   * @format date-time
   */
  createTime: string;
  /**
   * 流程定义的编号
   * @example 2048
   */
  processDefinitionId: string;
  /**
   * 流程摘要
   * @example []
   */
  summary?: KeyValueStringString[];
  /** 用户精简信息 VO */
  startUser?: UserSimpleBaseVO;
}

/** 用户精简信息 VO */
export interface UserSimpleBaseVO {
  /**
   * 用户编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 用户昵称
   * @example "芋艿"
   */
  nickname: string;
  /**
   * 用户头像
   * @example "https://www.iocoder.cn/1.png"
   */
  avatar?: string;
  /**
   * 部门编号
   * @format int64
   * @example 1
   */
  deptId: number;
  /**
   * 部门名称
   * @example "研发部"
   */
  deptName: string;
}

export interface CommonResultListBpmTaskRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmTaskRespVO[];
}

/** 管理后台 - BPM 流程监听器 Response VO */
export interface BpmProcessListenerRespVO {
  /**
   * 编号
   * @format int64
   * @example 13089
   */
  id: number;
  /**
   * 监听器名字
   * @example "赵六"
   */
  name: string;
  /**
   * 监听器类型
   * @example "execution"
   */
  type: string;
  /**
   * 监听器状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 监听事件
   * @example "start"
   */
  event: string;
  /**
   * 监听器值类型
   * @example "class"
   */
  valueType: string;
  /** 监听器值 */
  value: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultBpmProcessListenerRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmProcessListenerRespVO;
}

/** 分页结果 */
export interface PageResultBpmProcessListenerRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmProcessListenerRespVO[];
}

export interface CommonResultBpmProcessListenerRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - BPM 流程监听器 Response VO */
  data?: BpmProcessListenerRespVO;
}

/** 管理后台 - 流程定义 Response VO */
export interface BpmProcessDefinitionRespVO {
  /**
   * 流程图标
   * @example "https://www.iocoder.cn/yudao.jpg"
   */
  icon?: string;
  /**
   * 流程描述
   * @example "我是描述"
   */
  description?: string;
  /**
   * 流程类型
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 表单类型
   * @format int32
   * @example 10
   */
  formType: number;
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  formId?: number;
  /**
   * 自定义表单的提交路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/create"
   */
  formCustomCreatePath?: string;
  /**
   * 自定义表单的查看路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/view"
   */
  formCustomViewPath?: string;
  /**
   * 是否可见
   * @example true
   */
  visible: boolean;
  /**
   * 可发起用户编号数组
   * @example [1,2,3]
   */
  startUserIds?: number[];
  /**
   * 可发起部门编号数组
   * @example [2,4,6]
   */
  startDeptIds?: number[];
  /**
   * 可管理用户编号数组
   * @minItems 1
   * @example [2,4,6]
   */
  managerUserIds: number[];
  /**
   * 流程定义排序
   * @format int64
   * @example 1024
   */
  sort: number;
  /**
   * 允许撤销审批中的申请
   * @example true
   */
  allowCancelRunningProcess?: boolean;
  /**
   * 允许允许审批人撤回任务
   * @example false
   */
  allowWithdrawTask?: boolean;
  /**
   * 流程 ID 规则
   * @example {}
   */
  processIdRule?: ProcessIdRule;
  /**
   * 自动去重类型
   * @format int32
   * @example 1
   */
  autoApprovalType?: number;
  /**
   * 标题设置
   * @example {}
   */
  titleSetting?: TitleSetting;
  /**
   * 摘要设置
   * @example {}
   */
  summarySetting?: SummarySetting;
  /**
   * 流程前置通知设置
   * @example {}
   */
  processBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 流程后置通知设置
   * @example {}
   */
  processAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 任务前置通知设置
   * @example {}
   */
  taskBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 任务后置通知设置
   * @example {}
   */
  taskAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 编号
   * @example 1024
   */
  id: string;
  /**
   * 版本
   * @format int32
   * @example 1
   */
  version: number;
  /**
   * 流程名称
   * @example "芋道"
   */
  name: string;
  /**
   * 流程标识
   * @example "youdao"
   */
  key: string;
  /**
   * 流程分类
   * @example 1
   */
  category?: string;
  /**
   * 流程分类名字
   * @example "请假"
   */
  categoryName?: string;
  /**
   * 流程模型的类型
   * @format int32
   * @example 10
   */
  modelType: number;
  /**
   * 流程模型的编号
   * @example "ABC"
   */
  modelId: string;
  /** 表单的配置-JSON 字符串。在表单类型为 {@link BpmModelFormTypeEnum#CUSTOM} 时，必须非空 */
  formConf: string;
  /** 表单项的数组-JSON 字符串的数组。在表单类型为 {@link BpmModelFormTypeEnum#CUSTOM} 时，必须非空 */
  formFields: string[];
  /**
   * 表单名字
   * @example "请假表单"
   */
  formName?: string;
  /**
   * 中断状态-参见 SuspensionState 枚举
   * @format int32
   * @example 1
   */
  suspensionState: number;
  /**
   * 部署时间
   * @format date-time
   */
  deploymentTime?: string;
  /** BPMN XML */
  bpmnXml?: string;
  /** SIMPLE 设计器模型数据 json 格式 */
  simpleModel?: string;
}

/** 管理后台 - 流程实例的 Response VO */
export interface BpmProcessInstanceRespVO {
  /**
   * 流程实例的编号
   * @example 1024
   */
  id: string;
  /**
   * 流程名称
   * @example "芋道"
   */
  name: string;
  /** 流程摘要 */
  summary?: KeyValueStringString[];
  /**
   * 流程分类
   * @example 1
   */
  category: string;
  /**
   * 流程分类名称
   * @example "请假"
   */
  categoryName: string;
  /**
   * 流程实例的状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 发起时间
   * @format date-time
   */
  startTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * 持续时间
   * @format int64
   * @example 1000
   */
  durationInMillis?: number;
  /** 提交的表单值 */
  formVariables: Record<string, any>;
  /**
   * 业务的唯一标识-例如说，请假申请的编号
   * @example 1
   */
  businessKey?: string;
  /** 用户精简信息 VO */
  startUser?: UserSimpleBaseVO;
  /**
   * 流程定义的编号
   * @example 2048
   */
  processDefinitionId: string;
  /** 管理后台 - 流程定义 Response VO */
  processDefinition?: BpmProcessDefinitionRespVO;
  tasks?: Task[];
}

export interface CommonResultPageResultBpmProcessInstanceRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmProcessInstanceRespVO;
}

/** 分页结果 */
export interface PageResultBpmProcessInstanceRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmProcessInstanceRespVO[];
}

/** 流程任务 */
export interface Task {
  /**
   * 流程任务的编号
   * @example 1024
   */
  id: string;
  /**
   * 任务名称
   * @example "芋道"
   */
  name: string;
  /**
   * 任务分配人
   * @example 2048
   */
  assigneeUser?: UserSimpleBaseVO;
}

export interface CommonResultBpmProcessInstanceRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 流程实例的 Response VO */
  data?: BpmProcessInstanceRespVO;
}

/** 活动节点信息 */
export interface ActivityNode {
  /**
   * 节点编号
   * @example "StartUserNode"
   */
  id: string;
  /**
   * 节点名称
   * @example "发起人"
   */
  name: string;
  /**
   * 节点类型
   * @format int32
   * @example 1
   */
  nodeType: number;
  /**
   * 节点状态
   * @format int32
   * @example 0
   */
  status: number;
  /**
   * 节点的开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 节点的结束时间
   * @format date-time
   */
  endTime?: string;
  /** 审批节点的任务信息 */
  tasks?: ActivityNodeTask[];
  /**
   * 候选人策略
   * @format int32
   * @example 35
   */
  candidateStrategy?: number;
  /** 候选人用户列表 */
  candidateUsers?: UserSimpleBaseVO[];
  /**
   * 流程编号
   * @example "8761d8e0-0922-11f0-bd37-00ff1db677bf"
   */
  processInstanceId?: string;
}

/** 活动节点的任务信息 */
export interface ActivityNodeTask {
  /**
   * 任务编号
   * @example 1
   */
  id: string;
  /**
   * 任务所属人
   * @example 1024
   */
  ownerUser?: UserSimpleBaseVO;
  /**
   * 任务分配人
   * @example 2048
   */
  assigneeUser?: UserSimpleBaseVO;
  /**
   * 任务状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 审批意见
   * @example "同意"
   */
  reason?: string;
  /**
   * 签名
   * @example "https://www.iocoder.cn/sign.png"
   */
  signPicUrl?: string;
}

export interface CommonResultListActivityNode {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: ActivityNode[];
}

/** 管理后台 - 流程示例的 BPMN 视图 Response VO */
export interface BpmProcessInstanceBpmnModelViewRespVO {
  /** 流程实例信息 */
  processInstance: BpmProcessInstanceRespVO;
  /** 任务列表 */
  tasks: BpmTaskRespVO[];
  /** BPMN XML */
  bpmnXml: string;
  /** SIMPLE 模型 */
  simpleModel?: BpmSimpleModelNodeVO;
  /**
   * 进行中的活动节点编号集合
   * @uniqueItems true
   */
  unfinishedTaskActivityIds: string[];
  /**
   * 已经完成的活动节点编号集合
   * @uniqueItems true
   */
  finishedTaskActivityIds: string[];
  /**
   * 已经完成的连线节点编号集合
   * @uniqueItems true
   */
  finishedSequenceFlowActivityIds: string[];
  /**
   * 已经拒绝的活动节点编号集合
   * @uniqueItems true
   */
  rejectedTaskActivityIds: string[];
}

export interface CommonResultBpmProcessInstanceBpmnModelViewRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 流程示例的 BPMN 视图 Response VO */
  data?: BpmProcessInstanceBpmnModelViewRespVO;
}

/** 管理后台 - 审批详情 Response VO */
export interface BpmApprovalDetailRespVO {
  /**
   * 流程实例的状态
   * @format int32
   * @example 1
   */
  status: number;
  /** 活动节点列表 */
  activityNodes: ActivityNode[];
  /** 表单字段权限 */
  formFieldsPermission?: Record<string, string>;
  /** 待办任务 */
  todoTask?: BpmTaskRespVO;
  /** 管理后台 - 流程定义 Response VO */
  processDefinition?: BpmProcessDefinitionRespVO;
  /** 管理后台 - 流程实例的 Response VO */
  processInstance?: BpmProcessInstanceRespVO;
}

export interface CommonResultBpmApprovalDetailRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 审批详情 Response VO */
  data?: BpmApprovalDetailRespVO;
}

/** 管理后台 - 流程实例抄送的分页 Item Response VO */
export interface BpmProcessInstanceCopyRespVO {
  /**
   * 抄送主键
   * @format int64
   * @example 1024
   */
  id: number;
  /** 发起人 */
  startUser: UserSimpleBaseVO;
  /**
   * 流程实例编号
   * @example "A233"
   */
  processInstanceId: string;
  /**
   * 流程实例的名称
   * @example "测试"
   */
  processInstanceName: string;
  /**
   * 流程实例的发起时间
   * @format date-time
   */
  processInstanceStartTime: string;
  /** 流程活动的编号 */
  activityId: string;
  /** 流程活动的名字 */
  activityName: string;
  /** 流程活动的编号 */
  taskId?: string;
  /** 抄送人意见 */
  reason?: string;
  /** 创建人 */
  createUser: UserSimpleBaseVO;
  /**
   * 抄送时间
   * @format date-time
   */
  createTime: string;
  /**
   * 流程摘要
   * @example []
   */
  summary?: KeyValueStringString[];
}

export interface CommonResultPageResultBpmProcessInstanceCopyRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmProcessInstanceCopyRespVO;
}

/** 分页结果 */
export interface PageResultBpmProcessInstanceCopyRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmProcessInstanceCopyRespVO[];
}

/** 管理后台 - BPM 流程表达式 Response VO */
export interface BpmProcessExpressionRespVO {
  /**
   * 编号
   * @format int64
   * @example 3870
   */
  id: number;
  /**
   * 表达式名字
   * @example "李四"
   */
  name: string;
  /**
   * 表达式状态
   * @format int32
   * @example 1
   */
  status: number;
  /** 表达式 */
  expression: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultBpmProcessExpressionRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmProcessExpressionRespVO;
}

/** 分页结果 */
export interface PageResultBpmProcessExpressionRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmProcessExpressionRespVO[];
}

export interface CommonResultBpmProcessExpressionRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - BPM 流程表达式 Response VO */
  data?: BpmProcessExpressionRespVO;
}

export interface CommonResultListBpmProcessDefinitionRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmProcessDefinitionRespVO[];
}

export interface CommonResultPageResultBpmProcessDefinitionRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmProcessDefinitionRespVO;
}

/** 分页结果 */
export interface PageResultBpmProcessDefinitionRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmProcessDefinitionRespVO[];
}

export interface CommonResultBpmProcessDefinitionRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 流程定义 Response VO */
  data?: BpmProcessDefinitionRespVO;
}

/** 管理后台 - 请假申请 Response VO */
export interface BpmOALeaveRespVO {
  /**
   * 请假表单主键
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 请假类型，参见 bpm_oa_type 枚举
   * @format int32
   * @example 1
   */
  type: number;
  /**
   * 原因
   * @example "阅读芋道源码"
   */
  reason: string;
  /**
   * 申请时间
   * @format date-time
   */
  createTime: string;
  /**
   * 请假的开始时间
   * @format date-time
   */
  startTime: string;
  /**
   * 请假的结束时间
   * @format date-time
   */
  endTime: string;
  /** 流程编号 */
  processInstanceId?: string;
  /**
   * 审批结果
   * @format int32
   * @example 1
   */
  status: number;
}

export interface CommonResultPageResultBpmOALeaveRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmOALeaveRespVO;
}

/** 分页结果 */
export interface PageResultBpmOALeaveRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmOALeaveRespVO[];
}

export interface CommonResultBpmOALeaveRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 请假申请 Response VO */
  data?: BpmOALeaveRespVO;
}

export interface CommonResultBpmSimpleModelNodeVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 仿钉钉流程设计模型节点 VO */
  data?: BpmSimpleModelNodeVO;
}

/** 管理后台 - 流程模型 Response VO */
export interface BpmModelRespVO {
  /**
   * 流程图标
   * @example "https://www.iocoder.cn/yudao.jpg"
   */
  icon?: string;
  /**
   * 流程描述
   * @example "我是描述"
   */
  description?: string;
  /**
   * 流程类型
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 表单类型
   * @format int32
   * @example 10
   */
  formType: number;
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  formId?: number;
  /**
   * 自定义表单的提交路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/create"
   */
  formCustomCreatePath?: string;
  /**
   * 自定义表单的查看路径，使用 Vue 的路由地址
   * @example "/bpm/oa/leave/view"
   */
  formCustomViewPath?: string;
  /**
   * 是否可见
   * @example true
   */
  visible: boolean;
  /**
   * 可发起用户编号数组
   * @example [1,2,3]
   */
  startUserIds?: number[];
  /**
   * 可发起部门编号数组
   * @example [2,4,6]
   */
  startDeptIds?: number[];
  /**
   * 可管理用户编号数组
   * @minItems 1
   * @example [2,4,6]
   */
  managerUserIds: number[];
  /**
   * 排序
   * @format int64
   * @example 1
   */
  sort?: number;
  /**
   * 允许撤销审批中的申请
   * @example true
   */
  allowCancelRunningProcess?: boolean;
  /**
   * 允许允许审批人撤回任务
   * @example false
   */
  allowWithdrawTask?: boolean;
  /**
   * 流程 ID 规则
   * @example {}
   */
  processIdRule?: ProcessIdRule;
  /**
   * 自动去重类型
   * @format int32
   * @example 1
   */
  autoApprovalType?: number;
  /**
   * 标题设置
   * @example {}
   */
  titleSetting?: TitleSetting;
  /**
   * 摘要设置
   * @example {}
   */
  summarySetting?: SummarySetting;
  /**
   * 流程前置通知设置
   * @example {}
   */
  processBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 流程后置通知设置
   * @example {}
   */
  processAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 任务前置通知设置
   * @example {}
   */
  taskBeforeTriggerSetting?: HttpRequestSetting;
  /**
   * 任务后置通知设置
   * @example {}
   */
  taskAfterTriggerSetting?: HttpRequestSetting;
  /**
   * 编号
   * @example 1024
   */
  id: string;
  /**
   * 流程标识
   * @example "process_yudao"
   */
  key: string;
  /**
   * 流程名称
   * @example "芋道"
   */
  name: string;
  /**
   * 流程分类编号
   * @example 1
   */
  category?: string;
  /**
   * 流程分类名字
   * @example "请假"
   */
  categoryName?: string;
  /**
   * 表单名字
   * @example "请假表单"
   */
  formName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 可发起的用户数组 */
  startUsers?: UserSimpleBaseVO[];
  /** 可发起的部门数组 */
  startDepts?: DeptSimpleBaseVO[];
  /** BPMN XML */
  bpmnXml?: string;
  /** 仿钉钉流程设计模型对象 */
  simpleModel?: BpmSimpleModelNodeVO;
  /** 管理后台 - 流程定义 Response VO */
  processDefinition?: BpmProcessDefinitionRespVO;
}

export interface CommonResultListBpmModelRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmModelRespVO[];
}

/** 部门精简信息 VO */
export interface DeptSimpleBaseVO {
  /**
   * 部门编号
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * 部门名称
   * @example "技术部"
   */
  name: string;
}

export interface CommonResultBpmModelRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 流程模型 Response VO */
  data?: BpmModelRespVO;
}

/** 管理后台 - 动态表单 Response VO */
export interface BpmFormRespVO {
  /**
   * 表单编号
   * @format int64
   * @example 1024
   */
  id: number;
  /**
   * 表单名称
   * @example "芋道"
   */
  name: string;
  /** 表单的配置-JSON 字符串 */
  conf: string;
  /** 表单项的数组-JSON 字符串的数组 */
  fields: string[];
  /**
   * 表单状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 备注
   * @example "我是备注"
   */
  remark?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultPageResultBpmFormRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmFormRespVO;
}

/** 分页结果 */
export interface PageResultBpmFormRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmFormRespVO[];
}

export interface CommonResultListBpmFormRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmFormRespVO[];
}

export interface CommonResultBpmFormRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - 动态表单 Response VO */
  data?: BpmFormRespVO;
}

/** 管理后台 - BPM 流程分类 Response VO */
export interface BpmCategoryRespVO {
  /**
   * 分类编号
   * @format int64
   * @example 3167
   */
  id: number;
  /**
   * 分类名
   * @example "王五"
   */
  name: string;
  /**
   * 分类标志
   * @example "OA"
   */
  code: string;
  /**
   * 分类描述
   * @example "你猜"
   */
  description: string;
  /**
   * 分类状态
   * @format int32
   * @example 1
   */
  status: number;
  /**
   * 分类排序
   * @format int32
   */
  sort: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
}

export interface CommonResultListBpmCategoryRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  data?: BpmCategoryRespVO[];
}

export interface CommonResultPageResultBpmCategoryRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 分页结果 */
  data?: PageResultBpmCategoryRespVO;
}

/** 分页结果 */
export interface PageResultBpmCategoryRespVO {
  /**
   * 总量
   * @format int64
   */
  total: number;
  /** 数据 */
  list: BpmCategoryRespVO[];
}

export interface CommonResultBpmCategoryRespVO {
  /** @format int32 */
  code?: number;
  msg?: string;
  /** 管理后台 - BPM 流程分类 Response VO */
  data?: BpmCategoryRespVO;
}

/** 管理后台 - 取消社交绑定 Request VO */
export interface SocialUserUnbindReqVO {
  /**
   * 社交平台的类型，参见 UserSocialTypeEnum 枚举值
   * @format int32
   * @example 10
   */
  type: number;
  /**
   * 社交用户的 openid
   * @minLength 1
   * @example "IPRmJ0wvBptiPIlGEZiPewGwiEiE"
   */
  openid: string;
}

/** 管理后台 - 加签任务的删除（减签） Request VO */
export interface BpmTaskSignDeleteReqVO {
  /**
   * 被减签的任务编号
   * @minLength 1
   * @example 1
   */
  id: string;
  /**
   * 加签原因
   * @minLength 1
   * @example "需要减签"
   */
  reason: string;
}

/** 管理后台 - 流程实例的取消 Request VO */
export interface BpmProcessInstanceCancelReqVO {
  /**
   * 流程实例的编号
   * @minLength 1
   * @example 1024
   */
  id: string;
  /**
   * 取消原因
   * @minLength 1
   * @example "不请假了！"
   */
  reason: string;
}
