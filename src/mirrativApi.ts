import fs from 'fs';
import path from 'path';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  ApiClient,
  Client as GeneratedClient,
  HttpMethod,
  RequestBody$postApiAnalyticsLog,
  Response$postApiAnalyticsLog$Status$200,
  RequestBody$postApiAppAdd_my_app,
  Response$postApiAppAdd_my_app$Status$200,
  Response$getApiAppApp_user_detail$Status$200,
  Parameter$getApiAppApp_user_detail,
  Response$getApiAppAppeal_banners$Status$200,
  Parameter$getApiAppAppeal_banners,
  RequestBody$postApiAppDelete_app_user_detail,
  Response$postApiAppDelete_app_user_detail$Status$200,
  RequestBody$postApiAppDelete_my_app,
  Response$postApiAppDelete_my_app$Status$200,
  Response$getApiAppMy_app$Status$200,
  Parameter$getApiAppMy_app,
  Response$getApiAppOnlive_apps$Status$200,
  RequestBody$postApiAppPost_app_user_detail,
  Response$postApiAppPost_app_user_detail$Status$200,
  Response$getApiAppRecommend_apps$Status$200,
  Response$getApiAppSearch$Status$200,
  Parameter$getApiAppSearch,
  Response$getApiAppUser_apps$Status$200,
  Parameter$getApiAppUser_apps,
  Response$getApiCampaignCompleted_mission$Status$200,
  Parameter$getApiCampaignCompleted_mission,
  Response$getApiCampaignDetail$Status$200,
  Parameter$getApiCampaignDetail,
  Response$getApiCatalogBanners$Status$200,
  Parameter$getApiCatalogBanners,
  Response$getApiCatalogFollow$Status$200,
  Response$getApiCatalogLives$Status$200,
  Parameter$getApiCatalogLives,
  Response$getApiCatalogMyapp_recommend_lives$Status$200,
  Response$getApiCatalogTabs$Status$200,
  RequestBody$postApiChatJoin,
  Response$postApiChatJoin$Status$200,
  RequestBody$postApiChatPost_text,
  Response$postApiChatPost_text$Status$200,
  RequestBody$postApiChatRead,
  Response$postApiChatRead$Status$200,
  Response$getApiChatThread$Status$200,
  Parameter$getApiChatThread,
  RequestBody$postApiChatThread_visibility,
  Response$postApiChatThread_visibility$Status$200,
  Response$getApiChatThreads$Status$200,
  Parameter$getApiChatThreads,
  Response$getApiClosetAvatar$Status$200,
  Parameter$getApiClosetAvatar,
  Response$getApiClosetAvatar_parts$Status$200,
  Response$getApiClosetClosets$Status$200,
  RequestBody$postApiClosetUpdate_closet_avatar,
  Response$postApiClosetUpdate_closet_avatar$Status$200,
  RequestBody$postApiClosetUpdate_closet_images,
  Response$postApiClosetUpdate_closet_images$Status$200,
  Response$getApiCoin_boxStatus$Status$200,
  Parameter$getApiCoin_boxStatus,
  Response$getApiCollabCollaborating_users$Status$200,
  Parameter$getApiCollabCollaborating_users,
  Response$getApiContractSummary$Status$200,
  Response$getApiEventNotice$Status$200,
  Parameter$getApiEventNotice,
  RequestBody$postApiFeatureRegister_device_token,
  Response$postApiFeatureRegister_device_token$Status$200,
  Response$getApiGiftEmomo_run_gifts$Status$200,
  Response$getApiGiftPanels$Status$200,
  Parameter$getApiGiftPanels,
  Response$getApiGiftRanking$Status$200,
  Parameter$getApiGiftRanking,
  RequestBody$postApiGiftSend,
  Response$postApiGiftSend$Status$200,
  Response$getApiGiftUnique_emomo_gift_config$Status$200,
  Response$getApiGiftUnique_emomo_gift_slots$Status$200,
  RequestBody$postApiGiftUpdate_simple_unique_emomo_gift,
  Response$postApiGiftUpdate_simple_unique_emomo_gift$Status$200,
  RequestBody$postApiGift_appeal_popupRead,
  Response$postApiGift_appeal_popupRead$Status$200,
  RequestBody$postApiGoogleConnect,
  Response$postApiGoogleConnect$Status$200,
  Response$postApiGoogleDisconnect$Status$200,
  RequestBody$postApiGraphBlock,
  Response$postApiGraphBlock$Status$200,
  Response$getApiGraphBlocked_users$Status$200,
  Parameter$getApiGraphBlocked_users,
  RequestBody$postApiGraphFollow,
  Response$postApiGraphFollow$Status$200,
  Response$getApiGraphFollowers$Status$200,
  Parameter$getApiGraphFollowers,
  Response$getApiGraphFollowings$Status$200,
  Parameter$getApiGraphFollowings,
  Response$getApiGraphRecommend_users$Status$200,
  Parameter$getApiGraphRecommend_users,
  Response$getApiGraphSearch$Status$200,
  Parameter$getApiGraphSearch,
  RequestBody$postApiGraphUnblock,
  Response$postApiGraphUnblock$Status$200,
  RequestBody$postApiGraphUnfollow,
  Response$postApiGraphUnfollow$Status$200,
  RequestBody$postApiGroupEdit,
  Response$postApiGroupEdit$Status$200,
  RequestBody$postApiGroupInvite_users,
  Response$postApiGroupInvite_users$Status$200,
  RequestBody$postApiGroupLeave,
  Response$postApiGroupLeave$Status$200,
  Response$getApiGroupUsers$Status$200,
  Parameter$getApiGroupUsers,
  Response$getApiLiveAppeal_links$Status$200,
  Parameter$getApiLiveAppeal_links,
  Response$getApiLiveCampaign$Status$200,
  Parameter$getApiLiveCampaign,
  Response$getApiLiveGet_streaming_url$Status$200,
  Parameter$getApiLiveGet_streaming_url,
  RequestBody$postApiLiveLeave,
  Response$postApiLiveLeave$Status$200,
  Response$getApiLiveLive$Status$200,
  Parameter$getApiLiveLive,
  RequestBody$postApiLiveLive_comment,
  Response$postApiLiveLive_comment$Status$200,
  Response$getApiLiveLive_comments$Status$200,
  Parameter$getApiLiveLive_comments,
  Response$postApiLiveLive_create$Status$200,
  RequestBody$postApiLiveLive_edit,
  Response$postApiLiveLive_edit$Status$200,
  Response$getApiLiveLive_game_catalog$Status$200,
  Parameter$getApiLiveLive_game_catalog,
  Response$getApiLiveLive_history$Status$200,
  Parameter$getApiLiveLive_history,
  RequestBody$postApiLiveLive_polling,
  Response$postApiLiveLive_polling$Status$200,
  Response$getApiLiveOnline_users$Status$200,
  Parameter$getApiLiveOnline_users,
  RequestBody$postApiLivePreview_end,
  Response$postApiLivePreview_end$Status$200,
  RequestBody$postApiLivePreview_polling,
  Response$postApiLivePreview_polling$Status$200,
  RequestBody$postApiLivePreview_start,
  Response$postApiLivePreview_start$Status$200,
  RequestBody$postApiLiveSanitize_text,
  Response$postApiLiveSanitize_text$Status$200,
  Response$getApiLiveSearch$Status$200,
  Parameter$getApiLiveSearch,
  RequestBody$postApiLiveUpdate_archive_settings,
  Response$postApiLiveUpdate_archive_settings$Status$200,
  Response$getApiLiveView_history$Status$200,
  RequestBody$postApiLive_gameEnd,
  Response$postApiLive_gameEnd$Status$200,
  Response$getApiLive_gameList$Status$200,
  Response$getApiLive_gameNew_counts$Status$200,
  Parameter$getApiLive_gameNew_counts,
  RequestBody$postApiLive_gameStart,
  Response$postApiLive_gameStart$Status$200,
  Response$getApiMissionCurrent_login_bonus$Status$200,
  Response$getApiMissionDaily$Status$200,
  Response$getApiMissionStatus$Status$200,
  Response$getApiMissionTutorial_status$Status$200,
  Response$getApiMissionWeekly$Status$200,
  Response$getApiNoticeCampaigns$Status$200,
  Parameter$getApiNoticeCampaigns,
  Response$getApiNoticeCounts$Status$200,
  Parameter$getApiNoticeCounts,
  Response$getApiNoticeNews$Status$200,
  Response$getApiNoticePopups$Status$200,
  Parameter$getApiNoticePopups,
  Response$getApiNoticePresent_boxes$Status$200,
  Response$getApiNoticeYours_v2$Status$200,
  Response$getApiNotificationPush_settings_v3$Status$200,
  RequestBody$postApiNotificationPush_settings_v3,
  Response$postApiNotificationPush_settings_v3$Status$200,
  Response$getApiRankingFocusable$Status$200,
  Response$getApiRankingUser_detail$Status$200,
  Parameter$getApiRankingUser_detail,
  Response$getApiReward_adAvailable_reward_ad_ids$Status$200,
  Parameter$getApiReward_adAvailable_reward_ad_ids,
  Response$getApiReward_adCheck_available_device$Status$200,
  RequestBody$postApiReward_adComplete,
  Response$postApiReward_adComplete$Status$200,
  Response$getApiSeason_ratingStatus$Status$200,
  Parameter$getApiSeason_ratingStatus,
  Response$getApiSeason_yellStatus$Status$200,
  Parameter$getApiSeason_yellStatus,
  Response$getApiSeason_yellViewers$Status$200,
  Parameter$getApiSeason_yellViewers,
  Response$getApiTooltipStart_live_button$Status$200,
  RequestBody$postApiUserBad_report,
  Response$postApiUserBad_report$Status$200,
  Response$getApiUserBroadcast_settings$Status$200,
  RequestBody$postApiUserCheck_minor,
  Response$postApiUserCheck_minor$Status$200,
  Response$getApiUserCurrency$Status$200,
  RequestBody$postApiUserDate_of_birth,
  Response$postApiUserDate_of_birth$Status$200,
  Response$postApiUserDelete_live_announcement$Status$200,
  Response$getApiUserFavorite_live_setting$Status$200,
  Response$postApiUserLogout$Status$200,
  Response$getApiUserMe$Status$200,
  RequestBody$postApiUserPost_live_announcement,
  Response$postApiUserPost_live_announcement$Status$200,
  RequestBody$postApiUserPost_live_request,
  Response$postApiUserPost_live_request$Status$200,
  RequestBody$postApiUserPost_review_confirmation,
  Response$postApiUserPost_review_confirmation$Status$200,
  Response$getApiUserProfile$Status$200,
  Parameter$getApiUserProfile,
  RequestBody$postApiUserProfile_edit,
  Response$postApiUserProfile_edit$Status$200,
  Response$getApiUserSearch$Status$200,
  Parameter$getApiUserSearch,
  Response$getApiUserSetting_root$Status$200,
  Response$getApiUserTos$Status$200,
  RequestBody$postApiUserUpdate_favorite_live_setting,
  Response$postApiUserUpdate_favorite_live_setting$Status$200,
  RequestBody$postApiUserUpdate_recording_settings,
  Response$postApiUserUpdate_recording_settings$Status$200,
  RequestBody$postApiUserUse_favorite_live_setting,
  Response$postApiUserUse_favorite_live_setting$Status$200,
  Response$getApiUserWatchword$Status$200,
  RequestBody$postApiChatAgree,
  Response$postApiChatAgree$Status$200,
  RequestBody$postApiChatPost_thanks,
  Response$postApiChatPost_thanks$Status$200,
  RequestBody$postApiChatPost_thanks_to_live_watched_users,
  Response$postApiChatPost_thanks_to_live_watched_users$Status$200,
  RequestBody$postApiCollabClose,
  Response$postApiCollabClose$Status$200,
  Response$getApiCollabConnected_streaming_collab_lives$Status$200,
  Parameter$getApiCollabConnected_streaming_collab_lives,
  Response$getApiCollabInvitable_users$Status$200,
  Parameter$getApiCollabInvitable_users,
  RequestBody$postApiCollabInvite,
  Response$postApiCollabInvite$Status$200,
  RequestBody$postApiCollabSend_to_peer,
  Response$postApiCollabSend_to_peer$Status$200,
  RequestBody$postApiCollabStart,
  Response$postApiCollabStart$Status$200,
  RequestBody$postApiGiftUpdate_rich_unique_emomo_gift,
  Response$postApiGiftUpdate_rich_unique_emomo_gift$Status$200,
  Response$getApiGift_gachaUser_stocks$Status$200,
  Parameter$getApiGift_gachaUser_stocks,
  RequestBody$postApiGraphFollow_live_watched_users,
  Response$postApiGraphFollow_live_watched_users$Status$200,
  Response$getApiKaraoke$Status$200,
  Parameter$getApiKaraoke,
  Response$getApiKaraokeBy_genre$Status$200,
  Parameter$getApiKaraokeBy_genre,
  Response$getApiKaraokeGenres$Status$200,
  Response$getApiKaraokeRecommend_singers$Status$200,
  Parameter$getApiKaraokeRecommend_singers,
  Response$getApiKaraokeSearch$Status$200,
  Parameter$getApiKaraokeSearch,
  Response$getApiKaraokeSingers$Status$200,
  Parameter$getApiKaraokeSingers,
  Response$getApiLiveBroadcast_result$Status$200,
  Parameter$getApiLiveBroadcast_result,
  RequestBody$postApiLiveDelete_live_history,
  Response$postApiLiveDelete_live_history$Status$200,
  RequestBody$postApiLiveKick_out,
  Response$postApiLiveKick_out$Status$200,
  RequestBody$postApiLiveLive_app_identifier_changed,
  Response$postApiLiveLive_app_identifier_changed$Status$200,
  RequestBody$postApiLiveLive_capture_image,
  Response$postApiLiveLive_capture_image$Status$200,
  RequestBody$postApiLiveLive_end,
  Response$postApiLiveLive_end$Status$200,
  RequestBody$postApiLiveLive_heartbeat,
  Response$postApiLiveLive_heartbeat$Status$200,
  RequestBody$postApiLiveLive_start,
  Response$postApiLiveLive_start$Status$200,
  RequestBody$postApiLiveUpdate_emomo_visible,
  Response$postApiLiveUpdate_emomo_visible$Status$200,
  RequestBody$postApiLiveUpdate_wipe_enabled,
  Response$postApiLiveUpdate_wipe_enabled$Status$200,
  Response$getApiLiveViewers_result$Status$200,
  Parameter$getApiLiveViewers_result,
  RequestBody$postApiLive_gamePing,
  Response$postApiLive_gamePing$Status$200,
  RequestBody$postApiMissionReceive_login_bonus_reward,
  Response$postApiMissionReceive_login_bonus_reward$Status$200,
  RequestBody$postApiModeratorAdd,
  Response$postApiModeratorAdd$Status$200,
  RequestBody$postApiModeratorDelete,
  Response$postApiModeratorDelete$Status$200,
  Response$getApiReward_adOfferwalls$Status$200,
  Response$getApiSeason_ratingLive_result$Status$200,
  Parameter$getApiSeason_ratingLive_result,
  Response$getApiShooterMatching$Status$200,
} from './www.mirrativ.com';

// MRID を取得したい full-response メソッドの key (rawKey) を列挙
const MRID_KEYS = new Set<string>([
  'userMe',
  'googleConnect',
  // ここに追加／削除したい key を書くだけ
]);

export interface MirrativApiConfig {
  baseUrl?: string;
  axiosConfig?: AxiosRequestConfig;
  retryOptions?: { retries: number; delay: number };
  logRequests?: boolean;
}

export type ExtractStatus<T> =
  T extends { 'application/json': { status?: infer S } }
    ? S
    : never;

export type AnalyticsLogStatus = ExtractStatus<Response$postApiAnalyticsLog$Status$200>;

export type AppAdd_my_appStatus = ExtractStatus<Response$postApiAppAdd_my_app$Status$200>;

export type AppApp_user_detailStatus = ExtractStatus<Response$getApiAppApp_user_detail$Status$200>;

export type AppAppeal_bannersStatus = ExtractStatus<Response$getApiAppAppeal_banners$Status$200>;

export type AppDelete_app_user_detailStatus = ExtractStatus<Response$postApiAppDelete_app_user_detail$Status$200>;

export type AppDelete_my_appStatus = ExtractStatus<Response$postApiAppDelete_my_app$Status$200>;

export type AppMy_appStatus = ExtractStatus<Response$getApiAppMy_app$Status$200>;

export type AppOnlive_appsStatus = ExtractStatus<Response$getApiAppOnlive_apps$Status$200>;

export type AppPost_app_user_detailStatus = ExtractStatus<Response$postApiAppPost_app_user_detail$Status$200>;

export type AppRecommend_appsStatus = ExtractStatus<Response$getApiAppRecommend_apps$Status$200>;

export type AppSearchStatus = ExtractStatus<Response$getApiAppSearch$Status$200>;

export type AppUser_appsStatus = ExtractStatus<Response$getApiAppUser_apps$Status$200>;

export type CampaignCompleted_missionStatus = ExtractStatus<Response$getApiCampaignCompleted_mission$Status$200>;

export type CampaignDetailStatus = ExtractStatus<Response$getApiCampaignDetail$Status$200>;

export type CatalogBannersStatus = ExtractStatus<Response$getApiCatalogBanners$Status$200>;

export type CatalogFollowStatus = ExtractStatus<Response$getApiCatalogFollow$Status$200>;

export type CatalogLivesStatus = ExtractStatus<Response$getApiCatalogLives$Status$200>;

export type CatalogMyapp_recommend_livesStatus = ExtractStatus<Response$getApiCatalogMyapp_recommend_lives$Status$200>;

export type CatalogTabsStatus = ExtractStatus<Response$getApiCatalogTabs$Status$200>;

export type ChatJoinStatus = ExtractStatus<Response$postApiChatJoin$Status$200>;

export type ChatPost_textStatus = ExtractStatus<Response$postApiChatPost_text$Status$200>;

export type ChatReadStatus = ExtractStatus<Response$postApiChatRead$Status$200>;

export type ChatThreadStatus = ExtractStatus<Response$getApiChatThread$Status$200>;

export type ChatThread_visibilityStatus = ExtractStatus<Response$postApiChatThread_visibility$Status$200>;

export type ChatThreadsStatus = ExtractStatus<Response$getApiChatThreads$Status$200>;

export type ClosetAvatarStatus = ExtractStatus<Response$getApiClosetAvatar$Status$200>;

export type ClosetAvatar_partsStatus = ExtractStatus<Response$getApiClosetAvatar_parts$Status$200>;

export type ClosetClosetsStatus = ExtractStatus<Response$getApiClosetClosets$Status$200>;

export type ClosetUpdate_closet_avatarStatus = ExtractStatus<Response$postApiClosetUpdate_closet_avatar$Status$200>;

export type ClosetUpdate_closet_imagesStatus = ExtractStatus<Response$postApiClosetUpdate_closet_images$Status$200>;

export type Coin_boxStatusStatus = ExtractStatus<Response$getApiCoin_boxStatus$Status$200>;

export type CollabCollaborating_usersStatus = ExtractStatus<Response$getApiCollabCollaborating_users$Status$200>;

export type ContractSummaryStatus = ExtractStatus<Response$getApiContractSummary$Status$200>;

export type EventNoticeStatus = ExtractStatus<Response$getApiEventNotice$Status$200>;

export type FeatureRegister_device_tokenStatus = ExtractStatus<Response$postApiFeatureRegister_device_token$Status$200>;

export type GiftEmomo_run_giftsStatus = ExtractStatus<Response$getApiGiftEmomo_run_gifts$Status$200>;

export type GiftPanelsStatus = ExtractStatus<Response$getApiGiftPanels$Status$200>;

