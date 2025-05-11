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
  Response$getLpWatchwordRegister$Status$200,
  Response$getNoticePopup$Status$200,
  Parameter$getNoticePopup,
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
  Response$getPageLp$Status$200,
  Parameter$getPageLp,
} from '../@modules/www.mirrativ.com';

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

export type LpWatchwordRegisterStatus = ExtractStatus<Response$getLpWatchwordRegister$Status$200>;

export type NoticePopupStatus = ExtractStatus<Response$getNoticePopup$Status$200>;

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

export type PageLpStatus = ExtractStatus<Response$getPageLp$Status$200>;

export type AppApp_user_detailParams = Parameter$getApiAppApp_user_detail;

export type AppAppeal_bannersParams = Parameter$getApiAppAppeal_banners;

export type AppMy_appParams = Parameter$getApiAppMy_app;

export type AppSearchParams = Parameter$getApiAppSearch;

export type AppUser_appsParams = Parameter$getApiAppUser_apps;

export type CampaignCompleted_missionParams = Parameter$getApiCampaignCompleted_mission;

export type CampaignDetailParams = Parameter$getApiCampaignDetail;

export type CatalogBannersParams = Parameter$getApiCatalogBanners;

export type CatalogLivesParams = Parameter$getApiCatalogLives;

export type ChatThreadParams = Parameter$getApiChatThread;

export type ChatThreadsParams = Parameter$getApiChatThreads;

export type ClosetAvatarParams = Parameter$getApiClosetAvatar;

export type Coin_boxStatusParams = Parameter$getApiCoin_boxStatus;

export type CollabCollaborating_usersParams = Parameter$getApiCollabCollaborating_users;

export type EventNoticeParams = Parameter$getApiEventNotice;

export type GiftPanelsParams = Parameter$getApiGiftPanels;

export type GiftRankingParams = Parameter$getApiGiftRanking;

export type GraphBlocked_usersParams = Parameter$getApiGraphBlocked_users;

export type GraphFollowersParams = Parameter$getApiGraphFollowers;

export type GraphFollowingsParams = Parameter$getApiGraphFollowings;

export type GraphRecommend_usersParams = Parameter$getApiGraphRecommend_users;

export type GraphSearchParams = Parameter$getApiGraphSearch;

export type GroupUsersParams = Parameter$getApiGroupUsers;

export type LiveAppeal_linksParams = Parameter$getApiLiveAppeal_links;

export type LiveCampaignParams = Parameter$getApiLiveCampaign;

export type LiveGet_streaming_urlParams = Parameter$getApiLiveGet_streaming_url;

export type LiveLiveParams = Parameter$getApiLiveLive;

export type LiveLive_commentsParams = Parameter$getApiLiveLive_comments;

export type LiveLive_game_catalogParams = Parameter$getApiLiveLive_game_catalog;

export type LiveLive_historyParams = Parameter$getApiLiveLive_history;

export type LiveOnline_usersParams = Parameter$getApiLiveOnline_users;

export type LiveSearchParams = Parameter$getApiLiveSearch;

export type Live_gameNew_countsParams = Parameter$getApiLive_gameNew_counts;

export type NoticeCampaignsParams = Parameter$getApiNoticeCampaigns;

export type NoticeCountsParams = Parameter$getApiNoticeCounts;

export type NoticePopupsParams = Parameter$getApiNoticePopups;

export type RankingUser_detailParams = Parameter$getApiRankingUser_detail;

export type Reward_adAvailable_reward_ad_idsParams = Parameter$getApiReward_adAvailable_reward_ad_ids;

export type Season_ratingStatusParams = Parameter$getApiSeason_ratingStatus;

export type Season_yellStatusParams = Parameter$getApiSeason_yellStatus;

export type Season_yellViewersParams = Parameter$getApiSeason_yellViewers;

export type UserProfileParams = Parameter$getApiUserProfile;

export type UserSearchParams = Parameter$getApiUserSearch;

export type NoticePopupParams = Parameter$getNoticePopup;

export type CollabConnected_streaming_collab_livesParams = Parameter$getApiCollabConnected_streaming_collab_lives;

export type CollabInvitable_usersParams = Parameter$getApiCollabInvitable_users;

export type Gift_gachaUser_stocksParams = Parameter$getApiGift_gachaUser_stocks;

export type KaraokeParams = Parameter$getApiKaraoke;

export type KaraokeBy_genreParams = Parameter$getApiKaraokeBy_genre;

export type KaraokeRecommend_singersParams = Parameter$getApiKaraokeRecommend_singers;

export type KaraokeSearchParams = Parameter$getApiKaraokeSearch;

export type KaraokeSingersParams = Parameter$getApiKaraokeSingers;

export type LiveBroadcast_resultParams = Parameter$getApiLiveBroadcast_result;

export type LiveViewers_resultParams = Parameter$getApiLiveViewers_result;

export type Season_ratingLive_resultParams = Parameter$getApiSeason_ratingLive_result;

export type PageLpParams = Parameter$getPageLp;

export type AnalyticsLogRequest = NonNullable<RequestBody$postApiAnalyticsLog['application/json']>;

export type AppAdd_my_appRequest = NonNullable<RequestBody$postApiAppAdd_my_app['application/json']>;

export type AppDelete_app_user_detailRequest = NonNullable<RequestBody$postApiAppDelete_app_user_detail['application/x-www-form-urlencoded']>;

export type AppDelete_my_appRequest = NonNullable<RequestBody$postApiAppDelete_my_app['application/json']>;

export type AppPost_app_user_detailRequest = NonNullable<RequestBody$postApiAppPost_app_user_detail['application/x-www-form-urlencoded']>;

export type ChatJoinRequest = NonNullable<RequestBody$postApiChatJoin['application/x-www-form-urlencoded']>;

export type ChatPost_textRequest = NonNullable<RequestBody$postApiChatPost_text['application/x-www-form-urlencoded']>;

export type ChatReadRequest = NonNullable<RequestBody$postApiChatRead['application/x-www-form-urlencoded']>;

export type ChatThread_visibilityRequest = NonNullable<RequestBody$postApiChatThread_visibility['application/x-www-form-urlencoded']>;

export type ClosetUpdate_closet_avatarRequest = NonNullable<RequestBody$postApiClosetUpdate_closet_avatar['application/json']>;

export type ClosetUpdate_closet_imagesRequest = NonNullable<RequestBody$postApiClosetUpdate_closet_images['application/x-www-form-urlencoded']>;

export type FeatureRegister_device_tokenRequest = NonNullable<RequestBody$postApiFeatureRegister_device_token['application/x-www-form-urlencoded']>;

export type GiftSendRequest = NonNullable<RequestBody$postApiGiftSend['application/x-www-form-urlencoded']>;

