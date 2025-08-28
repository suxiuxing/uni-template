 
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { RequestParams } from "@/utils/request";
import { ContentType, request } from "@/utils/request";
import type {
  AuthLoginReqVO,
  AuthRegisterReqVO,
  AuthResetPasswordReqVO,
  AuthSmsLoginReqVO,
  AuthSmsSendReqVO,
  AuthSocialLoginReqVO,
  BpmCategorySaveReqVO,
  BpmFormSaveReqVO,
  BpmModelSaveReqVO,
  BpmModelUpdateStateReqVO,
  BpmModeUpdateBpmnReqVO,
  BpmOALeaveCreateReqVO,
  BpmProcessExpressionSaveReqVO,
  BpmProcessInstanceCancelReqVO,
  BpmProcessInstanceCreateReqVO,
  BpmProcessListenerSaveReqVO,
  BpmSimpleModelUpdateReqVO,
  BpmTaskApproveReqVO,
  BpmTaskCopyReqVO,
  BpmTaskDelegateReqVO,
  BpmTaskRejectReqVO,
  BpmTaskReturnReqVO,
  BpmTaskSignCreateReqVO,
  BpmTaskSignDeleteReqVO,
  BpmTaskTransferReqVO,
  BpmUserGroupSaveReqVO,
  CaptchaVO,
  CodegenCreateListReqVO,
  CodegenUpdateReqVO,
  CommonResultAuthLoginRespVO,
  CommonResultAuthPermissionInfoRespVO,
  CommonResultBoolean,
  CommonResultBpmApprovalDetailRespVO,
  CommonResultBpmCategoryRespVO,
  CommonResultBpmFormRespVO,
  CommonResultBpmModelRespVO,
  CommonResultBpmOALeaveRespVO,
  CommonResultBpmProcessDefinitionRespVO,
  CommonResultBpmProcessExpressionRespVO,
  CommonResultBpmProcessInstanceBpmnModelViewRespVO,
  CommonResultBpmProcessInstanceRespVO,
  CommonResultBpmProcessListenerRespVO,
  CommonResultBpmSimpleModelNodeVO,
  CommonResultBpmUserGroupRespVO,
  CommonResultCodegenDetailRespVO,
  CommonResultConfigRespVO,
  CommonResultDataSourceConfigRespVO,
  CommonResultDemo01ContactRespVO,
  CommonResultDemo02CategoryRespVO,
  CommonResultDemo03CourseDO,
  CommonResultDemo03GradeDO,
  CommonResultDemo03StudentErpRespVO,
  CommonResultDemo03StudentInnerRespVO,
  CommonResultDemo03StudentNormalRespVO,
  CommonResultDeptRespVO,
  CommonResultDictDataRespVO,
  CommonResultDictTypeRespVO,
  CommonResultFileConfigRespVO,
  CommonResultFilePresignedUrlRespVO,
  CommonResultJobLogRespVO,
  CommonResultJobRespVO,
  CommonResultListActivityNode,
  CommonResultListAreaNodeRespVO,
  CommonResultListBpmCategoryRespVO,
  CommonResultListBpmFormRespVO,
  CommonResultListBpmModelRespVO,
  CommonResultListBpmProcessDefinitionRespVO,
  CommonResultListBpmTaskRespVO,
  CommonResultListBpmUserGroupRespVO,
  CommonResultListCodegenPreviewRespVO,
  CommonResultListCodegenTableRespVO,
  CommonResultListDatabaseTableRespVO,
  CommonResultListDataSourceConfigRespVO,
  CommonResultListDemo02CategoryRespVO,
  CommonResultListDemo03CourseDO,
  CommonResultListDeptRespVO,
  CommonResultListDeptSimpleRespVO,
  CommonResultListDictDataSimpleRespVO,
  CommonResultListDictTypeSimpleRespVO,
  CommonResultListLocalDateTime,
  CommonResultListLong,
  CommonResultListMailAccountSimpleRespVO,
  CommonResultListMailTemplateSimpleRespVO,
  CommonResultListMenuRespVO,
  CommonResultListMenuSimpleRespVO,
  CommonResultListNotifyMessageRespVO,
  CommonResultListPostSimpleRespVO,
  CommonResultListRoleRespVO,
  CommonResultListSmsChannelSimpleRespVO,
  CommonResultListSocialUserRespVO,
  CommonResultListTenantPackageSimpleRespVO,
  CommonResultListTenantRespVO,
  CommonResultListUserSimpleRespVO,
  CommonResultLong,
  CommonResultMailAccountRespVO,
  CommonResultMailLogRespVO,
  CommonResultMailTemplateRespVO,
  CommonResultMenuRespVO,
  CommonResultNoticeRespVO,
  CommonResultNotifyMessageRespVO,
  CommonResultNotifyTemplateRespVO,
  CommonResultOAuth2ClientRespVO,
  CommonResultOAuth2OpenAccessTokenRespVO,
  CommonResultOAuth2OpenAuthorizeInfoRespVO,
  CommonResultOAuth2OpenCheckTokenRespVO,
  CommonResultOAuth2UserInfoRespVO,
  CommonResultPageResultApiAccessLogRespVO,
  CommonResultPageResultApiErrorLogRespVO,
  CommonResultPageResultBpmCategoryRespVO,
  CommonResultPageResultBpmFormRespVO,
  CommonResultPageResultBpmOALeaveRespVO,
  CommonResultPageResultBpmProcessDefinitionRespVO,
  CommonResultPageResultBpmProcessExpressionRespVO,
  CommonResultPageResultBpmProcessInstanceCopyRespVO,
  CommonResultPageResultBpmProcessInstanceRespVO,
  CommonResultPageResultBpmProcessListenerRespVO,
  CommonResultPageResultBpmTaskRespVO,
  CommonResultPageResultBpmUserGroupRespVO,
  CommonResultPageResultCodegenTableRespVO,
  CommonResultPageResultConfigRespVO,
  CommonResultPageResultDemo01ContactRespVO,
  CommonResultPageResultDemo03CourseDO,
  CommonResultPageResultDemo03GradeDO,
  CommonResultPageResultDemo03StudentErpRespVO,
  CommonResultPageResultDemo03StudentInnerRespVO,
  CommonResultPageResultDemo03StudentNormalRespVO,
  CommonResultPageResultDictDataRespVO,
  CommonResultPageResultDictTypeRespVO,
  CommonResultPageResultFileConfigRespVO,
  CommonResultPageResultFileRespVO,
  CommonResultPageResultJobLogRespVO,
  CommonResultPageResultJobRespVO,
  CommonResultPageResultLoginLogRespVO,
  CommonResultPageResultMailAccountRespVO,
  CommonResultPageResultMailLogRespVO,
  CommonResultPageResultMailTemplateRespVO,
  CommonResultPageResultNoticeRespVO,
  CommonResultPageResultNotifyMessageRespVO,
  CommonResultPageResultNotifyTemplateRespVO,
  CommonResultPageResultOAuth2AccessTokenRespVO,
  CommonResultPageResultOAuth2ClientRespVO,
  CommonResultPageResultOperateLogRespVO,
  CommonResultPageResultPostRespVO,
  CommonResultPageResultRoleRespVO,
  CommonResultPageResultSmsChannelRespVO,
  CommonResultPageResultSmsLogRespVO,
  CommonResultPageResultSmsTemplateRespVO,
  CommonResultPageResultSocialClientRespVO,
  CommonResultPageResultSocialUserRespVO,
  CommonResultPageResultTenantPackageRespVO,
  CommonResultPageResultTenantRespVO,
  CommonResultPageResultUserRespVO,
  CommonResultPostRespVO,
  CommonResultRedisMonitorRespVO,
  CommonResultRoleRespVO,
  CommonResultSetLong,
  CommonResultSmsChannelRespVO,
  CommonResultSmsTemplateRespVO,
  CommonResultSocialClientRespVO,
  CommonResultSocialUserRespVO,
  CommonResultString,
  CommonResultTenantPackageRespVO,
  CommonResultTenantRespVO,
  CommonResultUserImportRespVO,
  CommonResultUserProfileRespVO,
  CommonResultUserRespVO,
  ConfigSaveReqVO,
  DataSourceConfigSaveReqVO,
  Demo01ContactSaveReqVO,
  Demo02CategorySaveReqVO,
  Demo03CourseDO,
  Demo03GradeDO,
  Demo03StudentErpSaveReqVO,
  Demo03StudentInnerSaveReqVO,
  Demo03StudentNormalSaveReqVO,
  DeptSaveReqVO,
  DictDataSaveReqVO,
  DictTypeSaveReqVO,
  FileConfigSaveReqVO,
  FileCreateReqVO,
  JobSaveReqVO,
  MailAccountSaveReqVO,
  MailTemplateSaveReqVO,
  MailTemplateSendReqVO,
  MenuSaveVO,
  NoticeSaveReqVO,
  NotifyTemplateSaveReqVO,
  NotifyTemplateSendReqVO,
  OAuth2ClientSaveReqVO,
  OAuth2UserUpdateReqVO,
  PermissionAssignRoleDataScopeReqVO,
  PermissionAssignRoleMenuReqVO,
  PermissionAssignUserRoleReqVO,
  PostSaveReqVO,
  ResponseModel,
  RoleSaveReqVO,
  SmsChannelSaveReqVO,
  SmsTemplateSaveReqVO,
  SmsTemplateSendReqVO,
  SocialClientSaveReqVO,
  SocialUserBindReqVO,
  SocialUserUnbindReqVO,
  SocialWxaSubscribeMessageSendReqDTO,
  TenantPackageSaveReqVO,
  TenantSaveReqVO,
  UserProfileUpdatePasswordReqVO,
  UserProfileUpdateReqVO,
  UserSaveReqVO,
  UserUpdatePasswordReqVO,
  UserUpdateStatusReqVO,
} from "./data-contracts";

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name putSystemUserUpdate
 * @summary 修改用户
 * @request PUT:/admin-api/system/user/update
 * @secure
 */