export type GiftRankingStatus = ExtractStatus<Response$getApiGiftRanking$Status$200>;

export type GiftSendStatus = ExtractStatus<Response$postApiGiftSend$Status$200>;

export type GiftUnique_emomo_gift_configStatus = ExtractStatus<Response$getApiGiftUnique_emomo_gift_config$Status$200>;

export type GiftUnique_emomo_gift_slotsStatus = ExtractStatus<Response$getApiGiftUnique_emomo_gift_slots$Status$200>;

export type GiftUpdate_simple_unique_emomo_giftStatus = ExtractStatus<Response$postApiGiftUpdate_simple_unique_emomo_gift$Status$200>;

export type Gift_appeal_popupReadStatus = ExtractStatus<Response$postApiGift_appeal_popupRead$Status$200>;

export type GoogleConnectStatus = ExtractStatus<Response$postApiGoogleConnect$Status$200>;

export type GoogleDisconnectStatus = ExtractStatus<Response$postApiGoogleDisconnect$Status$200>;

export type GraphBlockStatus = ExtractStatus<Response$postApiGraphBlock$Status$200>;

export type GraphBlocked_usersStatus = ExtractStatus<Response$getApiGraphBlocked_users$Status$200>;

export type GraphFollowStatus = ExtractStatus<Response$postApiGraphFollow$Status$200>;

export type GraphFollowersStatus = ExtractStatus<Response$getApiGraphFollowers$Status$200>;

export type GraphFollowingsStatus = ExtractStatus<Response$getApiGraphFollowings$Status$200>;

export type GraphRecommend_usersStatus = ExtractStatus<Response$getApiGraphRecommend_users$Status$200>;

export type GraphSearchStatus = ExtractStatus<Response$getApiGraphSearch$Status$200>;

export type GraphUnblockStatus = ExtractStatus<Response$postApiGraphUnblock$Status$200>;

export type GraphUnfollowStatus = ExtractStatus<Response$postApiGraphUnfollow$Status$200>;

export type GroupEditStatus = ExtractStatus<Response$postApiGroupEdit$Status$200>;

export type GroupInvite_usersStatus = ExtractStatus<Response$postApiGroupInvite_users$Status$200>;

export type GroupLeaveStatus = ExtractStatus<Response$postApiGroupLeave$Status$200>;

export type GroupUsersStatus = ExtractStatus<Response$getApiGroupUsers$Status$200>;

export type LiveAppeal_linksStatus = ExtractStatus<Response$getApiLiveAppeal_links$Status$200>;

export type LiveCampaignStatus = ExtractStatus<Response$getApiLiveCampaign$Status$200>;

export type LiveGet_streaming_urlStatus = ExtractStatus<Response$getApiLiveGet_streaming_url$Status$200>;

export type LiveLeaveStatus = ExtractStatus<Response$postApiLiveLeave$Status$200>;

export type LiveLiveStatus = ExtractStatus<Response$getApiLiveLive$Status$200>;

export type LiveLive_commentStatus = ExtractStatus<Response$postApiLiveLive_comment$Status$200>;

export type LiveLive_commentsStatus = ExtractStatus<Response$getApiLiveLive_comments$Status$200>;

export type LiveLive_createStatus = ExtractStatus<Response$postApiLiveLive_create$Status$200>;

export type LiveLive_editStatus = ExtractStatus<Response$postApiLiveLive_edit$Status$200>;

export type LiveLive_game_catalogStatus = ExtractStatus<Response$getApiLiveLive_game_catalog$Status$200>;

export type LiveLive_historyStatus = ExtractStatus<Response$getApiLiveLive_history$Status$200>;

export type LiveLive_pollingStatus = ExtractStatus<Response$postApiLiveLive_polling$Status$200>;

export type LiveOnline_usersStatus = ExtractStatus<Response$getApiLiveOnline_users$Status$200>;

export type LivePreview_endStatus = ExtractStatus<Response$postApiLivePreview_end$Status$200>;

export type LivePreview_pollingStatus = ExtractStatus<Response$postApiLivePreview_polling$Status$200>;

export type LivePreview_startStatus = ExtractStatus<Response$postApiLivePreview_start$Status$200>;

export type LiveSanitize_textStatus = ExtractStatus<Response$postApiLiveSanitize_text$Status$200>;

export type LiveSearchStatus = ExtractStatus<Response$getApiLiveSearch$Status$200>;

export type LiveUpdate_archive_settingsStatus = ExtractStatus<Response$postApiLiveUpdate_archive_settings$Status$200>;

export type LiveView_historyStatus = ExtractStatus<Response$getApiLiveView_history$Status$200>;

export type Live_gameEndStatus = ExtractStatus<Response$postApiLive_gameEnd$Status$200>;

export type Live_gameListStatus = ExtractStatus<Response$getApiLive_gameList$Status$200>;

export type Live_gameNew_countsStatus = ExtractStatus<Response$getApiLive_gameNew_counts$Status$200>;

export type Live_gameStartStatus = ExtractStatus<Response$postApiLive_gameStart$Status$200>;

export type MissionCurrent_login_bonusStatus = ExtractStatus<Response$getApiMissionCurrent_login_bonus$Status$200>;

export type MissionDailyStatus = ExtractStatus<Response$getApiMissionDaily$Status$200>;

export type MissionStatusStatus = ExtractStatus<Response$getApiMissionStatus$Status$200>;

export type MissionTutorial_statusStatus = ExtractStatus<Response$getApiMissionTutorial_status$Status$200>;

export type MissionWeeklyStatus = ExtractStatus<Response$getApiMissionWeekly$Status$200>;

export type NoticeCampaignsStatus = ExtractStatus<Response$getApiNoticeCampaigns$Status$200>;

export type NoticeCountsStatus = ExtractStatus<Response$getApiNoticeCounts$Status$200>;

export type NoticeNewsStatus = ExtractStatus<Response$getApiNoticeNews$Status$200>;

export type NoticePopupsStatus = ExtractStatus<Response$getApiNoticePopups$Status$200>;

export type NoticePresent_boxesStatus = ExtractStatus<Response$getApiNoticePresent_boxes$Status$200>;

export type NoticeYours_v2Status = ExtractStatus<Response$getApiNoticeYours_v2$Status$200>;

export type GetNotificationPush_settings_v3Status = ExtractStatus<Response$getApiNotificationPush_settings_v3$Status$200>;

export type PostNotificationPush_settings_v3Status = ExtractStatus<Response$postApiNotificationPush_settings_v3$Status$200>;

export type RankingFocusableStatus = ExtractStatus<Response$getApiRankingFocusable$Status$200>;

export type RankingUser_detailStatus = ExtractStatus<Response$getApiRankingUser_detail$Status$200>;

export type Reward_adAvailable_reward_ad_idsStatus = ExtractStatus<Response$getApiReward_adAvailable_reward_ad_ids$Status$200>;

export type Reward_adCheck_available_deviceStatus = ExtractStatus<Response$getApiReward_adCheck_available_device$Status$200>;

export type Reward_adCompleteStatus = ExtractStatus<Response$postApiReward_adComplete$Status$200>;

export type Season_ratingStatusStatus = ExtractStatus<Response$getApiSeason_ratingStatus$Status$200>;

export type Season_yellStatusStatus = ExtractStatus<Response$getApiSeason_yellStatus$Status$200>;

export type Season_yellViewersStatus = ExtractStatus<Response$getApiSeason_yellViewers$Status$200>;

export type TooltipStart_live_buttonStatus = ExtractStatus<Response$getApiTooltipStart_live_button$Status$200>;

export type UserBad_reportStatus = ExtractStatus<Response$postApiUserBad_report$Status$200>;

export type UserBroadcast_settingsStatus = ExtractStatus<Response$getApiUserBroadcast_settings$Status$200>;

export type UserCheck_minorStatus = ExtractStatus<Response$postApiUserCheck_minor$Status$200>;

export type UserCurrencyStatus = ExtractStatus<Response$getApiUserCurrency$Status$200>;

export type UserDate_of_birthStatus = ExtractStatus<Response$postApiUserDate_of_birth$Status$200>;

export type UserDelete_live_announcementStatus = ExtractStatus<Response$postApiUserDelete_live_announcement$Status$200>;

export type UserFavorite_live_settingStatus = ExtractStatus<Response$getApiUserFavorite_live_setting$Status$200>;

export type UserLogoutStatus = ExtractStatus<Response$postApiUserLogout$Status$200>;

export type UserMeStatus = ExtractStatus<Response$getApiUserMe$Status$200>;

export type UserPost_live_announcementStatus = ExtractStatus<Response$postApiUserPost_live_announcement$Status$200>;

export type UserPost_live_requestStatus = ExtractStatus<Response$postApiUserPost_live_request$Status$200>;

export type UserPost_review_confirmationStatus = ExtractStatus<Response$postApiUserPost_review_confirmation$Status$200>;

export type UserProfileStatus = ExtractStatus<Response$getApiUserProfile$Status$200>;

export type UserProfile_editStatus = ExtractStatus<Response$postApiUserProfile_edit$Status$200>;

export type UserSearchStatus = ExtractStatus<Response$getApiUserSearch$Status$200>;

export type UserSetting_rootStatus = ExtractStatus<Response$getApiUserSetting_root$Status$200>;

export type UserTosStatus = ExtractStatus<Response$getApiUserTos$Status$200>;

export type UserUpdate_favorite_live_settingStatus = ExtractStatus<Response$postApiUserUpdate_favorite_live_setting$Status$200>;

export type UserUpdate_recording_settingsStatus = ExtractStatus<Response$postApiUserUpdate_recording_settings$Status$200>;

export type UserUse_favorite_live_settingStatus = ExtractStatus<Response$postApiUserUse_favorite_live_setting$Status$200>;

export type UserWatchwordStatus = ExtractStatus<Response$getApiUserWatchword$Status$200>;

export type ChatAgreeStatus = ExtractStatus<Response$postApiChatAgree$Status$200>;

export type ChatPost_thanksStatus = ExtractStatus<Response$postApiChatPost_thanks$Status$200>;

export type ChatPost_thanks_to_live_watched_usersStatus = ExtractStatus<Response$postApiChatPost_thanks_to_live_watched_users$Status$200>;

export type CollabCloseStatus = ExtractStatus<Response$postApiCollabClose$Status$200>;

export type CollabConnected_streaming_collab_livesStatus = ExtractStatus<Response$getApiCollabConnected_streaming_collab_lives$Status$200>;

export type CollabInvitable_usersStatus = ExtractStatus<Response$getApiCollabInvitable_users$Status$200>;

export type CollabInviteStatus = ExtractStatus<Response$postApiCollabInvite$Status$200>;

export type CollabSend_to_peerStatus = ExtractStatus<Response$postApiCollabSend_to_peer$Status$200>;

export type CollabStartStatus = ExtractStatus<Response$postApiCollabStart$Status$200>;

export type GiftUpdate_rich_unique_emomo_giftStatus = ExtractStatus<Response$postApiGiftUpdate_rich_unique_emomo_gift$Status$200>;

export type Gift_gachaUser_stocksStatus = ExtractStatus<Response$getApiGift_gachaUser_stocks$Status$200>;

export type GraphFollow_live_watched_usersStatus = ExtractStatus<Response$postApiGraphFollow_live_watched_users$Status$200>;

export type KaraokeStatus = ExtractStatus<Response$getApiKaraoke$Status$200>;

export type KaraokeBy_genreStatus = ExtractStatus<Response$getApiKaraokeBy_genre$Status$200>;

export type KaraokeGenresStatus = ExtractStatus<Response$getApiKaraokeGenres$Status$200>;

export type KaraokeRecommend_singersStatus = ExtractStatus<Response$getApiKaraokeRecommend_singers$Status$200>;

export type KaraokeSearchStatus = ExtractStatus<Response$getApiKaraokeSearch$Status$200>;

export type KaraokeSingersStatus = ExtractStatus<Response$getApiKaraokeSingers$Status$200>;

export type LiveBroadcast_resultStatus = ExtractStatus<Response$getApiLiveBroadcast_result$Status$200>;

export type LiveDelete_live_historyStatus = ExtractStatus<Response$postApiLiveDelete_live_history$Status$200>;

export type LiveKick_outStatus = ExtractStatus<Response$postApiLiveKick_out$Status$200>;

export type LiveLive_app_identifier_changedStatus = ExtractStatus<Response$postApiLiveLive_app_identifier_changed$Status$200>;

export type LiveLive_capture_imageStatus = ExtractStatus<Response$postApiLiveLive_capture_image$Status$200>;

export type LiveLive_endStatus = ExtractStatus<Response$postApiLiveLive_end$Status$200>;

export type LiveLive_heartbeatStatus = ExtractStatus<Response$postApiLiveLive_heartbeat$Status$200>;

export type LiveLive_startStatus = ExtractStatus<Response$postApiLiveLive_start$Status$200>;

export type LiveUpdate_emomo_visibleStatus = ExtractStatus<Response$postApiLiveUpdate_emomo_visible$Status$200>;

export type LiveUpdate_wipe_enabledStatus = ExtractStatus<Response$postApiLiveUpdate_wipe_enabled$Status$200>;

export type LiveViewers_resultStatus = ExtractStatus<Response$getApiLiveViewers_result$Status$200>;

export type Live_gamePingStatus = ExtractStatus<Response$postApiLive_gamePing$Status$200>;

export type MissionReceive_login_bonus_rewardStatus = ExtractStatus<Response$postApiMissionReceive_login_bonus_reward$Status$200>;

export type ModeratorAddStatus = ExtractStatus<Response$postApiModeratorAdd$Status$200>;

export type ModeratorDeleteStatus = ExtractStatus<Response$postApiModeratorDelete$Status$200>;

export type Reward_adOfferwallsStatus = ExtractStatus<Response$getApiReward_adOfferwalls$Status$200>;

export type Season_ratingLive_resultStatus = ExtractStatus<Response$getApiSeason_ratingLive_result$Status$200>;

export type ShooterMatchingStatus = ExtractStatus<Response$getApiShooterMatching$Status$200>;

export type AnalyticsLogResponse = NonNullable<Response$postApiAnalyticsLog$Status$200['application/json']>;

export type AppAdd_my_appResponse = NonNullable<Response$postApiAppAdd_my_app$Status$200['application/json']>;

export type AppApp_user_detailResponse = NonNullable<Response$getApiAppApp_user_detail$Status$200['application/json']>;

export type AppAppeal_bannersResponse = NonNullable<Response$getApiAppAppeal_banners$Status$200['application/json']>;

export type AppDelete_app_user_detailResponse = NonNullable<Response$postApiAppDelete_app_user_detail$Status$200['application/json']>;

export type AppDelete_my_appResponse = NonNullable<Response$postApiAppDelete_my_app$Status$200['application/json']>;

export type AppMy_appResponse = NonNullable<Response$getApiAppMy_app$Status$200['application/json']>;

export type AppOnlive_appsResponse = NonNullable<Response$getApiAppOnlive_apps$Status$200['application/json']>;

export type AppPost_app_user_detailResponse = NonNullable<Response$postApiAppPost_app_user_detail$Status$200['application/json']>;

export type AppRecommend_appsResponse = NonNullable<Response$getApiAppRecommend_apps$Status$200['application/json']>;

export type AppSearchResponse = NonNullable<Response$getApiAppSearch$Status$200['application/json']>;

export type AppUser_appsResponse = NonNullable<Response$getApiAppUser_apps$Status$200['application/json']>;

export type CampaignCompleted_missionResponse = NonNullable<Response$getApiCampaignCompleted_mission$Status$200['application/json']>;

export type CampaignDetailResponse = NonNullable<Response$getApiCampaignDetail$Status$200['application/json']>;

export type CatalogBannersResponse = NonNullable<Response$getApiCatalogBanners$Status$200['application/json']>;

export type CatalogFollowResponse = NonNullable<Response$getApiCatalogFollow$Status$200['application/json']>;

export type CatalogLivesResponse = NonNullable<Response$getApiCatalogLives$Status$200['application/json']>;

export type CatalogMyapp_recommend_livesResponse = NonNullable<Response$getApiCatalogMyapp_recommend_lives$Status$200['application/json']>;

export type CatalogTabsResponse = NonNullable<Response$getApiCatalogTabs$Status$200['application/json']>;

export type ChatJoinResponse = NonNullable<Response$postApiChatJoin$Status$200['application/json']>;

export type ChatPost_textResponse = NonNullable<Response$postApiChatPost_text$Status$200['application/json']>;

export type ChatReadResponse = NonNullable<Response$postApiChatRead$Status$200['application/json']>;

export type ChatThreadResponse = NonNullable<Response$getApiChatThread$Status$200['application/json']>;

export type ChatThread_visibilityResponse = NonNullable<Response$postApiChatThread_visibility$Status$200['application/json']>;

export type ChatThreadsResponse = NonNullable<Response$getApiChatThreads$Status$200['application/json']>;

export type ClosetAvatarResponse = NonNullable<Response$getApiClosetAvatar$Status$200['application/json']>;

export type ClosetAvatar_partsResponse = NonNullable<Response$getApiClosetAvatar_parts$Status$200['application/json']>;

export type ClosetClosetsResponse = NonNullable<Response$getApiClosetClosets$Status$200['application/json']>;

export type ClosetUpdate_closet_avatarResponse = NonNullable<Response$postApiClosetUpdate_closet_avatar$Status$200['application/json']>;

export type ClosetUpdate_closet_imagesResponse = NonNullable<Response$postApiClosetUpdate_closet_images$Status$200['application/json']>;

export type Coin_boxStatusResponse = NonNullable<Response$getApiCoin_boxStatus$Status$200['application/json']>;

export type CollabCollaborating_usersResponse = NonNullable<Response$getApiCollabCollaborating_users$Status$200['application/json']>;

export type ContractSummaryResponse = NonNullable<Response$getApiContractSummary$Status$200['application/json']>;

export type EventNoticeResponse = NonNullable<Response$getApiEventNotice$Status$200['application/json']>;

export type FeatureRegister_device_tokenResponse = NonNullable<Response$postApiFeatureRegister_device_token$Status$200['application/json']>;

export type GiftEmomo_run_giftsResponse = NonNullable<Response$getApiGiftEmomo_run_gifts$Status$200['application/json']>;

export type GiftPanelsResponse = NonNullable<Response$getApiGiftPanels$Status$200['application/json']>;

export type GiftRankingResponse = NonNullable<Response$getApiGiftRanking$Status$200['application/json']>;

export type GiftSendResponse = NonNullable<Response$postApiGiftSend$Status$200['application/json']>;

export type GiftUnique_emomo_gift_configResponse = NonNullable<Response$getApiGiftUnique_emomo_gift_config$Status$200['application/json']>;

export type GiftUnique_emomo_gift_slotsResponse = NonNullable<Response$getApiGiftUnique_emomo_gift_slots$Status$200['application/json']>;

export type GiftUpdate_simple_unique_emomo_giftResponse = NonNullable<Response$postApiGiftUpdate_simple_unique_emomo_gift$Status$200['application/json']>;

export type Gift_appeal_popupReadResponse = NonNullable<Response$postApiGift_appeal_popupRead$Status$200['application/json']>;

export type GoogleConnectResponse = NonNullable<Response$postApiGoogleConnect$Status$200['application/json']>;

export type GoogleDisconnectResponse = NonNullable<Response$postApiGoogleDisconnect$Status$200['application/json']>;

export type GraphBlockResponse = NonNullable<Response$postApiGraphBlock$Status$200['application/json']>;

export type GraphBlocked_usersResponse = NonNullable<Response$getApiGraphBlocked_users$Status$200['application/json']>;

export type GraphFollowResponse = NonNullable<Response$postApiGraphFollow$Status$200['application/json']>;

export type GraphFollowersResponse = NonNullable<Response$getApiGraphFollowers$Status$200['application/json']>;