export type GiftUpdate_simple_unique_emomo_giftRequest = NonNullable<RequestBody$postApiGiftUpdate_simple_unique_emomo_gift['application/x-www-form-urlencoded']>;

export type Gift_appeal_popupReadRequest = NonNullable<RequestBody$postApiGift_appeal_popupRead['application/x-www-form-urlencoded']>;

export type GoogleConnectRequest = NonNullable<RequestBody$postApiGoogleConnect['application/x-www-form-urlencoded']>;

export type GraphBlockRequest = NonNullable<RequestBody$postApiGraphBlock['application/x-www-form-urlencoded']>;

export type GraphFollowRequest = NonNullable<RequestBody$postApiGraphFollow['application/x-www-form-urlencoded']>;

export type GraphUnblockRequest = NonNullable<RequestBody$postApiGraphUnblock['application/x-www-form-urlencoded']>;

export type GraphUnfollowRequest = NonNullable<RequestBody$postApiGraphUnfollow['application/x-www-form-urlencoded']>;

export type GroupEditRequest = NonNullable<RequestBody$postApiGroupEdit['application/x-www-form-urlencoded']>;

export type GroupInvite_usersRequest = NonNullable<RequestBody$postApiGroupInvite_users['application/x-www-form-urlencoded']>;

export type GroupLeaveRequest = NonNullable<RequestBody$postApiGroupLeave['application/x-www-form-urlencoded']>;

export type LiveLeaveRequest = NonNullable<RequestBody$postApiLiveLeave['application/x-www-form-urlencoded']>;

export type LiveLive_commentRequest = NonNullable<RequestBody$postApiLiveLive_comment['application/x-www-form-urlencoded']>;

export type LiveLive_editRequest = NonNullable<RequestBody$postApiLiveLive_edit['application/x-www-form-urlencoded']>;

export type LiveLive_pollingRequest = NonNullable<RequestBody$postApiLiveLive_polling['application/x-www-form-urlencoded']>;

export type LivePreview_endRequest = NonNullable<RequestBody$postApiLivePreview_end['application/x-www-form-urlencoded']>;

export type LivePreview_pollingRequest = NonNullable<RequestBody$postApiLivePreview_polling['application/x-www-form-urlencoded']>;

export type LivePreview_startRequest = NonNullable<RequestBody$postApiLivePreview_start['application/x-www-form-urlencoded']>;

export type LiveSanitize_textRequest = NonNullable<RequestBody$postApiLiveSanitize_text['application/x-www-form-urlencoded']>;

export type LiveUpdate_archive_settingsRequest = NonNullable<RequestBody$postApiLiveUpdate_archive_settings['application/x-www-form-urlencoded']>;

export type Live_gameEndRequest = NonNullable<RequestBody$postApiLive_gameEnd['application/x-www-form-urlencoded']>;

export type Live_gameStartRequest = NonNullable<RequestBody$postApiLive_gameStart['application/x-www-form-urlencoded']>;

export type PostNotificationPush_settings_v3Request = NonNullable<RequestBody$postApiNotificationPush_settings_v3['application/x-www-form-urlencoded']>;

export type Reward_adCompleteRequest = NonNullable<RequestBody$postApiReward_adComplete['application/x-www-form-urlencoded']>;

export type UserBad_reportRequest = NonNullable<RequestBody$postApiUserBad_report['application/x-www-form-urlencoded']>;

export type UserCheck_minorRequest = NonNullable<RequestBody$postApiUserCheck_minor['application/x-www-form-urlencoded']>;

export type UserDate_of_birthRequest = NonNullable<RequestBody$postApiUserDate_of_birth['application/x-www-form-urlencoded']>;

export type UserPost_live_announcementRequest = NonNullable<RequestBody$postApiUserPost_live_announcement['application/x-www-form-urlencoded']>;

export type UserPost_live_requestRequest = NonNullable<RequestBody$postApiUserPost_live_request['application/x-www-form-urlencoded']>;

export type UserPost_review_confirmationRequest = NonNullable<RequestBody$postApiUserPost_review_confirmation['application/x-www-form-urlencoded']>;

export type UserProfile_editRequest = NonNullable<RequestBody$postApiUserProfile_edit['application/x-www-form-urlencoded']>;

export type UserUpdate_favorite_live_settingRequest = NonNullable<RequestBody$postApiUserUpdate_favorite_live_setting['application/x-www-form-urlencoded']>;

export type UserUpdate_recording_settingsRequest = NonNullable<RequestBody$postApiUserUpdate_recording_settings['application/x-www-form-urlencoded']>;

export type UserUse_favorite_live_settingRequest = NonNullable<RequestBody$postApiUserUse_favorite_live_setting['application/x-www-form-urlencoded']>;

export type ChatAgreeRequest = NonNullable<RequestBody$postApiChatAgree['application/x-www-form-urlencoded']>;

export type ChatPost_thanksRequest = NonNullable<RequestBody$postApiChatPost_thanks['application/x-www-form-urlencoded']>;

export type ChatPost_thanks_to_live_watched_usersRequest = NonNullable<RequestBody$postApiChatPost_thanks_to_live_watched_users['application/x-www-form-urlencoded']>;

export type CollabCloseRequest = NonNullable<RequestBody$postApiCollabClose['application/x-www-form-urlencoded']>;

export type CollabInviteRequest = NonNullable<RequestBody$postApiCollabInvite['application/x-www-form-urlencoded']>;

export type CollabSend_to_peerRequest = NonNullable<RequestBody$postApiCollabSend_to_peer['application/x-www-form-urlencoded']>;

export type CollabStartRequest = NonNullable<RequestBody$postApiCollabStart['application/x-www-form-urlencoded']>;

export type GiftUpdate_rich_unique_emomo_giftRequest = NonNullable<RequestBody$postApiGiftUpdate_rich_unique_emomo_gift['application/x-www-form-urlencoded']>;

export type GraphFollow_live_watched_usersRequest = NonNullable<RequestBody$postApiGraphFollow_live_watched_users['application/x-www-form-urlencoded']>;

export type LiveDelete_live_historyRequest = NonNullable<RequestBody$postApiLiveDelete_live_history['application/x-www-form-urlencoded']>;

export type LiveKick_outRequest = NonNullable<RequestBody$postApiLiveKick_out['application/x-www-form-urlencoded']>;

export type LiveLive_app_identifier_changedRequest = NonNullable<RequestBody$postApiLiveLive_app_identifier_changed['application/x-www-form-urlencoded']>;

export type LiveLive_capture_imageRequest = NonNullable<RequestBody$postApiLiveLive_capture_image['application/x-www-form-urlencoded']>;

export type LiveLive_endRequest = NonNullable<RequestBody$postApiLiveLive_end['application/x-www-form-urlencoded']>;

export type LiveLive_heartbeatRequest = NonNullable<RequestBody$postApiLiveLive_heartbeat['application/x-www-form-urlencoded']>;