export const putSystemUserUpdate = (
  data: UserSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name putSystemUserUpdateStatus
 * @summary 修改用户状态
 * @request PUT:/admin-api/system/user/update-status
 * @secure
 */
export const putSystemUserUpdateStatus = (
  data: UserUpdateStatusReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/update-status`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name putSystemUserUpdatePassword
 * @summary 重置用户密码
 * @request PUT:/admin-api/system/user/update-password
 * @secure
 */
export const putSystemUserUpdatePassword = (
  data: UserUpdatePasswordReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/update-password`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户个人中心
 * @name putUserProfileUpdate
 * @summary 修改用户个人信息
 * @request PUT:/admin-api/system/user/profile/update
 * @secure
 */
export const putUserProfileUpdate = (
  data: UserProfileUpdateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/profile/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户个人中心
 * @name putUserProfileUpdatePassword
 * @summary 修改用户个人密码
 * @request PUT:/admin-api/system/user/profile/update-password
 * @secure
 */
export const putUserProfileUpdatePassword = (
  data: UserProfileUpdatePasswordReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/profile/update-password`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name putSystemTenantUpdate
 * @summary 更新租户
 * @request PUT:/admin-api/system/tenant/update
 * @secure
 */
export const putSystemTenantUpdate = (
  data: TenantSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name putSystemTenantPackageUpdate
 * @summary 更新租户套餐
 * @request PUT:/admin-api/system/tenant-package/update
 * @secure
 */
export const putSystemTenantPackageUpdate = (
  data: TenantPackageSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant-package/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name putSystemSocialClientUpdate
 * @summary 更新社交客户端
 * @request PUT:/admin-api/system/social-client/update
 * @secure
 */
export const putSystemSocialClientUpdate = (
  data: SocialClientSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/social-client/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name putSystemSmsTemplateUpdate
 * @summary 更新短信模板
 * @request PUT:/admin-api/system/sms-template/update
 * @secure
 */
export const putSystemSmsTemplateUpdate = (
  data: SmsTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-template/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name putSystemSmsChannelUpdate
 * @summary 更新短信渠道
 * @request PUT:/admin-api/system/sms-channel/update
 * @secure
 */
export const putSystemSmsChannelUpdate = (
  data: SmsChannelSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-channel/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name putSystemRoleUpdate
 * @summary 修改角色
 * @request PUT:/admin-api/system/role/update
 * @secure
 */
export const putSystemRoleUpdate = (
  data: RoleSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/role/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name putSystemPostUpdate
 * @summary 修改岗位
 * @request PUT:/admin-api/system/post/update
 * @secure
 */
export const putSystemPostUpdate = (
  data: PostSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/post/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 用户
 * @name putOauth2UserUpdate
 * @summary 更新用户基本信息
 * @request PUT:/admin-api/system/oauth2/user/update
 * @secure
 */
export const putOauth2UserUpdate = (
  data: OAuth2UserUpdateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2/user/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name putSystemOauth2ClientUpdate
 * @summary 更新 OAuth2 客户端
 * @request PUT:/admin-api/system/oauth2-client/update
 * @secure
 */
export const putSystemOauth2ClientUpdate = (
  data: OAuth2ClientSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2-client/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name putSystemNotifyTemplateUpdate
 * @summary 更新站内信模版
 * @request PUT:/admin-api/system/notify-template/update
 * @secure
 */
export const putSystemNotifyTemplateUpdate = (
  data: NotifyTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notify-template/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name putSystemNotifyMessageUpdateRead
 * @summary 标记站内信为已读
 * @request PUT:/admin-api/system/notify-message/update-read
 * @secure
 */
export const putSystemNotifyMessageUpdateRead = (
  query: {
    /**
     * 编号列表
     * @example "1024,2048"
     */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notify-message/update-read`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name putSystemNotifyMessageUpdateAllRead
 * @summary 标记所有站内信为已读
 * @request PUT:/admin-api/system/notify-message/update-all-read
 * @secure
 */
export const putSystemNotifyMessageUpdateAllRead = (
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notify-message/update-all-read`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name putSystemNoticeUpdate
 * @summary 修改通知公告
 * @request PUT:/admin-api/system/notice/update
 * @secure
 */
export const putSystemNoticeUpdate = (
  data: NoticeSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notice/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 菜单
 * @name putSystemMenuUpdate
 * @summary 修改菜单
 * @request PUT:/admin-api/system/menu/update
 * @secure
 */
export const putSystemMenuUpdate = (
  data: MenuSaveVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/menu/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name putSystemMailTemplateUpdate
 * @summary 修改邮件模版
 * @request PUT:/admin-api/system/mail-template/update
 * @secure
 */
export const putSystemMailTemplateUpdate = (
  data: MailTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-template/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name putSystemMailAccountUpdate
 * @summary 修改邮箱账号
 * @request PUT:/admin-api/system/mail-account/update
 * @secure
 */
export const putSystemMailAccountUpdate = (
  data: MailAccountSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-account/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name putSystemDictTypeUpdate
 * @summary 修改字典类型
 * @request PUT:/admin-api/system/dict-type/update
 * @secure
 */
export const putSystemDictTypeUpdate = (
  data: DictTypeSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-type/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name putSystemDictDataUpdate
 * @summary 修改字典数据
 * @request PUT:/admin-api/system/dict-data/update
 * @secure
 */
export const putSystemDictDataUpdate = (
  data: DictDataSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-data/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name putSystemDeptUpdate
 * @summary 更新部门
 * @request PUT:/admin-api/system/dept/update
 * @secure
 */
export const putSystemDeptUpdate = (
  data: DeptSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dept/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name putInfraJobUpdate
 * @summary 更新定时任务
 * @request PUT:/admin-api/infra/job/update
 * @secure
 */
export const putInfraJobUpdate = (
  data: JobSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name putInfraJobUpdateStatus
 * @summary 更新定时任务的状态
 * @request PUT:/admin-api/infra/job/update-status
 * @secure
 */
export const putInfraJobUpdateStatus = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/update-status`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name putInfraJobTrigger
 * @summary 触发定时任务
 * @request PUT:/admin-api/infra/job/trigger
 * @secure
 */
export const putInfraJobTrigger = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/trigger`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name putInfraFileConfigUpdate
 * @summary 更新文件配置
 * @request PUT:/admin-api/infra/file-config/update
 * @secure
 */
export const putInfraFileConfigUpdate = (
  data: FileConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file-config/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name putInfraFileConfigUpdateMaster
 * @summary 更新文件配置为 Master
 * @request PUT:/admin-api/infra/file-config/update-master
 * @secure
 */
export const putInfraFileConfigUpdateMaster = (
  query: {
    /** @format int64 */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file-config/update-master`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name putInfraDemo03StudentNormalUpdate
 * @summary 更新学生
 * @request PUT:/admin-api/infra/demo03-student-normal/update
 * @secure
 */
export const putInfraDemo03StudentNormalUpdate = (
  data: Demo03StudentNormalSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-normal/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name putInfraDemo03StudentInnerUpdate
 * @summary 更新学生
 * @request PUT:/admin-api/infra/demo03-student-inner/update
 * @secure
 */
export const putInfraDemo03StudentInnerUpdate = (
  data: Demo03StudentInnerSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-inner/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name putInfraDemo03StudentErpUpdate
 * @summary 更新学生
 * @request PUT:/admin-api/infra/demo03-student-erp/update
 * @secure
 */
export const putInfraDemo03StudentErpUpdate = (
  data: Demo03StudentErpSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name putDemo03StudentErpDemo03GradeUpdate
 * @summary 更新学生班级
 * @request PUT:/admin-api/infra/demo03-student-erp/demo03-grade/update
 * @secure
 */
export const putDemo03StudentErpDemo03GradeUpdate = (
  data: Demo03GradeDO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name putDemo03StudentErpDemo03CourseUpdate
 * @summary 更新学生课程
 * @request PUT:/admin-api/infra/demo03-student-erp/demo03-course/update
 * @secure
 */
export const putDemo03StudentErpDemo03CourseUpdate = (
  data: Demo03CourseDO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name putInfraDemo02CategoryUpdate
 * @summary 更新示例分类
 * @request PUT:/admin-api/infra/demo02-category/update
 * @secure
 */
export const putInfraDemo02CategoryUpdate = (
  data: Demo02CategorySaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo02-category/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name putInfraDemo01ContactUpdate
 * @summary 更新示例联系人
 * @request PUT:/admin-api/infra/demo01-contact/update
 * @secure
 */
export const putInfraDemo01ContactUpdate = (
  data: Demo01ContactSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo01-contact/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name putInfraDataSourceConfigUpdate
 * @summary 更新数据源配置
 * @request PUT:/admin-api/infra/data-source-config/update
 * @secure
 */
export const putInfraDataSourceConfigUpdate = (
  data: DataSourceConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/data-source-config/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name putInfraConfigUpdate
 * @summary 修改参数配置
 * @request PUT:/admin-api/infra/config/update
 * @secure
 */
export const putInfraConfigUpdate = (
  data: ConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/config/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name putInfraCodegenUpdate
 * @summary 更新数据库的表和字段定义
 * @request PUT:/admin-api/infra/codegen/update
 * @secure
 */
export const putInfraCodegenUpdate = (
  data: CodegenUpdateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/codegen/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name putInfraCodegenSyncFromDb
 * @summary 基于数据库的表结构，同步数据库的表和字段定义
 * @request PUT:/admin-api/infra/codegen/sync-from-db
 * @secure
 */
export const putInfraCodegenSyncFromDb = (
  query: {
    /**
     * 表编号
     * @format int64
     * @example 1024
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/codegen/sync-from-db`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - API 错误日志
 * @name putInfraApiErrorLogUpdateStatus
 * @summary 更新 API 错误日志的状态
 * @request PUT:/admin-api/infra/api-error-log/update-status
 * @secure
 */
export const putInfraApiErrorLogUpdateStatus = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
    /**
     * 处理状态
     * @format int32
     * @example 1
     */
    processStatus: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/api-error-log/update-status`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户组
 * @name putBpmUserGroupUpdate
 * @summary 更新用户组
 * @request PUT:/admin-api/bpm/user-group/update
 * @secure
 */
export const putBpmUserGroupUpdate = (
  data: BpmUserGroupSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/user-group/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskWithdraw
 * @summary 撤回任务
 * @request PUT:/admin-api/bpm/task/withdraw
 * @secure
 */
export const putBpmTaskWithdraw = (
  query: {
    taskId: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/withdraw`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【流程详情】的【转派】按钮
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskTransfer
 * @summary 转派任务
 * @request PUT:/admin-api/bpm/task/transfer
 * @secure
 */
export const putBpmTaskTransfer = (
  data: BpmTaskTransferReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/transfer`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【流程详情】的【退回】按钮
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskReturn
 * @summary 退回任务
 * @request PUT:/admin-api/bpm/task/return
 * @secure
 */
export const putBpmTaskReturn = (
  data: BpmTaskReturnReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/return`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskReject
 * @summary 不通过任务
 * @request PUT:/admin-api/bpm/task/reject
 * @secure
 */
export const putBpmTaskReject = (
  data: BpmTaskRejectReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/reject`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【流程详情】的【委派】按钮
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskDelegate
 * @summary 委派任务
 * @request PUT:/admin-api/bpm/task/delegate
 * @secure
 */
export const putBpmTaskDelegate = (
  data: BpmTaskDelegateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/delegate`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description before 前加签，after 后加签
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskCreateSign
 * @summary 加签
 * @request PUT:/admin-api/bpm/task/create-sign
 * @secure
 */
export const putBpmTaskCreateSign = (
  data: BpmTaskSignCreateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/create-sign`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskCopy
 * @summary 抄送任务
 * @request PUT:/admin-api/bpm/task/copy
 * @secure
 */
export const putBpmTaskCopy = (
  data: BpmTaskCopyReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/copy`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name putBpmTaskApprove
 * @summary 通过任务
 * @request PUT:/admin-api/bpm/task/approve
 * @secure
 */
export const putBpmTaskApprove = (
  data: BpmTaskApproveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/approve`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程监听器
 * @name putBpmProcessListenerUpdate
 * @summary 更新流程监听器
 * @request PUT:/admin-api/bpm/process-listener/update
 * @secure
 */
export const putBpmProcessListenerUpdate = (
  data: BpmProcessListenerSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-listener/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程表达式
 * @name putBpmProcessExpressionUpdate
 * @summary 更新流程表达式
 * @request PUT:/admin-api/bpm/process-expression/update
 * @secure
 */
export const putBpmProcessExpressionUpdate = (
  data: BpmProcessExpressionSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-expression/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name putBpmModelUpdate
 * @summary 修改模型
 * @request PUT:/admin-api/bpm/model/update
 * @secure
 */
export const putBpmModelUpdate = (
  data: BpmModelSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 实际更新的部署的流程定义的状态
 *
 * @tags 管理后台 - 流程模型
 * @name putBpmModelUpdateState
 * @summary 修改模型的状态
 * @request PUT:/admin-api/bpm/model/update-state
 * @secure
 */
export const putBpmModelUpdateState = (
  data: BpmModelUpdateStateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/update-state`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name putBpmModelUpdateSortBatch
 * @summary 批量修改模型排序
 * @request PUT:/admin-api/bpm/model/update-sort-batch
 * @secure
 */
export const putBpmModelUpdateSortBatch = (
  query: {
    /**
     * 编号数组
     * @example "1,2,3"
     */
    ids: string[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/update-sort-batch`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name putBpmModelUpdateBpmn
 * @summary 修改模型的 BPMN
 * @request PUT:/admin-api/bpm/model/update-bpmn
 * @deprecated
 * @secure
 */
export const putBpmModelUpdateBpmn = (
  data: BpmModeUpdateBpmnReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/update-bpmn`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 动态表单
 * @name putBpmFormUpdate
 * @summary 更新动态表单
 * @request PUT:/admin-api/bpm/form/update
 * @secure
 */
export const putBpmFormUpdate = (
  data: BpmFormSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/form/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name putBpmCategoryUpdate
 * @summary 更新流程分类
 * @request PUT:/admin-api/bpm/category/update
 * @secure
 */
export const putBpmCategoryUpdate = (
  data: BpmCategorySaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/category/update`,
    method: "PUT",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name putBpmCategoryUpdateSortBatch
 * @summary 批量更新流程分类的排序
 * @request PUT:/admin-api/bpm/category/update-sort-batch
 * @secure
 */
export const putBpmCategoryUpdateSortBatch = (
  query: {
    /**
     * 分类编号列表
     * @example "1,2,3"
     */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/category/update-sort-batch`,
    method: "PUT",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name postSystemUserImport
 * @summary 导入用户
 * @request POST:/admin-api/system/user/import
 * @secure
 */
export const postSystemUserImport = (
  query: {
    /**
     * 是否支持更新，默认为 false
     * @default false
     * @example true
     */
    updateSupport?: boolean;
    /** Excel 文件 */
    file: any;
  },
  params: RequestParams = {},
) =>
  request<CommonResultUserImportRespVO>({
    path: `/admin-api/system/user/import`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name postSystemUserCreate
 * @summary 新增用户
 * @request POST:/admin-api/system/user/create
 * @secure
 */
export const postSystemUserCreate = (
  data: UserSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/user/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name postSystemTenantCreate
 * @summary 创建租户
 * @request POST:/admin-api/system/tenant/create
 * @secure
 */
export const postSystemTenantCreate = (
  data: TenantSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/tenant/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name postSystemTenantPackageCreate
 * @summary 创建租户套餐
 * @request POST:/admin-api/system/tenant-package/create
 * @secure
 */
export const postSystemTenantPackageCreate = (
  data: TenantPackageSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/tenant-package/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交用户
 * @name postSystemSocialUserBind
 * @summary 社交绑定，使用 code 授权码
 * @request POST:/admin-api/system/social-user/bind
 * @secure
 */
export const postSystemSocialUserBind = (
  data: SocialUserBindReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/social-user/bind`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name postSystemSocialClientSendSubscribeMessage
 * @summary 发送订阅消息
 * @request POST:/admin-api/system/social-client/send-subscribe-message
 * @secure
 */
export const postSystemSocialClientSendSubscribeMessage = (
  data: SocialWxaSubscribeMessageSendReqDTO,
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/social-client/send-subscribe-message`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name postSystemSocialClientCreate
 * @summary 创建社交客户端
 * @request POST:/admin-api/system/social-client/create
 * @secure
 */
export const postSystemSocialClientCreate = (
  data: SocialClientSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/social-client/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 参见 https://cloud.tencent.com/document/product/382/52077 文档
 *
 * @tags 管理后台 - 短信回调
 * @name postSmsCallbackTencent
 * @summary 腾讯云短信的回调
 * @request POST:/admin-api/system/sms/callback/tencent
 * @secure
 */
export const postSmsCallbackTencent = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms/callback/tencent`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 参见 https://developer.qiniu.com/sms/5910/message-push 文档
 *
 * @tags 管理后台 - 短信回调
 * @name postSmsCallbackQiniu
 * @summary 七牛云短信的回调
 * @request POST:/admin-api/system/sms/callback/qiniu
 * @secure
 */
export const postSmsCallbackQiniu = (
  data: string,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms/callback/qiniu`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 参见 https://support.huaweicloud.com/api-msgsms/sms_05_0003.html 文档
 *
 * @tags 管理后台 - 短信回调
 * @name postSmsCallbackHuawei
 * @summary 华为云短信的回调
 * @request POST:/admin-api/system/sms/callback/huawei
 * @secure
 */
export const postSmsCallbackHuawei = (
  data: string,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms/callback/huawei`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 参见 https://help.aliyun.com/document_detail/120998.html 文档
 *
 * @tags 管理后台 - 短信回调
 * @name postSmsCallbackAliyun
 * @summary 阿里云短信的回调
 * @request POST:/admin-api/system/sms/callback/aliyun
 * @secure
 */
export const postSmsCallbackAliyun = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms/callback/aliyun`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name postSystemSmsTemplateSendSms
 * @summary 发送短信
 * @request POST:/admin-api/system/sms-template/send-sms
 * @secure
 */
export const postSystemSmsTemplateSendSms = (
  data: SmsTemplateSendReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/sms-template/send-sms`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name postSystemSmsTemplateCreate
 * @summary 创建短信模板
 * @request POST:/admin-api/system/sms-template/create
 * @secure
 */
export const postSystemSmsTemplateCreate = (
  data: SmsTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/sms-template/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name postSystemSmsChannelCreate
 * @summary 创建短信渠道
 * @request POST:/admin-api/system/sms-channel/create
 * @secure
 */
export const postSystemSmsChannelCreate = (
  data: SmsChannelSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/sms-channel/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name postSystemRoleCreate
 * @summary 创建角色
 * @request POST:/admin-api/system/role/create
 * @secure
 */
export const postSystemRoleCreate = (
  data: RoleSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/role/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name postSystemPostCreate
 * @summary 创建岗位
 * @request POST:/admin-api/system/post/create
 * @secure
 */
export const postSystemPostCreate = (
  data: PostSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/post/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 权限
 * @name postSystemPermissionAssignUserRole
 * @summary 赋予用户角色
 * @request POST:/admin-api/system/permission/assign-user-role
 * @secure
 */
export const postSystemPermissionAssignUserRole = (
  data: PermissionAssignUserRoleReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/permission/assign-user-role`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 权限
 * @name postSystemPermissionAssignRoleMenu
 * @summary 赋予角色菜单
 * @request POST:/admin-api/system/permission/assign-role-menu
 * @secure
 */
export const postSystemPermissionAssignRoleMenu = (
  data: PermissionAssignRoleMenuReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/permission/assign-role-menu`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 权限
 * @name postSystemPermissionAssignRoleDataScope
 * @summary 赋予角色数据权限
 * @request POST:/admin-api/system/permission/assign-role-data-scope
 * @secure
 */
export const postSystemPermissionAssignRoleDataScope = (
  data: PermissionAssignRoleDataScopeReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/permission/assign-role-data-scope`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用
 *
 * @tags 管理后台 - OAuth2.0 授权
 * @name postSystemOauth2Token
 * @summary 获得访问令牌
 * @request POST:/admin-api/system/oauth2/token
 * @secure
 */
export const postSystemOauth2Token = (
  query: {
    /**
     * 授权类型
     * @example "code"
     */
    grant_type: string;
    /**
     * 授权范围
     * @example "userinfo.read"
     */
    code?: string;
    /**
     * 重定向 URI
     * @example "https://www.iocoder.cn"
     */
    redirect_uri?: string;
    /**
     * 状态
     * @example 1
     */
    state?: string;
    /** @example "tudou" */
    username?: string;
    /** @example "cai" */
    password?: string;
    /** @example "user_info" */
    scope?: string;
    /** @example 123424233 */
    refresh_token?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultOAuth2OpenAccessTokenRespVO>({
    path: `/admin-api/system/oauth2/token`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 授权
 * @name deleteSystemOauth2Token
 * @summary 删除访问令牌
 * @request DELETE:/admin-api/system/oauth2/token
 * @secure
 */
export const deleteSystemOauth2Token = (
  query: {
    /**
     * 访问令牌
     * @example "biu"
     */
    token: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2/token`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 授权
 * @name postSystemOauth2CheckToken
 * @summary 校验访问令牌
 * @request POST:/admin-api/system/oauth2/check-token
 * @secure
 */
export const postSystemOauth2CheckToken = (
  query: {
    /**
     * 访问令牌
     * @example "biu"
     */
    token: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultOAuth2OpenCheckTokenRespVO>({
    path: `/admin-api/system/oauth2/check-token`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用
 *
 * @tags 管理后台 - OAuth2.0 授权
 * @name getSystemOauth2Authorize
 * @summary 获得授权信息
 * @request GET:/admin-api/system/oauth2/authorize
 * @secure
 */
export const getSystemOauth2Authorize = (
  query: {
    /**
     * 客户端编号
     * @example "tudou"
     */
    clientId: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultOAuth2OpenAuthorizeInfoRespVO>({
    path: `/admin-api/system/oauth2/authorize`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【提交】调用
 *
 * @tags 管理后台 - OAuth2.0 授权
 * @name postSystemOauth2Authorize
 * @summary 申请授权
 * @request POST:/admin-api/system/oauth2/authorize
 * @secure
 */
export const postSystemOauth2Authorize = (
  query: {
    /**
     * 响应类型
     * @example "code"
     */
    response_type: string;
    /**
     * 客户端编号
     * @example "tudou"
     */
    client_id: string;
    /**
     * 授权范围
     * @example "userinfo.read"
     */
    scope?: string;
    /**
     * 重定向 URI
     * @example "https://www.iocoder.cn"
     */
    redirect_uri: string;
    /**
     * 用户是否接受
     * @example true
     */
    auto_approve: boolean;
    /** @example 1 */
    state?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/system/oauth2/authorize`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name postSystemOauth2ClientCreate
 * @summary 创建 OAuth2 客户端
 * @request POST:/admin-api/system/oauth2-client/create
 * @secure
 */
export const postSystemOauth2ClientCreate = (
  data: OAuth2ClientSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/oauth2-client/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name postSystemNotifyTemplateSendNotify
 * @summary 发送站内信
 * @request POST:/admin-api/system/notify-template/send-notify
 * @secure
 */
export const postSystemNotifyTemplateSendNotify = (
  data: NotifyTemplateSendReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/notify-template/send-notify`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name postSystemNotifyTemplateCreate
 * @summary 创建站内信模版
 * @request POST:/admin-api/system/notify-template/create
 * @secure
 */
export const postSystemNotifyTemplateCreate = (
  data: NotifyTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/notify-template/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只发送给 websocket 连接在线的用户
 *
 * @tags 管理后台 - 通知公告
 * @name postSystemNoticePush
 * @summary 推送通知公告
 * @request POST:/admin-api/system/notice/push
 * @secure
 */
export const postSystemNoticePush = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notice/push`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name postSystemNoticeCreate
 * @summary 创建通知公告
 * @request POST:/admin-api/system/notice/create
 * @secure
 */
export const postSystemNoticeCreate = (
  data: NoticeSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/notice/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 菜单
 * @name postSystemMenuCreate
 * @summary 创建菜单
 * @request POST:/admin-api/system/menu/create
 * @secure
 */
export const postSystemMenuCreate = (
  data: MenuSaveVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/menu/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name postSystemMailTemplateSendMail
 * @summary 发送短信
 * @request POST:/admin-api/system/mail-template/send-mail
 * @secure
 */
export const postSystemMailTemplateSendMail = (
  data: MailTemplateSendReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/mail-template/send-mail`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name postSystemMailTemplateCreate
 * @summary 创建邮件模版
 * @request POST:/admin-api/system/mail-template/create
 * @secure
 */
export const postSystemMailTemplateCreate = (
  data: MailTemplateSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/mail-template/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name postSystemMailAccountCreate
 * @summary 创建邮箱账号
 * @request POST:/admin-api/system/mail-account/create
 * @secure
 */
export const postSystemMailAccountCreate = (
  data: MailAccountSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/mail-account/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name postSystemDictTypeCreate
 * @summary 创建字典类型
 * @request POST:/admin-api/system/dict-type/create
 * @secure
 */
export const postSystemDictTypeCreate = (
  data: DictTypeSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/dict-type/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name postSystemDictDataCreate
 * @summary 新增字典数据
 * @request POST:/admin-api/system/dict-data/create
 * @secure
 */
export const postSystemDictDataCreate = (
  data: DictDataSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/dict-data/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name postSystemDeptCreate
 * @summary 创建部门
 * @request POST:/admin-api/system/dept/create
 * @secure
 */
export const postSystemDeptCreate = (
  data: DeptSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/dept/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 验证码
 * @name postSystemCaptchaGet
 * @summary 获得验证码
 * @request POST:/admin-api/system/captcha/get
 * @secure
 */
export const postSystemCaptchaGet = (
  data: CaptchaVO,
  params: RequestParams = {},
) =>
  request<ResponseModel>({
    path: `/admin-api/system/captcha/get`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 验证码
 * @name postSystemCaptchaCheck
 * @summary 校验验证码
 * @request POST:/admin-api/system/captcha/check
 * @secure
 */
export const postSystemCaptchaCheck = (
  data: CaptchaVO,
  params: RequestParams = {},
) =>
  request<ResponseModel>({
    path: `/admin-api/system/captcha/check`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 适合未登录的用户，但是社交账号已绑定用户
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthSocialLogin
 * @summary 社交快捷登录，使用 code 授权码
 * @request POST:/admin-api/system/auth/social-login
 * @secure
 */
export const postSystemAuthSocialLogin = (
  data: AuthSocialLoginReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultAuthLoginRespVO>({
    path: `/admin-api/system/auth/social-login`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthSmsLogin
 * @summary 使用短信验证码登录
 * @request POST:/admin-api/system/auth/sms-login
 * @secure
 */
export const postSystemAuthSmsLogin = (
  data: AuthSmsLoginReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultAuthLoginRespVO>({
    path: `/admin-api/system/auth/sms-login`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthSendSmsCode
 * @summary 发送手机验证码
 * @request POST:/admin-api/system/auth/send-sms-code
 * @secure
 */
export const postSystemAuthSendSmsCode = (
  data: AuthSmsSendReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/auth/send-sms-code`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthResetPassword
 * @summary 重置密码
 * @request POST:/admin-api/system/auth/reset-password
 * @secure
 */
export const postSystemAuthResetPassword = (
  data: AuthResetPasswordReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/auth/reset-password`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthRegister
 * @summary 注册用户
 * @request POST:/admin-api/system/auth/register
 * @secure
 */
export const postSystemAuthRegister = (
  data: AuthRegisterReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultAuthLoginRespVO>({
    path: `/admin-api/system/auth/register`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthRefreshToken
 * @summary 刷新令牌
 * @request POST:/admin-api/system/auth/refresh-token
 * @secure
 */
export const postSystemAuthRefreshToken = (
  query: {
    /** 刷新令牌 */
    refreshToken: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultAuthLoginRespVO>({
    path: `/admin-api/system/auth/refresh-token`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthLogout
 * @summary 登出系统
 * @request POST:/admin-api/system/auth/logout
 * @secure
 */
export const postSystemAuthLogout = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/auth/logout`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name postSystemAuthLogin
 * @summary 使用账号密码登录
 * @request POST:/admin-api/system/auth/login
 * @secure
 */
export const postSystemAuthLogin = (
  data: AuthLoginReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultAuthLoginRespVO>({
    path: `/admin-api/system/auth/login`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name postInfraJobSync
 * @summary 同步定时任务
 * @request POST:/admin-api/infra/job/sync
 * @secure
 */
export const postInfraJobSync = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/sync`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name postInfraJobCreate
 * @summary 创建定时任务
 * @request POST:/admin-api/infra/job/create
 * @secure
 */
export const postInfraJobCreate = (
  data: JobSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/job/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 模式一：后端上传文件
 *
 * @tags 管理后台 - 文件存储
 * @name postInfraFileUpload
 * @summary 上传文件
 * @request POST:/admin-api/infra/file/upload
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
    path: `/admin-api/infra/file/upload`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件
 *
 * @tags 管理后台 - 文件存储
 * @name postInfraFileCreate
 * @summary 创建文件
 * @request POST:/admin-api/infra/file/create
 * @secure
 */
export const postInfraFileCreate = (
  data: FileCreateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/file/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name postInfraFileConfigCreate
 * @summary 创建文件配置
 * @request POST:/admin-api/infra/file-config/create
 * @secure
 */
export const postInfraFileConfigCreate = (
  data: FileConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/file-config/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name postInfraDemo03StudentNormalCreate
 * @summary 创建学生
 * @request POST:/admin-api/infra/demo03-student-normal/create
 * @secure
 */
export const postInfraDemo03StudentNormalCreate = (
  data: Demo03StudentNormalSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo03-student-normal/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name postInfraDemo03StudentInnerCreate
 * @summary 创建学生
 * @request POST:/admin-api/infra/demo03-student-inner/create
 * @secure
 */
export const postInfraDemo03StudentInnerCreate = (
  data: Demo03StudentInnerSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo03-student-inner/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name postDemo03StudentErpDemo03GradeCreate
 * @summary 创建学生班级
 * @request POST:/admin-api/infra/demo03-student-erp/demo03-grade/create
 * @secure
 */
export const postDemo03StudentErpDemo03GradeCreate = (
  data: Demo03GradeDO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name postDemo03StudentErpDemo03CourseCreate
 * @summary 创建学生课程
 * @request POST:/admin-api/infra/demo03-student-erp/demo03-course/create
 * @secure
 */
export const postDemo03StudentErpDemo03CourseCreate = (
  data: Demo03CourseDO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name postInfraDemo03StudentErpCreate
 * @summary 创建学生
 * @request POST:/admin-api/infra/demo03-student-erp/create
 * @secure
 */
export const postInfraDemo03StudentErpCreate = (
  data: Demo03StudentErpSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo03-student-erp/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name postInfraDemo02CategoryCreate
 * @summary 创建示例分类
 * @request POST:/admin-api/infra/demo02-category/create
 * @secure
 */
export const postInfraDemo02CategoryCreate = (
  data: Demo02CategorySaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo02-category/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name postInfraDemo01ContactCreate
 * @summary 创建示例联系人
 * @request POST:/admin-api/infra/demo01-contact/create
 * @secure
 */
export const postInfraDemo01ContactCreate = (
  data: Demo01ContactSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/demo01-contact/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name postInfraDataSourceConfigCreate
 * @summary 创建数据源配置
 * @request POST:/admin-api/infra/data-source-config/create
 * @secure
 */
export const postInfraDataSourceConfigCreate = (
  data: DataSourceConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/data-source-config/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name postInfraConfigCreate
 * @summary 创建参数配置
 * @request POST:/admin-api/infra/config/create
 * @secure
 */
export const postInfraConfigCreate = (
  data: ConfigSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/infra/config/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name postInfraCodegenCreateList
 * @summary 基于数据库的表结构，创建代码生成器的表和字段定义
 * @request POST:/admin-api/infra/codegen/create-list
 * @secure
 */
export const postInfraCodegenCreateList = (
  data: CodegenCreateListReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultListLong>({
    path: `/admin-api/infra/codegen/create-list`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户组
 * @name postBpmUserGroupCreate
 * @summary 创建用户组
 * @request POST:/admin-api/bpm/user-group/create
 * @secure
 */
export const postBpmUserGroupCreate = (
  data: BpmUserGroupSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/user-group/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程监听器
 * @name postBpmProcessListenerCreate
 * @summary 创建流程监听器
 * @request POST:/admin-api/bpm/process-listener/create
 * @secure
 */
export const postBpmProcessListenerCreate = (
  data: BpmProcessListenerSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/process-listener/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程实例
 * @name postBpmProcessInstanceCreate
 * @summary 新建流程实例
 * @request POST:/admin-api/bpm/process-instance/create
 * @secure
 */
export const postBpmProcessInstanceCreate = (
  data: BpmProcessInstanceCreateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/bpm/process-instance/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程表达式
 * @name postBpmProcessExpressionCreate
 * @summary 创建流程表达式
 * @request POST:/admin-api/bpm/process-expression/create
 * @secure
 */
export const postBpmProcessExpressionCreate = (
  data: BpmProcessExpressionSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/process-expression/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OA 请假申请
 * @name postOaLeaveCreate
 * @summary 创建请求申请
 * @request POST:/admin-api/bpm/oa/leave/create
 * @secure
 */
export const postOaLeaveCreate = (
  data: BpmOALeaveCreateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/oa/leave/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name postModelSimpleUpdate
 * @summary 保存仿钉钉流程设计模型
 * @request POST:/admin-api/bpm/model/simple/update
 * @deprecated
 * @secure
 */
export const postModelSimpleUpdate = (
  data: BpmSimpleModelUpdateReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/simple/update`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name postBpmModelDeploy
 * @summary 部署模型
 * @request POST:/admin-api/bpm/model/deploy
 * @secure
 */
export const postBpmModelDeploy = (
  query: {
    /**
     * 编号
     * @example 1024
     */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/deploy`,
    method: "POST",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name postBpmModelCreate
 * @summary 新建模型
 * @request POST:/admin-api/bpm/model/create
 * @secure
 */
export const postBpmModelCreate = (
  data: BpmModelSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/bpm/model/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 动态表单
 * @name postBpmFormCreate
 * @summary 创建动态表单
 * @request POST:/admin-api/bpm/form/create
 * @secure
 */
export const postBpmFormCreate = (
  data: BpmFormSaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/form/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name postBpmCategoryCreate
 * @summary 创建流程分类
 * @request POST:/admin-api/bpm/category/create
 * @secure
 */
export const postBpmCategoryCreate = (
  data: BpmCategorySaveReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/bpm/category/create`,
    method: "POST",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户个人中心
 * @name getUserProfileGet
 * @summary 获得登录用户信息
 * @request GET:/admin-api/system/user/profile/get
 * @secure
 */
export const getUserProfileGet = (params: RequestParams = {}) =>
  request<CommonResultUserProfileRespVO>({
    path: `/admin-api/system/user/profile/get`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserPage
 * @summary 获得用户分页列表
 * @request GET:/admin-api/system/user/page
 * @secure
 */
export const getSystemUserPage = (
  query: {
    /**
     * 用户账号，模糊匹配
     * @example "yudao"
     */
    username?: string;
    /**
     * 手机号码，模糊匹配
     * @example "yudao"
     */
    mobile?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 部门编号，同时筛选子部门
     * @format int64
     * @example 1024
     */
    deptId?: number;
    /**
     * 角色编号
     * @format int64
     * @example 1024
     */
    roleId?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultUserRespVO>({
    path: `/admin-api/system/user/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的用户，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserListAllSimple
 * @summary 获取用户精简信息列表
 * @request GET:/admin-api/system/user/list-all-simple
 * @secure
 */
export const getSystemUserListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListUserSimpleRespVO>({
    path: `/admin-api/system/user/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的用户，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserSimpleList
 * @summary 获取用户精简信息列表
 * @request GET:/admin-api/system/user/simple-list
 * @secure
 */
export const getSystemUserSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListUserSimpleRespVO>({
    path: `/admin-api/system/user/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserGet
 * @summary 获得用户详情
 * @request GET:/admin-api/system/user/get
 * @secure
 */
export const getSystemUserGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultUserRespVO>({
    path: `/admin-api/system/user/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserGetImportTemplate
 * @summary 获得导入用户模板
 * @request GET:/admin-api/system/user/get-import-template
 * @secure
 */
export const getSystemUserGetImportTemplate = (params: RequestParams = {}) =>
  request<void>({
    path: `/admin-api/system/user/get-import-template`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name getSystemUserExportExcel
 * @summary 导出用户
 * @request GET:/admin-api/system/user/export-excel
 * @secure
 */
export const getSystemUserExportExcel = (
  query: {
    /**
     * 用户账号，模糊匹配
     * @example "yudao"
     */
    username?: string;
    /**
     * 手机号码，模糊匹配
     * @example "yudao"
     */
    mobile?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 部门编号，同时筛选子部门
     * @format int64
     * @example 1024
     */
    deptId?: number;
    /**
     * 角色编号
     * @format int64
     * @example 1024
     */
    roleId?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/user/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的租户，用于【首页】功能的选择租户选项
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantSimpleList
 * @summary 获取租户精简信息列表
 * @request GET:/admin-api/system/tenant/simple-list
 * @secure
 */
export const getSystemTenantSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListTenantRespVO>({
    path: `/admin-api/system/tenant/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantPage
 * @summary 获得租户分页
 * @request GET:/admin-api/system/tenant/page
 * @secure
 */
export const getSystemTenantPage = (
  query: {
    /**
     * 租户名
     * @example "芋道"
     */
    name?: string;
    /**
     * 联系人
     * @example "芋艿"
     */
    contactName?: string;
    /**
     * 联系手机
     * @example 15601691300
     */
    contactMobile?: string;
    /**
     * 租户状态（0正常 1停用）
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultTenantRespVO>({
    path: `/admin-api/system/tenant/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantGet
 * @summary 获得租户
 * @request GET:/admin-api/system/tenant/get
 * @secure
 */
export const getSystemTenantGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultTenantRespVO>({
    path: `/admin-api/system/tenant/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 登录界面，根据用户的租户名，获得租户编号
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantGetIdByName
 * @summary 使用租户名，获得租户编号
 * @request GET:/admin-api/system/tenant/get-id-by-name
 * @secure
 */
export const getSystemTenantGetIdByName = (
  query: {
    /**
     * 租户名
     * @example 1024
     */
    name: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/tenant/get-id-by-name`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 登录界面，根据用户的域名，获得租户信息
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantGetByWebsite
 * @summary 使用域名，获得租户信息
 * @request GET:/admin-api/system/tenant/get-by-website
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
  request<CommonResultTenantRespVO>({
    path: `/admin-api/system/tenant/get-by-website`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name getSystemTenantExportExcel
 * @summary 导出租户 Excel
 * @request GET:/admin-api/system/tenant/export-excel
 * @secure
 */
export const getSystemTenantExportExcel = (
  query: {
    /**
     * 租户名
     * @example "芋道"
     */
    name?: string;
    /**
     * 联系人
     * @example "芋艿"
     */
    contactName?: string;
    /**
     * 联系手机
     * @example 15601691300
     */
    contactMobile?: string;
    /**
     * 租户状态（0正常 1停用）
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/tenant/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name getSystemTenantPackagePage
 * @summary 获得租户套餐分页
 * @request GET:/admin-api/system/tenant-package/page
 * @secure
 */
export const getSystemTenantPackagePage = (
  query: {
    /**
     * 套餐名
     * @example "VIP"
     */
    name?: string;
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 备注
     * @example "好"
     */
    remark?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultTenantPackageRespVO>({
    path: `/admin-api/system/tenant-package/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name getSystemTenantPackageGet
 * @summary 获得租户套餐
 * @request GET:/admin-api/system/tenant-package/get
 * @secure
 */
export const getSystemTenantPackageGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultTenantPackageRespVO>({
    path: `/admin-api/system/tenant-package/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的租户套餐，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 租户套餐
 * @name getSystemTenantPackageGetSimpleList
 * @summary 获取租户套餐精简信息列表
 * @request GET:/admin-api/system/tenant-package/get-simple-list
 * @secure
 */
export const getSystemTenantPackageGetSimpleList = (
  params: RequestParams = {},
) =>
  request<CommonResultListTenantPackageSimpleRespVO>({
    path: `/admin-api/system/tenant-package/get-simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的租户套餐，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 租户套餐
 * @name getSystemTenantPackageSimpleList
 * @summary 获取租户套餐精简信息列表
 * @request GET:/admin-api/system/tenant-package/simple-list
 * @secure
 */
export const getSystemTenantPackageSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListTenantPackageSimpleRespVO>({
    path: `/admin-api/system/tenant-package/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交用户
 * @name getSystemSocialUserPage
 * @summary 获得社交用户分页
 * @request GET:/admin-api/system/social-user/page
 * @secure
 */
export const getSystemSocialUserPage = (
  query: {
    /**
     * 社交平台的类型
     * @format int32
     * @example 30
     */
    type?: number;
    /**
     * 用户昵称
     * @example "李四"
     */
    nickname?: string;
    /**
     * 社交 openid
     * @example "oz-Jdt0kd_jdhUxJHQdBJMlOFN7w"
     */
    openid?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultSocialUserRespVO>({
    path: `/admin-api/system/social-user/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交用户
 * @name getSystemSocialUserGet
 * @summary 获得社交用户
 * @request GET:/admin-api/system/social-user/get
 * @secure
 */
export const getSystemSocialUserGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSocialUserRespVO>({
    path: `/admin-api/system/social-user/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交用户
 * @name getSystemSocialUserGetBindList
 * @summary 获得绑定社交用户列表
 * @request GET:/admin-api/system/social-user/get-bind-list
 * @secure
 */
export const getSystemSocialUserGetBindList = (params: RequestParams = {}) =>
  request<CommonResultListSocialUserRespVO>({
    path: `/admin-api/system/social-user/get-bind-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name getSystemSocialClientPage
 * @summary 获得社交客户端分页
 * @request GET:/admin-api/system/social-client/page
 * @secure
 */
export const getSystemSocialClientPage = (
  query: {
    /**
     * 应用名
     * @example "yudao商城"
     */
    name?: string;
    /**
     * 社交平台的类型
     * @format int32
     * @example 31
     */
    socialType?: number;
    /**
     * 用户类型
     * @format int32
     * @example 2
     */
    userType?: number;
    /**
     * 客户端编号
     * @example 145442115
     */
    clientId?: string;
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultSocialClientRespVO>({
    path: `/admin-api/system/social-client/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name getSystemSocialClientGet
 * @summary 获得社交客户端
 * @request GET:/admin-api/system/social-client/get
 * @secure
 */
export const getSystemSocialClientGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSocialClientRespVO>({
    path: `/admin-api/system/social-client/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name getSystemSmsTemplatePage
 * @summary 获得短信模板分页
 * @request GET:/admin-api/system/sms-template/page
 * @secure
 */
export const getSystemSmsTemplatePage = (
  query: {
    /**
     * 短信签名
     * @format int32
     * @example 1
     */
    type?: number;
    /**
     * 开启状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 模板编码，模糊匹配
     * @example "test_01"
     */
    code?: string;
    /**
     * 模板内容，模糊匹配
     * @example "你好，{name}。你长的太{like}啦！"
     */
    content?: string;
    /**
     * 短信 API 的模板编号，模糊匹配
     * @example 4383920
     */
    apiTemplateId?: string;
    /**
     * 短信渠道编号
     * @format int64
     * @example 10
     */
    channelId?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultSmsTemplateRespVO>({
    path: `/admin-api/system/sms-template/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name getSystemSmsTemplateGet
 * @summary 获得短信模板
 * @request GET:/admin-api/system/sms-template/get
 * @secure
 */
export const getSystemSmsTemplateGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSmsTemplateRespVO>({
    path: `/admin-api/system/sms-template/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name getSystemSmsTemplateExportExcel
 * @summary 导出短信模板 Excel
 * @request GET:/admin-api/system/sms-template/export-excel
 * @secure
 */
export const getSystemSmsTemplateExportExcel = (
  query: {
    /**
     * 短信签名
     * @format int32
     * @example 1
     */
    type?: number;
    /**
     * 开启状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 模板编码，模糊匹配
     * @example "test_01"
     */
    code?: string;
    /**
     * 模板内容，模糊匹配
     * @example "你好，{name}。你长的太{like}啦！"
     */
    content?: string;
    /**
     * 短信 API 的模板编号，模糊匹配
     * @example 4383920
     */
    apiTemplateId?: string;
    /**
     * 短信渠道编号
     * @format int64
     * @example 10
     */
    channelId?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/sms-template/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信日志
 * @name getSystemSmsLogPage
 * @summary 获得短信日志分页
 * @request GET:/admin-api/system/sms-log/page
 * @secure
 */
export const getSystemSmsLogPage = (
  query: {
    /**
     * 短信渠道编号
     * @format int64
     * @example 10
     */
    channelId?: number;
    /**
     * 模板编号
     * @format int64
     * @example 20
     */
    templateId?: number;
    /**
     * 手机号
     * @example 15601691300
     */
    mobile?: string;
    /**
     * 发送状态，参见 SmsSendStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    sendStatus?: number;
    /** 发送时间 */
    sendTime?: string[];
    /**
     * 接收状态，参见 SmsReceiveStatusEnum 枚举类
     * @format int32
     * @example 0
     */
    receiveStatus?: number;
    /** 接收时间 */
    receiveTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultSmsLogRespVO>({
    path: `/admin-api/system/sms-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信日志
 * @name getSystemSmsLogExportExcel
 * @summary 导出短信日志 Excel
 * @request GET:/admin-api/system/sms-log/export-excel
 * @secure
 */
export const getSystemSmsLogExportExcel = (
  query: {
    /**
     * 短信渠道编号
     * @format int64
     * @example 10
     */
    channelId?: number;
    /**
     * 模板编号
     * @format int64
     * @example 20
     */
    templateId?: number;
    /**
     * 手机号
     * @example 15601691300
     */
    mobile?: string;
    /**
     * 发送状态，参见 SmsSendStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    sendStatus?: number;
    /** 发送时间 */
    sendTime?: string[];
    /**
     * 接收状态，参见 SmsReceiveStatusEnum 枚举类
     * @format int32
     * @example 0
     */
    receiveStatus?: number;
    /** 接收时间 */
    receiveTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/sms-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name getSystemSmsChannelPage
 * @summary 获得短信渠道分页
 * @request GET:/admin-api/system/sms-channel/page
 * @secure
 */
export const getSystemSmsChannelPage = (
  query: {
    /**
     * 任务状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 短信签名，模糊匹配
     * @example "芋道源码"
     */
    signature?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultSmsChannelRespVO>({
    path: `/admin-api/system/sms-channel/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 包含被禁用的短信渠道
 *
 * @tags 管理后台 - 短信渠道
 * @name getSystemSmsChannelSimpleList
 * @summary 获得短信渠道精简列表
 * @request GET:/admin-api/system/sms-channel/simple-list
 * @secure
 */
export const getSystemSmsChannelSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListSmsChannelSimpleRespVO>({
    path: `/admin-api/system/sms-channel/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 包含被禁用的短信渠道
 *
 * @tags 管理后台 - 短信渠道
 * @name getSystemSmsChannelListAllSimple
 * @summary 获得短信渠道精简列表
 * @request GET:/admin-api/system/sms-channel/list-all-simple
 * @secure
 */
export const getSystemSmsChannelListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListSmsChannelSimpleRespVO>({
    path: `/admin-api/system/sms-channel/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name getSystemSmsChannelGet
 * @summary 获得短信渠道
 * @request GET:/admin-api/system/sms-channel/get
 * @secure
 */
export const getSystemSmsChannelGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSmsChannelRespVO>({
    path: `/admin-api/system/sms-channel/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name getSystemRolePage
 * @summary 获得角色分页
 * @request GET:/admin-api/system/role/page
 * @secure
 */
export const getSystemRolePage = (
  query: {
    /**
     * 角色名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 角色标识，模糊匹配
     * @example "yudao"
     */
    code?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultRoleRespVO>({
    path: `/admin-api/system/role/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的角色，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 角色
 * @name getSystemRoleListAllSimple
 * @summary 获取角色精简信息列表
 * @request GET:/admin-api/system/role/list-all-simple
 * @secure
 */
export const getSystemRoleListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListRoleRespVO>({
    path: `/admin-api/system/role/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的角色，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 角色
 * @name getSystemRoleSimpleList
 * @summary 获取角色精简信息列表
 * @request GET:/admin-api/system/role/simple-list
 * @secure
 */
export const getSystemRoleSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListRoleRespVO>({
    path: `/admin-api/system/role/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name getSystemRoleGet
 * @summary 获得角色信息
 * @request GET:/admin-api/system/role/get
 * @secure
 */
export const getSystemRoleGet = (
  query: {
    /** @format int64 */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultRoleRespVO>({
    path: `/admin-api/system/role/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name getSystemRoleExportExcel
 * @summary 导出角色 Excel
 * @request GET:/admin-api/system/role/export-excel
 * @secure
 */
export const getSystemRoleExportExcel = (
  query: {
    /**
     * 角色名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 角色标识，模糊匹配
     * @example "yudao"
     */
    code?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/role/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name getSystemPostPage
 * @summary 获得岗位分页列表
 * @request GET:/admin-api/system/post/page
 * @secure
 */
export const getSystemPostPage = (
  query: {
    /**
     * 岗位编码，模糊匹配
     * @example "yudao"
     */
    code?: string;
    /**
     * 岗位名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultPostRespVO>({
    path: `/admin-api/system/post/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的岗位，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 岗位
 * @name getSystemPostListAllSimple
 * @summary 获取岗位全列表
 * @request GET:/admin-api/system/post/list-all-simple
 * @secure
 */
export const getSystemPostListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListPostSimpleRespVO>({
    path: `/admin-api/system/post/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的岗位，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 岗位
 * @name getSystemPostSimpleList
 * @summary 获取岗位全列表
 * @request GET:/admin-api/system/post/simple-list
 * @secure
 */
export const getSystemPostSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListPostSimpleRespVO>({
    path: `/admin-api/system/post/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name getSystemPostGet
 * @summary 获得岗位信息
 * @request GET:/admin-api/system/post/get
 * @secure
 */
export const getSystemPostGet = (
  query: {
    /**
     * 岗位编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPostRespVO>({
    path: `/admin-api/system/post/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name getSystemPostExportExcel
 * @summary 岗位管理
 * @request GET:/admin-api/system/post/export-excel
 * @secure
 */
export const getSystemPostExportExcel = (
  query: {
    /**
     * 岗位编码，模糊匹配
     * @example "yudao"
     */
    code?: string;
    /**
     * 岗位名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/post/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 权限
 * @name getSystemPermissionListUserRoles
 * @summary 获得管理员拥有的角色编号列表
 * @request GET:/admin-api/system/permission/list-user-roles
 * @secure
 */
export const getSystemPermissionListUserRoles = (
  query: {
    /**
     * 用户编号
     * @format int64
     */
    userId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSetLong>({
    path: `/admin-api/system/permission/list-user-roles`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 权限
 * @name getSystemPermissionListRoleMenus
 * @summary 获得角色拥有的菜单编号
 * @request GET:/admin-api/system/permission/list-role-menus
 * @secure
 */
export const getSystemPermissionListRoleMenus = (
  query: {
    /**
     * 角色编号
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultSetLong>({
    path: `/admin-api/system/permission/list-role-menus`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 操作日志
 * @name getSystemOperateLogPage
 * @summary 查看操作日志分页列表
 * @request GET:/admin-api/system/operate-log/page
 * @secure
 */
export const getSystemOperateLogPage = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example "芋道"
     */
    userId?: number;
    /**
     * 操作模块业务编号
     * @format int64
     * @example 1
     */
    bizId?: number;
    /**
     * 操作模块，模拟匹配
     * @example "订单"
     */
    type?: string;
    /**
     * 操作名，模拟匹配
     * @example "创建订单"
     */
    subType?: string;
    /**
     * 操作明细，模拟匹配
     * @example "修改编号为 1 的用户信息"
     */
    action?: string;
    /**
     * 开始时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultOperateLogRespVO>({
    path: `/admin-api/system/operate-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 操作日志
 * @name getSystemOperateLogExportExcel
 * @summary 导出操作日志
 * @request GET:/admin-api/system/operate-log/export-excel
 * @secure
 */
export const getSystemOperateLogExportExcel = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example "芋道"
     */
    userId?: number;
    /**
     * 操作模块业务编号
     * @format int64
     * @example 1
     */
    bizId?: number;
    /**
     * 操作模块，模拟匹配
     * @example "订单"
     */
    type?: string;
    /**
     * 操作名，模拟匹配
     * @example "创建订单"
     */
    subType?: string;
    /**
     * 操作明细，模拟匹配
     * @example "修改编号为 1 的用户信息"
     */
    action?: string;
    /**
     * 开始时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/operate-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 用户
 * @name getOauth2UserGet
 * @summary 获得用户基本信息
 * @request GET:/admin-api/system/oauth2/user/get
 * @secure
 */
export const getOauth2UserGet = (params: RequestParams = {}) =>
  request<CommonResultOAuth2UserInfoRespVO>({
    path: `/admin-api/system/oauth2/user/get`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只返回有效期内的
 *
 * @tags 管理后台 - OAuth2.0 令牌
 * @name getSystemOauth2TokenPage
 * @summary 获得访问令牌分页
 * @request GET:/admin-api/system/oauth2-token/page
 * @secure
 */
export const getSystemOauth2TokenPage = (
  query: {
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
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultOAuth2AccessTokenRespVO>({
    path: `/admin-api/system/oauth2-token/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name getSystemOauth2ClientPage
 * @summary 获得 OAuth2 客户端分页
 * @request GET:/admin-api/system/oauth2-client/page
 * @secure
 */
export const getSystemOauth2ClientPage = (
  query: {
    /**
     * 应用名，模糊匹配
     * @example "土豆"
     */
    name?: string;
    /**
     * 状态，参见 CommonStatusEnum 枚举
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultOAuth2ClientRespVO>({
    path: `/admin-api/system/oauth2-client/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name getSystemOauth2ClientGet
 * @summary 获得 OAuth2 客户端
 * @request GET:/admin-api/system/oauth2-client/get
 * @secure
 */
export const getSystemOauth2ClientGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultOAuth2ClientRespVO>({
    path: `/admin-api/system/oauth2-client/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name getSystemNotifyTemplatePage
 * @summary 获得站内信模版分页
 * @request GET:/admin-api/system/notify-template/page
 * @secure
 */
export const getSystemNotifyTemplatePage = (
  query: {
    /**
     * 模版编码
     * @example "test_01"
     */
    code?: string;
    /**
     * 模版名称
     * @example "我是名称"
     */
    name?: string;
    /**
     * 状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultNotifyTemplateRespVO>({
    path: `/admin-api/system/notify-template/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name getSystemNotifyTemplateGet
 * @summary 获得站内信模版
 * @request GET:/admin-api/system/notify-template/get
 * @secure
 */
export const getSystemNotifyTemplateGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultNotifyTemplateRespVO>({
    path: `/admin-api/system/notify-template/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name getSystemNotifyMessagePage
 * @summary 获得站内信分页
 * @request GET:/admin-api/system/notify-message/page
 * @secure
 */
export const getSystemNotifyMessagePage = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 25025
     */
    userId?: number;
    /**
     * 用户类型
     * @format int32
     * @example 1
     */
    userType?: number;
    /**
     * 模板编码
     * @example "test_01"
     */
    templateCode?: string;
    /**
     * 模版类型
     * @format int32
     * @example 2
     */
    templateType?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultNotifyMessageRespVO>({
    path: `/admin-api/system/notify-message/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name getSystemNotifyMessageMyPage
 * @summary 获得我的站内信分页
 * @request GET:/admin-api/system/notify-message/my-page
 * @secure
 */
export const getSystemNotifyMessageMyPage = (
  query: {
    /**
     * 是否已读
     * @example true
     */
    readStatus?: boolean;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultNotifyMessageRespVO>({
    path: `/admin-api/system/notify-message/my-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name getSystemNotifyMessageGet
 * @summary 获得站内信
 * @request GET:/admin-api/system/notify-message/get
 * @secure
 */
export const getSystemNotifyMessageGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultNotifyMessageRespVO>({
    path: `/admin-api/system/notify-message/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name getSystemNotifyMessageGetUnreadList
 * @summary 获取当前用户的最新站内信列表，默认 10 条
 * @request GET:/admin-api/system/notify-message/get-unread-list
 * @secure
 */
export const getSystemNotifyMessageGetUnreadList = (
  query?: {
    /**
     * 10
     * @format int32
     * @default 10
     */
    size?: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListNotifyMessageRespVO>({
    path: `/admin-api/system/notify-message/get-unread-list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 我的站内信
 * @name getSystemNotifyMessageGetUnreadCount
 * @summary 获得当前用户的未读站内信数量
 * @request GET:/admin-api/system/notify-message/get-unread-count
 * @secure
 */
export const getSystemNotifyMessageGetUnreadCount = (
  params: RequestParams = {},
) =>
  request<CommonResultLong>({
    path: `/admin-api/system/notify-message/get-unread-count`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name getSystemNoticePage
 * @summary 获取通知公告列表
 * @request GET:/admin-api/system/notice/page
 * @secure
 */
export const getSystemNoticePage = (
  query: {
    /**
     * 通知公告名称，模糊匹配
     * @example "芋道"
     */
    title?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultNoticeRespVO>({
    path: `/admin-api/system/notice/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name getSystemNoticeGet
 * @summary 获得通知公告
 * @request GET:/admin-api/system/notice/get
 * @secure
 */
export const getSystemNoticeGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultNoticeRespVO>({
    path: `/admin-api/system/notice/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【菜单管理】界面
 *
 * @tags 管理后台 - 菜单
 * @name getSystemMenuList
 * @summary 获取菜单列表
 * @request GET:/admin-api/system/menu/list
 * @secure
 */
export const getSystemMenuList = (
  query?: {
    /**
     * 菜单名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListMenuRespVO>({
    path: `/admin-api/system/menu/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单
 *
 * @tags 管理后台 - 菜单
 * @name getSystemMenuListAllSimple
 * @summary 获取菜单精简信息列表
 * @request GET:/admin-api/system/menu/list-all-simple
 * @secure
 */
export const getSystemMenuListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListMenuSimpleRespVO>({
    path: `/admin-api/system/menu/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单
 *
 * @tags 管理后台 - 菜单
 * @name getSystemMenuSimpleList
 * @summary 获取菜单精简信息列表
 * @request GET:/admin-api/system/menu/simple-list
 * @secure
 */
export const getSystemMenuSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListMenuSimpleRespVO>({
    path: `/admin-api/system/menu/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 菜单
 * @name getSystemMenuGet
 * @summary 获取菜单信息
 * @request GET:/admin-api/system/menu/get
 * @secure
 */
export const getSystemMenuGet = (
  query: {
    /** @format int64 */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultMenuRespVO>({
    path: `/admin-api/system/menu/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name getSystemMailTemplatePage
 * @summary 获得邮件模版分页
 * @request GET:/admin-api/system/mail-template/page
 * @secure
 */
export const getSystemMailTemplatePage = (
  query: {
    /**
     * 状态，参见 CommonStatusEnum 枚举
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 标识，模糊匹配
     * @example "code_1024"
     */
    code?: string;
    /**
     * 名称，模糊匹配
     * @example "芋头"
     */
    name?: string;
    /**
     * 账号编号
     * @format int64
     * @example 2048
     */
    accountId?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultMailTemplateRespVO>({
    path: `/admin-api/system/mail-template/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name getSystemMailTemplateListAllSimple
 * @summary 获得邮件模版精简列表
 * @request GET:/admin-api/system/mail-template/list-all-simple
 * @secure
 */
export const getSystemMailTemplateListAllSimple = (
  params: RequestParams = {},
) =>
  request<CommonResultListMailTemplateSimpleRespVO>({
    path: `/admin-api/system/mail-template/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name getSystemMailTemplateSimpleList
 * @summary 获得邮件模版精简列表
 * @request GET:/admin-api/system/mail-template/simple-list
 * @secure
 */
export const getSystemMailTemplateSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListMailTemplateSimpleRespVO>({
    path: `/admin-api/system/mail-template/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name getSystemMailTemplateGet
 * @summary 获得邮件模版
 * @request GET:/admin-api/system/mail-template/get
 * @secure
 */
export const getSystemMailTemplateGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultMailTemplateRespVO>({
    path: `/admin-api/system/mail-template/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件日志
 * @name getSystemMailLogPage
 * @summary 获得邮箱日志分页
 * @request GET:/admin-api/system/mail-log/page
 * @secure
 */
export const getSystemMailLogPage = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 30883
     */
    userId?: number;
    /**
     * 用户类型，参见 UserTypeEnum 枚举
     * @format int32
     * @example 2
     */
    userType?: number;
    /**
     * 接收邮箱地址，模糊匹配
     * @example "76854@qq.com"
     */
    toMail?: string;
    /**
     * 邮箱账号编号
     * @format int64
     * @example 18107
     */
    accountId?: number;
    /**
     * 模板编号
     * @format int64
     * @example 5678
     */
    templateId?: number;
    /**
     * 发送状态，参见 MailSendStatusEnum 枚举
     * @format int32
     * @example 1
     */
    sendStatus?: number;
    /** 发送时间 */
    sendTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultMailLogRespVO>({
    path: `/admin-api/system/mail-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件日志
 * @name getSystemMailLogGet
 * @summary 获得邮箱日志
 * @request GET:/admin-api/system/mail-log/get
 * @secure
 */
export const getSystemMailLogGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultMailLogRespVO>({
    path: `/admin-api/system/mail-log/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name getSystemMailAccountPage
 * @summary 获得邮箱账号分页
 * @request GET:/admin-api/system/mail-account/page
 * @secure
 */
export const getSystemMailAccountPage = (
  query: {
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
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultMailAccountRespVO>({
    path: `/admin-api/system/mail-account/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name getSystemMailAccountListAllSimple
 * @summary 获得邮箱账号精简列表
 * @request GET:/admin-api/system/mail-account/list-all-simple
 * @secure
 */
export const getSystemMailAccountListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListMailAccountSimpleRespVO>({
    path: `/admin-api/system/mail-account/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name getSystemMailAccountSimpleList
 * @summary 获得邮箱账号精简列表
 * @request GET:/admin-api/system/mail-account/simple-list
 * @secure
 */
export const getSystemMailAccountSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListMailAccountSimpleRespVO>({
    path: `/admin-api/system/mail-account/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name getSystemMailAccountGet
 * @summary 获得邮箱账号
 * @request GET:/admin-api/system/mail-account/get
 * @secure
 */
export const getSystemMailAccountGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultMailAccountRespVO>({
    path: `/admin-api/system/mail-account/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 登录日志
 * @name getSystemLoginLogPage
 * @summary 获得登录日志分页列表
 * @request GET:/admin-api/system/login-log/page
 * @secure
 */
export const getSystemLoginLogPage = (
  query: {
    /**
     * 用户 IP，模拟匹配
     * @example "127.0.0.1"
     */
    userIp?: string;
    /**
     * 用户账号，模拟匹配
     * @example "芋道"
     */
    username?: string;
    /**
     * 操作状态
     * @example true
     */
    status?: boolean;
    /**
     * 登录时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultLoginLogRespVO>({
    path: `/admin-api/system/login-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 登录日志
 * @name getSystemLoginLogExportExcel
 * @summary 导出登录日志 Excel
 * @request GET:/admin-api/system/login-log/export-excel
 * @secure
 */
export const getSystemLoginLogExportExcel = (
  query: {
    /**
     * 用户 IP，模拟匹配
     * @example "127.0.0.1"
     */
    userIp?: string;
    /**
     * 用户账号，模拟匹配
     * @example "芋道"
     */
    username?: string;
    /**
     * 操作状态
     * @example true
     */
    status?: boolean;
    /**
     * 登录时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/login-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name getSystemDictTypePage
 * @summary 获得字典类型的分页列表
 * @request GET:/admin-api/system/dict-type/page
 * @secure
 */
export const getSystemDictTypePage = (
  query: {
    /**
     * 字典类型名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 字典类型，模糊匹配
     * @minLength 0
     * @maxLength 100
     * @example "sys_common_sex"
     */
    type?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDictTypeRespVO>({
    path: `/admin-api/system/dict-type/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 包括开启 + 禁用的字典类型，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 字典类型
 * @name getSystemDictTypeListAllSimple
 * @summary 获得全部字典类型列表
 * @request GET:/admin-api/system/dict-type/list-all-simple
 * @secure
 */
export const getSystemDictTypeListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListDictTypeSimpleRespVO>({
    path: `/admin-api/system/dict-type/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 包括开启 + 禁用的字典类型，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 字典类型
 * @name getSystemDictTypeSimpleList
 * @summary 获得全部字典类型列表
 * @request GET:/admin-api/system/dict-type/simple-list
 * @secure
 */
export const getSystemDictTypeSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListDictTypeSimpleRespVO>({
    path: `/admin-api/system/dict-type/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name getSystemDictTypeGet
 * @summary /查询字典类型详细
 * @request GET:/admin-api/system/dict-type/get
 * @secure
 */
export const getSystemDictTypeGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDictTypeRespVO>({
    path: `/admin-api/system/dict-type/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name getSystemDictTypeExportExcel
 * @summary 导出数据类型
 * @request GET:/admin-api/system/dict-type/export-excel
 * @secure
 */
export const getSystemDictTypeExportExcel = (
  query: {
    /**
     * 字典类型名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 字典类型，模糊匹配
     * @minLength 0
     * @maxLength 100
     * @example "sys_common_sex"
     */
    type?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/dict-type/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name getSystemDictDataPage
 * @summary 获得字典类型的分页
 * @request GET:/admin-api/system/dict-data/page
 * @secure
 */
export const getSystemDictDataPage = (
  query: {
    /**
     * 字典标签
     * @minLength 0
     * @maxLength 100
     * @example "芋道"
     */
    label?: string;
    /**
     * 字典类型，模糊匹配
     * @minLength 0
     * @maxLength 100
     * @example "sys_common_sex"
     */
    dictType?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDictDataRespVO>({
    path: `/admin-api/system/dict-data/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 一般用于管理后台缓存字典数据在本地
 *
 * @tags 管理后台 - 字典数据
 * @name getSystemDictDataListAllSimple
 * @summary 获得全部字典数据列表
 * @request GET:/admin-api/system/dict-data/list-all-simple
 * @secure
 */
export const getSystemDictDataListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListDictDataSimpleRespVO>({
    path: `/admin-api/system/dict-data/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 一般用于管理后台缓存字典数据在本地
 *
 * @tags 管理后台 - 字典数据
 * @name getSystemDictDataSimpleList
 * @summary 获得全部字典数据列表
 * @request GET:/admin-api/system/dict-data/simple-list
 * @secure
 */
export const getSystemDictDataSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListDictDataSimpleRespVO>({
    path: `/admin-api/system/dict-data/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name getSystemDictDataGet
 * @summary /查询字典数据详细
 * @request GET:/admin-api/system/dict-data/get
 * @secure
 */
export const getSystemDictDataGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDictDataRespVO>({
    path: `/admin-api/system/dict-data/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name getSystemDictDataExportExcel
 * @summary 导出字典数据
 * @request GET:/admin-api/system/dict-data/export-excel
 * @secure
 */
export const getSystemDictDataExportExcel = (
  query: {
    /**
     * 字典标签
     * @minLength 0
     * @maxLength 100
     * @example "芋道"
     */
    label?: string;
    /**
     * 字典类型，模糊匹配
     * @minLength 0
     * @maxLength 100
     * @example "sys_common_sex"
     */
    dictType?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/system/dict-data/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name getSystemDeptList
 * @summary 获取部门列表
 * @request GET:/admin-api/system/dept/list
 * @secure
 */
export const getSystemDeptList = (
  query?: {
    /**
     * 部门名称，模糊匹配
     * @example "芋道"
     */
    name?: string;
    /**
     * 展示状态，参见 CommonStatusEnum 枚举类
     * @format int32
     * @example 1
     */
    status?: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListDeptRespVO>({
    path: `/admin-api/system/dept/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的部门，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 部门
 * @name getSystemDeptListAllSimple
 * @summary 获取部门精简信息列表
 * @request GET:/admin-api/system/dept/list-all-simple
 * @secure
 */
export const getSystemDeptListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListDeptSimpleRespVO>({
    path: `/admin-api/system/dept/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的部门，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 部门
 * @name getSystemDeptSimpleList
 * @summary 获取部门精简信息列表
 * @request GET:/admin-api/system/dept/simple-list
 * @secure
 */
export const getSystemDeptSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListDeptSimpleRespVO>({
    path: `/admin-api/system/dept/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name getSystemDeptGet
 * @summary 获得部门信息
 * @request GET:/admin-api/system/dept/get
 * @secure
 */
export const getSystemDeptGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDeptRespVO>({
    path: `/admin-api/system/dept/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name getSystemAuthSocialAuthRedirect
 * @summary 社交授权的跳转
 * @request GET:/admin-api/system/auth/social-auth-redirect
 * @secure
 */
export const getSystemAuthSocialAuthRedirect = (
  query: {
    /**
     * 社交类型
     * @format int32
     */
    type: number;
    /** 回调路径 */
    redirectUri: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/system/auth/social-auth-redirect`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 认证
 * @name getSystemAuthGetPermissionInfo
 * @summary 获取登录用户的权限信息
 * @request GET:/admin-api/system/auth/get-permission-info
 * @secure
 */
export const getSystemAuthGetPermissionInfo = (params: RequestParams = {}) =>
  request<CommonResultAuthPermissionInfoRespVO>({
    path: `/admin-api/system/auth/get-permission-info`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 地区
 * @name getSystemAreaTree
 * @summary 获得地区树
 * @request GET:/admin-api/system/area/tree
 * @secure
 */
export const getSystemAreaTree = (params: RequestParams = {}) =>
  request<CommonResultListAreaNodeRespVO>({
    path: `/admin-api/system/area/tree`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 地区
 * @name getSystemAreaGetByIp
 * @summary 获得 IP 对应的地区名
 * @request GET:/admin-api/system/area/get-by-ip
 * @secure
 */
export const getSystemAreaGetByIp = (
  query: {
    /** IP */
    ip: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/system/area/get-by-ip`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - Redis 监控
 * @name getInfraRedisGetMonitorInfo
 * @summary 获得 Redis 监控信息
 * @request GET:/admin-api/infra/redis/get-monitor-info
 * @secure
 */
export const getInfraRedisGetMonitorInfo = (params: RequestParams = {}) =>
  request<CommonResultRedisMonitorRespVO>({
    path: `/admin-api/infra/redis/get-monitor-info`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name getInfraJobPage
 * @summary 获得定时任务分页
 * @request GET:/admin-api/infra/job/page
 * @secure
 */
export const getInfraJobPage = (
  query: {
    /**
     * 任务名称，模糊匹配
     * @example "测试任务"
     */
    name?: string;
    /**
     * 任务状态，参见 JobStatusEnum 枚举
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 处理器的名字，模糊匹配
     * @example "sysUserSessionTimeoutJob"
     */
    handlerName?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultJobRespVO>({
    path: `/admin-api/infra/job/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name getInfraJobGetNextTimes
 * @summary 获得定时任务的下 n 次执行时间
 * @request GET:/admin-api/infra/job/get_next_times
 * @secure
 */
export const getInfraJobGetNextTimes = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
    /**
     * 数量
     * @format int32
     * @default 5
     * @example 5
     */
    count?: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListLocalDateTime>({
    path: `/admin-api/infra/job/get_next_times`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name getInfraJobGet
 * @summary 获得定时任务
 * @request GET:/admin-api/infra/job/get
 * @secure
 */
export const getInfraJobGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultJobRespVO>({
    path: `/admin-api/infra/job/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name getInfraJobExportExcel
 * @summary 导出定时任务 Excel
 * @request GET:/admin-api/infra/job/export-excel
 * @secure
 */
export const getInfraJobExportExcel = (
  query: {
    /**
     * 任务名称，模糊匹配
     * @example "测试任务"
     */
    name?: string;
    /**
     * 任务状态，参见 JobStatusEnum 枚举
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 处理器的名字，模糊匹配
     * @example "sysUserSessionTimeoutJob"
     */
    handlerName?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/job/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务日志
 * @name getInfraJobLogPage
 * @summary 获得定时任务日志分页
 * @request GET:/admin-api/infra/job-log/page
 * @secure
 */
export const getInfraJobLogPage = (
  query: {
    /**
     * 任务编号
     * @format int64
     * @example 10
     */
    jobId?: number;
    /** 处理器的名字，模糊匹配 */
    handlerName?: string;
    /**
     * 开始执行时间
     * @format date-time
     */
    beginTime?: string;
    /**
     * 结束执行时间
     * @format date-time
     */
    endTime?: string;
    /**
     * 任务状态，参见 JobLogStatusEnum 枚举
     * @format int32
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultJobLogRespVO>({
    path: `/admin-api/infra/job-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务日志
 * @name getInfraJobLogGet
 * @summary 获得定时任务日志
 * @request GET:/admin-api/infra/job-log/get
 * @secure
 */
export const getInfraJobLogGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultJobLogRespVO>({
    path: `/admin-api/infra/job-log/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务日志
 * @name getInfraJobLogExportExcel
 * @summary 导出定时任务日志 Excel
 * @request GET:/admin-api/infra/job-log/export-excel
 * @secure
 */
export const getInfraJobLogExportExcel = (
  query: {
    /**
     * 任务编号
     * @format int64
     * @example 10
     */
    jobId?: number;
    /** 处理器的名字，模糊匹配 */
    handlerName?: string;
    /**
     * 开始执行时间
     * @format date-time
     */
    beginTime?: string;
    /**
     * 结束执行时间
     * @format date-time
     */
    endTime?: string;
    /**
     * 任务状态，参见 JobLogStatusEnum 枚举
     * @format int32
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/job-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件存储
 * @name getConfigIdGet
 * @summary 下载文件
 * @request GET:/admin-api/infra/file/{configId}/get/**
 * @secure
 */
export const getConfigIdGet = (configId: number, params: RequestParams = {}) =>
  request<void>({
    path: `/admin-api/infra/file/${configId}/get/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器
 *
 * @tags 管理后台 - 文件存储
 * @name getInfraFilePresignedUrl
 * @summary 获取文件预签名地址（上传）
 * @request GET:/admin-api/infra/file/presigned-url
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
    path: `/admin-api/infra/file/presigned-url`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件存储
 * @name getInfraFilePage
 * @summary 获得文件分页
 * @request GET:/admin-api/infra/file/page
 * @secure
 */
export const getInfraFilePage = (
  query: {
    /**
     * 文件路径，模糊匹配
     * @example "yudao"
     */
    path?: string;
    /**
     * 文件类型，模糊匹配
     * @example "jpg"
     */
    type?: string;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultFileRespVO>({
    path: `/admin-api/infra/file/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name getInfraFileConfigTest
 * @summary 测试文件配置是否正确
 * @request GET:/admin-api/infra/file-config/test
 * @secure
 */
export const getInfraFileConfigTest = (
  query: {
    /** @format int64 */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/infra/file-config/test`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name getInfraFileConfigPage
 * @summary 获得文件配置分页
 * @request GET:/admin-api/infra/file-config/page
 * @secure
 */
export const getInfraFileConfigPage = (
  query: {
    /**
     * 配置名
     * @example "S3 - 阿里云"
     */
    name?: string;
    /**
     * 存储器
     * @format int32
     * @example 1
     */
    storage?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultFileConfigRespVO>({
    path: `/admin-api/infra/file-config/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name getInfraFileConfigGet
 * @summary 获得文件配置
 * @request GET:/admin-api/infra/file-config/get
 * @secure
 */
export const getInfraFileConfigGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultFileConfigRespVO>({
    path: `/admin-api/infra/file-config/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentNormalPage
 * @summary 获得学生分页
 * @request GET:/admin-api/infra/demo03-student-normal/page
 * @secure
 */
export const getInfraDemo03StudentNormalPage = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo03StudentNormalRespVO>({
    path: `/admin-api/infra/demo03-student-normal/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentNormalGet
 * @summary 获得学生
 * @request GET:/admin-api/infra/demo03-student-normal/get
 * @secure
 */
export const getInfraDemo03StudentNormalGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03StudentNormalRespVO>({
    path: `/admin-api/infra/demo03-student-normal/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentNormalExportExcel
 * @summary 导出学生 Excel
 * @request GET:/admin-api/infra/demo03-student-normal/export-excel
 * @secure
 */
export const getInfraDemo03StudentNormalExportExcel = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/demo03-student-normal/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentNormalDemo03GradeGetByStudentId
 * @summary 获得学生班级
 * @request GET:/admin-api/infra/demo03-student-normal/demo03-grade/get-by-student-id
 * @secure
 */
export const getDemo03StudentNormalDemo03GradeGetByStudentId = (
  query: {
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03GradeDO>({
    path: `/admin-api/infra/demo03-student-normal/demo03-grade/get-by-student-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentNormalDemo03CourseListByStudentId
 * @summary 获得学生课程列表
 * @request GET:/admin-api/infra/demo03-student-normal/demo03-course/list-by-student-id
 * @secure
 */
export const getDemo03StudentNormalDemo03CourseListByStudentId = (
  query: {
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListDemo03CourseDO>({
    path: `/admin-api/infra/demo03-student-normal/demo03-course/list-by-student-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentInnerPage
 * @summary 获得学生分页
 * @request GET:/admin-api/infra/demo03-student-inner/page
 * @secure
 */
export const getInfraDemo03StudentInnerPage = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo03StudentInnerRespVO>({
    path: `/admin-api/infra/demo03-student-inner/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentInnerGet
 * @summary 获得学生
 * @request GET:/admin-api/infra/demo03-student-inner/get
 * @secure
 */
export const getInfraDemo03StudentInnerGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03StudentInnerRespVO>({
    path: `/admin-api/infra/demo03-student-inner/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentInnerExportExcel
 * @summary 导出学生 Excel
 * @request GET:/admin-api/infra/demo03-student-inner/export-excel
 * @secure
 */
export const getInfraDemo03StudentInnerExportExcel = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/demo03-student-inner/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentInnerDemo03GradeGetByStudentId
 * @summary 获得学生班级
 * @request GET:/admin-api/infra/demo03-student-inner/demo03-grade/get-by-student-id
 * @secure
 */
export const getDemo03StudentInnerDemo03GradeGetByStudentId = (
  query: {
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03GradeDO>({
    path: `/admin-api/infra/demo03-student-inner/demo03-grade/get-by-student-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentInnerDemo03CourseListByStudentId
 * @summary 获得学生课程列表
 * @request GET:/admin-api/infra/demo03-student-inner/demo03-course/list-by-student-id
 * @secure
 */
export const getDemo03StudentInnerDemo03CourseListByStudentId = (
  query: {
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListDemo03CourseDO>({
    path: `/admin-api/infra/demo03-student-inner/demo03-course/list-by-student-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentErpPage
 * @summary 获得学生分页
 * @request GET:/admin-api/infra/demo03-student-erp/page
 * @secure
 */
export const getInfraDemo03StudentErpPage = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo03StudentErpRespVO>({
    path: `/admin-api/infra/demo03-student-erp/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentErpGet
 * @summary 获得学生
 * @request GET:/admin-api/infra/demo03-student-erp/get
 * @secure
 */
export const getInfraDemo03StudentErpGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03StudentErpRespVO>({
    path: `/admin-api/infra/demo03-student-erp/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getInfraDemo03StudentErpExportExcel
 * @summary 导出学生 Excel
 * @request GET:/admin-api/infra/demo03-student-erp/export-excel
 * @secure
 */
export const getInfraDemo03StudentErpExportExcel = (
  query: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     */
    sex?: number;
    /**
     * 简介
     * @example "随便"
     */
    description?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/demo03-student-erp/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentErpDemo03GradePage
 * @summary 获得学生班级分页
 * @request GET:/admin-api/infra/demo03-student-erp/demo03-grade/page
 * @secure
 */
export const getDemo03StudentErpDemo03GradePage = (
  query: {
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo03GradeDO>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentErpDemo03GradeGet
 * @summary 获得学生班级
 * @request GET:/admin-api/infra/demo03-student-erp/demo03-grade/get
 * @secure
 */
export const getDemo03StudentErpDemo03GradeGet = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03GradeDO>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentErpDemo03CoursePage
 * @summary 获得学生课程分页
 * @request GET:/admin-api/infra/demo03-student-erp/demo03-course/page
 * @secure
 */
export const getDemo03StudentErpDemo03CoursePage = (
  query: {
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
    /**
     * 学生编号
     * @format int64
     */
    studentId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo03CourseDO>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name getDemo03StudentErpDemo03CourseGet
 * @summary 获得学生课程
 * @request GET:/admin-api/infra/demo03-student-erp/demo03-course/get
 * @secure
 */
export const getDemo03StudentErpDemo03CourseGet = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo03CourseDO>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name getInfraDemo02CategoryList
 * @summary 获得示例分类列表
 * @request GET:/admin-api/infra/demo02-category/list
 * @secure
 */
export const getInfraDemo02CategoryList = (
  query?: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 父级编号
     * @format int64
     * @example 6080
     */
    parentId?: number;
    /** 创建时间 */
    createTime?: string[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultListDemo02CategoryRespVO>({
    path: `/admin-api/infra/demo02-category/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name getInfraDemo02CategoryGet
 * @summary 获得示例分类
 * @request GET:/admin-api/infra/demo02-category/get
 * @secure
 */
export const getInfraDemo02CategoryGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo02CategoryRespVO>({
    path: `/admin-api/infra/demo02-category/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name getInfraDemo02CategoryExportExcel
 * @summary 导出示例分类 Excel
 * @request GET:/admin-api/infra/demo02-category/export-excel
 * @secure
 */
export const getInfraDemo02CategoryExportExcel = (
  query?: {
    /**
     * 名字
     * @example "芋艿"
     */
    name?: string;
    /**
     * 父级编号
     * @format int64
     * @example 6080
     */
    parentId?: number;
    /** 创建时间 */
    createTime?: string[];
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/demo02-category/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name getInfraDemo01ContactPage
 * @summary 获得示例联系人分页
 * @request GET:/admin-api/infra/demo01-contact/page
 * @secure
 */
export const getInfraDemo01ContactPage = (
  query: {
    /**
     * 名字
     * @example "张三"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     * @example 1
     */
    sex?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultDemo01ContactRespVO>({
    path: `/admin-api/infra/demo01-contact/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name getInfraDemo01ContactGet
 * @summary 获得示例联系人
 * @request GET:/admin-api/infra/demo01-contact/get
 * @secure
 */
export const getInfraDemo01ContactGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDemo01ContactRespVO>({
    path: `/admin-api/infra/demo01-contact/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name getInfraDemo01ContactExportExcel
 * @summary 导出示例联系人 Excel
 * @request GET:/admin-api/infra/demo01-contact/export-excel
 * @secure
 */
export const getInfraDemo01ContactExportExcel = (
  query: {
    /**
     * 名字
     * @example "张三"
     */
    name?: string;
    /**
     * 性别
     * @format int32
     * @example 1
     */
    sex?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/demo01-contact/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name getInfraDataSourceConfigList
 * @summary 获得数据源配置列表
 * @request GET:/admin-api/infra/data-source-config/list
 * @secure
 */
export const getInfraDataSourceConfigList = (params: RequestParams = {}) =>
  request<CommonResultListDataSourceConfigRespVO>({
    path: `/admin-api/infra/data-source-config/list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name getInfraDataSourceConfigGet
 * @summary 获得数据源配置
 * @request GET:/admin-api/infra/data-source-config/get
 * @secure
 */
export const getInfraDataSourceConfigGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultDataSourceConfigRespVO>({
    path: `/admin-api/infra/data-source-config/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name getInfraConfigPage
 * @summary 获取参数配置分页
 * @request GET:/admin-api/infra/config/page
 * @secure
 */
export const getInfraConfigPage = (
  query: {
    /**
     * 数据源名称，模糊匹配
     * @example "名称"
     */
    name?: string;
    /**
     * 参数键名，模糊匹配
     * @example "yunai.db.username"
     */
    key?: string;
    /**
     * 参数类型，参见 SysConfigTypeEnum 枚举
     * @format int32
     * @example 1
     */
    type?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultConfigRespVO>({
    path: `/admin-api/infra/config/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name getInfraConfigGet
 * @summary 获得参数配置
 * @request GET:/admin-api/infra/config/get
 * @secure
 */
export const getInfraConfigGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultConfigRespVO>({
    path: `/admin-api/infra/config/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 不可见的配置，不允许返回给前端
 *
 * @tags 管理后台 - 参数配置
 * @name getInfraConfigGetValueByKey
 * @summary 根据参数键名查询参数值
 * @request GET:/admin-api/infra/config/get-value-by-key
 * @secure
 */
export const getInfraConfigGetValueByKey = (
  query: {
    /**
     * 参数键
     * @example "yunai.biz.username"
     */
    key: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultString>({
    path: `/admin-api/infra/config/get-value-by-key`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name getInfraConfigExportExcel
 * @summary 导出参数配置
 * @request GET:/admin-api/infra/config/export-excel
 * @secure
 */
export const getInfraConfigExportExcel = (
  query: {
    /**
     * 数据源名称，模糊匹配
     * @example "名称"
     */
    name?: string;
    /**
     * 参数键名，模糊匹配
     * @example "yunai.db.username"
     */
    key?: string;
    /**
     * 参数类型，参见 SysConfigTypeEnum 枚举
     * @format int32
     * @example 1
     */
    type?: number;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/config/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name getCodegenTablePage
 * @summary 获得表定义分页
 * @request GET:/admin-api/infra/codegen/table/page
 * @secure
 */
export const getCodegenTablePage = (
  query: {
    /**
     * 表名称，模糊匹配
     * @example "yudao"
     */
    tableName?: string;
    /**
     * 表描述，模糊匹配
     * @example "芋道"
     */
    tableComment?: string;
    /**
     * 实体，模糊匹配
     * @example "Yudao"
     */
    className?: string;
    /**
     * 创建时间
     * @example "[2022-07-01 00:00:00,2022-07-01 23:59:59]"
     */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultCodegenTableRespVO>({
    path: `/admin-api/infra/codegen/table/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name getCodegenTableList
 * @summary 获得表定义列表
 * @request GET:/admin-api/infra/codegen/table/list
 * @secure
 */
export const getCodegenTableList = (
  query: {
    /**
     * 数据源配置的编号
     * @format int64
     * @example 1
     */
    dataSourceConfigId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListCodegenTableRespVO>({
    path: `/admin-api/infra/codegen/table/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name getInfraCodegenPreview
 * @summary 预览生成代码
 * @request GET:/admin-api/infra/codegen/preview
 * @secure
 */
export const getInfraCodegenPreview = (
  query: {
    /**
     * 表编号
     * @format int64
     * @example 1024
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListCodegenPreviewRespVO>({
    path: `/admin-api/infra/codegen/preview`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name getInfraCodegenDownload
 * @summary 下载生成代码
 * @request GET:/admin-api/infra/codegen/download
 * @secure
 */
export const getInfraCodegenDownload = (
  query: {
    /**
     * 表编号
     * @format int64
     * @example 1024
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/codegen/download`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name getInfraCodegenDetail
 * @summary 获得表和字段的明细
 * @request GET:/admin-api/infra/codegen/detail
 * @secure
 */
export const getInfraCodegenDetail = (
  query: {
    /**
     * 表编号
     * @format int64
     * @example 1024
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultCodegenDetailRespVO>({
    path: `/admin-api/infra/codegen/detail`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 会过滤掉已经导入 Codegen 的表
 *
 * @tags 管理后台 - 代码生成器
 * @name getDbTableList
 * @summary 获得数据库自带的表定义列表
 * @request GET:/admin-api/infra/codegen/db/table/list
 * @secure
 */
export const getDbTableList = (
  query: {
    /**
     * 数据源配置的编号
     * @format int64
     * @example 1
     */
    dataSourceConfigId: number;
    /**
     * 表名，模糊匹配
     * @example "yudao"
     */
    name?: string;
    /**
     * 描述，模糊匹配
     * @example "芋道"
     */
    comment?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListDatabaseTableRespVO>({
    path: `/admin-api/infra/codegen/db/table/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - API 错误日志
 * @name getInfraApiErrorLogPage
 * @summary 获得 API 错误日志分页
 * @request GET:/admin-api/infra/api-error-log/page
 * @secure
 */
export const getInfraApiErrorLogPage = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 666
     */
    userId?: number;
    /**
     * 用户类型
     * @format int32
     * @example 1
     */
    userType?: number;
    /**
     * 应用名
     * @example "dashboard"
     */
    applicationName?: string;
    /**
     * 请求地址
     * @example "/xx/yy"
     */
    requestUrl?: string;
    /** 异常发生时间 */
    exceptionTime?: string[];
    /**
     * 处理状态
     * @format int32
     * @example 0
     */
    processStatus?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultApiErrorLogRespVO>({
    path: `/admin-api/infra/api-error-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - API 错误日志
 * @name getInfraApiErrorLogExportExcel
 * @summary 导出 API 错误日志 Excel
 * @request GET:/admin-api/infra/api-error-log/export-excel
 * @secure
 */
export const getInfraApiErrorLogExportExcel = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 666
     */
    userId?: number;
    /**
     * 用户类型
     * @format int32
     * @example 1
     */
    userType?: number;
    /**
     * 应用名
     * @example "dashboard"
     */
    applicationName?: string;
    /**
     * 请求地址
     * @example "/xx/yy"
     */
    requestUrl?: string;
    /** 异常发生时间 */
    exceptionTime?: string[];
    /**
     * 处理状态
     * @format int32
     * @example 0
     */
    processStatus?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/api-error-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - API 访问日志
 * @name getInfraApiAccessLogPage
 * @summary 获得API 访问日志分页
 * @request GET:/admin-api/infra/api-access-log/page
 * @secure
 */
export const getInfraApiAccessLogPage = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 666
     */
    userId?: number;
    /**
     * 用户类型
     * @format int32
     * @example 2
     */
    userType?: number;
    /**
     * 应用名
     * @example "dashboard"
     */
    applicationName?: string;
    /**
     * 请求地址，模糊匹配
     * @example "/xxx/yyy"
     */
    requestUrl?: string;
    /**
     * 开始时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    beginTime?: string[];
    /**
     * 执行时长,大于等于，单位：毫秒
     * @format int32
     * @example 100
     */
    duration?: number;
    /**
     * 结果码
     * @format int32
     * @example 0
     */
    resultCode?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultApiAccessLogRespVO>({
    path: `/admin-api/infra/api-access-log/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - API 访问日志
 * @name getInfraApiAccessLogExportExcel
 * @summary 导出API 访问日志 Excel
 * @request GET:/admin-api/infra/api-access-log/export-excel
 * @secure
 */
export const getInfraApiAccessLogExportExcel = (
  query: {
    /**
     * 用户编号
     * @format int64
     * @example 666
     */
    userId?: number;
    /**
     * 用户类型
     * @format int32
     * @example 2
     */
    userType?: number;
    /**
     * 应用名
     * @example "dashboard"
     */
    applicationName?: string;
    /**
     * 请求地址，模糊匹配
     * @example "/xxx/yyy"
     */
    requestUrl?: string;
    /**
     * 开始时间
     * @example "[2022-07-01 00:00:00, 2022-07-01 23:59:59]"
     */
    beginTime?: string[];
    /**
     * 执行时长,大于等于，单位：毫秒
     * @format int32
     * @example 100
     */
    duration?: number;
    /**
     * 结果码
     * @format int32
     * @example 0
     */
    resultCode?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<void>({
    path: `/admin-api/infra/api-access-log/export-excel`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的用户组，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 用户组
 * @name getBpmUserGroupSimpleList
 * @summary 获取用户组精简信息列表
 * @request GET:/admin-api/bpm/user-group/simple-list
 * @secure
 */
export const getBpmUserGroupSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListBpmUserGroupRespVO>({
    path: `/admin-api/bpm/user-group/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户组
 * @name getBpmUserGroupPage
 * @summary 获得用户组分页
 * @request GET:/admin-api/bpm/user-group/page
 * @secure
 */
export const getBpmUserGroupPage = (
  query: {
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
    name?: string;
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmUserGroupRespVO>({
    path: `/admin-api/bpm/user-group/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户组
 * @name getBpmUserGroupGet
 * @summary 获得用户组
 * @request GET:/admin-api/bpm/user-group/get
 * @secure
 */
export const getBpmUserGroupGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmUserGroupRespVO>({
    path: `/admin-api/bpm/user-group/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskTodoPage
 * @summary 获取 Todo 待办任务分页
 * @request GET:/admin-api/bpm/task/todo-page
 * @secure
 */
export const getBpmTaskTodoPage = (
  query: {
    /**
     * 流程任务名
     * @example "芋道"
     */
    name?: string;
    /**
     * 流程分类
     * @example 1
     */
    category?: string;
    /**
     * 流程定义的标识
     * @example 2048
     */
    processDefinitionKey?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmTaskRespVO>({
    path: `/admin-api/bpm/task/todo-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【流程任务】菜单
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskManagerPage
 * @summary 获取全部任务的分页
 * @request GET:/admin-api/bpm/task/manager-page
 * @secure
 */
export const getBpmTaskManagerPage = (
  query: {
    /**
     * 流程任务名
     * @example "芋道"
     */
    name?: string;
    /**
     * 流程分类
     * @example 1
     */
    category?: string;
    /**
     * 流程定义的标识
     * @example 2048
     */
    processDefinitionKey?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmTaskRespVO>({
    path: `/admin-api/bpm/task/manager-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于【流程详情】的【退回】按钮
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskListByReturn
 * @summary 获取所有可退回的节点
 * @request GET:/admin-api/bpm/task/list-by-return
 * @secure
 */
export const getBpmTaskListByReturn = (
  query: {
    id: string;
    /** 当前任务ID */
    taskId: any;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListBpmTaskRespVO>({
    path: `/admin-api/bpm/task/list-by-return`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 包括完成的、未完成的
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskListByProcessInstanceId
 * @summary 获得指定流程实例的任务列表
 * @request GET:/admin-api/bpm/task/list-by-process-instance-id
 * @secure
 */
export const getBpmTaskListByProcessInstanceId = (
  query: {
    /** 流程实例的编号 */
    processInstanceId: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListBpmTaskRespVO>({
    path: `/admin-api/bpm/task/list-by-process-instance-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskListByParentTaskId
 * @summary 获得指定父级任务的子任务列表
 * @request GET:/admin-api/bpm/task/list-by-parent-task-id
 * @secure
 */
export const getBpmTaskListByParentTaskId = (
  query: {
    /** 父级任务编号 */
    parentTaskId: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListBpmTaskRespVO>({
    path: `/admin-api/bpm/task/list-by-parent-task-id`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name getBpmTaskDonePage
 * @summary 获取 Done 已办任务分页
 * @request GET:/admin-api/bpm/task/done-page
 * @secure
 */
export const getBpmTaskDonePage = (
  query: {
    /**
     * 流程任务名
     * @example "芋道"
     */
    name?: string;
    /**
     * 流程分类
     * @example 1
     */
    category?: string;
    /**
     * 流程定义的标识
     * @example 2048
     */
    processDefinitionKey?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmTaskRespVO>({
    path: `/admin-api/bpm/task/done-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程监听器
 * @name getBpmProcessListenerPage
 * @summary 获得流程监听器分页
 * @request GET:/admin-api/bpm/process-listener/page
 * @secure
 */
export const getBpmProcessListenerPage = (
  query: {
    /**
     * 监听器名字
     * @example "赵六"
     */
    name?: string;
    /**
     * 监听器类型
     * @example "execution"
     */
    type?: string;
    /**
     * 监听事件
     * @example "start"
     */
    event?: string;
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessListenerRespVO>({
    path: `/admin-api/bpm/process-listener/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程监听器
 * @name getBpmProcessListenerGet
 * @summary 获得流程监听器
 * @request GET:/admin-api/bpm/process-listener/get
 * @secure
 */
export const getBpmProcessListenerGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmProcessListenerRespVO>({
    path: `/admin-api/bpm/process-listener/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 在【我的流程】菜单中，进行调用
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceMyPage
 * @summary 获得我的实例分页列表
 * @request GET:/admin-api/bpm/process-instance/my-page
 * @secure
 */
export const getBpmProcessInstanceMyPage = (
  query: {
    /**
     * 流程名称
     * @example "芋道"
     */
    name?: string;
    /**
     * 流程定义的标识
     * @example 2048
     */
    processDefinitionKey?: string;
    /**
     * 流程实例的状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 流程分类
     * @example 1
     */
    category?: string;
    /** 创建时间 */
    createTime?: string[];
    /** 结束时间 */
    endTime?: string[];
    /**
     * 发起用户编号
     * @format int64
     * @example 1024
     */
    startUserId?: number;
    /**
     * 动态表单字段查询 JSON Str
     * @example {}
     */
    formFieldsParams?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessInstanceRespVO>({
    path: `/admin-api/bpm/process-instance/my-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 在【流程实例】菜单中，进行调用
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceManagerPage
 * @summary 获得管理流程实例的分页列表
 * @request GET:/admin-api/bpm/process-instance/manager-page
 * @secure
 */
export const getBpmProcessInstanceManagerPage = (
  query: {
    /**
     * 流程名称
     * @example "芋道"
     */
    name?: string;
    /**
     * 流程定义的标识
     * @example 2048
     */
    processDefinitionKey?: string;
    /**
     * 流程实例的状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 流程分类
     * @example 1
     */
    category?: string;
    /** 创建时间 */
    createTime?: string[];
    /** 结束时间 */
    endTime?: string[];
    /**
     * 发起用户编号
     * @format int64
     * @example 1024
     */
    startUserId?: number;
    /**
     * 动态表单字段查询 JSON Str
     * @example {}
     */
    formFieldsParams?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessInstanceRespVO>({
    path: `/admin-api/bpm/process-instance/manager-page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 在【流程详细】界面中，进行调用
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceGet
 * @summary 获得指定流程实例
 * @request GET:/admin-api/bpm/process-instance/get
 * @secure
 */
export const getBpmProcessInstanceGet = (
  query: {
    /** 流程实例的编号 */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmProcessInstanceRespVO>({
    path: `/admin-api/bpm/process-instance/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceGetNextApprovalNodes
 * @summary 获取下一个执行的流程节点
 * @request GET:/admin-api/bpm/process-instance/get-next-approval-nodes
 * @secure
 */
export const getBpmProcessInstanceGetNextApprovalNodes = (
  query?: {
    /**
     * 流程定义的编号
     * @example 1024
     */
    processDefinitionId?: string;
    /** 流程变量 */
    processVariablesStr?: string;
    /**
     * 流程实例的编号
     * @example 1024
     */
    processInstanceId?: string;
    /**
     * 流程活动编号
     * @example "StartUserNode"
     */
    activityId?: string;
    /**
     * 流程任务编号
     * @example "95f2f08b-621b-11ef-bf39-00ff4722db8b"
     */
    taskId?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListActivityNode>({
    path: `/admin-api/bpm/process-instance/get-next-approval-nodes`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 在【流程详细】界面中，进行调用
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceGetBpmnModelView
 * @summary 获取流程实例的 BPMN 模型视图
 * @request GET:/admin-api/bpm/process-instance/get-bpmn-model-view
 * @secure
 */
export const getBpmProcessInstanceGetBpmnModelView = (
  query: {
    /** 流程实例的编号 */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmProcessInstanceBpmnModelViewRespVO>({
    path: `/admin-api/bpm/process-instance/get-bpmn-model-view`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程实例
 * @name getBpmProcessInstanceGetApprovalDetail
 * @summary 获得审批详情
 * @request GET:/admin-api/bpm/process-instance/get-approval-detail
 * @secure
 */
export const getBpmProcessInstanceGetApprovalDetail = (
  query: {
    /**
     * 流程定义的编号
     * @example 1024
     */
    processDefinitionId?: string;
    /** 流程变量 */
    processVariablesStr?: string;
    /**
     * 流程实例的编号
     * @example 1024
     */
    processInstanceId?: string;
    /**
     * 流程活动编号
     * @example "StartUserNode"
     */
    activityId?: string;
    /**
     * 流程任务编号
     * @example "95f2f08b-621b-11ef-bf39-00ff4722db8b"
     */
    taskId?: string;
    /** 流程实例的编号 */
    id: any;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmApprovalDetailRespVO>({
    path: `/admin-api/bpm/process-instance/get-approval-detail`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程实例抄送
 * @name getProcessInstanceCopyPage
 * @summary 获得抄送流程分页列表
 * @request GET:/admin-api/bpm/process-instance/copy/page
 * @secure
 */
export const getProcessInstanceCopyPage = (
  query: {
    /**
     * 流程名称
     * @example "芋道"
     */
    processInstanceName?: string;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessInstanceCopyRespVO>({
    path: `/admin-api/bpm/process-instance/copy/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程表达式
 * @name getBpmProcessExpressionPage
 * @summary 获得流程表达式分页
 * @request GET:/admin-api/bpm/process-expression/page
 * @secure
 */
export const getBpmProcessExpressionPage = (
  query: {
    /**
     * 表达式名字
     * @example "李四"
     */
    name?: string;
    /**
     * 表达式状态
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessExpressionRespVO>({
    path: `/admin-api/bpm/process-expression/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程表达式
 * @name getBpmProcessExpressionGet
 * @summary 获得流程表达式
 * @request GET:/admin-api/bpm/process-expression/get
 * @secure
 */
export const getBpmProcessExpressionGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmProcessExpressionRespVO>({
    path: `/admin-api/bpm/process-expression/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含未挂起的流程，主要用于前端的下拉选项
 *
 * @tags 管理后台 - 流程定义
 * @name getBpmProcessDefinitionSimpleList
 * @summary 获得流程定义精简列表
 * @request GET:/admin-api/bpm/process-definition/simple-list
 * @secure
 */
export const getBpmProcessDefinitionSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListBpmProcessDefinitionRespVO>({
    path: `/admin-api/bpm/process-definition/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程定义
 * @name getBpmProcessDefinitionPage
 * @summary 获得流程定义分页
 * @request GET:/admin-api/bpm/process-definition/page
 * @secure
 */
export const getBpmProcessDefinitionPage = (
  query: {
    /**
     * 标识-精准匹配
     * @example "process1641042089407"
     */
    key?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmProcessDefinitionRespVO>({
    path: `/admin-api/bpm/process-definition/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程定义
 * @name getBpmProcessDefinitionList
 * @summary 获得流程定义列表
 * @request GET:/admin-api/bpm/process-definition/list
 * @secure
 */
export const getBpmProcessDefinitionList = (
  query: {
    /**
     * 挂起状态
     * @format int32
     * @example 1
     */
    suspensionState: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListBpmProcessDefinitionRespVO>({
    path: `/admin-api/bpm/process-definition/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程定义
 * @name getBpmProcessDefinitionGet
 * @summary 获得流程定义
 * @request GET:/admin-api/bpm/process-definition/get
 * @secure
 */
export const getBpmProcessDefinitionGet = (
  query: {
    /**
     * 流程编号
     * @example 1024
     */
    id: string;
    /**
     * 流程定义标识
     * @example 1024
     */
    key: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmProcessDefinitionRespVO>({
    path: `/admin-api/bpm/process-definition/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OA 请假申请
 * @name getOaLeavePage
 * @summary 获得请假申请分页
 * @request GET:/admin-api/bpm/oa/leave/page
 * @secure
 */
export const getOaLeavePage = (
  query: {
    /**
     * 状态
     * @format int32
     * @example 1
     */
    status?: number;
    /**
     * 请假类型，参见 bpm_oa_type
     * @format int32
     * @example 1
     */
    type?: number;
    /**
     * 原因，模糊匹配
     * @example "阅读芋道源码"
     */
    reason?: string;
    /** 申请时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmOALeaveRespVO>({
    path: `/admin-api/bpm/oa/leave/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OA 请假申请
 * @name getOaLeaveGet
 * @summary 获得请假申请
 * @request GET:/admin-api/bpm/oa/leave/get
 * @secure
 */
export const getOaLeaveGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmOALeaveRespVO>({
    path: `/admin-api/bpm/oa/leave/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name getModelSimpleGet
 * @summary 获得仿钉钉流程设计模型
 * @request GET:/admin-api/bpm/model/simple/get
 * @secure
 */
export const getModelSimpleGet = (
  query: {
    id: string;
    /**
     * 流程模型编号
     * @example "a2c5eee0-eb6c-11ee-abf4-0c37967c420a"
     */
    modelId: any;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmSimpleModelNodeVO>({
    path: `/admin-api/bpm/model/simple/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name getBpmModelList
 * @summary 获得模型分页
 * @request GET:/admin-api/bpm/model/list
 * @secure
 */
export const getBpmModelList = (
  query?: {
    /**
     * 模型名称
     * @example "芋艿"
     */
    name?: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultListBpmModelRespVO>({
    path: `/admin-api/bpm/model/list`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name getBpmModelGet
 * @summary 获得模型
 * @request GET:/admin-api/bpm/model/get
 * @secure
 */
export const getBpmModelGet = (
  query: {
    /**
     * 编号
     * @example 1024
     */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmModelRespVO>({
    path: `/admin-api/bpm/model/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 动态表单
 * @name getBpmFormPage
 * @summary 获得动态表单分页
 * @request GET:/admin-api/bpm/form/page
 * @secure
 */
export const getBpmFormPage = (
  query: {
    /**
     * 表单名称
     * @example "芋道"
     */
    name?: string;
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmFormRespVO>({
    path: `/admin-api/bpm/form/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于表单下拉框
 *
 * @tags 管理后台 - 动态表单
 * @name getBpmFormListAllSimple
 * @summary 获得动态表单的精简列表
 * @request GET:/admin-api/bpm/form/list-all-simple
 * @secure
 */
export const getBpmFormListAllSimple = (params: RequestParams = {}) =>
  request<CommonResultListBpmFormRespVO>({
    path: `/admin-api/bpm/form/list-all-simple`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 用于表单下拉框
 *
 * @tags 管理后台 - 动态表单
 * @name getBpmFormSimpleList
 * @summary 获得动态表单的精简列表
 * @request GET:/admin-api/bpm/form/simple-list
 * @secure
 */
export const getBpmFormSimpleList = (params: RequestParams = {}) =>
  request<CommonResultListBpmFormRespVO>({
    path: `/admin-api/bpm/form/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 动态表单
 * @name getBpmFormGet
 * @summary 获得动态表单
 * @request GET:/admin-api/bpm/form/get
 * @secure
 */
export const getBpmFormGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmFormRespVO>({
    path: `/admin-api/bpm/form/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 只包含被开启的分类，主要用于前端的下拉选项
 *
 * @tags 管理后台 - BPM 流程分类
 * @name getBpmCategorySimpleList
 * @summary 获取流程分类的精简信息列表
 * @request GET:/admin-api/bpm/category/simple-list
 * @secure
 */
export const getBpmCategorySimpleList = (params: RequestParams = {}) =>
  request<CommonResultListBpmCategoryRespVO>({
    path: `/admin-api/bpm/category/simple-list`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name getBpmCategoryPage
 * @summary 获得流程分类分页
 * @request GET:/admin-api/bpm/category/page
 * @secure
 */
export const getBpmCategoryPage = (
  query: {
    /**
     * 分类名
     * @example "王五"
     */
    name?: string;
    /**
     * 分类标志
     * @example "OA"
     */
    code?: string;
    /**
     * 分类状态
     * @format int32
     * @example 1
     */
    status?: number;
    /** 创建时间 */
    createTime?: string[];
    /**
     * 页码，从 1 开始
     * @format int32
     * @min 1
     * @example 1
     */
    pageNo: number;
    /**
     * 每页条数，最大值为 100
     * @format int32
     * @min 1
     * @max 100
     * @example 10
     */
    pageSize: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultPageResultBpmCategoryRespVO>({
    path: `/admin-api/bpm/category/page`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name getBpmCategoryGet
 * @summary 获得流程分类
 * @request GET:/admin-api/bpm/category/get
 * @secure
 */
export const getBpmCategoryGet = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBpmCategoryRespVO>({
    path: `/admin-api/bpm/category/get`,
    method: "GET",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name deleteSystemUserDelete
 * @summary 删除用户
 * @request DELETE:/admin-api/system/user/delete
 * @secure
 */
export const deleteSystemUserDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户
 * @name deleteSystemUserDeleteList
 * @summary 批量删除用户
 * @request DELETE:/admin-api/system/user/delete-list
 * @secure
 */
export const deleteSystemUserDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/user/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name deleteSystemTenantDelete
 * @summary 删除租户
 * @request DELETE:/admin-api/system/tenant/delete
 * @secure
 */
export const deleteSystemTenantDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户
 * @name deleteSystemTenantDeleteList
 * @summary 批量删除租户
 * @request DELETE:/admin-api/system/tenant/delete-list
 * @secure
 */
export const deleteSystemTenantDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name deleteSystemTenantPackageDelete
 * @summary 删除租户套餐
 * @request DELETE:/admin-api/system/tenant-package/delete
 * @secure
 */
export const deleteSystemTenantPackageDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant-package/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 租户套餐
 * @name deleteSystemTenantPackageDeleteList
 * @summary 批量删除租户套餐
 * @request DELETE:/admin-api/system/tenant-package/delete-list
 * @secure
 */
export const deleteSystemTenantPackageDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/tenant-package/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交用户
 * @name deleteSystemSocialUserUnbind
 * @summary 取消社交绑定
 * @request DELETE:/admin-api/system/social-user/unbind
 * @secure
 */
export const deleteSystemSocialUserUnbind = (
  data: SocialUserUnbindReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/social-user/unbind`,
    method: "DELETE",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name deleteSystemSocialClientDelete
 * @summary 删除社交客户端
 * @request DELETE:/admin-api/system/social-client/delete
 * @secure
 */
export const deleteSystemSocialClientDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/social-client/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 社交客户端
 * @name deleteSystemSocialClientDeleteList
 * @summary 批量删除社交客户端
 * @request DELETE:/admin-api/system/social-client/delete-list
 * @secure
 */
export const deleteSystemSocialClientDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/social-client/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name deleteSystemSmsTemplateDelete
 * @summary 删除短信模板
 * @request DELETE:/admin-api/system/sms-template/delete
 * @secure
 */
export const deleteSystemSmsTemplateDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-template/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信模板
 * @name deleteSystemSmsTemplateDeleteList
 * @summary 批量删除短信模板
 * @request DELETE:/admin-api/system/sms-template/delete-list
 * @secure
 */
export const deleteSystemSmsTemplateDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-template/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name deleteSystemSmsChannelDelete
 * @summary 删除短信渠道
 * @request DELETE:/admin-api/system/sms-channel/delete
 * @secure
 */
export const deleteSystemSmsChannelDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-channel/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 短信渠道
 * @name deleteSystemSmsChannelDeleteList
 * @summary 批量删除短信渠道
 * @request DELETE:/admin-api/system/sms-channel/delete-list
 * @secure
 */
export const deleteSystemSmsChannelDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/sms-channel/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name deleteSystemRoleDelete
 * @summary 删除角色
 * @request DELETE:/admin-api/system/role/delete
 * @secure
 */
export const deleteSystemRoleDelete = (
  query: {
    /**
     * 角色编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/role/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 角色
 * @name deleteSystemRoleDeleteList
 * @summary 批量删除角色
 * @request DELETE:/admin-api/system/role/delete-list
 * @secure
 */
export const deleteSystemRoleDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/role/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 岗位
 * @name deleteSystemPostDelete
 * @summary 删除岗位
 * @request DELETE:/admin-api/system/post/delete
 * @secure
 */
export const deleteSystemPostDelete = (
  query: {
    /** @format int64 */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/post/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 令牌
 * @name deleteSystemOauth2TokenDelete
 * @summary 删除访问令牌
 * @request DELETE:/admin-api/system/oauth2-token/delete
 * @secure
 */
export const deleteSystemOauth2TokenDelete = (
  query: {
    /**
     * 访问令牌
     * @example "tudou"
     */
    accessToken: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2-token/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2.0 令牌
 * @name deleteSystemOauth2TokenDeleteList
 * @summary 批量删除访问令牌
 * @request DELETE:/admin-api/system/oauth2-token/delete-list
 * @secure
 */
export const deleteSystemOauth2TokenDeleteList = (
  query: {
    /** 访问令牌数组 */
    accessTokens: string[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2-token/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name deleteSystemOauth2ClientDelete
 * @summary 删除 OAuth2 客户端
 * @request DELETE:/admin-api/system/oauth2-client/delete
 * @secure
 */
export const deleteSystemOauth2ClientDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2-client/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - OAuth2 客户端
 * @name deleteSystemOauth2ClientDeleteList
 * @summary 批量删除 OAuth2 客户端
 * @request DELETE:/admin-api/system/oauth2-client/delete-list
 * @secure
 */
export const deleteSystemOauth2ClientDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/oauth2-client/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name deleteSystemNotifyTemplateDelete
 * @summary 删除站内信模版
 * @request DELETE:/admin-api/system/notify-template/delete
 * @secure
 */
export const deleteSystemNotifyTemplateDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notify-template/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 站内信模版
 * @name deleteSystemNotifyTemplateDeleteList
 * @summary 批量删除站内信模版
 * @request DELETE:/admin-api/system/notify-template/delete-list
 * @secure
 */
export const deleteSystemNotifyTemplateDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notify-template/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name deleteSystemNoticeDelete
 * @summary 删除通知公告
 * @request DELETE:/admin-api/system/notice/delete
 * @secure
 */
export const deleteSystemNoticeDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notice/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 通知公告
 * @name deleteSystemNoticeDeleteList
 * @summary 批量删除通知公告
 * @request DELETE:/admin-api/system/notice/delete-list
 * @secure
 */
export const deleteSystemNoticeDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/notice/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 菜单
 * @name deleteSystemMenuDelete
 * @summary 删除菜单
 * @request DELETE:/admin-api/system/menu/delete
 * @secure
 */
export const deleteSystemMenuDelete = (
  query: {
    /**
     * 菜单编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/menu/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 菜单
 * @name deleteSystemMenuDeleteList
 * @summary 批量删除菜单
 * @request DELETE:/admin-api/system/menu/delete-list
 * @secure
 */
export const deleteSystemMenuDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/menu/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name deleteSystemMailTemplateDelete
 * @summary 删除邮件模版
 * @request DELETE:/admin-api/system/mail-template/delete
 * @secure
 */
export const deleteSystemMailTemplateDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-template/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮件模版
 * @name deleteSystemMailTemplateDeleteList
 * @summary 批量删除邮件模版
 * @request DELETE:/admin-api/system/mail-template/delete-list
 * @secure
 */
export const deleteSystemMailTemplateDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-template/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name deleteSystemMailAccountDelete
 * @summary 删除邮箱账号
 * @request DELETE:/admin-api/system/mail-account/delete
 * @secure
 */
export const deleteSystemMailAccountDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-account/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 邮箱账号
 * @name deleteSystemMailAccountDeleteList
 * @summary 批量删除邮箱账号
 * @request DELETE:/admin-api/system/mail-account/delete-list
 * @secure
 */
export const deleteSystemMailAccountDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/mail-account/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name deleteSystemDictTypeDelete
 * @summary 删除字典类型
 * @request DELETE:/admin-api/system/dict-type/delete
 * @secure
 */
export const deleteSystemDictTypeDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-type/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典类型
 * @name deleteSystemDictTypeDeleteList
 * @summary 批量删除字典类型
 * @request DELETE:/admin-api/system/dict-type/delete-list
 * @secure
 */
export const deleteSystemDictTypeDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-type/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name deleteSystemDictDataDelete
 * @summary 删除字典数据
 * @request DELETE:/admin-api/system/dict-data/delete
 * @secure
 */
export const deleteSystemDictDataDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-data/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 字典数据
 * @name deleteSystemDictDataDeleteList
 * @summary 批量删除字典数据
 * @request DELETE:/admin-api/system/dict-data/delete-list
 * @secure
 */
export const deleteSystemDictDataDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dict-data/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name deleteSystemDeptDelete
 * @summary 删除部门
 * @request DELETE:/admin-api/system/dept/delete
 * @secure
 */
export const deleteSystemDeptDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dept/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 部门
 * @name deleteSystemDeptDeleteList
 * @summary 批量删除部门
 * @request DELETE:/admin-api/system/dept/delete-list
 * @secure
 */
export const deleteSystemDeptDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/system/dept/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name deleteInfraJobDelete
 * @summary 删除定时任务
 * @request DELETE:/admin-api/infra/job/delete
 * @secure
 */
export const deleteInfraJobDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 定时任务
 * @name deleteInfraJobDeleteList
 * @summary 批量删除定时任务
 * @request DELETE:/admin-api/infra/job/delete-list
 * @secure
 */
export const deleteInfraJobDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/job/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件存储
 * @name deleteInfraFileDelete
 * @summary 删除文件
 * @request DELETE:/admin-api/infra/file/delete
 * @secure
 */
export const deleteInfraFileDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件存储
 * @name deleteInfraFileDeleteList
 * @summary 批量删除文件
 * @request DELETE:/admin-api/infra/file/delete-list
 * @secure
 */
export const deleteInfraFileDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name deleteInfraFileConfigDelete
 * @summary 删除文件配置
 * @request DELETE:/admin-api/infra/file-config/delete
 * @secure
 */
export const deleteInfraFileConfigDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file-config/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 文件配置
 * @name deleteInfraFileConfigDeleteList
 * @summary 批量删除文件配置
 * @request DELETE:/admin-api/infra/file-config/delete-list
 * @secure
 */
export const deleteInfraFileConfigDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/file-config/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentNormalDelete
 * @summary 删除学生
 * @request DELETE:/admin-api/infra/demo03-student-normal/delete
 * @secure
 */
export const deleteInfraDemo03StudentNormalDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-normal/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentNormalDeleteList
 * @summary 批量删除学生
 * @request DELETE:/admin-api/infra/demo03-student-normal/delete-list
 * @secure
 */
export const deleteInfraDemo03StudentNormalDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-normal/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentInnerDelete
 * @summary 删除学生
 * @request DELETE:/admin-api/infra/demo03-student-inner/delete
 * @secure
 */
export const deleteInfraDemo03StudentInnerDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-inner/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentInnerDeleteList
 * @summary 批量删除学生
 * @request DELETE:/admin-api/infra/demo03-student-inner/delete-list
 * @secure
 */
export const deleteInfraDemo03StudentInnerDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-inner/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteDemo03StudentErpDemo03GradeDelete
 * @summary 删除学生班级
 * @request DELETE:/admin-api/infra/demo03-student-erp/demo03-grade/delete
 * @secure
 */
export const deleteDemo03StudentErpDemo03GradeDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteDemo03StudentErpDemo03GradeDeleteList
 * @summary 批量删除学生班级
 * @request DELETE:/admin-api/infra/demo03-student-erp/demo03-grade/delete-list
 * @secure
 */
export const deleteDemo03StudentErpDemo03GradeDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-grade/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteDemo03StudentErpDemo03CourseDelete
 * @summary 删除学生课程
 * @request DELETE:/admin-api/infra/demo03-student-erp/demo03-course/delete
 * @secure
 */
export const deleteDemo03StudentErpDemo03CourseDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteDemo03StudentErpDemo03CourseDeleteList
 * @summary 批量删除学生课程
 * @request DELETE:/admin-api/infra/demo03-student-erp/demo03-course/delete-list
 * @secure
 */
export const deleteDemo03StudentErpDemo03CourseDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/demo03-course/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentErpDelete
 * @summary 删除学生
 * @request DELETE:/admin-api/infra/demo03-student-erp/delete
 * @secure
 */
export const deleteInfraDemo03StudentErpDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 学生
 * @name deleteInfraDemo03StudentErpDeleteList
 * @summary 批量删除学生
 * @request DELETE:/admin-api/infra/demo03-student-erp/delete-list
 * @secure
 */
export const deleteInfraDemo03StudentErpDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo03-student-erp/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例分类
 * @name deleteInfraDemo02CategoryDelete
 * @summary 删除示例分类
 * @request DELETE:/admin-api/infra/demo02-category/delete
 * @secure
 */
export const deleteInfraDemo02CategoryDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo02-category/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name deleteInfraDemo01ContactDelete
 * @summary 删除示例联系人
 * @request DELETE:/admin-api/infra/demo01-contact/delete
 * @secure
 */
export const deleteInfraDemo01ContactDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo01-contact/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 示例联系人
 * @name deleteInfraDemo01ContactDeleteList
 * @summary 批量删除示例联系人
 * @request DELETE:/admin-api/infra/demo01-contact/delete-list
 * @secure
 */
export const deleteInfraDemo01ContactDeleteList = (
  query: {
    /** 编号 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/demo01-contact/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name deleteInfraDataSourceConfigDelete
 * @summary 删除数据源配置
 * @request DELETE:/admin-api/infra/data-source-config/delete
 * @secure
 */
export const deleteInfraDataSourceConfigDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/data-source-config/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 数据源配置
 * @name deleteInfraDataSourceConfigDeleteList
 * @summary 批量删除数据源配置
 * @request DELETE:/admin-api/infra/data-source-config/delete-list
 * @secure
 */
export const deleteInfraDataSourceConfigDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/data-source-config/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name deleteInfraConfigDelete
 * @summary 删除参数配置
 * @request DELETE:/admin-api/infra/config/delete
 * @secure
 */
export const deleteInfraConfigDelete = (
  query: {
    /**
     * 编号
     * @format int64
     * @example 1024
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/config/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 参数配置
 * @name deleteInfraConfigDeleteList
 * @summary 批量删除参数配置
 * @request DELETE:/admin-api/infra/config/delete-list
 * @secure
 */
export const deleteInfraConfigDeleteList = (
  query: {
    /** 编号列表 */
    ids: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/config/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name deleteInfraCodegenDelete
 * @summary 删除数据库的表和字段定义
 * @request DELETE:/admin-api/infra/codegen/delete
 * @secure
 */
export const deleteInfraCodegenDelete = (
  query: {
    /**
     * 表编号
     * @format int64
     * @example 1024
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/codegen/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 代码生成器
 * @name deleteInfraCodegenDeleteList
 * @summary 批量删除数据库的表和字段定义
 * @request DELETE:/admin-api/infra/codegen/delete-list
 * @secure
 */
export const deleteInfraCodegenDeleteList = (
  query: {
    /** 表编号列表 */
    tableIds: number[];
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/infra/codegen/delete-list`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 用户组
 * @name deleteBpmUserGroupDelete
 * @summary 删除用户组
 * @request DELETE:/admin-api/bpm/user-group/delete
 * @secure
 */
export const deleteBpmUserGroupDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/user-group/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程任务实例
 * @name deleteBpmTaskDeleteSign
 * @summary 减签
 * @request DELETE:/admin-api/bpm/task/delete-sign
 * @secure
 */
export const deleteBpmTaskDeleteSign = (
  data: BpmTaskSignDeleteReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/task/delete-sign`,
    method: "DELETE",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程监听器
 * @name deleteBpmProcessListenerDelete
 * @summary 删除流程监听器
 * @request DELETE:/admin-api/bpm/process-listener/delete
 * @secure
 */
export const deleteBpmProcessListenerDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-listener/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 取消发起的流程
 *
 * @tags 管理后台 - 流程实例
 * @name deleteBpmProcessInstanceCancelByStartUser
 * @summary 用户取消流程实例
 * @request DELETE:/admin-api/bpm/process-instance/cancel-by-start-user
 * @secure
 */
export const deleteBpmProcessInstanceCancelByStartUser = (
  data: BpmProcessInstanceCancelReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-instance/cancel-by-start-user`,
    method: "DELETE",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * @description 管理员撤回流程
 *
 * @tags 管理后台 - 流程实例
 * @name deleteBpmProcessInstanceCancelByAdmin
 * @summary 管理员取消流程实例
 * @request DELETE:/admin-api/bpm/process-instance/cancel-by-admin
 * @secure
 */
export const deleteBpmProcessInstanceCancelByAdmin = (
  data: BpmProcessInstanceCancelReqVO,
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-instance/cancel-by-admin`,
    method: "DELETE",
    body: data,
    secure: true,
    type: ContentType.Json,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程表达式
 * @name deleteBpmProcessExpressionDelete
 * @summary 删除流程表达式
 * @request DELETE:/admin-api/bpm/process-expression/delete
 * @secure
 */
export const deleteBpmProcessExpressionDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/process-expression/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name deleteBpmModelDelete
 * @summary 删除模型
 * @request DELETE:/admin-api/bpm/model/delete
 * @secure
 */
export const deleteBpmModelDelete = (
  query: {
    /**
     * 编号
     * @example 1024
     */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 流程模型
 * @name deleteBpmModelClean
 * @summary 清理模型
 * @request DELETE:/admin-api/bpm/model/clean
 * @secure
 */
export const deleteBpmModelClean = (
  query: {
    /**
     * 编号
     * @example 1024
     */
    id: string;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/model/clean`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - 动态表单
 * @name deleteBpmFormDelete
 * @summary 删除动态表单
 * @request DELETE:/admin-api/bpm/form/delete
 * @secure
 */
export const deleteBpmFormDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/form/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags 管理后台 - BPM 流程分类
 * @name deleteBpmCategoryDelete
 * @summary 删除流程分类
 * @request DELETE:/admin-api/bpm/category/delete
 * @secure
 */
export const deleteBpmCategoryDelete = (
  query: {
    /**
     * 编号
     * @format int64
     */
    id: number;
  },
  params: RequestParams = {},
) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/category/delete`,
    method: "DELETE",
    query: query,
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiReport
 * @request GET:/admin-api/report/**
 * @secure
 */
export const getAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiReport
 * @request PUT:/admin-api/report/**
 * @secure
 */
export const putAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiReport
 * @request POST:/admin-api/report/**
 * @secure
 */
export const postAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiReport
 * @request DELETE:/admin-api/report/**
 * @secure
 */
export const deleteAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiReport
 * @request OPTIONS:/admin-api/report/**
 * @secure
 */
export const optionsAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiReport
 * @request HEAD:/admin-api/report/**
 * @secure
 */
export const headAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiReport
 * @request PATCH:/admin-api/report/**
 * @secure
 */
export const patchAdminApiReport = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/report/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiTrade
 * @request GET:/admin-api/trade/**
 * @secure
 */
export const getAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiTrade
 * @request PUT:/admin-api/trade/**
 * @secure
 */
export const putAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiTrade
 * @request POST:/admin-api/trade/**
 * @secure
 */
export const postAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiTrade
 * @request DELETE:/admin-api/trade/**
 * @secure
 */
export const deleteAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiTrade
 * @request OPTIONS:/admin-api/trade/**
 * @secure
 */
export const optionsAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiTrade
 * @request HEAD:/admin-api/trade/**
 * @secure
 */
export const headAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiTrade
 * @request PATCH:/admin-api/trade/**
 * @secure
 */
export const patchAdminApiTrade = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/trade/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiPromotion
 * @request GET:/admin-api/promotion/**
 * @secure
 */
export const getAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiPromotion
 * @request PUT:/admin-api/promotion/**
 * @secure
 */
export const putAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiPromotion
 * @request POST:/admin-api/promotion/**
 * @secure
 */
export const postAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiPromotion
 * @request DELETE:/admin-api/promotion/**
 * @secure
 */
export const deleteAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiPromotion
 * @request OPTIONS:/admin-api/promotion/**
 * @secure
 */
export const optionsAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiPromotion
 * @request HEAD:/admin-api/promotion/**
 * @secure
 */
export const headAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiPromotion
 * @request PATCH:/admin-api/promotion/**
 * @secure
 */
export const patchAdminApiPromotion = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/promotion/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiProduct
 * @request GET:/admin-api/product/**
 * @secure
 */
export const getAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiProduct
 * @request PUT:/admin-api/product/**
 * @secure
 */
export const putAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiProduct
 * @request POST:/admin-api/product/**
 * @secure
 */
export const postAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiProduct
 * @request DELETE:/admin-api/product/**
 * @secure
 */
export const deleteAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiProduct
 * @request OPTIONS:/admin-api/product/**
 * @secure
 */
export const optionsAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiProduct
 * @request HEAD:/admin-api/product/**
 * @secure
 */
export const headAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiProduct
 * @request PATCH:/admin-api/product/**
 * @secure
 */
export const patchAdminApiProduct = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/product/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiPay
 * @request GET:/admin-api/pay/**
 * @secure
 */
export const getAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiPay
 * @request PUT:/admin-api/pay/**
 * @secure
 */
export const putAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiPay
 * @request POST:/admin-api/pay/**
 * @secure
 */
export const postAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiPay
 * @request DELETE:/admin-api/pay/**
 * @secure
 */
export const deleteAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiPay
 * @request OPTIONS:/admin-api/pay/**
 * @secure
 */
export const optionsAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiPay
 * @request HEAD:/admin-api/pay/**
 * @secure
 */
export const headAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiPay
 * @request PATCH:/admin-api/pay/**
 * @secure
 */
export const patchAdminApiPay = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/pay/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiMp
 * @request GET:/admin-api/mp/**
 * @secure
 */
export const getAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiMp
 * @request PUT:/admin-api/mp/**
 * @secure
 */
export const putAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiMp
 * @request POST:/admin-api/mp/**
 * @secure
 */
export const postAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiMp
 * @request DELETE:/admin-api/mp/**
 * @secure
 */
export const deleteAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiMp
 * @request OPTIONS:/admin-api/mp/**
 * @secure
 */
export const optionsAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiMp
 * @request HEAD:/admin-api/mp/**
 * @secure
 */
export const headAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiMp
 * @request PATCH:/admin-api/mp/**
 * @secure
 */
export const patchAdminApiMp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/mp/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiIot
 * @request GET:/admin-api/iot/**
 * @secure
 */
export const getAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiIot
 * @request PUT:/admin-api/iot/**
 * @secure
 */
export const putAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiIot
 * @request POST:/admin-api/iot/**
 * @secure
 */
export const postAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiIot
 * @request DELETE:/admin-api/iot/**
 * @secure
 */
export const deleteAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiIot
 * @request OPTIONS:/admin-api/iot/**
 * @secure
 */
export const optionsAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiIot
 * @request HEAD:/admin-api/iot/**
 * @secure
 */
export const headAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiIot
 * @request PATCH:/admin-api/iot/**
 * @secure
 */
export const patchAdminApiIot = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/iot/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiErp
 * @request GET:/admin-api/erp/**
 * @secure
 */
export const getAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiErp
 * @request PUT:/admin-api/erp/**
 * @secure
 */
export const putAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiErp
 * @request POST:/admin-api/erp/**
 * @secure
 */
export const postAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiErp
 * @request DELETE:/admin-api/erp/**
 * @secure
 */
export const deleteAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiErp
 * @request OPTIONS:/admin-api/erp/**
 * @secure
 */
export const optionsAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiErp
 * @request HEAD:/admin-api/erp/**
 * @secure
 */
export const headAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiErp
 * @request PATCH:/admin-api/erp/**
 * @secure
 */
export const patchAdminApiErp = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/erp/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiCrm
 * @request GET:/admin-api/crm/**
 * @secure
 */
export const getAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiCrm
 * @request PUT:/admin-api/crm/**
 * @secure
 */
export const putAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiCrm
 * @request POST:/admin-api/crm/**
 * @secure
 */
export const postAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiCrm
 * @request DELETE:/admin-api/crm/**
 * @secure
 */
export const deleteAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiCrm
 * @request OPTIONS:/admin-api/crm/**
 * @secure
 */
export const optionsAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiCrm
 * @request HEAD:/admin-api/crm/**
 * @secure
 */
export const headAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiCrm
 * @request PATCH:/admin-api/crm/**
 * @secure
 */
export const patchAdminApiCrm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/crm/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiBpm
 * @request GET:/admin-api/bpm/**
 * @secure
 */
export const getAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiBpm
 * @request PUT:/admin-api/bpm/**
 * @secure
 */
export const putAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiBpm
 * @request POST:/admin-api/bpm/**
 * @secure
 */
export const postAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiBpm
 * @request DELETE:/admin-api/bpm/**
 * @secure
 */
export const deleteAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiBpm
 * @request OPTIONS:/admin-api/bpm/**
 * @secure
 */
export const optionsAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiBpm
 * @request HEAD:/admin-api/bpm/**
 * @secure
 */
export const headAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiBpm
 * @request PATCH:/admin-api/bpm/**
 * @secure
 */
export const patchAdminApiBpm = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/bpm/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name getAdminApiAi
 * @request GET:/admin-api/ai/**
 * @secure
 */
export const getAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "GET",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name putAdminApiAi
 * @request PUT:/admin-api/ai/**
 * @secure
 */
export const putAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "PUT",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name postAdminApiAi
 * @request POST:/admin-api/ai/**
 * @secure
 */
export const postAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "POST",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name deleteAdminApiAi
 * @request DELETE:/admin-api/ai/**
 * @secure
 */
export const deleteAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "DELETE",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name optionsAdminApiAi
 * @request OPTIONS:/admin-api/ai/**
 * @secure
 */
export const optionsAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "OPTIONS",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name headAdminApiAi
 * @request HEAD:/admin-api/ai/**
 * @secure
 */
export const headAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "HEAD",
    secure: true,
    skipBizLogic: false,
    ...params,
  });

/**
 * No description
 *
 * @tags default-controller
 * @name patchAdminApiAi
 * @request PATCH:/admin-api/ai/**
 * @secure
 */
export const patchAdminApiAi = (params: RequestParams = {}) =>
  request<CommonResultBoolean>({
    path: `/admin-api/ai/**`,
    method: "PATCH",
    secure: true,
    skipBizLogic: false,
    ...params,
  });