export type GraphFollowingsResponse = NonNullable<Response$getApiGraphFollowings$Status$200['application/json']>;

export type GraphRecommend_usersResponse = NonNullable<Response$getApiGraphRecommend_users$Status$200['application/json']>;

export type GraphSearchResponse = NonNullable<Response$getApiGraphSearch$Status$200['application/json']>;

export type GraphUnblockResponse = NonNullable<Response$postApiGraphUnblock$Status$200['application/json']>;

export type GraphUnfollowResponse = NonNullable<Response$postApiGraphUnfollow$Status$200['application/json']>;

export type GroupEditResponse = NonNullable<Response$postApiGroupEdit$Status$200['application/json']>;

export type GroupInvite_usersResponse = NonNullable<Response$postApiGroupInvite_users$Status$200['application/json']>;

export type GroupLeaveResponse = NonNullable<Response$postApiGroupLeave$Status$200['application/json']>;

export type GroupUsersResponse = NonNullable<Response$getApiGroupUsers$Status$200['application/json']>;

export type LiveAppeal_linksResponse = NonNullable<Response$getApiLiveAppeal_links$Status$200['application/json']>;

export type LiveCampaignResponse = NonNullable<Response$getApiLiveCampaign$Status$200['application/json']>;

export type LiveGet_streaming_urlResponse = NonNullable<Response$getApiLiveGet_streaming_url$Status$200['application/json']>;

export type LiveLeaveResponse = NonNullable<Response$postApiLiveLeave$Status$200['application/json']>;

export type LiveLiveResponse = NonNullable<Response$getApiLiveLive$Status$200['application/json']>;

export type LiveLive_commentResponse = NonNullable<Response$postApiLiveLive_comment$Status$200['application/json']>;

export type LiveLive_commentsResponse = NonNullable<Response$getApiLiveLive_comments$Status$200['application/json']>;

export type LiveLive_createResponse = NonNullable<Response$postApiLiveLive_create$Status$200['application/json']>;

export type LiveLive_editResponse = NonNullable<Response$postApiLiveLive_edit$Status$200['application/json']>;

export type LiveLive_game_catalogResponse = NonNullable<Response$getApiLiveLive_game_catalog$Status$200['application/json']>;

export type LiveLive_historyResponse = NonNullable<Response$getApiLiveLive_history$Status$200['application/json']>;

export type LiveLive_pollingResponse = NonNullable<Response$postApiLiveLive_polling$Status$200['application/json']>;

export type LiveOnline_usersResponse = NonNullable<Response$getApiLiveOnline_users$Status$200['application/json']>;

export type LivePreview_endResponse = NonNullable<Response$postApiLivePreview_end$Status$200['application/json']>;

export type LivePreview_pollingResponse = NonNullable<Response$postApiLivePreview_polling$Status$200['application/json']>;

export type LivePreview_startResponse = NonNullable<Response$postApiLivePreview_start$Status$200['application/json']>;

export type LiveSanitize_textResponse = NonNullable<Response$postApiLiveSanitize_text$Status$200['application/json']>;

export type LiveSearchResponse = NonNullable<Response$getApiLiveSearch$Status$200['application/json']>;

export type LiveUpdate_archive_settingsResponse = NonNullable<Response$postApiLiveUpdate_archive_settings$Status$200['application/json']>;

export type LiveView_historyResponse = NonNullable<Response$getApiLiveView_history$Status$200['application/json']>;

export type Live_gameEndResponse = NonNullable<Response$postApiLive_gameEnd$Status$200['application/json']>;

export type Live_gameListResponse = NonNullable<Response$getApiLive_gameList$Status$200['application/json']>;

export type Live_gameNew_countsResponse = NonNullable<Response$getApiLive_gameNew_counts$Status$200['application/json']>;

export type Live_gameStartResponse = NonNullable<Response$postApiLive_gameStart$Status$200['application/json']>;

export type MissionCurrent_login_bonusResponse = NonNullable<Response$getApiMissionCurrent_login_bonus$Status$200['application/json']>;

export type MissionDailyResponse = NonNullable<Response$getApiMissionDaily$Status$200['application/json']>;

export type MissionStatusResponse = NonNullable<Response$getApiMissionStatus$Status$200['application/json']>;

export type MissionTutorial_statusResponse = NonNullable<Response$getApiMissionTutorial_status$Status$200['application/json']>;

export type MissionWeeklyResponse = NonNullable<Response$getApiMissionWeekly$Status$200['application/json']>;

export type NoticeCampaignsResponse = NonNullable<Response$getApiNoticeCampaigns$Status$200['application/json']>;

export type NoticeCountsResponse = NonNullable<Response$getApiNoticeCounts$Status$200['application/json']>;

export type NoticeNewsResponse = NonNullable<Response$getApiNoticeNews$Status$200['application/json']>;

export type NoticePopupsResponse = NonNullable<Response$getApiNoticePopups$Status$200['application/json']>;

export type NoticePresent_boxesResponse = NonNullable<Response$getApiNoticePresent_boxes$Status$200['application/json']>;

export type NoticeYours_v2Response = NonNullable<Response$getApiNoticeYours_v2$Status$200['application/json']>;

export type GetNotificationPush_settings_v3Response = NonNullable<Response$getApiNotificationPush_settings_v3$Status$200['application/json']>;

export type PostNotificationPush_settings_v3Response = NonNullable<Response$postApiNotificationPush_settings_v3$Status$200['application/json']>;

export type RankingFocusableResponse = NonNullable<Response$getApiRankingFocusable$Status$200['application/json']>;

export type RankingUser_detailResponse = NonNullable<Response$getApiRankingUser_detail$Status$200['application/json']>;

export type Reward_adAvailable_reward_ad_idsResponse = NonNullable<Response$getApiReward_adAvailable_reward_ad_ids$Status$200['application/json']>;

export type Reward_adCheck_available_deviceResponse = NonNullable<Response$getApiReward_adCheck_available_device$Status$200['application/json']>;

export type Reward_adCompleteResponse = NonNullable<Response$postApiReward_adComplete$Status$200['application/json']>;

export type Season_ratingStatusResponse = NonNullable<Response$getApiSeason_ratingStatus$Status$200['application/json']>;

export type Season_yellStatusResponse = NonNullable<Response$getApiSeason_yellStatus$Status$200['application/json']>;

export type Season_yellViewersResponse = NonNullable<Response$getApiSeason_yellViewers$Status$200['application/json']>;

export type TooltipStart_live_buttonResponse = NonNullable<Response$getApiTooltipStart_live_button$Status$200['application/json']>;

export type UserBad_reportResponse = NonNullable<Response$postApiUserBad_report$Status$200['application/json']>;

export type UserBroadcast_settingsResponse = NonNullable<Response$getApiUserBroadcast_settings$Status$200['application/json']>;

export type UserCheck_minorResponse = NonNullable<Response$postApiUserCheck_minor$Status$200['application/json']>;

export type UserCurrencyResponse = NonNullable<Response$getApiUserCurrency$Status$200['application/json']>;

export type UserDate_of_birthResponse = NonNullable<Response$postApiUserDate_of_birth$Status$200['application/json']>;

export type UserDelete_live_announcementResponse = NonNullable<Response$postApiUserDelete_live_announcement$Status$200['application/json']>;

export type UserFavorite_live_settingResponse = NonNullable<Response$getApiUserFavorite_live_setting$Status$200['application/json']>;

export type UserLogoutResponse = NonNullable<Response$postApiUserLogout$Status$200['application/json']>;

export type UserMeResponse = NonNullable<Response$getApiUserMe$Status$200['application/json']>;

export type UserPost_live_announcementResponse = NonNullable<Response$postApiUserPost_live_announcement$Status$200['application/json']>;

export type UserPost_live_requestResponse = NonNullable<Response$postApiUserPost_live_request$Status$200['application/json']>;

export type UserPost_review_confirmationResponse = NonNullable<Response$postApiUserPost_review_confirmation$Status$200['application/json']>;

export type UserProfileResponse = NonNullable<Response$getApiUserProfile$Status$200['application/json']>;

export type UserProfile_editResponse = NonNullable<Response$postApiUserProfile_edit$Status$200['application/json']>;

export type UserSearchResponse = NonNullable<Response$getApiUserSearch$Status$200['application/json']>;

export type UserSetting_rootResponse = NonNullable<Response$getApiUserSetting_root$Status$200['application/json']>;

export type UserTosResponse = NonNullable<Response$getApiUserTos$Status$200['application/json']>;

export type UserUpdate_favorite_live_settingResponse = NonNullable<Response$postApiUserUpdate_favorite_live_setting$Status$200['application/json']>;

export type UserUpdate_recording_settingsResponse = NonNullable<Response$postApiUserUpdate_recording_settings$Status$200['application/json']>;

export type UserUse_favorite_live_settingResponse = NonNullable<Response$postApiUserUse_favorite_live_setting$Status$200['application/json']>;

export type UserWatchwordResponse = NonNullable<Response$getApiUserWatchword$Status$200['application/json']>;

export type ChatAgreeResponse = NonNullable<Response$postApiChatAgree$Status$200['application/json']>;

export type ChatPost_thanksResponse = NonNullable<Response$postApiChatPost_thanks$Status$200['application/json']>;

export type ChatPost_thanks_to_live_watched_usersResponse = NonNullable<Response$postApiChatPost_thanks_to_live_watched_users$Status$200['application/json']>;

export type CollabCloseResponse = NonNullable<Response$postApiCollabClose$Status$200['application/json']>;

export type CollabConnected_streaming_collab_livesResponse = NonNullable<Response$getApiCollabConnected_streaming_collab_lives$Status$200['application/json']>;

export type CollabInvitable_usersResponse = NonNullable<Response$getApiCollabInvitable_users$Status$200['application/json']>;

export type CollabInviteResponse = NonNullable<Response$postApiCollabInvite$Status$200['application/json']>;

export type CollabSend_to_peerResponse = NonNullable<Response$postApiCollabSend_to_peer$Status$200['application/json']>;

export type CollabStartResponse = NonNullable<Response$postApiCollabStart$Status$200['application/json']>;

export type GiftUpdate_rich_unique_emomo_giftResponse = NonNullable<Response$postApiGiftUpdate_rich_unique_emomo_gift$Status$200['application/json']>;

export type Gift_gachaUser_stocksResponse = NonNullable<Response$getApiGift_gachaUser_stocks$Status$200['application/json']>;

export type GraphFollow_live_watched_usersResponse = NonNullable<Response$postApiGraphFollow_live_watched_users$Status$200['application/json']>;

export type KaraokeResponse = NonNullable<Response$getApiKaraoke$Status$200['application/json']>;

export type KaraokeBy_genreResponse = NonNullable<Response$getApiKaraokeBy_genre$Status$200['application/json']>;

export type KaraokeGenresResponse = NonNullable<Response$getApiKaraokeGenres$Status$200['application/json']>;

export type KaraokeRecommend_singersResponse = NonNullable<Response$getApiKaraokeRecommend_singers$Status$200['application/json']>;

export type KaraokeSearchResponse = NonNullable<Response$getApiKaraokeSearch$Status$200['application/json']>;

export type KaraokeSingersResponse = NonNullable<Response$getApiKaraokeSingers$Status$200['application/json']>;

export type LiveBroadcast_resultResponse = NonNullable<Response$getApiLiveBroadcast_result$Status$200['application/json']>;

export type LiveDelete_live_historyResponse = NonNullable<Response$postApiLiveDelete_live_history$Status$200['application/json']>;

export type LiveKick_outResponse = NonNullable<Response$postApiLiveKick_out$Status$200['application/json']>;

export type LiveLive_app_identifier_changedResponse = NonNullable<Response$postApiLiveLive_app_identifier_changed$Status$200['application/json']>;

export type LiveLive_capture_imageResponse = NonNullable<Response$postApiLiveLive_capture_image$Status$200['application/json']>;

export type LiveLive_endResponse = NonNullable<Response$postApiLiveLive_end$Status$200['application/json']>;

export type LiveLive_heartbeatResponse = NonNullable<Response$postApiLiveLive_heartbeat$Status$200['application/json']>;

export type LiveLive_startResponse = NonNullable<Response$postApiLiveLive_start$Status$200['application/json']>;

export type LiveUpdate_emomo_visibleResponse = NonNullable<Response$postApiLiveUpdate_emomo_visible$Status$200['application/json']>;

export type LiveUpdate_wipe_enabledResponse = NonNullable<Response$postApiLiveUpdate_wipe_enabled$Status$200['application/json']>;

export type LiveViewers_resultResponse = NonNullable<Response$getApiLiveViewers_result$Status$200['application/json']>;

export type Live_gamePingResponse = NonNullable<Response$postApiLive_gamePing$Status$200['application/json']>;

export type MissionReceive_login_bonus_rewardResponse = NonNullable<Response$postApiMissionReceive_login_bonus_reward$Status$200['application/json']>;

export type ModeratorAddResponse = NonNullable<Response$postApiModeratorAdd$Status$200['application/json']>;

export type ModeratorDeleteResponse = NonNullable<Response$postApiModeratorDelete$Status$200['application/json']>;

export type Reward_adOfferwallsResponse = NonNullable<Response$getApiReward_adOfferwalls$Status$200['application/json']>;

export type Season_ratingLive_resultResponse = NonNullable<Response$getApiSeason_ratingLive_result$Status$200['application/json']>;

export type ShooterMatchingResponse = NonNullable<Response$getApiShooterMatching$Status$200['application/json']>;

const MEDIA_TYPES = {
  analyticsLog: 'application/json',
  appAdd_my_app: 'application/json',
  appApp_user_detail: '',
  appAppeal_banners: '',
  appDelete_app_user_detail: 'application/x-www-form-urlencoded',
  appDelete_my_app: 'application/json',
  appMy_app: '',
  appOnlive_apps: '',
  appPost_app_user_detail: 'application/x-www-form-urlencoded',
  appRecommend_apps: '',
  appSearch: '',
  appUser_apps: '',
  campaignCompleted_mission: '',
  campaignDetail: '',
  catalogBanners: '',
  catalogFollow: '',
  catalogLives: '',
  catalogMyapp_recommend_lives: '',
  catalogTabs: '',
  chatJoin: 'application/x-www-form-urlencoded',
  chatPost_text: 'application/x-www-form-urlencoded',
  chatRead: 'application/x-www-form-urlencoded',
  chatThread: '',
  chatThread_visibility: 'application/x-www-form-urlencoded',
  chatThreads: '',
  closetAvatar: '',
  closetAvatar_parts: '',
  closetClosets: '',
  closetUpdate_closet_avatar: 'application/json',
  closetUpdate_closet_images: 'application/x-www-form-urlencoded',
  coin_boxStatus: '',
  collabCollaborating_users: '',
  contractSummary: '',
  eventNotice: '',
  featureRegister_device_token: 'application/x-www-form-urlencoded',
  giftEmomo_run_gifts: '',
  giftPanels: '',
  giftRanking: '',
  giftSend: 'application/x-www-form-urlencoded',
  giftUnique_emomo_gift_config: '',
  giftUnique_emomo_gift_slots: '',
  giftUpdate_simple_unique_emomo_gift: 'application/x-www-form-urlencoded',
  gift_appeal_popupRead: 'application/x-www-form-urlencoded',
  googleConnect: 'application/x-www-form-urlencoded',
  googleDisconnect: '',
  graphBlock: 'application/x-www-form-urlencoded',
  graphBlocked_users: '',
  graphFollow: 'application/x-www-form-urlencoded',
  graphFollowers: '',
  graphFollowings: '',
  graphRecommend_users: '',
  graphSearch: '',
  graphUnblock: 'application/x-www-form-urlencoded',
  graphUnfollow: 'application/x-www-form-urlencoded',
  groupEdit: 'application/x-www-form-urlencoded',
  groupInvite_users: 'application/x-www-form-urlencoded',
  groupLeave: 'application/x-www-form-urlencoded',
  groupUsers: '',
  liveAppeal_links: '',
  liveCampaign: '',
  liveGet_streaming_url: '',
  liveLeave: 'application/x-www-form-urlencoded',
  liveLive: '',
  liveLive_comment: 'application/x-www-form-urlencoded',
  liveLive_comments: '',
  liveLive_create: '',
  liveLive_edit: 'application/x-www-form-urlencoded',
  liveLive_game_catalog: '',
  liveLive_history: '',
  liveLive_polling: 'application/x-www-form-urlencoded',
  liveOnline_users: '',
  livePreview_end: 'application/x-www-form-urlencoded',
  livePreview_polling: 'application/x-www-form-urlencoded',
  livePreview_start: 'application/x-www-form-urlencoded',
  liveSanitize_text: 'application/x-www-form-urlencoded',
  liveSearch: '',
  liveUpdate_archive_settings: 'application/x-www-form-urlencoded',
  liveView_history: '',
  live_gameEnd: 'application/x-www-form-urlencoded',
  live_gameList: '',
  live_gameNew_counts: '',
  live_gameStart: 'application/x-www-form-urlencoded',
  missionCurrent_login_bonus: '',
  missionDaily: '',
  missionStatus: '',
  missionTutorial_status: '',
  missionWeekly: '',
  noticeCampaigns: '',
  noticeCounts: '',
  noticeNews: '',
  noticePopups: '',
  noticePresent_boxes: '',
  noticeYours_v2: '',
  getNotificationPush_settings_v3: '',
  postNotificationPush_settings_v3: 'application/x-www-form-urlencoded',
  rankingFocusable: '',
  rankingUser_detail: '',
  reward_adAvailable_reward_ad_ids: '',
  reward_adCheck_available_device: '',
  reward_adComplete: 'application/x-www-form-urlencoded',
  season_ratingStatus: '',
  season_yellStatus: '',
  season_yellViewers: '',
  tooltipStart_live_button: '',
  userBad_report: 'application/x-www-form-urlencoded',
  userBroadcast_settings: '',
  userCheck_minor: 'application/x-www-form-urlencoded',
  userCurrency: '',
  userDate_of_birth: 'application/x-www-form-urlencoded',
  userDelete_live_announcement: '',
  userFavorite_live_setting: '',
  userLogout: '',
  userMe: '',
  userPost_live_announcement: 'application/x-www-form-urlencoded',
  userPost_live_request: 'application/x-www-form-urlencoded',
  userPost_review_confirmation: 'application/x-www-form-urlencoded',
  userProfile: '',
  userProfile_edit: 'application/x-www-form-urlencoded',
  userSearch: '',
  userSetting_root: '',
  userTos: '',
  userUpdate_favorite_live_setting: 'application/x-www-form-urlencoded',
  userUpdate_recording_settings: 'application/x-www-form-urlencoded',
  userUse_favorite_live_setting: 'application/x-www-form-urlencoded',
  userWatchword: '',
  chatAgree: 'application/x-www-form-urlencoded',
  chatPost_thanks: 'application/x-www-form-urlencoded',
  chatPost_thanks_to_live_watched_users: 'application/x-www-form-urlencoded',
  collabClose: 'application/x-www-form-urlencoded',
  collabConnected_streaming_collab_lives: '',
  collabInvitable_users: '',
  collabInvite: 'application/x-www-form-urlencoded',
  collabSend_to_peer: 'application/x-www-form-urlencoded',
  collabStart: 'application/x-www-form-urlencoded',
  giftUpdate_rich_unique_emomo_gift: 'application/x-www-form-urlencoded',
  gift_gachaUser_stocks: '',
  graphFollow_live_watched_users: 'application/x-www-form-urlencoded',
  karaoke: '',
  karaokeBy_genre: '',
  karaokeGenres: '',
  karaokeRecommend_singers: '',
  karaokeSearch: '',
  karaokeSingers: '',
  liveBroadcast_result: '',
  liveDelete_live_history: 'application/x-www-form-urlencoded',
  liveKick_out: 'application/x-www-form-urlencoded',
  liveLive_app_identifier_changed: 'application/x-www-form-urlencoded',
  liveLive_capture_image: 'application/x-www-form-urlencoded',
  liveLive_end: 'application/x-www-form-urlencoded',
  liveLive_heartbeat: 'application/x-www-form-urlencoded',
  liveLive_start: 'application/x-www-form-urlencoded',
  liveUpdate_emomo_visible: 'application/x-www-form-urlencoded',
  liveUpdate_wipe_enabled: 'application/x-www-form-urlencoded',
  liveViewers_result: '',
  live_gamePing: 'application/x-www-form-urlencoded',
  missionReceive_login_bonus_reward: 'application/x-www-form-urlencoded',
  moderatorAdd: 'application/x-www-form-urlencoded',
  moderatorDelete: 'application/x-www-form-urlencoded',
  reward_adOfferwalls: '',
  season_ratingLive_result: '',
  shooterMatching: '',
} as const;