export type LiveLive_startRequest = NonNullable<RequestBody$postApiLiveLive_start['application/x-www-form-urlencoded']>;

export type LiveUpdate_emomo_visibleRequest = NonNullable<RequestBody$postApiLiveUpdate_emomo_visible['application/x-www-form-urlencoded']>;

export type LiveUpdate_wipe_enabledRequest = NonNullable<RequestBody$postApiLiveUpdate_wipe_enabled['application/x-www-form-urlencoded']>;

export type Live_gamePingRequest = NonNullable<RequestBody$postApiLive_gamePing['application/x-www-form-urlencoded']>;

export type MissionReceive_login_bonus_rewardRequest = NonNullable<RequestBody$postApiMissionReceive_login_bonus_reward['application/x-www-form-urlencoded']>;

export type ModeratorAddRequest = NonNullable<RequestBody$postApiModeratorAdd['application/x-www-form-urlencoded']>;

export type ModeratorDeleteRequest = NonNullable<RequestBody$postApiModeratorDelete['application/x-www-form-urlencoded']>;

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

export type LpWatchwordRegisterResponse = NonNullable<Response$getLpWatchwordRegister$Status$200['application/json']>;

export type NoticePopupResponse = NonNullable<Response$getNoticePopup$Status$200['application/json']>;

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