const HTTP_VERBS = {
  analyticsLog: 'post',
  appAdd_my_app: 'post',
  appApp_user_detail: 'get',
  appAppeal_banners: 'get',
  appDelete_app_user_detail: 'post',
  appDelete_my_app: 'post',
  appMy_app: 'get',
  appOnlive_apps: 'get',
  appPost_app_user_detail: 'post',
  appRecommend_apps: 'get',
  appSearch: 'get',
  appUser_apps: 'get',
  campaignCompleted_mission: 'get',
  campaignDetail: 'get',
  catalogBanners: 'get',
  catalogFollow: 'get',
  catalogLives: 'get',
  catalogMyapp_recommend_lives: 'get',
  catalogTabs: 'get',
  chatJoin: 'post',
  chatPost_text: 'post',
  chatRead: 'post',
  chatThread: 'get',
  chatThread_visibility: 'post',
  chatThreads: 'get',
  closetAvatar: 'get',
  closetAvatar_parts: 'get',
  closetClosets: 'get',
  closetUpdate_closet_avatar: 'post',
  closetUpdate_closet_images: 'post',
  coin_boxStatus: 'get',
  collabCollaborating_users: 'get',
  contractSummary: 'get',
  eventNotice: 'get',
  featureRegister_device_token: 'post',
  giftEmomo_run_gifts: 'get',
  giftPanels: 'get',
  giftRanking: 'get',
  giftSend: 'post',
  giftUnique_emomo_gift_config: 'get',
  giftUnique_emomo_gift_slots: 'get',
  giftUpdate_simple_unique_emomo_gift: 'post',
  gift_appeal_popupRead: 'post',
  googleConnect: 'post',
  googleDisconnect: 'post',
  graphBlock: 'post',
  graphBlocked_users: 'get',
  graphFollow: 'post',
  graphFollowers: 'get',
  graphFollowings: 'get',
  graphRecommend_users: 'get',
  graphSearch: 'get',
  graphUnblock: 'post',
  graphUnfollow: 'post',
  groupEdit: 'post',
  groupInvite_users: 'post',
  groupLeave: 'post',
  groupUsers: 'get',
  liveAppeal_links: 'get',
  liveCampaign: 'get',
  liveGet_streaming_url: 'get',
  liveLeave: 'post',
  liveLive: 'get',
  liveLive_comment: 'post',
  liveLive_comments: 'get',
  liveLive_create: 'post',
  liveLive_edit: 'post',
  liveLive_game_catalog: 'get',
  liveLive_history: 'get',
  liveLive_polling: 'post',
  liveOnline_users: 'get',
  livePreview_end: 'post',
  livePreview_polling: 'post',
  livePreview_start: 'post',
  liveSanitize_text: 'post',
  liveSearch: 'get',
  liveUpdate_archive_settings: 'post',
  liveView_history: 'get',
  live_gameEnd: 'post',
  live_gameList: 'get',
  live_gameNew_counts: 'get',
  live_gameStart: 'post',
  missionCurrent_login_bonus: 'get',
  missionDaily: 'get',
  missionStatus: 'get',
  missionTutorial_status: 'get',
  missionWeekly: 'get',
  noticeCampaigns: 'get',
  noticeCounts: 'get',
  noticeNews: 'get',
  noticePopups: 'get',
  noticePresent_boxes: 'get',
  noticeYours_v2: 'get',
  getNotificationPush_settings_v3: 'get',
  postNotificationPush_settings_v3: 'post',
  rankingFocusable: 'get',
  rankingUser_detail: 'get',
  reward_adAvailable_reward_ad_ids: 'get',
  reward_adCheck_available_device: 'get',
  reward_adComplete: 'post',
  season_ratingStatus: 'get',
  season_yellStatus: 'get',
  season_yellViewers: 'get',
  tooltipStart_live_button: 'get',
  userBad_report: 'post',
  userBroadcast_settings: 'get',
  userCheck_minor: 'post',
  userCurrency: 'get',
  userDate_of_birth: 'post',
  userDelete_live_announcement: 'post',
  userFavorite_live_setting: 'get',
  userLogout: 'post',
  userMe: 'get',
  userPost_live_announcement: 'post',
  userPost_live_request: 'post',
  userPost_review_confirmation: 'post',
  userProfile: 'get',
  userProfile_edit: 'post',
  userSearch: 'get',
  userSetting_root: 'get',
  userTos: 'get',
  userUpdate_favorite_live_setting: 'post',
  userUpdate_recording_settings: 'post',
  userUse_favorite_live_setting: 'post',
  userWatchword: 'get',
  chatAgree: 'post',
  chatPost_thanks: 'post',
  chatPost_thanks_to_live_watched_users: 'post',
  collabClose: 'post',
  collabConnected_streaming_collab_lives: 'get',
  collabInvitable_users: 'get',
  collabInvite: 'post',
  collabSend_to_peer: 'post',
  collabStart: 'post',
  giftUpdate_rich_unique_emomo_gift: 'post',
  gift_gachaUser_stocks: 'get',
  graphFollow_live_watched_users: 'post',
  karaoke: 'get',
  karaokeBy_genre: 'get',
  karaokeGenres: 'get',
  karaokeRecommend_singers: 'get',
  karaokeSearch: 'get',
  karaokeSingers: 'get',
  liveBroadcast_result: 'get',
  liveDelete_live_history: 'post',
  liveKick_out: 'post',
  liveLive_app_identifier_changed: 'post',
  liveLive_capture_image: 'post',
  liveLive_end: 'post',
  liveLive_heartbeat: 'post',
  liveLive_start: 'post',
  liveUpdate_emomo_visible: 'post',
  liveUpdate_wipe_enabled: 'post',
  liveViewers_result: 'get',
  live_gamePing: 'post',
  missionReceive_login_bonus_reward: 'post',
  moderatorAdd: 'post',
  moderatorDelete: 'post',
  reward_adOfferwalls: 'get',
  season_ratingLive_result: 'get',
  shooterMatching: 'get',
} as const;