export type PageLpResponse = NonNullable<Response$getPageLp$Status$200['application/json']>;

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
  lpWatchwordRegister: '',
  noticePopup: '',
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
  pageLp: '',
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
  lpWatchwordRegister: 'get',
  noticePopup: 'get',
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
  pageLp: 'get',
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
  lpWatchwordRegister: {
    methodName: 'getLpWatchwordRegister' as const,
    extractStatus: (j: any) => {
      if (j.status == null) throw new Error('no status');
      return j.status as any;
    },
  },
  noticePopup: {
    methodName: 'getNoticePopup' as const,
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
  pageLp: {
    methodName: 'getPageLp' as const,
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
   * ### POST /analytics/log
   * **Content-Type**: `application/json`
   *
   * @param body - { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
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
    body: AnalyticsLogRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AnalyticsLogStatus>;

  /**
   * ### POST /analytics/log (full response)
   * **Content-Type**: `application/json`
   *
   * @param body - { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
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
    body: AnalyticsLogRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AnalyticsLogResponse>;

  /**
   * ### POST /app/add_my_app
   * **Content-Type**: `application/json`
   *
   * @param body - { app_ids?: string[]; } リクエストボディ
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
    body: AppAdd_my_appRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAdd_my_appStatus>;

  /**
   * ### POST /app/add_my_app (full response)
   * **Content-Type**: `application/json`
   *
   * @param body - { app_ids?: string[]; } リクエストボディ
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
    body: AppAdd_my_appRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAdd_my_appResponse>;

  /**
   * ### GET /app/app_user_detail
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
    query?: AppApp_user_detailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppApp_user_detailStatus>;

  /**
   * ### GET /app/app_user_detail (full response)
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
    query?: AppApp_user_detailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppApp_user_detailResponse>;

  /**
   * ### GET /app/appeal_banners
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
    query?: AppAppeal_bannersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAppeal_bannersStatus>;

  /**
   * ### GET /app/appeal_banners (full response)
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
    query?: AppAppeal_bannersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppAppeal_bannersResponse>;

  /**
   * ### POST /app/delete_app_user_detail
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; } リクエストボディ
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
    body: AppDelete_app_user_detailRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_app_user_detailStatus>;

  /**
   * ### POST /app/delete_app_user_detail (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; } リクエストボディ
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
    body: AppDelete_app_user_detailRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_app_user_detailResponse>;

  /**
   * ### POST /app/delete_my_app
   * **Content-Type**: `application/json`
   *
   * @param body - { app_ids?: string[]; } リクエストボディ
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
    body: AppDelete_my_appRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_my_appStatus>;

  /**
   * ### POST /app/delete_my_app (full response)
   * **Content-Type**: `application/json`
   *
   * @param body - { app_ids?: string[]; } リクエストボディ
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
    body: AppDelete_my_appRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppDelete_my_appResponse>;

  /**
   * ### GET /app/my_app
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
    query?: AppMy_appParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppMy_appStatus>;

  /**
   * ### GET /app/my_app (full response)
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
    query?: AppMy_appParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppMy_appResponse>;

  /**
   * ### GET /app/onlive_apps
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
   * ### GET /app/onlive_apps (full response)
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
   * ### POST /app/post_app_user_detail
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
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
    body: AppPost_app_user_detailRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppPost_app_user_detailStatus>;

  /**
   * ### POST /app/post_app_user_detail (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
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
    body: AppPost_app_user_detailRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppPost_app_user_detailResponse>;

  /**
   * ### GET /app/recommend_apps
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
   * ### GET /app/recommend_apps (full response)
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
   * ### GET /app/search
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
    query?: AppSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppSearchStatus>;

  /**
   * ### GET /app/search (full response)
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
    query?: AppSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppSearchResponse>;

  /**
   * ### GET /app/user_apps
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
    query?: AppUser_appsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppUser_appsStatus>;

  /**
   * ### GET /app/user_apps (full response)
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
    query?: AppUser_appsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<AppUser_appsResponse>;

  /**
   * ### GET /campaign/completed_mission
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
    query?: CampaignCompleted_missionParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignCompleted_missionStatus>;

  /**
   * ### GET /campaign/completed_mission (full response)
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
    query?: CampaignCompleted_missionParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignCompleted_missionResponse>;

  /**
   * ### GET /campaign/detail
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
    query?: CampaignDetailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignDetailStatus>;

  /**
   * ### GET /campaign/detail (full response)
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
    query?: CampaignDetailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CampaignDetailResponse>;

  /**
   * ### GET /catalog/banners
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
    query?: CatalogBannersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogBannersStatus>;

  /**
   * ### GET /catalog/banners (full response)
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
    query?: CatalogBannersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogBannersResponse>;

  /**
   * ### GET /catalog/follow
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
   * ### GET /catalog/follow (full response)
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
   * ### GET /catalog/lives
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
    query?: CatalogLivesParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogLivesStatus>;

  /**
   * ### GET /catalog/lives (full response)
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
    query?: CatalogLivesParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CatalogLivesResponse>;

  /**
   * ### GET /catalog/myapp_recommend_lives
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
   * ### GET /catalog/myapp_recommend_lives (full response)
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
   * ### GET /catalog/tabs
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
   * ### GET /catalog/tabs (full response)
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
   * ### POST /chat/join
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: ChatJoinRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatJoinStatus>;

  /**
   * ### POST /chat/join (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: ChatJoinRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatJoinResponse>;

  /**
   * ### POST /chat/post_text
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { text?: string; user_id?: string; } リクエストボディ
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
    body: ChatPost_textRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_textStatus>;

  /**
   * ### POST /chat/post_text (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { text?: string; user_id?: string; } リクエストボディ
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
    body: ChatPost_textRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_textResponse>;

  /**
   * ### POST /chat/read
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { last_message_id?: string; user_id?: string; } リクエストボディ
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
    body: ChatReadRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatReadStatus>;

  /**
   * ### POST /chat/read (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { last_message_id?: string; user_id?: string; } リクエストボディ
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
    body: ChatReadRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatReadResponse>;

  /**
   * ### GET /chat/thread
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
    query?: ChatThreadParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadStatus>;

  /**
   * ### GET /chat/thread (full response)
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
    query?: ChatThreadParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadResponse>;

  /**
   * ### POST /chat/thread_visibility
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { group_id?: string; is_visible?: string; } リクエストボディ
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
    body: ChatThread_visibilityRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThread_visibilityStatus>;

  /**
   * ### POST /chat/thread_visibility (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { group_id?: string; is_visible?: string; } リクエストボディ
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
    body: ChatThread_visibilityRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThread_visibilityResponse>;

  /**
   * ### GET /chat/threads
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
    query?: ChatThreadsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadsStatus>;

  /**
   * ### GET /chat/threads (full response)
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
    query?: ChatThreadsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatThreadsResponse>;

  /**
   * ### GET /closet/avatar
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
    query?: ClosetAvatarParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatarStatus>;

  /**
   * ### GET /closet/avatar (full response)
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
    query?: ClosetAvatarParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetAvatarResponse>;

  /**
   * ### GET /closet/avatar_parts
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
   * ### GET /closet/avatar_parts (full response)
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
   * ### GET /closet/closets
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
   * ### GET /closet/closets (full response)
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
   * ### POST /closet/update_closet_avatar
   * **Content-Type**: `application/json`
   *
   * @param body - { motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; } リクエストボディ
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
    body: ClosetUpdate_closet_avatarRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_avatarStatus>;

  /**
   * ### POST /closet/update_closet_avatar (full response)
   * **Content-Type**: `application/json`
   *
   * @param body - { motion4_id?: string; lip_color_id?: string; beard_color_percentage?: string; eyebrow_color_percentage?: string; pose_id?: string; persona_id?: string; eyeshadow_color_percentage?: string; socks_id?: string; head_id?: string; cheek_color_percentage?: string; machine_id?: string; eyebrow_color_id?: string; body_id?: string; lip_color_percentage?: string; proportion_id?: string; skin_color_id?: string; cheek_color_id?: string; cheek_id?: string; eye_id?: string; eyebrow_id?: string; bottoms_id?: string; hair_color_id?: string; mouth_id?: string; eye_color_percentage?: string; beard_color_id?: string; nose_id?: string; background_id?: string; eyeshadow_color_id?: string; hair_color_percentage?: string; hair_id?: string; eye_color_id?: string; tops_id?: string; setup_clothes_id?: string; eyeshadow_id?: string; motion3_id?: string; motion1_id?: string; motion2_id?: string; closet_id?: string; shoes_id?: string; } リクエストボディ
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
    body: ClosetUpdate_closet_avatarRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_avatarResponse>;

  /**
   * ### POST /closet/update_closet_images
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { i?: string; C?: string; k?: string; Tu?: string; } リクエストボディ
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
    body: ClosetUpdate_closet_imagesRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_imagesStatus>;

  /**
   * ### POST /closet/update_closet_images (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { i?: string; C?: string; k?: string; Tu?: string; } リクエストボディ
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
    body: ClosetUpdate_closet_imagesRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ClosetUpdate_closet_imagesResponse>;

  /**
   * ### GET /coin_box/status
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
    query?: Coin_boxStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Coin_boxStatusStatus>;

  /**
   * ### GET /coin_box/status (full response)
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
    query?: Coin_boxStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Coin_boxStatusResponse>;

  /**
   * ### GET /collab/collaborating_users
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
    query?: CollabCollaborating_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCollaborating_usersStatus>;

  /**
   * ### GET /collab/collaborating_users (full response)
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
    query?: CollabCollaborating_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCollaborating_usersResponse>;

  /**
   * ### GET /contract/summary
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
   * ### GET /contract/summary (full response)
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
   * ### GET /event/notice
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
    query?: EventNoticeParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<EventNoticeStatus>;

  /**
   * ### GET /event/notice (full response)
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
    query?: EventNoticeParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<EventNoticeResponse>;

  /**
   * ### POST /feature/register_device_token
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { device_token?: string; } リクエストボディ
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
    body: FeatureRegister_device_tokenRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<FeatureRegister_device_tokenStatus>;

  /**
   * ### POST /feature/register_device_token (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { device_token?: string; } リクエストボディ
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
    body: FeatureRegister_device_tokenRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<FeatureRegister_device_tokenResponse>;

  /**
   * ### GET /gift/emomo_run_gifts
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
   * ### GET /gift/emomo_run_gifts (full response)
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
   * ### GET /gift/panels
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
    query?: GiftPanelsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftPanelsStatus>;

  /**
   * ### GET /gift/panels (full response)
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
    query?: GiftPanelsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftPanelsResponse>;

  /**
   * ### GET /gift/ranking
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
    query?: GiftRankingParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftRankingStatus>;

  /**
   * ### GET /gift/ranking (full response)
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
    query?: GiftRankingParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftRankingResponse>;

  /**
   * ### POST /gift/send
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
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
    body: GiftSendRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftSendStatus>;

  /**
   * ### POST /gift/send (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
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
    body: GiftSendRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftSendResponse>;

  /**
   * ### GET /gift/unique_emomo_gift_config
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
   * ### GET /gift/unique_emomo_gift_config (full response)
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
   * ### GET /gift/unique_emomo_gift_slots
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
   * ### GET /gift/unique_emomo_gift_slots (full response)
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
   * ### POST /gift/update_simple_unique_emomo_gift
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GiftUpdate_simple_unique_emomo_giftRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_simple_unique_emomo_giftStatus>;

  /**
   * ### POST /gift/update_simple_unique_emomo_gift (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GiftUpdate_simple_unique_emomo_giftRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_simple_unique_emomo_giftResponse>;

  /**
   * ### POST /gift_appeal_popup/read
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { gift_appeal_popup_id?: string; } リクエストボディ
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
    body: Gift_appeal_popupReadRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_appeal_popupReadStatus>;

  /**
   * ### POST /gift_appeal_popup/read (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { gift_appeal_popup_id?: string; } リクエストボディ
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
    body: Gift_appeal_popupReadRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_appeal_popupReadResponse>;

  /**
   * ### POST /google/connect
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id_token?: string; } リクエストボディ
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
    body: GoogleConnectRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleConnectStatus>;

  /**
   * ### POST /google/connect (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id_token?: string; } リクエストボディ
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
    body: GoogleConnectRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GoogleConnectResponse & { mrid?: string }>;

  /**
   * ### POST /google/disconnect
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /google/disconnect (full response)
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /graph/block
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphBlockRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlockStatus>;

  /**
   * ### POST /graph/block (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphBlockRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlockResponse>;

  /**
   * ### GET /graph/blocked_users
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
    query?: GraphBlocked_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlocked_usersStatus>;

  /**
   * ### GET /graph/blocked_users (full response)
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
    query?: GraphBlocked_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphBlocked_usersResponse>;

  /**
   * ### POST /graph/follow
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphFollowRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowStatus>;

  /**
   * ### POST /graph/follow (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphFollowRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowResponse>;

  /**
   * ### GET /graph/followers
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
    query?: GraphFollowersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowersStatus>;

  /**
   * ### GET /graph/followers (full response)
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
    query?: GraphFollowersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowersResponse>;

  /**
   * ### GET /graph/followings
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
    query?: GraphFollowingsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowingsStatus>;

  /**
   * ### GET /graph/followings (full response)
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
    query?: GraphFollowingsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollowingsResponse>;

  /**
   * ### GET /graph/recommend_users
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
    query?: GraphRecommend_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphRecommend_usersStatus>;

  /**
   * ### GET /graph/recommend_users (full response)
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
    query?: GraphRecommend_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphRecommend_usersResponse>;

  /**
   * ### GET /graph/search
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
    query?: GraphSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphSearchStatus>;

  /**
   * ### GET /graph/search (full response)
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
    query?: GraphSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphSearchResponse>;

  /**
   * ### POST /graph/unblock
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphUnblockRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnblockStatus>;

  /**
   * ### POST /graph/unblock (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphUnblockRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnblockResponse>;

  /**
   * ### POST /graph/unfollow
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphUnfollowRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnfollowStatus>;

  /**
   * ### POST /graph/unfollow (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_id?: string; } リクエストボディ
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
    body: GraphUnfollowRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphUnfollowResponse>;

  /**
   * ### POST /group/edit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GroupEditRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupEditStatus>;

  /**
   * ### POST /group/edit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GroupEditRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupEditResponse>;

  /**
   * ### POST /group/invite_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_ids?: string; } リクエストボディ
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
    body: GroupInvite_usersRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupInvite_usersStatus>;

  /**
   * ### POST /group/invite_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { user_ids?: string; } リクエストボディ
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
    body: GroupInvite_usersRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupInvite_usersResponse>;

  /**
   * ### POST /group/leave
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { group_id?: string; } リクエストボディ
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
    body: GroupLeaveRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupLeaveStatus>;

  /**
   * ### POST /group/leave (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { group_id?: string; } リクエストボディ
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
    body: GroupLeaveRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupLeaveResponse>;

  /**
   * ### GET /group/users
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
    query?: GroupUsersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupUsersStatus>;

  /**
   * ### GET /group/users (full response)
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
    query?: GroupUsersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GroupUsersResponse>;

  /**
   * ### GET /live/appeal_links
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
    query?: LiveAppeal_linksParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveAppeal_linksStatus>;

  /**
   * ### GET /live/appeal_links (full response)
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
    query?: LiveAppeal_linksParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveAppeal_linksResponse>;

  /**
   * ### GET /live/campaign
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
    query?: LiveCampaignParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveCampaignStatus>;

  /**
   * ### GET /live/campaign (full response)
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
    query?: LiveCampaignParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveCampaignResponse>;

  /**
   * ### GET /live/get_streaming_url
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
    query?: LiveGet_streaming_urlParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveGet_streaming_urlStatus>;

  /**
   * ### GET /live/get_streaming_url (full response)
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
    query?: LiveGet_streaming_urlParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveGet_streaming_urlResponse>;

  /**
   * ### POST /live/leave
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LiveLeaveRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLeaveStatus>;

  /**
   * ### POST /live/leave (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LiveLeaveRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLeaveResponse>;

  /**
   * ### GET /live/live
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
    query?: LiveLiveParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLiveStatus>;

  /**
   * ### GET /live/live (full response)
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
    query?: LiveLiveParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLiveResponse>;

  /**
   * ### POST /live/live_comment
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { comment?: string; live_id?: string; type?: string; } リクエストボディ
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
    body: LiveLive_commentRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentStatus>;

  /**
   * ### POST /live/live_comment (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { comment?: string; live_id?: string; type?: string; } リクエストボディ
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
    body: LiveLive_commentRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentResponse>;

  /**
   * ### GET /live/live_comments
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
    query?: LiveLive_commentsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentsStatus>;

  /**
   * ### GET /live/live_comments (full response)
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
    query?: LiveLive_commentsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_commentsResponse>;

  /**
   * ### POST /live/live_create
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /live/live_create (full response)
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /live/live_edit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
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
    body: LiveLive_editRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_editStatus>;

  /**
   * ### POST /live/live_edit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
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
    body: LiveLive_editRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_editResponse>;

  /**
   * ### GET /live/live_game_catalog
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
    query?: LiveLive_game_catalogParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_game_catalogStatus>;

  /**
   * ### GET /live/live_game_catalog (full response)
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
    query?: LiveLive_game_catalogParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_game_catalogResponse>;

  /**
   * ### GET /live/live_history
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
    query?: LiveLive_historyParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_historyStatus>;

  /**
   * ### GET /live/live_history (full response)
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
    query?: LiveLive_historyParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_historyResponse>;

  /**
   * ### POST /live/live_polling
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
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
    body: LiveLive_pollingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_pollingStatus>;

  /**
   * ### POST /live/live_polling (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
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
    body: LiveLive_pollingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_pollingResponse>;

  /**
   * ### GET /live/online_users
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
    query?: LiveOnline_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveOnline_usersStatus>;

  /**
   * ### GET /live/online_users (full response)
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
    query?: LiveOnline_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveOnline_usersResponse>;

  /**
   * ### POST /live/preview_end
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_endRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_endStatus>;

  /**
   * ### POST /live/preview_end (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_endRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_endResponse>;

  /**
   * ### POST /live/preview_polling
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_pollingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_pollingStatus>;

  /**
   * ### POST /live/preview_polling (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_pollingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_pollingResponse>;

  /**
   * ### POST /live/preview_start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_startRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_startStatus>;

  /**
   * ### POST /live/preview_start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LivePreview_startRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LivePreview_startResponse>;

  /**
   * ### POST /live/sanitize_text
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { text?: string; } リクエストボディ
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
    body: LiveSanitize_textRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSanitize_textStatus>;

  /**
   * ### POST /live/sanitize_text (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { text?: string; } リクエストボディ
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
    body: LiveSanitize_textRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSanitize_textResponse>;

  /**
   * ### GET /live/search
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
    query?: LiveSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSearchStatus>;

  /**
   * ### GET /live/search (full response)
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
    query?: LiveSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveSearchResponse>;

  /**
   * ### POST /live/update_archive_settings
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { archive_hidden?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_archive_settingsRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_archive_settingsStatus>;

  /**
   * ### POST /live/update_archive_settings (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { archive_hidden?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_archive_settingsRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_archive_settingsResponse>;

  /**
   * ### GET /live/view_history
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
   * ### GET /live/view_history (full response)
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
   * ### POST /live_game/end
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { play_id?: string; } リクエストボディ
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
    body: Live_gameEndRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameEndStatus>;

  /**
   * ### POST /live_game/end (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { play_id?: string; } リクエストボディ
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
    body: Live_gameEndRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameEndResponse>;

  /**
   * ### GET /live_game/list
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
   * ### GET /live_game/list (full response)
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
   * ### GET /live_game/new_counts
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
    query?: Live_gameNew_countsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameNew_countsStatus>;

  /**
   * ### GET /live_game/new_counts (full response)
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
    query?: Live_gameNew_countsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameNew_countsResponse>;

  /**
   * ### POST /live_game/start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
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
    body: Live_gameStartRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameStartStatus>;

  /**
   * ### POST /live_game/start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
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
    body: Live_gameStartRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gameStartResponse>;

  /**
   * ### GET /mission/current_login_bonus
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
   * ### GET /mission/current_login_bonus (full response)
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
   * ### GET /mission/daily
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
   * ### GET /mission/daily (full response)
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
   * ### GET /mission/status
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
   * ### GET /mission/status (full response)
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
   * ### GET /mission/tutorial_status
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
   * ### GET /mission/tutorial_status (full response)
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
   * ### GET /mission/weekly
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
   * ### GET /mission/weekly (full response)
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
   * ### GET /notice/campaigns
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
    query?: NoticeCampaignsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCampaignsStatus>;

  /**
   * ### GET /notice/campaigns (full response)
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
    query?: NoticeCampaignsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCampaignsResponse>;

  /**
   * ### GET /notice/counts
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
    query?: NoticeCountsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCountsStatus>;

  /**
   * ### GET /notice/counts (full response)
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
    query?: NoticeCountsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticeCountsResponse>;

  /**
   * ### GET /notice/news
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
   * ### GET /notice/news (full response)
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
   * ### GET /notice/popups
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
    query?: NoticePopupsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupsStatus>;

  /**
   * ### GET /notice/popups (full response)
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
    query?: NoticePopupsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupsResponse>;

  /**
   * ### GET /notice/present_boxes
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
   * ### GET /notice/present_boxes (full response)
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
   * ### GET /notice/yours_v2
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
   * ### GET /notice/yours_v2 (full response)
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
   * ### GET /notification/push_settings_v3
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
   * ### GET /notification/push_settings_v3 (full response)
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
   * ### POST /notification/push_settings_v3
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
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
    body: PostNotificationPush_settings_v3Request,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PostNotificationPush_settings_v3Status>;

  /**
   * ### POST /notification/push_settings_v3 (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
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
    body: PostNotificationPush_settings_v3Request,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PostNotificationPush_settings_v3Response>;

  /**
   * ### GET /ranking/focusable
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
   * ### GET /ranking/focusable (full response)
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
   * ### GET /ranking/user_detail
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
    query?: RankingUser_detailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingUser_detailStatus>;

  /**
   * ### GET /ranking/user_detail (full response)
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
    query?: RankingUser_detailParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<RankingUser_detailResponse>;

  /**
   * ### GET /reward_ad/available_reward_ad_ids
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
    query?: Reward_adAvailable_reward_ad_idsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adAvailable_reward_ad_idsStatus>;

  /**
   * ### GET /reward_ad/available_reward_ad_ids (full response)
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
    query?: Reward_adAvailable_reward_ad_idsParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adAvailable_reward_ad_idsResponse>;

  /**
   * ### GET /reward_ad/check_available_device
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
   * ### GET /reward_ad/check_available_device (full response)
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
   * ### POST /reward_ad/complete
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { reward_id?: string; } リクエストボディ
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
    body: Reward_adCompleteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCompleteStatus>;

  /**
   * ### POST /reward_ad/complete (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { reward_id?: string; } リクエストボディ
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
    body: Reward_adCompleteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Reward_adCompleteResponse>;

  /**
   * ### GET /season_rating/status
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
    query?: Season_ratingStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingStatusStatus>;

  /**
   * ### GET /season_rating/status (full response)
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
    query?: Season_ratingStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingStatusResponse>;

  /**
   * ### GET /season_yell/status
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
    query?: Season_yellStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellStatusStatus>;

  /**
   * ### GET /season_yell/status (full response)
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
    query?: Season_yellStatusParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellStatusResponse>;

  /**
   * ### GET /season_yell/viewers
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
    query?: Season_yellViewersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellViewersStatus>;

  /**
   * ### GET /season_yell/viewers (full response)
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
    query?: Season_yellViewersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_yellViewersResponse>;

  /**
   * ### GET /tooltip/start_live_button
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
   * ### GET /tooltip/start_live_button (full response)
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
   * ### POST /user/bad_report
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { category_id?: string; message?: string; user_id?: string; } リクエストボディ
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
    body: UserBad_reportRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBad_reportStatus>;

  /**
   * ### POST /user/bad_report (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { category_id?: string; message?: string; user_id?: string; } リクエストボディ
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
    body: UserBad_reportRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserBad_reportResponse>;

  /**
   * ### GET /user/broadcast_settings
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
   * ### GET /user/broadcast_settings (full response)
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
   * ### POST /user/check_minor
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
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
    body: UserCheck_minorRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCheck_minorStatus>;

  /**
   * ### POST /user/check_minor (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
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
    body: UserCheck_minorRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserCheck_minorResponse>;

  /**
   * ### GET /user/currency
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
   * ### GET /user/currency (full response)
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
   * ### POST /user/date_of_birth
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
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
    body: UserDate_of_birthRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDate_of_birthStatus>;

  /**
   * ### POST /user/date_of_birth (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
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
    body: UserDate_of_birthRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserDate_of_birthResponse>;

  /**
   * ### POST /user/delete_live_announcement
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /user/delete_live_announcement (full response)
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### GET /user/favorite_live_setting
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
   * ### GET /user/favorite_live_setting (full response)
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
   * ### POST /user/logout
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### POST /user/logout (full response)
   *
   * @param body - Record<string, any> リクエストボディ
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
   * ### GET /user/me
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
   * ### GET /user/me (full response)
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
   * ### POST /user/post_live_announcement
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
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
    body: UserPost_live_announcementRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_announcementStatus>;

  /**
   * ### POST /user/post_live_announcement (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
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
    body: UserPost_live_announcementRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_announcementResponse>;

  /**
   * ### POST /user/post_live_request
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { count?: string; user_id?: string; where?: string; } リクエストボディ
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
    body: UserPost_live_requestRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_requestStatus>;

  /**
   * ### POST /user/post_live_request (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { count?: string; user_id?: string; where?: string; } リクエストボディ
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
    body: UserPost_live_requestRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_live_requestResponse>;

  /**
   * ### POST /user/post_review_confirmation
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { status?: string; } リクエストボディ
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
    body: UserPost_review_confirmationRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_review_confirmationStatus>;

  /**
   * ### POST /user/post_review_confirmation (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { status?: string; } リクエストボディ
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
    body: UserPost_review_confirmationRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserPost_review_confirmationResponse>;

  /**
   * ### GET /user/profile
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
    query?: UserProfileParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfileStatus>;

  /**
   * ### GET /user/profile (full response)
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
    query?: UserProfileParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfileResponse>;

  /**
   * ### POST /user/profile_edit
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: UserProfile_editRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfile_editStatus>;

  /**
   * ### POST /user/profile_edit (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: UserProfile_editRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserProfile_editResponse>;

  /**
   * ### GET /user/search
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
    query?: UserSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSearchStatus>;

  /**
   * ### GET /user/search (full response)
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
    query?: UserSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserSearchResponse>;

  /**
   * ### GET /user/setting_root
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
   * ### GET /user/setting_root (full response)
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
   * ### GET /user/tos
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
   * ### GET /user/tos (full response)
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
   * ### POST /user/update_favorite_live_setting
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
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
    body: UserUpdate_favorite_live_settingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_favorite_live_settingStatus>;

  /**
   * ### POST /user/update_favorite_live_setting (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
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
    body: UserUpdate_favorite_live_settingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_favorite_live_settingResponse>;

  /**
   * ### POST /user/update_recording_settings
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { enabled?: string; } リクエストボディ
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
    body: UserUpdate_recording_settingsRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_recording_settingsStatus>;

  /**
   * ### POST /user/update_recording_settings (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { enabled?: string; } リクエストボディ
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
    body: UserUpdate_recording_settingsRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUpdate_recording_settingsResponse>;

  /**
   * ### POST /user/use_favorite_live_setting
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id?: string; live_id?: string; } リクエストボディ
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
    body: UserUse_favorite_live_settingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUse_favorite_live_settingStatus>;

  /**
   * ### POST /user/use_favorite_live_setting (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { id?: string; live_id?: string; } リクエストボディ
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
    body: UserUse_favorite_live_settingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<UserUse_favorite_live_settingResponse>;

  /**
   * ### GET /user/watchword
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
   * ### GET /user/watchword (full response)
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
   * ### GET /lp/watchword/register
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LpWatchwordRegisterStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.lpWatchwordRegister({});
   * console.log(res);
   * ```
   */
  public lpWatchwordRegister!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LpWatchwordRegisterStatus>;

  /**
   * ### GET /lp/watchword/register (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LpWatchwordRegisterResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.lpWatchwordRegisterFull({});
   * console.log(res);
   * ```
   */
  public lpWatchwordRegisterFull!: (
    query?: Record<string, any>,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LpWatchwordRegisterResponse>;

  /**
   * ### GET /notice/popup
   *
   * @param query - { obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopup({ obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticePopup!: (
    query?: NoticePopupParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupStatus>;

  /**
   * ### GET /notice/popup (full response)
   *
   * @param query - { obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopupFull({ obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined });
   * console.log(res);
   * ```
   */
  public noticePopupFull!: (
    query?: NoticePopupParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<NoticePopupResponse>;

  /**
   * ### POST /chat/agree
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_agreed?: string; } リクエストボディ
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
    body: ChatAgreeRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatAgreeStatus>;

  /**
   * ### POST /chat/agree (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_agreed?: string; } リクエストボディ
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
    body: ChatAgreeRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatAgreeResponse>;

  /**
   * ### POST /chat/post_thanks
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ChatPost_thanksRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanksStatus>;

  /**
   * ### POST /chat/post_thanks (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ChatPost_thanksRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanksResponse>;

  /**
   * ### POST /chat/post_thanks_to_live_watched_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
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
    body: ChatPost_thanks_to_live_watched_usersRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanks_to_live_watched_usersStatus>;

  /**
   * ### POST /chat/post_thanks_to_live_watched_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
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
    body: ChatPost_thanks_to_live_watched_usersRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ChatPost_thanks_to_live_watched_usersResponse>;

  /**
   * ### POST /collab/close
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabCloseRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCloseStatus>;

  /**
   * ### POST /collab/close (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabCloseRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabCloseResponse>;

  /**
   * ### GET /collab/connected_streaming_collab_lives
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
    query?: CollabConnected_streaming_collab_livesParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabConnected_streaming_collab_livesStatus>;

  /**
   * ### GET /collab/connected_streaming_collab_lives (full response)
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
    query?: CollabConnected_streaming_collab_livesParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabConnected_streaming_collab_livesResponse>;

  /**
   * ### GET /collab/invitable_users
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
    query?: CollabInvitable_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInvitable_usersStatus>;

  /**
   * ### GET /collab/invitable_users (full response)
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
    query?: CollabInvitable_usersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInvitable_usersResponse>;

  /**
   * ### POST /collab/invite
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
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
    body: CollabInviteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInviteStatus>;

  /**
   * ### POST /collab/invite (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
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
    body: CollabInviteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabInviteResponse>;

  /**
   * ### POST /collab/send_to_peer
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabSend_to_peerRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabSend_to_peerStatus>;

  /**
   * ### POST /collab/send_to_peer (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabSend_to_peerRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabSend_to_peerResponse>;

  /**
   * ### POST /collab/start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabStartRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabStartStatus>;

  /**
   * ### POST /collab/start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: CollabStartRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<CollabStartResponse>;

  /**
   * ### POST /gift/update_rich_unique_emomo_gift
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GiftUpdate_rich_unique_emomo_giftRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_rich_unique_emomo_giftStatus>;

  /**
   * ### POST /gift/update_rich_unique_emomo_gift (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: GiftUpdate_rich_unique_emomo_giftRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GiftUpdate_rich_unique_emomo_giftResponse>;

  /**
   * ### GET /gift_gacha/user_stocks
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
    query?: Gift_gachaUser_stocksParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_gachaUser_stocksStatus>;

  /**
   * ### GET /gift_gacha/user_stocks (full response)
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
    query?: Gift_gachaUser_stocksParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Gift_gachaUser_stocksResponse>;

  /**
   * ### POST /graph/follow_live_watched_users
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: GraphFollow_live_watched_usersRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<GraphFollow_live_watched_usersStatus>;

  /**
   * ### POST /graph/follow_live_watched_users (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: GraphFollow_live_watched_usersRequest,
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
    query?: KaraokeParams,
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
    query?: KaraokeParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeResponse>;

  /**
   * ### GET /karaoke/by_genre
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
    query?: KaraokeBy_genreParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeBy_genreStatus>;

  /**
   * ### GET /karaoke/by_genre (full response)
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
    query?: KaraokeBy_genreParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeBy_genreResponse>;

  /**
   * ### GET /karaoke/genres
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
   * ### GET /karaoke/genres (full response)
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
   * ### GET /karaoke/recommend_singers
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
    query?: KaraokeRecommend_singersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeRecommend_singersStatus>;

  /**
   * ### GET /karaoke/recommend_singers (full response)
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
    query?: KaraokeRecommend_singersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeRecommend_singersResponse>;

  /**
   * ### GET /karaoke/search
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
    query?: KaraokeSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSearchStatus>;

  /**
   * ### GET /karaoke/search (full response)
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
    query?: KaraokeSearchParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSearchResponse>;

  /**
   * ### GET /karaoke/singers
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
    query?: KaraokeSingersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSingersStatus>;

  /**
   * ### GET /karaoke/singers (full response)
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
    query?: KaraokeSingersParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<KaraokeSingersResponse>;

  /**
   * ### GET /live/broadcast_result
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
    query?: LiveBroadcast_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveBroadcast_resultStatus>;

  /**
   * ### GET /live/broadcast_result (full response)
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
    query?: LiveBroadcast_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveBroadcast_resultResponse>;

  /**
   * ### POST /live/delete_live_history
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LiveDelete_live_historyRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveDelete_live_historyStatus>;

  /**
   * ### POST /live/delete_live_history (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; } リクエストボディ
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
    body: LiveDelete_live_historyRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveDelete_live_historyResponse>;

  /**
   * ### POST /live/kick_out
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: LiveKick_outRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveKick_outStatus>;

  /**
   * ### POST /live/kick_out (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: LiveKick_outRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveKick_outResponse>;

  /**
   * ### POST /live/live_app_identifier_changed
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_identifier?: string; live_id?: string; } リクエストボディ
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
    body: LiveLive_app_identifier_changedRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_app_identifier_changedStatus>;

  /**
   * ### POST /live/live_app_identifier_changed (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { app_identifier?: string; live_id?: string; } リクエストボディ
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
    body: LiveLive_app_identifier_changedRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_app_identifier_changedResponse>;

  /**
   * ### POST /live/live_capture_image
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: LiveLive_capture_imageRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_capture_imageStatus>;

  /**
   * ### POST /live/live_capture_image (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { [key: string]: string; } リクエストボディ
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
    body: LiveLive_capture_imageRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_capture_imageResponse>;

  /**
   * ### POST /live/live_end
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
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
    body: LiveLive_endRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_endStatus>;

  /**
   * ### POST /live/live_end (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
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
    body: LiveLive_endRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_endResponse>;

  /**
   * ### POST /live/live_heartbeat
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
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
    body: LiveLive_heartbeatRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_heartbeatStatus>;

  /**
   * ### POST /live/live_heartbeat (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
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
    body: LiveLive_heartbeatRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_heartbeatResponse>;

  /**
   * ### POST /live/live_start
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
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
    body: LiveLive_startRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_startStatus>;

  /**
   * ### POST /live/live_start (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
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
    body: LiveLive_startRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveLive_startResponse>;

  /**
   * ### POST /live/update_emomo_visible
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_visible?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_emomo_visibleRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_emomo_visibleStatus>;

  /**
   * ### POST /live/update_emomo_visible (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_visible?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_emomo_visibleRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_emomo_visibleResponse>;

  /**
   * ### POST /live/update_wipe_enabled
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_wipe_enabledRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_wipe_enabledStatus>;

  /**
   * ### POST /live/update_wipe_enabled (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
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
    body: LiveUpdate_wipe_enabledRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveUpdate_wipe_enabledResponse>;

  /**
   * ### GET /live/viewers_result
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
    query?: LiveViewers_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveViewers_resultStatus>;

  /**
   * ### GET /live/viewers_result (full response)
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
    query?: LiveViewers_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<LiveViewers_resultResponse>;

  /**
   * ### POST /live_game/ping
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; play_id?: string; } リクエストボディ
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
    body: Live_gamePingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gamePingStatus>;

  /**
   * ### POST /live_game/ping (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; play_id?: string; } リクエストボディ
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
    body: Live_gamePingRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Live_gamePingResponse>;

  /**
   * ### POST /mission/receive_login_bonus_reward
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { login_bonus_id?: string; } リクエストボディ
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
    body: MissionReceive_login_bonus_rewardRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionReceive_login_bonus_rewardStatus>;

  /**
   * ### POST /mission/receive_login_bonus_reward (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { login_bonus_id?: string; } リクエストボディ
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
    body: MissionReceive_login_bonus_rewardRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<MissionReceive_login_bonus_rewardResponse>;

  /**
   * ### POST /moderator/add
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ModeratorAddRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorAddStatus>;

  /**
   * ### POST /moderator/add (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ModeratorAddRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorAddResponse>;

  /**
   * ### POST /moderator/delete
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ModeratorDeleteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorDeleteStatus>;

  /**
   * ### POST /moderator/delete (full response)
   * **Content-Type**: `application/x-www-form-urlencoded`
   *
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
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
    body: ModeratorDeleteRequest,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<ModeratorDeleteResponse>;

  /**
   * ### GET /reward_ad/offerwalls
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
   * ### GET /reward_ad/offerwalls (full response)
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
   * ### GET /season_rating/live_result
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
    query?: Season_ratingLive_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingLive_resultStatus>;

  /**
   * ### GET /season_rating/live_result (full response)
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
    query?: Season_ratingLive_resultParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<Season_ratingLive_resultResponse>;

  /**
   * ### GET /shooter/matching
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
   * ### GET /shooter/matching (full response)
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

  /**
   * ### GET /page/lp
   *
   * @param query - { path?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PageLpStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.pageLp({ path?: string | undefined });
   * console.log(res);
   * ```
   */
  public pageLp!: (
    query?: PageLpParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PageLpStatus>;

  /**
   * ### GET /page/lp (full response)
   *
   * @param query - { path?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PageLpResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.pageLpFull({ path?: string | undefined });
   * console.log(res);
   * ```
   */
  public pageLpFull!: (
    query?: PageLpParams,
    extraHeaders?: Record<string, string>,
    axiosOpts?: AxiosRequestConfig
  ) => Promise<PageLpResponse>;

}