const ENDPOINTS = {
  analyticsLog: {
    methodName: 'postApiAnalyticsLog' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appAdd_my_app: {
    methodName: 'postApiAppAdd_my_app' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appApp_user_detail: {
    methodName: 'getApiAppApp_user_detail' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appAppeal_banners: {
    methodName: 'getApiAppAppeal_banners' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appDelete_app_user_detail: {
    methodName: 'postApiAppDelete_app_user_detail' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appDelete_my_app: {
    methodName: 'postApiAppDelete_my_app' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appMy_app: {
    methodName: 'getApiAppMy_app' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appOnlive_apps: {
    methodName: 'getApiAppOnlive_apps' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appPost_app_user_detail: {
    methodName: 'postApiAppPost_app_user_detail' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appRecommend_apps: {
    methodName: 'getApiAppRecommend_apps' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appSearch: {
    methodName: 'getApiAppSearch' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  appUser_apps: {
    methodName: 'getApiAppUser_apps' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  campaignCompleted_mission: {
    methodName: 'getApiCampaignCompleted_mission' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  campaignDetail: {
    methodName: 'getApiCampaignDetail' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  catalogBanners: {
    methodName: 'getApiCatalogBanners' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  catalogFollow: {
    methodName: 'getApiCatalogFollow' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  catalogLives: {
    methodName: 'getApiCatalogLives' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  catalogMyapp_recommend_lives: {
    methodName: 'getApiCatalogMyapp_recommend_lives' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  catalogTabs: {
    methodName: 'getApiCatalogTabs' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatJoin: {
    methodName: 'postApiChatJoin' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatPost_text: {
    methodName: 'postApiChatPost_text' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatRead: {
    methodName: 'postApiChatRead' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatThread: {
    methodName: 'getApiChatThread' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatThread_visibility: {
    methodName: 'postApiChatThread_visibility' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatThreads: {
    methodName: 'getApiChatThreads' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  closetAvatar: {
    methodName: 'getApiClosetAvatar' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  closetAvatar_parts: {
    methodName: 'getApiClosetAvatar_parts' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  closetClosets: {
    methodName: 'getApiClosetClosets' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  closetUpdate_closet_avatar: {
    methodName: 'postApiClosetUpdate_closet_avatar' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  closetUpdate_closet_images: {
    methodName: 'postApiClosetUpdate_closet_images' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  coin_boxStatus: {
    methodName: 'getApiCoin_boxStatus' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabCollaborating_users: {
    methodName: 'getApiCollabCollaborating_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  contractSummary: {
    methodName: 'getApiContractSummary' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  eventNotice: {
    methodName: 'getApiEventNotice' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  featureRegister_device_token: {
    methodName: 'postApiFeatureRegister_device_token' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftEmomo_run_gifts: {
    methodName: 'getApiGiftEmomo_run_gifts' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftPanels: {
    methodName: 'getApiGiftPanels' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftRanking: {
    methodName: 'getApiGiftRanking' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftSend: {
    methodName: 'postApiGiftSend' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftUnique_emomo_gift_config: {
    methodName: 'getApiGiftUnique_emomo_gift_config' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftUnique_emomo_gift_slots: {
    methodName: 'getApiGiftUnique_emomo_gift_slots' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftUpdate_simple_unique_emomo_gift: {
    methodName: 'postApiGiftUpdate_simple_unique_emomo_gift' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  gift_appeal_popupRead: {
    methodName: 'postApiGift_appeal_popupRead' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  googleConnect: {
    methodName: 'postApiGoogleConnect' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  googleDisconnect: {
    methodName: 'postApiGoogleDisconnect' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphBlock: {
    methodName: 'postApiGraphBlock' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphBlocked_users: {
    methodName: 'getApiGraphBlocked_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphFollow: {
    methodName: 'postApiGraphFollow' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphFollowers: {
    methodName: 'getApiGraphFollowers' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphFollowings: {
    methodName: 'getApiGraphFollowings' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphRecommend_users: {
    methodName: 'getApiGraphRecommend_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphSearch: {
    methodName: 'getApiGraphSearch' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphUnblock: {
    methodName: 'postApiGraphUnblock' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphUnfollow: {
    methodName: 'postApiGraphUnfollow' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  groupEdit: {
    methodName: 'postApiGroupEdit' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  groupInvite_users: {
    methodName: 'postApiGroupInvite_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  groupLeave: {
    methodName: 'postApiGroupLeave' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  groupUsers: {
    methodName: 'getApiGroupUsers' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveAppeal_links: {
    methodName: 'getApiLiveAppeal_links' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveCampaign: {
    methodName: 'getApiLiveCampaign' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveGet_streaming_url: {
    methodName: 'getApiLiveGet_streaming_url' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLeave: {
    methodName: 'postApiLiveLeave' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive: {
    methodName: 'getApiLiveLive' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_comment: {
    methodName: 'postApiLiveLive_comment' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_comments: {
    methodName: 'getApiLiveLive_comments' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_create: {
    methodName: 'postApiLiveLive_create' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_edit: {
    methodName: 'postApiLiveLive_edit' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_game_catalog: {
    methodName: 'getApiLiveLive_game_catalog' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_history: {
    methodName: 'getApiLiveLive_history' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_polling: {
    methodName: 'postApiLiveLive_polling' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveOnline_users: {
    methodName: 'getApiLiveOnline_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  livePreview_end: {
    methodName: 'postApiLivePreview_end' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  livePreview_polling: {
    methodName: 'postApiLivePreview_polling' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  livePreview_start: {
    methodName: 'postApiLivePreview_start' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveSanitize_text: {
    methodName: 'postApiLiveSanitize_text' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveSearch: {
    methodName: 'getApiLiveSearch' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveUpdate_archive_settings: {
    methodName: 'postApiLiveUpdate_archive_settings' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveView_history: {
    methodName: 'getApiLiveView_history' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  live_gameEnd: {
    methodName: 'postApiLive_gameEnd' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  live_gameList: {
    methodName: 'getApiLive_gameList' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  live_gameNew_counts: {
    methodName: 'getApiLive_gameNew_counts' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  live_gameStart: {
    methodName: 'postApiLive_gameStart' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionCurrent_login_bonus: {
    methodName: 'getApiMissionCurrent_login_bonus' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionDaily: {
    methodName: 'getApiMissionDaily' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionStatus: {
    methodName: 'getApiMissionStatus' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionTutorial_status: {
    methodName: 'getApiMissionTutorial_status' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionWeekly: {
    methodName: 'getApiMissionWeekly' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticeCampaigns: {
    methodName: 'getApiNoticeCampaigns' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticeCounts: {
    methodName: 'getApiNoticeCounts' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticeNews: {
    methodName: 'getApiNoticeNews' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticePopups: {
    methodName: 'getApiNoticePopups' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticePresent_boxes: {
    methodName: 'getApiNoticePresent_boxes' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticeYours_v2: {
    methodName: 'getApiNoticeYours_v2' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  getNotificationPush_settings_v3: {
    methodName: 'getApiNotificationPush_settings_v3' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  postNotificationPush_settings_v3: {
    methodName: 'postApiNotificationPush_settings_v3' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  rankingFocusable: {
    methodName: 'getApiRankingFocusable' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  rankingUser_detail: {
    methodName: 'getApiRankingUser_detail' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  reward_adAvailable_reward_ad_ids: {
    methodName: 'getApiReward_adAvailable_reward_ad_ids' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  reward_adCheck_available_device: {
    methodName: 'getApiReward_adCheck_available_device' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  reward_adComplete: {
    methodName: 'postApiReward_adComplete' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  season_ratingStatus: {
    methodName: 'getApiSeason_ratingStatus' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  season_yellStatus: {
    methodName: 'getApiSeason_yellStatus' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  season_yellViewers: {
    methodName: 'getApiSeason_yellViewers' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  tooltipStart_live_button: {
    methodName: 'getApiTooltipStart_live_button' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userBad_report: {
    methodName: 'postApiUserBad_report' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userBroadcast_settings: {
    methodName: 'getApiUserBroadcast_settings' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userCheck_minor: {
    methodName: 'postApiUserCheck_minor' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userCurrency: {
    methodName: 'getApiUserCurrency' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userDate_of_birth: {
    methodName: 'postApiUserDate_of_birth' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userDelete_live_announcement: {
    methodName: 'postApiUserDelete_live_announcement' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userFavorite_live_setting: {
    methodName: 'getApiUserFavorite_live_setting' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userLogout: {
    methodName: 'postApiUserLogout' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userMe: {
    methodName: 'getApiUserMe' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userPost_live_announcement: {
    methodName: 'postApiUserPost_live_announcement' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userPost_live_request: {
    methodName: 'postApiUserPost_live_request' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userPost_review_confirmation: {
    methodName: 'postApiUserPost_review_confirmation' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userProfile: {
    methodName: 'getApiUserProfile' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userProfile_edit: {
    methodName: 'postApiUserProfile_edit' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userSearch: {
    methodName: 'getApiUserSearch' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userSetting_root: {
    methodName: 'getApiUserSetting_root' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userTos: {
    methodName: 'getApiUserTos' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userUpdate_favorite_live_setting: {
    methodName: 'postApiUserUpdate_favorite_live_setting' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userUpdate_recording_settings: {
    methodName: 'postApiUserUpdate_recording_settings' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userUse_favorite_live_setting: {
    methodName: 'postApiUserUse_favorite_live_setting' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  userWatchword: {
    methodName: 'getApiUserWatchword' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatAgree: {
    methodName: 'postApiChatAgree' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatPost_thanks: {
    methodName: 'postApiChatPost_thanks' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  chatPost_thanks_to_live_watched_users: {
    methodName: 'postApiChatPost_thanks_to_live_watched_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabClose: {
    methodName: 'postApiCollabClose' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabConnected_streaming_collab_lives: {
    methodName: 'getApiCollabConnected_streaming_collab_lives' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabInvitable_users: {
    methodName: 'getApiCollabInvitable_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabInvite: {
    methodName: 'postApiCollabInvite' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabSend_to_peer: {
    methodName: 'postApiCollabSend_to_peer' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  collabStart: {
    methodName: 'postApiCollabStart' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  giftUpdate_rich_unique_emomo_gift: {
    methodName: 'postApiGiftUpdate_rich_unique_emomo_gift' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  gift_gachaUser_stocks: {
    methodName: 'getApiGift_gachaUser_stocks' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  graphFollow_live_watched_users: {
    methodName: 'postApiGraphFollow_live_watched_users' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaoke: {
    methodName: 'getApiKaraoke' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaokeBy_genre: {
    methodName: 'getApiKaraokeBy_genre' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaokeGenres: {
    methodName: 'getApiKaraokeGenres' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaokeRecommend_singers: {
    methodName: 'getApiKaraokeRecommend_singers' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaokeSearch: {
    methodName: 'getApiKaraokeSearch' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  karaokeSingers: {
    methodName: 'getApiKaraokeSingers' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveBroadcast_result: {
    methodName: 'getApiLiveBroadcast_result' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveDelete_live_history: {
    methodName: 'postApiLiveDelete_live_history' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveKick_out: {
    methodName: 'postApiLiveKick_out' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_app_identifier_changed: {
    methodName: 'postApiLiveLive_app_identifier_changed' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_capture_image: {
    methodName: 'postApiLiveLive_capture_image' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_end: {
    methodName: 'postApiLiveLive_end' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_heartbeat: {
    methodName: 'postApiLiveLive_heartbeat' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveLive_start: {
    methodName: 'postApiLiveLive_start' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveUpdate_emomo_visible: {
    methodName: 'postApiLiveUpdate_emomo_visible' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveUpdate_wipe_enabled: {
    methodName: 'postApiLiveUpdate_wipe_enabled' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  liveViewers_result: {
    methodName: 'getApiLiveViewers_result' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  live_gamePing: {
    methodName: 'postApiLive_gamePing' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  missionReceive_login_bonus_reward: {
    methodName: 'postApiMissionReceive_login_bonus_reward' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  moderatorAdd: {
    methodName: 'postApiModeratorAdd' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  moderatorDelete: {
    methodName: 'postApiModeratorDelete' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  reward_adOfferwalls: {
    methodName: 'getApiReward_adOfferwalls' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  season_ratingLive_result: {
    methodName: 'getApiSeason_ratingLive_result' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  shooterMatching: {
    methodName: 'getApiShooterMatching' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
} as const;

export class MirrativApi {
  private client: GeneratedClient<AxiosRequestConfig & { fullResponse?: boolean }>;
  private axios: AxiosInstance;
  private retryOptions: { retries: number; delay: number };
  private logRequests: boolean;

  constructor(config: MirrativApiConfig = {}) {
    const baseUrl = config.baseUrl ?? 'https://www.mirrativ.com';
    const axiosInst: AxiosInstance = axios.create({
      baseURL: baseUrl,
      // デフォルト User-Agent を追加
      headers: { 'user-agent': 'MR_APP/11.16.0/iOS/iPhone15,2/16.1.1' },
      ...config.axiosConfig,
    });

    this.axios        = axiosInst;
    this.retryOptions = config.retryOptions ?? { retries: 0, delay: 0 };
    this.logRequests  = config.logRequests ?? false;

    const { retries, delay } = this.retryOptions;
    const logReq         = this.logRequests;

    const apiClient: ApiClient<AxiosRequestConfig & { fullResponse?: boolean }> = {
      async request(method: HttpMethod, url: string, headers: any, body: any, qp: unknown, opts?: any) {
        const { fullResponse, ...restOpts } = opts || {};
        const qpMap = qp as Record<string,{value:any}>;
        for (let i = 0; i <= retries; i++) {
          try {
            if (logReq) console.log(`[MirrativApi] ${method} ${url}`, { headers, body, params: qpMap });
            const res = await axiosInst.request({
              method,
              url,
              headers,
              data: body,
              params: qpMap ? Object.fromEntries(Object.entries(qpMap).map(([k,v])=>[k,v.value])) : undefined,
              ...restOpts,
            });
            return fullResponse ? res : res.data;
          } catch (err:any) {
            if (i < retries) { await new Promise(r=>setTimeout(r,delay)); continue; }
            throw err;
          }
        }
      },
    };

    this.client = new GeneratedClient(apiClient, baseUrl);

    // 各エンドポイントメソッドを生成
    for (const k of Object.keys(ENDPOINTS) as Array<keyof typeof ENDPOINTS>) {
      if (HTTP_VERBS[k] === 'get') {
        (this as any)[k]      = this.createGetMethod(k);
        (this as any)[`${k}Full`] = this.createGetFullMethod(k);
      } else {
        (this as any)[k]      = this.createBodyMethod(k);
        (this as any)[`${k}Full`] = this.createFullMethod(k);
      }
    }

  }

  private createBodyMethod<K extends keyof typeof ENDPOINTS>(key: K) {
    const fn = ENDPOINTS[key].methodName;
    return async (
      body: any,
      extraHeaders: Record<string,string> = {},
      axiosOpts?: AxiosRequestConfig
    ) => {
      const mediaType = MEDIA_TYPES[key];
      const params    = { parameter: extraHeaders, requestBody: { [mediaType]: body } };
      try {
        const json = await (this.client as any)[fn](params as any, axiosOpts);
        if ((json as any).ok === 0) throw new Error(`[MirrativApi][${fn}] ok=0`);
        // ステータスのみ返す
        return ENDPOINTS[key].extractStatus(json as any);
      } catch (err:any) {
        const info: Record<string,unknown> = { message: err.message };
        if (err.config)   { info.method = err.config.method; info.url = err.config.url; }
        if (err.response) { info.status = err.response.status; info.responseMessage = err.response.data?.message ?? err.response.data; }
        console.error(`[MirrativApi][${fn}] Error:`, info);
        throw err;
      }
    }
  }

  private createGetMethod<K extends keyof typeof ENDPOINTS>(key: K) {
    const fn = ENDPOINTS[key].methodName;
    return async (
      query: Record<string, any> = {},
      extraHeaders: Record<string,string> = {},
      axiosOpts?: AxiosRequestConfig
    ) => {
      const qpMap = Object.fromEntries(
        Object.entries(query).map(([k,v]) => [k, { value: v }])
      );
      try {
        const json = await (this.client as any)[fn]({parameter: extraHeaders, query: qpMap} as any, axiosOpts);
        // ステータスのみ返す
        return ENDPOINTS[key].extractStatus(json);
      } catch (err:any) {
        const info: Record<string,unknown> = { message: err.message };
        if (err.config)   { info.method = err.config.method; info.url = err.config.url; }
        if (err.response) { info.status = err.response.status; info.responseMessage = err.response.data?.message ?? err.response.data; }
        console.error(`[MirrativApi][${fn}] GET Error:`, info);
        throw err;
      }
    }
  }

  private createFullMethod<K extends keyof typeof ENDPOINTS>(key: K) {
    const fn = ENDPOINTS[key].methodName;
    return async (
      body: any,
      extraHeaders: Record<string,string> = {},
      axiosOpts?: AxiosRequestConfig
    ) => {
      const mediaType = MEDIA_TYPES[key];
      const params    = { parameter: extraHeaders, requestBody: { [mediaType]: body } };
      const optsFull = { ...(axiosOpts || {}), fullResponse: true };
      return (this.client as any)[fn](params as any, optsFull) as Promise<NonNullable<any>>;
    }
  }

  private createGetFullMethod<K extends keyof typeof ENDPOINTS>(key: K) {
    const verb = HTTP_VERBS[key] as any;
    const pathName = String(key).replace(/([A-Z])/g, '/$1').toLowerCase();
    const route = `/api/${pathName}`;
    return async (
      query: Record<string, any> = {},
      extraHeaders: Record<string,string> = {},
      axiosOpts?: AxiosRequestConfig
    ) => {
      const res = await this.axios.request({
        method: verb,
        url: route,
        headers: extraHeaders,
        params: query,
        ...axiosOpts,
      }) as AxiosResponse<any>;

      // ログ用オブジェクト
      const { config: req, status, statusText, headers: resHeaders, data: resBody } = res;
      const logObject = {
        request:  { url: req.url, method: req.method, headers: req.headers, params: req.params, body: req.data },
        response: { status, statusText, headers: resHeaders, body: resBody },
      };

      // ./api/<key>.json に書き出し
      const dir = path.resolve(process.cwd(), 'api');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      fs.writeFileSync(path.join(dir, `${key}.json`), JSON.stringify(logObject, null, 2));

      // 戻り値を整形
      if (MRID_KEYS.has(key as string)) {
        const sc = resHeaders['set-cookie'];
        const raw = Array.isArray(sc) ? sc[0] : sc;
        const m = raw?.match(/mr_id=([^;]+)/);
        return {
          body: resBody as NonNullable<typeof resBody>,
          mrid: m ? m[1] : undefined,
        };
      }
      return { body: resBody as NonNullable<typeof resBody> };
    };
  }
  /**
   * ### POST /analyticsLog
   * **Content-Type**: `application/json`
   *
   * @param body  { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AnalyticsLogStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.analyticsLog({ action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[]);
   * console.log(res);
   * ```
   */
  public analyticsLog!: (
    body: RequestBody$postApiAnalyticsLog['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AnalyticsLogStatus>;

  /**
   * ### POST /analyticsLog (full response)
   * **Content-Type**: `application/json`
   *
   * @param body  { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AnalyticsLogResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.analyticsLogFull({ action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[]);
   * console.log(res);
   * ```
   */
  public analyticsLogFull!: (
    body: RequestBody$postApiAnalyticsLog['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AnalyticsLogResponse>;

  /**
   * ### POST /appAdd_my_app
   * **Content-Type**: `application/json`
   *
   * @param body  { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAdd_my_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appAdd_my_app({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  public appAdd_my_app!: (
    body: RequestBody$postApiAppAdd_my_app['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAdd_my_appStatus>;

  /**
   * ### POST /appAdd_my_app (full response)
   * **Content-Type**: `application/json`
   *
   * @param body  { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAdd_my_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAdd_my_appFull({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  public appAdd_my_appFull!: (
    body: RequestBody$postApiAppAdd_my_app['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAdd_my_appResponse>;

  /**
   * ### GET /appApp_user_detail
   *
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppApp_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appApp_user_detail({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public appApp_user_detail!: (
    query?: Parameter$getApiAppApp_user_detail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppApp_user_detailStatus>;

  /**
   * ### GET /appApp_user_detail (full response)
   *
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppApp_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appApp_user_detailFull({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public appApp_user_detailFull!: (
    query?: Parameter$getApiAppApp_user_detail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppApp_user_detailResponse>;

  /**
   * ### GET /appAppeal_banners
   *
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAppeal_bannersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAppeal_banners({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public appAppeal_banners!: (
    query?: Parameter$getApiAppAppeal_banners,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAppeal_bannersStatus>;

  /**
   * ### GET /appAppeal_banners (full response)
   *
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAppeal_bannersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAppeal_bannersFull({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public appAppeal_bannersFull!: (
    query?: Parameter$getApiAppAppeal_banners,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAppeal_bannersResponse>;

  /**
   * ### POST /appDelete_app_user_detail
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_app_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appDelete_app_user_detail({ app_id?: string; });
   * console.log(res);
   * ```
   */
  public appDelete_app_user_detail!: (
    body: RequestBody$postApiAppDelete_app_user_detail['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_app_user_detailStatus>;

  /**
   * ### POST /appDelete_app_user_detail (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_app_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appDelete_app_user_detailFull({ app_id?: string; });
   * console.log(res);
   * ```
   */
  public appDelete_app_user_detailFull!: (
    body: RequestBody$postApiAppDelete_app_user_detail['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_app_user_detailResponse>;

  /**
   * ### POST /appDelete_my_app
   * **Content-Type**: `application/json`
   *
   * @param body  { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_my_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appDelete_my_app({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  public appDelete_my_app!: (
    body: RequestBody$postApiAppDelete_my_app['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_my_appStatus>;

  /**
   * ### POST /appDelete_my_app (full response)
   * **Content-Type**: `application/json`
   *
   * @param body  { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_my_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appDelete_my_appFull({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  public appDelete_my_appFull!: (
    body: RequestBody$postApiAppDelete_my_app['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_my_appResponse>;

  /**
   * ### GET /appMy_app
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppMy_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appMy_app({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public appMy_app!: (
    query?: Parameter$getApiAppMy_app,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppMy_appStatus>;

  /**
   * ### GET /appMy_app (full response)
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppMy_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appMy_appFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public appMy_appFull!: (
    query?: Parameter$getApiAppMy_app,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppMy_appResponse>;

  /**
   * ### GET /appOnlive_apps
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppOnlive_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appOnlive_apps({});
   * console.log(res);
   * ```
   */
  public appOnlive_apps!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppOnlive_appsStatus>;

  /**
   * ### GET /appOnlive_apps (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppOnlive_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appOnlive_appsFull({});
   * console.log(res);
   * ```
   */
  public appOnlive_appsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppOnlive_appsResponse>;

  /**
   * ### POST /appPost_app_user_detail
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppPost_app_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appPost_app_user_detail({ app_id?: string; confirmed?: string; type?: string; value?: string; });
   * console.log(res);
   * ```
   */
  public appPost_app_user_detail!: (
    body: RequestBody$postApiAppPost_app_user_detail['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppPost_app_user_detailStatus>;

  /**
   * ### POST /appPost_app_user_detail (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppPost_app_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appPost_app_user_detailFull({ app_id?: string; confirmed?: string; type?: string; value?: string; });
   * console.log(res);
   * ```
   */
  public appPost_app_user_detailFull!: (
    body: RequestBody$postApiAppPost_app_user_detail['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppPost_app_user_detailResponse>;

  /**
   * ### GET /appRecommend_apps
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppRecommend_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appRecommend_apps({});
   * console.log(res);
   * ```
   */
  public appRecommend_apps!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppRecommend_appsStatus>;

  /**
   * ### GET /appRecommend_apps (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppRecommend_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appRecommend_appsFull({});
   * console.log(res);
   * ```
   */
  public appRecommend_appsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppRecommend_appsResponse>;

  /**
   * ### GET /appSearch
   *
   * @param query - { recommend_by?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appSearch({ recommend_by?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public appSearch!: (
    query?: Parameter$getApiAppSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppSearchStatus>;

  /**
   * ### GET /appSearch (full response)
   *
   * @param query - { recommend_by?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appSearchFull({ recommend_by?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public appSearchFull!: (
    query?: Parameter$getApiAppSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppSearchResponse>;

  /**
   * ### GET /appUser_apps
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppUser_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appUser_apps({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public appUser_apps!: (
    query?: Parameter$getApiAppUser_apps,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppUser_appsStatus>;

  /**
   * ### GET /appUser_apps (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppUser_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appUser_appsFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public appUser_appsFull!: (
    query?: Parameter$getApiAppUser_apps,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppUser_appsResponse>;

  /**
   * ### GET /campaignCompleted_mission
   *
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignCompleted_missionStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignCompleted_mission({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  public campaignCompleted_mission!: (
    query?: Parameter$getApiCampaignCompleted_mission,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignCompleted_missionStatus>;

  /**
   * ### GET /campaignCompleted_mission (full response)
   *
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignCompleted_missionResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignCompleted_missionFull({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  public campaignCompleted_missionFull!: (
    query?: Parameter$getApiCampaignCompleted_mission,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignCompleted_missionResponse>;

  /**
   * ### GET /campaignDetail
   *
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignDetailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignDetail({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  public campaignDetail!: (
    query?: Parameter$getApiCampaignDetail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignDetailStatus>;

  /**
   * ### GET /campaignDetail (full response)
   *
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignDetailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignDetailFull({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  public campaignDetailFull!: (
    query?: Parameter$getApiCampaignDetail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignDetailResponse>;

  /**
   * ### GET /catalogBanners
   *
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogBannersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogBanners({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public catalogBanners!: (
    query?: Parameter$getApiCatalogBanners,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogBannersStatus>;

  /**
   * ### GET /catalogBanners (full response)
   *
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogBannersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogBannersFull({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public catalogBannersFull!: (
    query?: Parameter$getApiCatalogBanners,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogBannersResponse>;

  /**
   * ### GET /catalogFollow
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogFollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogFollow({});
   * console.log(res);
   * ```
   */
  public catalogFollow!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogFollowStatus>;

  /**
   * ### GET /catalogFollow (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogFollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogFollowFull({});
   * console.log(res);
   * ```
   */
  public catalogFollowFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogFollowResponse>;

  /**
   * ### GET /catalogLives
   *
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogLivesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogLives({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public catalogLives!: (
    query?: Parameter$getApiCatalogLives,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogLivesStatus>;

  /**
   * ### GET /catalogLives (full response)
   *
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogLivesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogLivesFull({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public catalogLivesFull!: (
    query?: Parameter$getApiCatalogLives,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogLivesResponse>;

  /**
   * ### GET /catalogMyapp_recommend_lives
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogMyapp_recommend_livesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogMyapp_recommend_lives({});
   * console.log(res);
   * ```
   */
  public catalogMyapp_recommend_lives!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogMyapp_recommend_livesStatus>;

  /**
   * ### GET /catalogMyapp_recommend_lives (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogMyapp_recommend_livesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogMyapp_recommend_livesFull({});
   * console.log(res);
   * ```
   */
  public catalogMyapp_recommend_livesFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogMyapp_recommend_livesResponse>;

  /**
   * ### GET /catalogTabs
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogTabsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogTabs({});
   * console.log(res);
   * ```
   */
  public catalogTabs!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogTabsStatus>;

  /**
   * ### GET /catalogTabs (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogTabsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogTabsFull({});
   * console.log(res);
   * ```
   */
  public catalogTabsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogTabsResponse>;

  /**
   * ### POST /chatJoin
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatJoinStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatJoin({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatJoin!: (
    body: RequestBody$postApiChatJoin['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatJoinStatus>;

  /**
   * ### POST /chatJoin (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatJoinResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatJoinFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatJoinFull!: (
    body: RequestBody$postApiChatJoin['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatJoinResponse>;

  /**
   * ### POST /chatPost_text
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { text?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_textStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_text({ text?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_text!: (
    body: RequestBody$postApiChatPost_text['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_textStatus>;

  /**
   * ### POST /chatPost_text (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { text?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_textResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_textFull({ text?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_textFull!: (
    body: RequestBody$postApiChatPost_text['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_textResponse>;

  /**
   * ### POST /chatRead
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { last_message_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatReadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatRead({ last_message_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatRead!: (
    body: RequestBody$postApiChatRead['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatReadStatus>;

  /**
   * ### POST /chatRead (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { last_message_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatReadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatReadFull({ last_message_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatReadFull!: (
    body: RequestBody$postApiChatRead['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatReadResponse>;

  /**
   * ### GET /chatThread
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThread({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public chatThread!: (
    query?: Parameter$getApiChatThread,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadStatus>;

  /**
   * ### GET /chatThread (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreadFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public chatThreadFull!: (
    query?: Parameter$getApiChatThread,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadResponse>;

  /**
   * ### POST /chatThread_visibility
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { group_id?: string; is_visible?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThread_visibilityStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatThread_visibility({ group_id?: string; is_visible?: string; });
   * console.log(res);
   * ```
   */
  public chatThread_visibility!: (
    body: RequestBody$postApiChatThread_visibility['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThread_visibilityStatus>;

  /**
   * ### POST /chatThread_visibility (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { group_id?: string; is_visible?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThread_visibilityResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThread_visibilityFull({ group_id?: string; is_visible?: string; });
   * console.log(res);
   * ```
   */
  public chatThread_visibilityFull!: (
    body: RequestBody$postApiChatThread_visibility['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThread_visibilityResponse>;

  /**
   * ### GET /chatThreads
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreads({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public chatThreads!: (
    query?: Parameter$getApiChatThreads,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadsStatus>;

  /**
   * ### GET /chatThreads (full response)
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreadsFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public chatThreadsFull!: (
    query?: Parameter$getApiChatThreads,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadsResponse>;

  /**
   * ### GET /closetAvatar
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetAvatarStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetAvatar({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public closetAvatar!: (
    query?: Parameter$getApiClosetAvatar,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatarStatus>;

  /**
   * ### GET /closetAvatar (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetAvatarResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetAvatarFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public closetAvatarFull!: (
    query?: Parameter$getApiClosetAvatar,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatarResponse>;

  /**
   * ### GET /closetAvatar_parts
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetAvatar_partsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetAvatar_parts({});
   * console.log(res);
   * ```
   */
  public closetAvatar_parts!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatar_partsStatus>;

  /**
   * ### GET /closetAvatar_parts (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetAvatar_partsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetAvatar_partsFull({});
   * console.log(res);
   * ```
   */
  public closetAvatar_partsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatar_partsResponse>;

  /**
   * ### GET /closetClosets
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetClosetsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetClosets({});
   * console.log(res);
   * ```
   */
  public closetClosets!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetClosetsStatus>;

  /**
   * ### GET /closetClosets (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetClosetsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetClosetsFull({});
   * console.log(res);
   * ```
   */
  public closetClosetsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetClosetsResponse>;

  /**
   * ### POST /closetUpdate_closet_avatar
   * **Content-Type**: `application/json`
   *
   * @param body  { motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetUpdate_closet_avatarStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.closetUpdate_closet_avatar({ motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; });
   * console.log(res);
   * ```
   */
  public closetUpdate_closet_avatar!: (
    body: RequestBody$postApiClosetUpdate_closet_avatar['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_avatarStatus>;

  /**
   * ### POST /closetUpdate_closet_avatar (full response)
   * **Content-Type**: `application/json`
   *
   * @param body  { motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetUpdate_closet_avatarResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetUpdate_closet_avatarFull({ motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; });
   * console.log(res);
   * ```
   */
  public closetUpdate_closet_avatarFull!: (
    body: RequestBody$postApiClosetUpdate_closet_avatar['application/json'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_avatarResponse>;

  /**
   * ### POST /closetUpdate_closet_images
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { i?: string; C?: string; k?: string; Tu?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetUpdate_closet_imagesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.closetUpdate_closet_images({ i?: string; C?: string; k?: string; Tu?: string; });
   * console.log(res);
   * ```
   */
  public closetUpdate_closet_images!: (
    body: RequestBody$postApiClosetUpdate_closet_images['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_imagesStatus>;

  /**
   * ### POST /closetUpdate_closet_images (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { i?: string; C?: string; k?: string; Tu?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ClosetUpdate_closet_imagesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.closetUpdate_closet_imagesFull({ i?: string; C?: string; k?: string; Tu?: string; });
   * console.log(res);
   * ```
   */
  public closetUpdate_closet_imagesFull!: (
    body: RequestBody$postApiClosetUpdate_closet_images['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_imagesResponse>;

  /**
   * ### GET /coin_boxStatus
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Coin_boxStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.coin_boxStatus({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public coin_boxStatus!: (
    query?: Parameter$getApiCoin_boxStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Coin_boxStatusStatus>;

  /**
   * ### GET /coin_boxStatus (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Coin_boxStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.coin_boxStatusFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public coin_boxStatusFull!: (
    query?: Parameter$getApiCoin_boxStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Coin_boxStatusResponse>;

  /**
   * ### GET /collabCollaborating_users
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCollaborating_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCollaborating_users({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public collabCollaborating_users!: (
    query?: Parameter$getApiCollabCollaborating_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCollaborating_usersStatus>;

  /**
   * ### GET /collabCollaborating_users (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCollaborating_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCollaborating_usersFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public collabCollaborating_usersFull!: (
    query?: Parameter$getApiCollabCollaborating_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCollaborating_usersResponse>;

  /**
   * ### GET /contractSummary
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ContractSummaryStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.contractSummary({});
   * console.log(res);
   * ```
   */
  public contractSummary!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ContractSummaryStatus>;

  /**
   * ### GET /contractSummary (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ContractSummaryResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.contractSummaryFull({});
   * console.log(res);
   * ```
   */
  public contractSummaryFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ContractSummaryResponse>;

  /**
   * ### GET /eventNotice
   *
   * @param query - { type?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<EventNoticeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.eventNotice({ type?: number | undefined });
   * console.log(res);
   * ```
   */
  public eventNotice!: (
    query?: Parameter$getApiEventNotice,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<EventNoticeStatus>;

  /**
   * ### GET /eventNotice (full response)
   *
   * @param query - { type?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<EventNoticeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.eventNoticeFull({ type?: number | undefined });
   * console.log(res);
   * ```
   */
  public eventNoticeFull!: (
    query?: Parameter$getApiEventNotice,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<EventNoticeResponse>;

  /**
   * ### POST /featureRegister_device_token
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { device_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<FeatureRegister_device_tokenStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.featureRegister_device_token({ device_token?: string; });
   * console.log(res);
   * ```
   */
  public featureRegister_device_token!: (
    body: RequestBody$postApiFeatureRegister_device_token['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<FeatureRegister_device_tokenStatus>;

  /**
   * ### POST /featureRegister_device_token (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { device_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<FeatureRegister_device_tokenResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.featureRegister_device_tokenFull({ device_token?: string; });
   * console.log(res);
   * ```
   */
  public featureRegister_device_tokenFull!: (
    body: RequestBody$postApiFeatureRegister_device_token['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<FeatureRegister_device_tokenResponse>;

  /**
   * ### GET /giftEmomo_run_gifts
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftEmomo_run_giftsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftEmomo_run_gifts({});
   * console.log(res);
   * ```
   */
  public giftEmomo_run_gifts!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftEmomo_run_giftsStatus>;

  /**
   * ### GET /giftEmomo_run_gifts (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftEmomo_run_giftsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftEmomo_run_giftsFull({});
   * console.log(res);
   * ```
   */
  public giftEmomo_run_giftsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftEmomo_run_giftsResponse>;

  /**
   * ### GET /giftPanels
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftPanelsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftPanels({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public giftPanels!: (
    query?: Parameter$getApiGiftPanels,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftPanelsStatus>;

  /**
   * ### GET /giftPanels (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftPanelsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftPanelsFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public giftPanelsFull!: (
    query?: Parameter$getApiGiftPanels,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftPanelsResponse>;

  /**
   * ### GET /giftRanking
   *
   * @param query - { live_id?: string | undefined; type?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftRankingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftRanking({ live_id?: string | undefined; type?: string | undefined });
   * console.log(res);
   * ```
   */
  public giftRanking!: (
    query?: Parameter$getApiGiftRanking,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftRankingStatus>;

  /**
   * ### GET /giftRanking (full response)
   *
   * @param query - { live_id?: string | undefined; type?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftRankingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftRankingFull({ live_id?: string | undefined; type?: string | undefined });
   * console.log(res);
   * ```
   */
  public giftRankingFull!: (
    query?: Parameter$getApiGiftRanking,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftRankingResponse>;

  /**
   * ### POST /giftSend
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftSendStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftSend({ count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; });
   * console.log(res);
   * ```
   */
  public giftSend!: (
    body: RequestBody$postApiGiftSend['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftSendStatus>;

  /**
   * ### POST /giftSend (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftSendResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftSendFull({ count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; });
   * console.log(res);
   * ```
   */
  public giftSendFull!: (
    body: RequestBody$postApiGiftSend['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftSendResponse>;

  /**
   * ### GET /giftUnique_emomo_gift_config
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_configStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_config({});
   * console.log(res);
   * ```
   */
  public giftUnique_emomo_gift_config!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUnique_emomo_gift_configStatus>;

  /**
   * ### GET /giftUnique_emomo_gift_config (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_configResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_configFull({});
   * console.log(res);
   * ```
   */
  public giftUnique_emomo_gift_configFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUnique_emomo_gift_configResponse>;

  /**
   * ### GET /giftUnique_emomo_gift_slots
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_slotsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_slots({});
   * console.log(res);
   * ```
   */
  public giftUnique_emomo_gift_slots!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUnique_emomo_gift_slotsStatus>;

  /**
   * ### GET /giftUnique_emomo_gift_slots (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_slotsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_slotsFull({});
   * console.log(res);
   * ```
   */
  public giftUnique_emomo_gift_slotsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUnique_emomo_gift_slotsResponse>;

  /**
   * ### POST /giftUpdate_simple_unique_emomo_gift
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_simple_unique_emomo_giftStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftUpdate_simple_unique_emomo_gift({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public giftUpdate_simple_unique_emomo_gift!: (
    body: RequestBody$postApiGiftUpdate_simple_unique_emomo_gift['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_simple_unique_emomo_giftStatus>;

  /**
   * ### POST /giftUpdate_simple_unique_emomo_gift (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_simple_unique_emomo_giftResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUpdate_simple_unique_emomo_giftFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public giftUpdate_simple_unique_emomo_giftFull!: (
    body: RequestBody$postApiGiftUpdate_simple_unique_emomo_gift['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_simple_unique_emomo_giftResponse>;

  /**
   * ### POST /gift_appeal_popupRead
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { gift_appeal_popup_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_appeal_popupReadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.gift_appeal_popupRead({ gift_appeal_popup_id?: string; });
   * console.log(res);
   * ```
   */
  public gift_appeal_popupRead!: (
    body: RequestBody$postApiGift_appeal_popupRead['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_appeal_popupReadStatus>;

  /**
   * ### POST /gift_appeal_popupRead (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { gift_appeal_popup_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_appeal_popupReadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_appeal_popupReadFull({ gift_appeal_popup_id?: string; });
   * console.log(res);
   * ```
   */
  public gift_appeal_popupReadFull!: (
    body: RequestBody$postApiGift_appeal_popupRead['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_appeal_popupReadResponse>;

  /**
   * ### POST /googleConnect
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleConnectStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.googleConnect({ id_token?: string; });
   * console.log(res);
   * ```
   */
  public googleConnect!: (
    body: RequestBody$postApiGoogleConnect['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleConnectStatus>;

  /**
   * ### POST /googleConnect (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleConnectResponse & { mrid?: string }>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.googleConnectFull({ id_token?: string; });
   * console.log(res);
   * ```
   */
  public googleConnectFull!: (
    body: RequestBody$postApiGoogleConnect['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleConnectResponse & { mrid?: string }>;

  /**
   * ### POST /googleDisconnect
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleDisconnectStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.googleDisconnect(Record<string, any>);
   * console.log(res);
   * ```
   */
  public googleDisconnect!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleDisconnectStatus>;

  /**
   * ### POST /googleDisconnect (full response)
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleDisconnectResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.googleDisconnectFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  public googleDisconnectFull!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleDisconnectResponse>;

  /**
   * ### POST /graphBlock
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlockStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphBlock({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphBlock!: (
    body: RequestBody$postApiGraphBlock['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlockStatus>;

  /**
   * ### POST /graphBlock (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlockResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlockFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphBlockFull!: (
    body: RequestBody$postApiGraphBlock['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlockResponse>;

  /**
   * ### GET /graphBlocked_users
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlocked_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlocked_users({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphBlocked_users!: (
    query?: Parameter$getApiGraphBlocked_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlocked_usersStatus>;

  /**
   * ### GET /graphBlocked_users (full response)
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlocked_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlocked_usersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphBlocked_usersFull!: (
    query?: Parameter$getApiGraphBlocked_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlocked_usersResponse>;

  /**
   * ### POST /graphFollow
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphFollow({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphFollow!: (
    body: RequestBody$postApiGraphFollow['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowStatus>;

  /**
   * ### POST /graphFollow (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphFollowFull!: (
    body: RequestBody$postApiGraphFollow['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowResponse>;

  /**
   * ### GET /graphFollowers
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowers({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphFollowers!: (
    query?: Parameter$getApiGraphFollowers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowersStatus>;

  /**
   * ### GET /graphFollowers (full response)
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowersFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphFollowersFull!: (
    query?: Parameter$getApiGraphFollowers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowersResponse>;

  /**
   * ### GET /graphFollowings
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowings({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphFollowings!: (
    query?: Parameter$getApiGraphFollowings,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowingsStatus>;

  /**
   * ### GET /graphFollowings (full response)
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowingsFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphFollowingsFull!: (
    query?: Parameter$getApiGraphFollowings,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowingsResponse>;

  /**
   * ### GET /graphRecommend_users
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphRecommend_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphRecommend_users({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphRecommend_users!: (
    query?: Parameter$getApiGraphRecommend_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphRecommend_usersStatus>;

  /**
   * ### GET /graphRecommend_users (full response)
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphRecommend_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphRecommend_usersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphRecommend_usersFull!: (
    query?: Parameter$getApiGraphRecommend_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphRecommend_usersResponse>;

  /**
   * ### GET /graphSearch
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphSearch({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphSearch!: (
    query?: Parameter$getApiGraphSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphSearchStatus>;

  /**
   * ### GET /graphSearch (full response)
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphSearchFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public graphSearchFull!: (
    query?: Parameter$getApiGraphSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphSearchResponse>;

  /**
   * ### POST /graphUnblock
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnblockStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphUnblock({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphUnblock!: (
    body: RequestBody$postApiGraphUnblock['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnblockStatus>;

  /**
   * ### POST /graphUnblock (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnblockResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphUnblockFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphUnblockFull!: (
    body: RequestBody$postApiGraphUnblock['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnblockResponse>;

  /**
   * ### POST /graphUnfollow
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnfollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphUnfollow({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphUnfollow!: (
    body: RequestBody$postApiGraphUnfollow['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnfollowStatus>;

  /**
   * ### POST /graphUnfollow (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnfollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphUnfollowFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  public graphUnfollowFull!: (
    body: RequestBody$postApiGraphUnfollow['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnfollowResponse>;

  /**
   * ### POST /groupEdit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupEditStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupEdit({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public groupEdit!: (
    body: RequestBody$postApiGroupEdit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupEditStatus>;

  /**
   * ### POST /groupEdit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupEditResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupEditFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public groupEditFull!: (
    body: RequestBody$postApiGroupEdit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupEditResponse>;

  /**
   * ### POST /groupInvite_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_ids?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupInvite_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupInvite_users({ user_ids?: string; });
   * console.log(res);
   * ```
   */
  public groupInvite_users!: (
    body: RequestBody$postApiGroupInvite_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupInvite_usersStatus>;

  /**
   * ### POST /groupInvite_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { user_ids?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupInvite_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupInvite_usersFull({ user_ids?: string; });
   * console.log(res);
   * ```
   */
  public groupInvite_usersFull!: (
    body: RequestBody$postApiGroupInvite_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupInvite_usersResponse>;

  /**
   * ### POST /groupLeave
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { group_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupLeaveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupLeave({ group_id?: string; });
   * console.log(res);
   * ```
   */
  public groupLeave!: (
    body: RequestBody$postApiGroupLeave['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupLeaveStatus>;

  /**
   * ### POST /groupLeave (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { group_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupLeaveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupLeaveFull({ group_id?: string; });
   * console.log(res);
   * ```
   */
  public groupLeaveFull!: (
    body: RequestBody$postApiGroupLeave['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupLeaveResponse>;

  /**
   * ### GET /groupUsers
   *
   * @param query - { group_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupUsersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupUsers({ group_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public groupUsers!: (
    query?: Parameter$getApiGroupUsers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupUsersStatus>;

  /**
   * ### GET /groupUsers (full response)
   *
   * @param query - { group_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupUsersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupUsersFull({ group_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public groupUsersFull!: (
    query?: Parameter$getApiGroupUsers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupUsersResponse>;

  /**
   * ### GET /liveAppeal_links
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveAppeal_linksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveAppeal_links({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveAppeal_links!: (
    query?: Parameter$getApiLiveAppeal_links,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveAppeal_linksStatus>;

  /**
   * ### GET /liveAppeal_links (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveAppeal_linksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveAppeal_linksFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveAppeal_linksFull!: (
    query?: Parameter$getApiLiveAppeal_links,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveAppeal_linksResponse>;

  /**
   * ### GET /liveCampaign
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveCampaignStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveCampaign({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveCampaign!: (
    query?: Parameter$getApiLiveCampaign,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveCampaignStatus>;

  /**
   * ### GET /liveCampaign (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveCampaignResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveCampaignFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveCampaignFull!: (
    query?: Parameter$getApiLiveCampaign,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveCampaignResponse>;

  /**
   * ### GET /liveGet_streaming_url
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveGet_streaming_urlStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveGet_streaming_url({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveGet_streaming_url!: (
    query?: Parameter$getApiLiveGet_streaming_url,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveGet_streaming_urlStatus>;

  /**
   * ### GET /liveGet_streaming_url (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveGet_streaming_urlResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveGet_streaming_urlFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveGet_streaming_urlFull!: (
    query?: Parameter$getApiLiveGet_streaming_url,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveGet_streaming_urlResponse>;

  /**
   * ### POST /liveLeave
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLeaveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLeave({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveLeave!: (
    body: RequestBody$postApiLiveLeave['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLeaveStatus>;

  /**
   * ### POST /liveLeave (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLeaveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLeaveFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveLeaveFull!: (
    body: RequestBody$postApiLiveLeave['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLeaveResponse>;

  /**
   * ### GET /liveLive
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLiveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLive!: (
    query?: Parameter$getApiLiveLive,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLiveStatus>;

  /**
   * ### GET /liveLive (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLiveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLiveFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLiveFull!: (
    query?: Parameter$getApiLiveLive,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLiveResponse>;

  /**
   * ### POST /liveLive_comment
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { comment?: string; live_id?: string; type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_comment({ comment?: string; live_id?: string; type?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_comment!: (
    body: RequestBody$postApiLiveLive_comment['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentStatus>;

  /**
   * ### POST /liveLive_comment (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { comment?: string; live_id?: string; type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_commentFull({ comment?: string; live_id?: string; type?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_commentFull!: (
    body: RequestBody$postApiLiveLive_comment['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentResponse>;

  /**
   * ### GET /liveLive_comments
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_comments({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_comments!: (
    query?: Parameter$getApiLiveLive_comments,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentsStatus>;

  /**
   * ### GET /liveLive_comments (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_commentsFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_commentsFull!: (
    query?: Parameter$getApiLiveLive_comments,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentsResponse>;

  /**
   * ### POST /liveLive_create
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_createStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_create(Record<string, any>);
   * console.log(res);
   * ```
   */
  public liveLive_create!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_createStatus>;

  /**
   * ### POST /liveLive_create (full response)
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_createResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_createFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  public liveLive_createFull!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_createResponse>;

  /**
   * ### POST /liveLive_edit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_editStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_edit({ collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_edit!: (
    body: RequestBody$postApiLiveLive_edit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_editStatus>;

  /**
   * ### POST /liveLive_edit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_editResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_editFull({ collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_editFull!: (
    body: RequestBody$postApiLiveLive_edit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_editResponse>;

  /**
   * ### GET /liveLive_game_catalog
   *
   * @param query - { live_game_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_game_catalogStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_game_catalog({ live_game_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_game_catalog!: (
    query?: Parameter$getApiLiveLive_game_catalog,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_game_catalogStatus>;

  /**
   * ### GET /liveLive_game_catalog (full response)
   *
   * @param query - { live_game_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_game_catalogResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_game_catalogFull({ live_game_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_game_catalogFull!: (
    query?: Parameter$getApiLiveLive_game_catalog,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_game_catalogResponse>;

  /**
   * ### GET /liveLive_history
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_history({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_history!: (
    query?: Parameter$getApiLiveLive_history,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_historyStatus>;

  /**
   * ### GET /liveLive_history (full response)
   *
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_historyFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public liveLive_historyFull!: (
    query?: Parameter$getApiLiveLive_history,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_historyResponse>;

  /**
   * ### POST /liveLive_polling
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_pollingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_polling({ error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_polling!: (
    body: RequestBody$postApiLiveLive_polling['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_pollingStatus>;

  /**
   * ### POST /liveLive_polling (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_pollingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_pollingFull({ error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_pollingFull!: (
    body: RequestBody$postApiLiveLive_polling['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_pollingResponse>;

  /**
   * ### GET /liveOnline_users
   *
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveOnline_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveOnline_users({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveOnline_users!: (
    query?: Parameter$getApiLiveOnline_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveOnline_usersStatus>;

  /**
   * ### GET /liveOnline_users (full response)
   *
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveOnline_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveOnline_usersFull({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveOnline_usersFull!: (
    query?: Parameter$getApiLiveOnline_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveOnline_usersResponse>;

  /**
   * ### POST /livePreview_end
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_endStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_end({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_end!: (
    body: RequestBody$postApiLivePreview_end['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_endStatus>;

  /**
   * ### POST /livePreview_end (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_endResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_endFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_endFull!: (
    body: RequestBody$postApiLivePreview_end['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_endResponse>;

  /**
   * ### POST /livePreview_polling
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_pollingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_polling({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_polling!: (
    body: RequestBody$postApiLivePreview_polling['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_pollingStatus>;

  /**
   * ### POST /livePreview_polling (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_pollingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_pollingFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_pollingFull!: (
    body: RequestBody$postApiLivePreview_polling['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_pollingResponse>;

  /**
   * ### POST /livePreview_start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_startStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_start({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_start!: (
    body: RequestBody$postApiLivePreview_start['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_startStatus>;

  /**
   * ### POST /livePreview_start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_startResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_startFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public livePreview_startFull!: (
    body: RequestBody$postApiLivePreview_start['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_startResponse>;

  /**
   * ### POST /liveSanitize_text
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { text?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSanitize_textStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveSanitize_text({ text?: string; });
   * console.log(res);
   * ```
   */
  public liveSanitize_text!: (
    body: RequestBody$postApiLiveSanitize_text['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSanitize_textStatus>;

  /**
   * ### POST /liveSanitize_text (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { text?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSanitize_textResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSanitize_textFull({ text?: string; });
   * console.log(res);
   * ```
   */
  public liveSanitize_textFull!: (
    body: RequestBody$postApiLiveSanitize_text['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSanitize_textResponse>;

  /**
   * ### GET /liveSearch
   *
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSearch({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public liveSearch!: (
    query?: Parameter$getApiLiveSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSearchStatus>;

  /**
   * ### GET /liveSearch (full response)
   *
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSearchFull({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public liveSearchFull!: (
    query?: Parameter$getApiLiveSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSearchResponse>;

  /**
   * ### POST /liveUpdate_archive_settings
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { archive_hidden?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_archive_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_archive_settings({ archive_hidden?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_archive_settings!: (
    body: RequestBody$postApiLiveUpdate_archive_settings['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_archive_settingsStatus>;

  /**
   * ### POST /liveUpdate_archive_settings (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { archive_hidden?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_archive_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_archive_settingsFull({ archive_hidden?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_archive_settingsFull!: (
    body: RequestBody$postApiLiveUpdate_archive_settings['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_archive_settingsResponse>;

  /**
   * ### GET /liveView_history
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveView_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveView_history({});
   * console.log(res);
   * ```
   */
  public liveView_history!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveView_historyStatus>;

  /**
   * ### GET /liveView_history (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveView_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveView_historyFull({});
   * console.log(res);
   * ```
   */
  public liveView_historyFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveView_historyResponse>;

  /**
   * ### POST /live_gameEnd
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameEndStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gameEnd({ play_id?: string; });
   * console.log(res);
   * ```
   */
  public live_gameEnd!: (
    body: RequestBody$postApiLive_gameEnd['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameEndStatus>;

  /**
   * ### POST /live_gameEnd (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameEndResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameEndFull({ play_id?: string; });
   * console.log(res);
   * ```
   */
  public live_gameEndFull!: (
    body: RequestBody$postApiLive_gameEnd['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameEndResponse>;

  /**
   * ### GET /live_gameList
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameListStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameList({});
   * console.log(res);
   * ```
   */
  public live_gameList!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameListStatus>;

  /**
   * ### GET /live_gameList (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameListResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameListFull({});
   * console.log(res);
   * ```
   */
  public live_gameListFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameListResponse>;

  /**
   * ### GET /live_gameNew_counts
   *
   * @param query - { live_games?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameNew_countsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameNew_counts({ live_games?: number | undefined });
   * console.log(res);
   * ```
   */
  public live_gameNew_counts!: (
    query?: Parameter$getApiLive_gameNew_counts,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameNew_countsStatus>;

  /**
   * ### GET /live_gameNew_counts (full response)
   *
   * @param query - { live_games?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameNew_countsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameNew_countsFull({ live_games?: number | undefined });
   * console.log(res);
   * ```
   */
  public live_gameNew_countsFull!: (
    query?: Parameter$getApiLive_gameNew_counts,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameNew_countsResponse>;

  /**
   * ### POST /live_gameStart
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameStartStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gameStart({ id?: string; is_viewer_self_start?: string; source?: string; });
   * console.log(res);
   * ```
   */
  public live_gameStart!: (
    body: RequestBody$postApiLive_gameStart['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameStartStatus>;

  /**
   * ### POST /live_gameStart (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameStartResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameStartFull({ id?: string; is_viewer_self_start?: string; source?: string; });
   * console.log(res);
   * ```
   */
  public live_gameStartFull!: (
    body: RequestBody$postApiLive_gameStart['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameStartResponse>;

  /**
   * ### GET /missionCurrent_login_bonus
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionCurrent_login_bonusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionCurrent_login_bonus({});
   * console.log(res);
   * ```
   */
  public missionCurrent_login_bonus!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionCurrent_login_bonusStatus>;

  /**
   * ### GET /missionCurrent_login_bonus (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionCurrent_login_bonusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionCurrent_login_bonusFull({});
   * console.log(res);
   * ```
   */
  public missionCurrent_login_bonusFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionCurrent_login_bonusResponse>;

  /**
   * ### GET /missionDaily
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionDailyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionDaily({});
   * console.log(res);
   * ```
   */
  public missionDaily!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionDailyStatus>;

  /**
   * ### GET /missionDaily (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionDailyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionDailyFull({});
   * console.log(res);
   * ```
   */
  public missionDailyFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionDailyResponse>;

  /**
   * ### GET /missionStatus
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionStatus({});
   * console.log(res);
   * ```
   */
  public missionStatus!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionStatusStatus>;

  /**
   * ### GET /missionStatus (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionStatusFull({});
   * console.log(res);
   * ```
   */
  public missionStatusFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionStatusResponse>;

  /**
   * ### GET /missionTutorial_status
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionTutorial_statusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionTutorial_status({});
   * console.log(res);
   * ```
   */
  public missionTutorial_status!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionTutorial_statusStatus>;

  /**
   * ### GET /missionTutorial_status (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionTutorial_statusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionTutorial_statusFull({});
   * console.log(res);
   * ```
   */
  public missionTutorial_statusFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionTutorial_statusResponse>;

  /**
   * ### GET /missionWeekly
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionWeeklyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionWeekly({});
   * console.log(res);
   * ```
   */
  public missionWeekly!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionWeeklyStatus>;

  /**
   * ### GET /missionWeekly (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionWeeklyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionWeeklyFull({});
   * console.log(res);
   * ```
   */
  public missionWeeklyFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionWeeklyResponse>;

  /**
   * ### GET /noticeCampaigns
   *
   * @param query - { category?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCampaignsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCampaigns({ category?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticeCampaigns!: (
    query?: Parameter$getApiNoticeCampaigns,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCampaignsStatus>;

  /**
   * ### GET /noticeCampaigns (full response)
   *
   * @param query - { category?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCampaignsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCampaignsFull({ category?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticeCampaignsFull!: (
    query?: Parameter$getApiNoticeCampaigns,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCampaignsResponse>;

  /**
   * ### GET /noticeCounts
   *
   * @param query - { recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCountsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCounts({ recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticeCounts!: (
    query?: Parameter$getApiNoticeCounts,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCountsStatus>;

  /**
   * ### GET /noticeCounts (full response)
   *
   * @param query - { recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCountsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCountsFull({ recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticeCountsFull!: (
    query?: Parameter$getApiNoticeCounts,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCountsResponse>;

  /**
   * ### GET /noticeNews
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeNewsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeNews({});
   * console.log(res);
   * ```
   */
  public noticeNews!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeNewsStatus>;

  /**
   * ### GET /noticeNews (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeNewsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeNewsFull({});
   * console.log(res);
   * ```
   */
  public noticeNewsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeNewsResponse>;

  /**
   * ### GET /noticePopups
   *
   * @param query - { position?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopups({ position?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticePopups!: (
    query?: Parameter$getApiNoticePopups,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupsStatus>;

  /**
   * ### GET /noticePopups (full response)
   *
   * @param query - { position?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopupsFull({ position?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticePopupsFull!: (
    query?: Parameter$getApiNoticePopups,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupsResponse>;

  /**
   * ### GET /noticePresent_boxes
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePresent_boxesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePresent_boxes({});
   * console.log(res);
   * ```
   */
  public noticePresent_boxes!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePresent_boxesStatus>;

  /**
   * ### GET /noticePresent_boxes (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePresent_boxesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePresent_boxesFull({});
   * console.log(res);
   * ```
   */
  public noticePresent_boxesFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePresent_boxesResponse>;

  /**
   * ### GET /noticeYours_v2
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeYours_v2Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeYours_v2({});
   * console.log(res);
   * ```
   */
  public noticeYours_v2!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeYours_v2Status>;

  /**
   * ### GET /noticeYours_v2 (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeYours_v2Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeYours_v2Full({});
   * console.log(res);
   * ```
   */
  public noticeYours_v2Full!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeYours_v2Response>;

  /**
   * ### GET /notificationPush_settings_v3
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GetNotificationPush_settings_v3Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.getNotificationPush_settings_v3({});
   * console.log(res);
   * ```
   */
  public getNotificationPush_settings_v3!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GetNotificationPush_settings_v3Status>;

  /**
   * ### GET /notificationPush_settings_v3 (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GetNotificationPush_settings_v3Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.getNotificationPush_settings_v3Full({});
   * console.log(res);
   * ```
   */
  public getNotificationPush_settings_v3Full!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GetNotificationPush_settings_v3Response>;

  /**
   * ### POST /notificationPush_settings_v3
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PostNotificationPush_settings_v3Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.postNotificationPush_settings_v3({ is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; });
   * console.log(res);
   * ```
   */
  public postNotificationPush_settings_v3!: (
    body: RequestBody$postApiNotificationPush_settings_v3['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PostNotificationPush_settings_v3Status>;

  /**
   * ### POST /notificationPush_settings_v3 (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PostNotificationPush_settings_v3Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.postNotificationPush_settings_v3Full({ is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; });
   * console.log(res);
   * ```
   */
  public postNotificationPush_settings_v3Full!: (
    body: RequestBody$postApiNotificationPush_settings_v3['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PostNotificationPush_settings_v3Response>;

  /**
   * ### GET /rankingFocusable
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingFocusableStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingFocusable({});
   * console.log(res);
   * ```
   */
  public rankingFocusable!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingFocusableStatus>;

  /**
   * ### GET /rankingFocusable (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingFocusableResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingFocusableFull({});
   * console.log(res);
   * ```
   */
  public rankingFocusableFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingFocusableResponse>;

  /**
   * ### GET /rankingUser_detail
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingUser_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingUser_detail({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public rankingUser_detail!: (
    query?: Parameter$getApiRankingUser_detail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingUser_detailStatus>;

  /**
   * ### GET /rankingUser_detail (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingUser_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingUser_detailFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public rankingUser_detailFull!: (
    query?: Parameter$getApiRankingUser_detail,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingUser_detailResponse>;

  /**
   * ### GET /reward_adAvailable_reward_ad_ids
   *
   * @param query - { mode?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adAvailable_reward_ad_idsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adAvailable_reward_ad_ids({ mode?: number | undefined });
   * console.log(res);
   * ```
   */
  public reward_adAvailable_reward_ad_ids!: (
    query?: Parameter$getApiReward_adAvailable_reward_ad_ids,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adAvailable_reward_ad_idsStatus>;

  /**
   * ### GET /reward_adAvailable_reward_ad_ids (full response)
   *
   * @param query - { mode?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adAvailable_reward_ad_idsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adAvailable_reward_ad_idsFull({ mode?: number | undefined });
   * console.log(res);
   * ```
   */
  public reward_adAvailable_reward_ad_idsFull!: (
    query?: Parameter$getApiReward_adAvailable_reward_ad_ids,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adAvailable_reward_ad_idsResponse>;

  /**
   * ### GET /reward_adCheck_available_device
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCheck_available_deviceStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCheck_available_device({});
   * console.log(res);
   * ```
   */
  public reward_adCheck_available_device!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCheck_available_deviceStatus>;

  /**
   * ### GET /reward_adCheck_available_device (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCheck_available_deviceResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCheck_available_deviceFull({});
   * console.log(res);
   * ```
   */
  public reward_adCheck_available_deviceFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCheck_available_deviceResponse>;

  /**
   * ### POST /reward_adComplete
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { reward_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCompleteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.reward_adComplete({ reward_id?: string; });
   * console.log(res);
   * ```
   */
  public reward_adComplete!: (
    body: RequestBody$postApiReward_adComplete['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCompleteStatus>;

  /**
   * ### POST /reward_adComplete (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { reward_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCompleteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCompleteFull({ reward_id?: string; });
   * console.log(res);
   * ```
   */
  public reward_adCompleteFull!: (
    body: RequestBody$postApiReward_adComplete['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCompleteResponse>;

  /**
   * ### GET /season_ratingStatus
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingStatus({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_ratingStatus!: (
    query?: Parameter$getApiSeason_ratingStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingStatusStatus>;

  /**
   * ### GET /season_ratingStatus (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingStatusFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_ratingStatusFull!: (
    query?: Parameter$getApiSeason_ratingStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingStatusResponse>;

  /**
   * ### GET /season_yellStatus
   *
   * @param query - { user_id?: number | undefined; streamer_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellStatus({ user_id?: number | undefined; streamer_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_yellStatus!: (
    query?: Parameter$getApiSeason_yellStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellStatusStatus>;

  /**
   * ### GET /season_yellStatus (full response)
   *
   * @param query - { user_id?: number | undefined; streamer_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellStatusFull({ user_id?: number | undefined; streamer_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_yellStatusFull!: (
    query?: Parameter$getApiSeason_yellStatus,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellStatusResponse>;

  /**
   * ### GET /season_yellViewers
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellViewersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellViewers({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_yellViewers!: (
    query?: Parameter$getApiSeason_yellViewers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellViewersStatus>;

  /**
   * ### GET /season_yellViewers (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellViewersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellViewersFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public season_yellViewersFull!: (
    query?: Parameter$getApiSeason_yellViewers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellViewersResponse>;

  /**
   * ### GET /tooltipStart_live_button
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<TooltipStart_live_buttonStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.tooltipStart_live_button({});
   * console.log(res);
   * ```
   */
  public tooltipStart_live_button!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<TooltipStart_live_buttonStatus>;

  /**
   * ### GET /tooltipStart_live_button (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<TooltipStart_live_buttonResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.tooltipStart_live_buttonFull({});
   * console.log(res);
   * ```
   */
  public tooltipStart_live_buttonFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<TooltipStart_live_buttonResponse>;

  /**
   * ### POST /userBad_report
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { category_id?: string; message?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBad_reportStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userBad_report({ category_id?: string; message?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public userBad_report!: (
    body: RequestBody$postApiUserBad_report['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBad_reportStatus>;

  /**
   * ### POST /userBad_report (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { category_id?: string; message?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBad_reportResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBad_reportFull({ category_id?: string; message?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public userBad_reportFull!: (
    body: RequestBody$postApiUserBad_report['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBad_reportResponse>;

  /**
   * ### GET /userBroadcast_settings
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBroadcast_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBroadcast_settings({});
   * console.log(res);
   * ```
   */
  public userBroadcast_settings!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBroadcast_settingsStatus>;

  /**
   * ### GET /userBroadcast_settings (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBroadcast_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBroadcast_settingsFull({});
   * console.log(res);
   * ```
   */
  public userBroadcast_settingsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBroadcast_settingsResponse>;

  /**
   * ### POST /userCheck_minor
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCheck_minorStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userCheck_minor({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  public userCheck_minor!: (
    body: RequestBody$postApiUserCheck_minor['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCheck_minorStatus>;

  /**
   * ### POST /userCheck_minor (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCheck_minorResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCheck_minorFull({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  public userCheck_minorFull!: (
    body: RequestBody$postApiUserCheck_minor['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCheck_minorResponse>;

  /**
   * ### GET /userCurrency
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCurrencyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCurrency({});
   * console.log(res);
   * ```
   */
  public userCurrency!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCurrencyStatus>;

  /**
   * ### GET /userCurrency (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCurrencyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCurrencyFull({});
   * console.log(res);
   * ```
   */
  public userCurrencyFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCurrencyResponse>;

  /**
   * ### POST /userDate_of_birth
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDate_of_birthStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userDate_of_birth({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  public userDate_of_birth!: (
    body: RequestBody$postApiUserDate_of_birth['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDate_of_birthStatus>;

  /**
   * ### POST /userDate_of_birth (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDate_of_birthResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userDate_of_birthFull({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  public userDate_of_birthFull!: (
    body: RequestBody$postApiUserDate_of_birth['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDate_of_birthResponse>;

  /**
   * ### POST /userDelete_live_announcement
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDelete_live_announcementStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userDelete_live_announcement(Record<string, any>);
   * console.log(res);
   * ```
   */
  public userDelete_live_announcement!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDelete_live_announcementStatus>;

  /**
   * ### POST /userDelete_live_announcement (full response)
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDelete_live_announcementResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userDelete_live_announcementFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  public userDelete_live_announcementFull!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDelete_live_announcementResponse>;

  /**
   * ### GET /userFavorite_live_setting
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserFavorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userFavorite_live_setting({});
   * console.log(res);
   * ```
   */
  public userFavorite_live_setting!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserFavorite_live_settingStatus>;

  /**
   * ### GET /userFavorite_live_setting (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserFavorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userFavorite_live_settingFull({});
   * console.log(res);
   * ```
   */
  public userFavorite_live_settingFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserFavorite_live_settingResponse>;

  /**
   * ### POST /userLogout
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserLogoutStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userLogout(Record<string, any>);
   * console.log(res);
   * ```
   */
  public userLogout!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserLogoutStatus>;

  /**
   * ### POST /userLogout (full response)
   *
   * @param body  Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserLogoutResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userLogoutFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  public userLogoutFull!: (
    body?: any,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserLogoutResponse>;

  /**
   * ### GET /userMe
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserMeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userMe({});
   * console.log(res);
   * ```
   */
  public userMe!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserMeStatus>;

  /**
   * ### GET /userMe (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserMeResponse & { mrid?: string }>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userMeFull({});
   * console.log(res);
   * ```
   */
  public userMeFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserMeResponse & { mrid?: string }>;

  /**
   * ### POST /userPost_live_announcement
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_announcementStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_live_announcement({ body?: string; is_notified_to_follower?: string; start_at?: string; });
   * console.log(res);
   * ```
   */
  public userPost_live_announcement!: (
    body: RequestBody$postApiUserPost_live_announcement['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_announcementStatus>;

  /**
   * ### POST /userPost_live_announcement (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_announcementResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_live_announcementFull({ body?: string; is_notified_to_follower?: string; start_at?: string; });
   * console.log(res);
   * ```
   */
  public userPost_live_announcementFull!: (
    body: RequestBody$postApiUserPost_live_announcement['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_announcementResponse>;

  /**
   * ### POST /userPost_live_request
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { count?: string; user_id?: string; where?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_requestStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_live_request({ count?: string; user_id?: string; where?: string; });
   * console.log(res);
   * ```
   */
  public userPost_live_request!: (
    body: RequestBody$postApiUserPost_live_request['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_requestStatus>;

  /**
   * ### POST /userPost_live_request (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { count?: string; user_id?: string; where?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_requestResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_live_requestFull({ count?: string; user_id?: string; where?: string; });
   * console.log(res);
   * ```
   */
  public userPost_live_requestFull!: (
    body: RequestBody$postApiUserPost_live_request['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_requestResponse>;

  /**
   * ### POST /userPost_review_confirmation
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { status?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_review_confirmationStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_review_confirmation({ status?: string; });
   * console.log(res);
   * ```
   */
  public userPost_review_confirmation!: (
    body: RequestBody$postApiUserPost_review_confirmation['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_review_confirmationStatus>;

  /**
   * ### POST /userPost_review_confirmation (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { status?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_review_confirmationResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_review_confirmationFull({ status?: string; });
   * console.log(res);
   * ```
   */
  public userPost_review_confirmationFull!: (
    body: RequestBody$postApiUserPost_review_confirmation['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_review_confirmationResponse>;

  /**
   * ### GET /userProfile
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfileStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfile({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public userProfile!: (
    query?: Parameter$getApiUserProfile,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfileStatus>;

  /**
   * ### GET /userProfile (full response)
   *
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfileResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfileFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  public userProfileFull!: (
    query?: Parameter$getApiUserProfile,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfileResponse>;

  /**
   * ### POST /userProfile_edit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfile_editStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userProfile_edit({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public userProfile_edit!: (
    body: RequestBody$postApiUserProfile_edit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfile_editStatus>;

  /**
   * ### POST /userProfile_edit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfile_editResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfile_editFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public userProfile_editFull!: (
    body: RequestBody$postApiUserProfile_edit['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfile_editResponse>;

  /**
   * ### GET /userSearch
   *
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSearch({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public userSearch!: (
    query?: Parameter$getApiUserSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSearchStatus>;

  /**
   * ### GET /userSearch (full response)
   *
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSearchFull({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public userSearchFull!: (
    query?: Parameter$getApiUserSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSearchResponse>;

  /**
   * ### GET /userSetting_root
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSetting_rootStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSetting_root({});
   * console.log(res);
   * ```
   */
  public userSetting_root!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSetting_rootStatus>;

  /**
   * ### GET /userSetting_root (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSetting_rootResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSetting_rootFull({});
   * console.log(res);
   * ```
   */
  public userSetting_rootFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSetting_rootResponse>;

  /**
   * ### GET /userTos
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserTosStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userTos({});
   * console.log(res);
   * ```
   */
  public userTos!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserTosStatus>;

  /**
   * ### GET /userTos (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserTosResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userTosFull({});
   * console.log(res);
   * ```
   */
  public userTosFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserTosResponse>;

  /**
   * ### POST /userUpdate_favorite_live_setting
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_favorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUpdate_favorite_live_setting({ app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; });
   * console.log(res);
   * ```
   */
  public userUpdate_favorite_live_setting!: (
    body: RequestBody$postApiUserUpdate_favorite_live_setting['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_favorite_live_settingStatus>;

  /**
   * ### POST /userUpdate_favorite_live_setting (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_favorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUpdate_favorite_live_settingFull({ app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; });
   * console.log(res);
   * ```
   */
  public userUpdate_favorite_live_settingFull!: (
    body: RequestBody$postApiUserUpdate_favorite_live_setting['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_favorite_live_settingResponse>;

  /**
   * ### POST /userUpdate_recording_settings
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { enabled?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_recording_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUpdate_recording_settings({ enabled?: string; });
   * console.log(res);
   * ```
   */
  public userUpdate_recording_settings!: (
    body: RequestBody$postApiUserUpdate_recording_settings['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_recording_settingsStatus>;

  /**
   * ### POST /userUpdate_recording_settings (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { enabled?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_recording_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUpdate_recording_settingsFull({ enabled?: string; });
   * console.log(res);
   * ```
   */
  public userUpdate_recording_settingsFull!: (
    body: RequestBody$postApiUserUpdate_recording_settings['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_recording_settingsResponse>;

  /**
   * ### POST /userUse_favorite_live_setting
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUse_favorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUse_favorite_live_setting({ id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public userUse_favorite_live_setting!: (
    body: RequestBody$postApiUserUse_favorite_live_setting['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUse_favorite_live_settingStatus>;

  /**
   * ### POST /userUse_favorite_live_setting (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUse_favorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUse_favorite_live_settingFull({ id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public userUse_favorite_live_settingFull!: (
    body: RequestBody$postApiUserUse_favorite_live_setting['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUse_favorite_live_settingResponse>;

  /**
   * ### GET /userWatchword
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserWatchwordStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userWatchword({});
   * console.log(res);
   * ```
   */
  public userWatchword!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserWatchwordStatus>;

  /**
   * ### GET /userWatchword (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserWatchwordResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userWatchwordFull({});
   * console.log(res);
   * ```
   */
  public userWatchwordFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserWatchwordResponse>;

  /**
   * ### POST /chatAgree
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_agreed?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatAgreeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatAgree({ is_agreed?: string; });
   * console.log(res);
   * ```
   */
  public chatAgree!: (
    body: RequestBody$postApiChatAgree['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatAgreeStatus>;

  /**
   * ### POST /chatAgree (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_agreed?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatAgreeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatAgreeFull({ is_agreed?: string; });
   * console.log(res);
   * ```
   */
  public chatAgreeFull!: (
    body: RequestBody$postApiChatAgree['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatAgreeResponse>;

  /**
   * ### POST /chatPost_thanks
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_thanks({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_thanks!: (
    body: RequestBody$postApiChatPost_thanks['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanksStatus>;

  /**
   * ### POST /chatPost_thanks (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_thanksFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_thanksFull!: (
    body: RequestBody$postApiChatPost_thanks['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanksResponse>;

  /**
   * ### POST /chatPost_thanks_to_live_watched_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanks_to_live_watched_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_thanks_to_live_watched_users({ custom_thanks_message?: string; live_id?: string; target_type?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_thanks_to_live_watched_users!: (
    body: RequestBody$postApiChatPost_thanks_to_live_watched_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanks_to_live_watched_usersStatus>;

  /**
   * ### POST /chatPost_thanks_to_live_watched_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanks_to_live_watched_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_thanks_to_live_watched_usersFull({ custom_thanks_message?: string; live_id?: string; target_type?: string; });
   * console.log(res);
   * ```
   */
  public chatPost_thanks_to_live_watched_usersFull!: (
    body: RequestBody$postApiChatPost_thanks_to_live_watched_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanks_to_live_watched_usersResponse>;

  /**
   * ### POST /collabClose
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCloseStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabClose({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabClose!: (
    body: RequestBody$postApiCollabClose['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCloseStatus>;

  /**
   * ### POST /collabClose (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCloseResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCloseFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabCloseFull!: (
    body: RequestBody$postApiCollabClose['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCloseResponse>;

  /**
   * ### GET /collabConnected_streaming_collab_lives
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabConnected_streaming_collab_livesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabConnected_streaming_collab_lives({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public collabConnected_streaming_collab_lives!: (
    query?: Parameter$getApiCollabConnected_streaming_collab_lives,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabConnected_streaming_collab_livesStatus>;

  /**
   * ### GET /collabConnected_streaming_collab_lives (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabConnected_streaming_collab_livesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabConnected_streaming_collab_livesFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public collabConnected_streaming_collab_livesFull!: (
    query?: Parameter$getApiCollabConnected_streaming_collab_lives,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabConnected_streaming_collab_livesResponse>;

  /**
   * ### GET /collabInvitable_users
   *
   * @param query - { live_id?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInvitable_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInvitable_users({ live_id?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public collabInvitable_users!: (
    query?: Parameter$getApiCollabInvitable_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInvitable_usersStatus>;

  /**
   * ### GET /collabInvitable_users (full response)
   *
   * @param query - { live_id?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInvitable_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInvitable_usersFull({ live_id?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  public collabInvitable_usersFull!: (
    query?: Parameter$getApiCollabInvitable_users,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInvitable_usersResponse>;

  /**
   * ### POST /collabInvite
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInviteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabInvite({ collab_type?: string; invite_user_id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public collabInvite!: (
    body: RequestBody$postApiCollabInvite['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInviteStatus>;

  /**
   * ### POST /collabInvite (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInviteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInviteFull({ collab_type?: string; invite_user_id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public collabInviteFull!: (
    body: RequestBody$postApiCollabInvite['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInviteResponse>;

  /**
   * ### POST /collabSend_to_peer
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabSend_to_peerStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabSend_to_peer({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabSend_to_peer!: (
    body: RequestBody$postApiCollabSend_to_peer['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabSend_to_peerStatus>;

  /**
   * ### POST /collabSend_to_peer (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabSend_to_peerResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabSend_to_peerFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabSend_to_peerFull!: (
    body: RequestBody$postApiCollabSend_to_peer['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabSend_to_peerResponse>;

  /**
   * ### POST /collabStart
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabStartStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabStart({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabStart!: (
    body: RequestBody$postApiCollabStart['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabStartStatus>;

  /**
   * ### POST /collabStart (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabStartResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabStartFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public collabStartFull!: (
    body: RequestBody$postApiCollabStart['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabStartResponse>;

  /**
   * ### POST /giftUpdate_rich_unique_emomo_gift
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_rich_unique_emomo_giftStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftUpdate_rich_unique_emomo_gift({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public giftUpdate_rich_unique_emomo_gift!: (
    body: RequestBody$postApiGiftUpdate_rich_unique_emomo_gift['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_rich_unique_emomo_giftStatus>;

  /**
   * ### POST /giftUpdate_rich_unique_emomo_gift (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_rich_unique_emomo_giftResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUpdate_rich_unique_emomo_giftFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public giftUpdate_rich_unique_emomo_giftFull!: (
    body: RequestBody$postApiGiftUpdate_rich_unique_emomo_gift['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_rich_unique_emomo_giftResponse>;

  /**
   * ### GET /gift_gachaUser_stocks
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_gachaUser_stocksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_gachaUser_stocks({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public gift_gachaUser_stocks!: (
    query?: Parameter$getApiGift_gachaUser_stocks,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_gachaUser_stocksStatus>;

  /**
   * ### GET /gift_gachaUser_stocks (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_gachaUser_stocksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_gachaUser_stocksFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public gift_gachaUser_stocksFull!: (
    query?: Parameter$getApiGift_gachaUser_stocks,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_gachaUser_stocksResponse>;

  /**
   * ### POST /graphFollow_live_watched_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollow_live_watched_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphFollow_live_watched_users({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public graphFollow_live_watched_users!: (
    body: RequestBody$postApiGraphFollow_live_watched_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollow_live_watched_usersStatus>;

  /**
   * ### POST /graphFollow_live_watched_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollow_live_watched_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollow_live_watched_usersFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public graphFollow_live_watched_usersFull!: (
    body: RequestBody$postApiGraphFollow_live_watched_users['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollow_live_watched_usersResponse>;

  /**
   * ### GET /karaoke
   *
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaoke({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaoke!: (
    query?: Parameter$getApiKaraoke,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeStatus>;

  /**
   * ### GET /karaoke (full response)
   *
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeFull({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeFull!: (
    query?: Parameter$getApiKaraoke,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeResponse>;

  /**
   * ### GET /karaokeBy_genre
   *
   * @param query - { page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeBy_genreStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeBy_genre({ page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeBy_genre!: (
    query?: Parameter$getApiKaraokeBy_genre,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeBy_genreStatus>;

  /**
   * ### GET /karaokeBy_genre (full response)
   *
   * @param query - { page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeBy_genreResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeBy_genreFull({ page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeBy_genreFull!: (
    query?: Parameter$getApiKaraokeBy_genre,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeBy_genreResponse>;

  /**
   * ### GET /karaokeGenres
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeGenresStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeGenres({});
   * console.log(res);
   * ```
   */
  public karaokeGenres!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeGenresStatus>;

  /**
   * ### GET /karaokeGenres (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeGenresResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeGenresFull({});
   * console.log(res);
   * ```
   */
  public karaokeGenresFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeGenresResponse>;

  /**
   * ### GET /karaokeRecommend_singers
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeRecommend_singersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeRecommend_singers({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeRecommend_singers!: (
    query?: Parameter$getApiKaraokeRecommend_singers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeRecommend_singersStatus>;

  /**
   * ### GET /karaokeRecommend_singers (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeRecommend_singersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeRecommend_singersFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeRecommend_singersFull!: (
    query?: Parameter$getApiKaraokeRecommend_singers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeRecommend_singersResponse>;

  /**
   * ### GET /karaokeSearch
   *
   * @param query - { q?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSearch({ q?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeSearch!: (
    query?: Parameter$getApiKaraokeSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSearchStatus>;

  /**
   * ### GET /karaokeSearch (full response)
   *
   * @param query - { q?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSearchFull({ q?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public karaokeSearchFull!: (
    query?: Parameter$getApiKaraokeSearch,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSearchResponse>;

  /**
   * ### GET /karaokeSingers
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSingersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSingers({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public karaokeSingers!: (
    query?: Parameter$getApiKaraokeSingers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSingersStatus>;

  /**
   * ### GET /karaokeSingers (full response)
   *
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSingersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSingersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  public karaokeSingersFull!: (
    query?: Parameter$getApiKaraokeSingers,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSingersResponse>;

  /**
   * ### GET /liveBroadcast_result
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveBroadcast_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveBroadcast_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveBroadcast_result!: (
    query?: Parameter$getApiLiveBroadcast_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveBroadcast_resultStatus>;

  /**
   * ### GET /liveBroadcast_result (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveBroadcast_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveBroadcast_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveBroadcast_resultFull!: (
    query?: Parameter$getApiLiveBroadcast_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveBroadcast_resultResponse>;

  /**
   * ### POST /liveDelete_live_history
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveDelete_live_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveDelete_live_history({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveDelete_live_history!: (
    body: RequestBody$postApiLiveDelete_live_history['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveDelete_live_historyStatus>;

  /**
   * ### POST /liveDelete_live_history (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveDelete_live_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveDelete_live_historyFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveDelete_live_historyFull!: (
    body: RequestBody$postApiLiveDelete_live_history['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveDelete_live_historyResponse>;

  /**
   * ### POST /liveKick_out
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveKick_outStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveKick_out({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public liveKick_out!: (
    body: RequestBody$postApiLiveKick_out['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveKick_outStatus>;

  /**
   * ### POST /liveKick_out (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveKick_outResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveKick_outFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public liveKick_outFull!: (
    body: RequestBody$postApiLiveKick_out['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveKick_outResponse>;

  /**
   * ### POST /liveLive_app_identifier_changed
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_identifier?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_app_identifier_changedStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_app_identifier_changed({ app_identifier?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_app_identifier_changed!: (
    body: RequestBody$postApiLiveLive_app_identifier_changed['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_app_identifier_changedStatus>;

  /**
   * ### POST /liveLive_app_identifier_changed (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { app_identifier?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_app_identifier_changedResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_app_identifier_changedFull({ app_identifier?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_app_identifier_changedFull!: (
    body: RequestBody$postApiLiveLive_app_identifier_changed['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_app_identifier_changedResponse>;

  /**
   * ### POST /liveLive_capture_image
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_capture_imageStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_capture_image({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public liveLive_capture_image!: (
    body: RequestBody$postApiLiveLive_capture_image['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_capture_imageStatus>;

  /**
   * ### POST /liveLive_capture_image (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_capture_imageResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_capture_imageFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  public liveLive_capture_imageFull!: (
    body: RequestBody$postApiLiveLive_capture_image['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_capture_imageResponse>;

  /**
   * ### POST /liveLive_end
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_endStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_end({ is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_end!: (
    body: RequestBody$postApiLiveLive_end['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_endStatus>;

  /**
   * ### POST /liveLive_end (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_endResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_endFull({ is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_endFull!: (
    body: RequestBody$postApiLiveLive_end['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_endResponse>;

  /**
   * ### POST /liveLive_heartbeat
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_heartbeatStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_heartbeat({ buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_heartbeat!: (
    body: RequestBody$postApiLiveLive_heartbeat['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_heartbeatStatus>;

  /**
   * ### POST /liveLive_heartbeat (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_heartbeatResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_heartbeatFull({ buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_heartbeatFull!: (
    body: RequestBody$postApiLiveLive_heartbeat['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_heartbeatResponse>;

  /**
   * ### POST /liveLive_start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_startStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_start({ comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_start!: (
    body: RequestBody$postApiLiveLive_start['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_startStatus>;

  /**
   * ### POST /liveLive_start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_startResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_startFull({ comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  public liveLive_startFull!: (
    body: RequestBody$postApiLiveLive_start['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_startResponse>;

  /**
   * ### POST /liveUpdate_emomo_visible
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_visible?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_emomo_visibleStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_emomo_visible({ is_visible?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_emomo_visible!: (
    body: RequestBody$postApiLiveUpdate_emomo_visible['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_emomo_visibleStatus>;

  /**
   * ### POST /liveUpdate_emomo_visible (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_visible?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_emomo_visibleResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_emomo_visibleFull({ is_visible?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_emomo_visibleFull!: (
    body: RequestBody$postApiLiveUpdate_emomo_visible['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_emomo_visibleResponse>;

  /**
   * ### POST /liveUpdate_wipe_enabled
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_wipe_enabledStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_wipe_enabled({ is_emomo_wipe_enabled?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_wipe_enabled!: (
    body: RequestBody$postApiLiveUpdate_wipe_enabled['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_wipe_enabledStatus>;

  /**
   * ### POST /liveUpdate_wipe_enabled (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_wipe_enabledResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_wipe_enabledFull({ is_emomo_wipe_enabled?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  public liveUpdate_wipe_enabledFull!: (
    body: RequestBody$postApiLiveUpdate_wipe_enabled['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_wipe_enabledResponse>;

  /**
   * ### GET /liveViewers_result
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveViewers_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveViewers_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveViewers_result!: (
    query?: Parameter$getApiLiveViewers_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveViewers_resultStatus>;

  /**
   * ### GET /liveViewers_result (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveViewers_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveViewers_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public liveViewers_resultFull!: (
    query?: Parameter$getApiLiveViewers_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveViewers_resultResponse>;

  /**
   * ### POST /live_gamePing
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gamePingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gamePing({ live_id?: string; play_id?: string; });
   * console.log(res);
   * ```
   */
  public live_gamePing!: (
    body: RequestBody$postApiLive_gamePing['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gamePingStatus>;

  /**
   * ### POST /live_gamePing (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gamePingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gamePingFull({ live_id?: string; play_id?: string; });
   * console.log(res);
   * ```
   */
  public live_gamePingFull!: (
    body: RequestBody$postApiLive_gamePing['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gamePingResponse>;

  /**
   * ### POST /missionReceive_login_bonus_reward
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { login_bonus_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionReceive_login_bonus_rewardStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.missionReceive_login_bonus_reward({ login_bonus_id?: string; });
   * console.log(res);
   * ```
   */
  public missionReceive_login_bonus_reward!: (
    body: RequestBody$postApiMissionReceive_login_bonus_reward['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionReceive_login_bonus_rewardStatus>;

  /**
   * ### POST /missionReceive_login_bonus_reward (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { login_bonus_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionReceive_login_bonus_rewardResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionReceive_login_bonus_rewardFull({ login_bonus_id?: string; });
   * console.log(res);
   * ```
   */
  public missionReceive_login_bonus_rewardFull!: (
    body: RequestBody$postApiMissionReceive_login_bonus_reward['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionReceive_login_bonus_rewardResponse>;

  /**
   * ### POST /moderatorAdd
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorAddStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.moderatorAdd({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public moderatorAdd!: (
    body: RequestBody$postApiModeratorAdd['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorAddStatus>;

  /**
   * ### POST /moderatorAdd (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorAddResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.moderatorAddFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public moderatorAddFull!: (
    body: RequestBody$postApiModeratorAdd['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorAddResponse>;

  /**
   * ### POST /moderatorDelete
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorDeleteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.moderatorDelete({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public moderatorDelete!: (
    body: RequestBody$postApiModeratorDelete['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorDeleteStatus>;

  /**
   * ### POST /moderatorDelete (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body  { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorDeleteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.moderatorDeleteFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  public moderatorDeleteFull!: (
    body: RequestBody$postApiModeratorDelete['application/x-www-form-urlencoded'],
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorDeleteResponse>;

  /**
   * ### GET /reward_adOfferwalls
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adOfferwallsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adOfferwalls({});
   * console.log(res);
   * ```
   */
  public reward_adOfferwalls!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adOfferwallsStatus>;

  /**
   * ### GET /reward_adOfferwalls (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adOfferwallsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adOfferwallsFull({});
   * console.log(res);
   * ```
   */
  public reward_adOfferwallsFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adOfferwallsResponse>;

  /**
   * ### GET /season_ratingLive_result
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingLive_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingLive_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public season_ratingLive_result!: (
    query?: Parameter$getApiSeason_ratingLive_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingLive_resultStatus>;

  /**
   * ### GET /season_ratingLive_result (full response)
   *
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingLive_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingLive_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  public season_ratingLive_resultFull!: (
    query?: Parameter$getApiSeason_ratingLive_result,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingLive_resultResponse>;

  /**
   * ### GET /shooterMatching
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ShooterMatchingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.shooterMatching({});
   * console.log(res);
   * ```
   */
  public shooterMatching!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ShooterMatchingStatus>;

  /**
   * ### GET /shooterMatching (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ShooterMatchingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.shooterMatchingFull({});
   * console.log(res);
   * ```
   */
  public shooterMatchingFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ShooterMatchingResponse>;

}
