const urlDomainV2 = "http://localhost:8000/affiliate/dashboard-v2/api/";
//postback macrow Url
export const macurl = "http://localhost:3004/macros";
export const timeZone = "http://localhost:3004/timeZone";
export const defaultSearchView = "http://localhost:3004/defaultSearchView";
export const offers = "http://localhost:3004/Offers";
//export const payOutTypes = "http://localhost:3004/payoutType";
export const Countries = "http://localhost:3004/cuntries";
export const eventsAPI = "http://localhost:3004/events";
export const searchResultAPI = "http://localhost:3004/JobAPI";
export const searchOptionAPI = "http://localhost:3004/searchOption";
export const conversionReport = "http://localhost:3004/converstionReport";
export const StatusAPI = "http://localhost:3004/Staus";
export const referralAPI = "http://localhost:3004/ReferralCommission";
export const clickStatics = "http://localhost:3004/cliskStaticstic";
export const conversionsStatics = "http://localhost:3004/conversionStaticstic";
export const revenueStatics = "http://localhost:3004/revenueStaticstic";
export const monthlyStatics = "http://localhost:3004/AffliateData";
export const marketPlaceData = "http://localhost:3004/MarketPlace";
export const marketPlaceDatatemp =
  "https://student-example-api.herokuapp.com/v1/contacts.json";

export const offerDetails = "http://localhost:3004/OfferDetails";
export const Creatives = "http://localhost:3004/images";
export const postBackPixelAPI = "http://localhost:3004/postbackpixels";
export const offer_eventsAPI = "http://localhost:3004/offer_events";
export const smartLinks = "http://localhost:3004/smartLink";
export const myReferralsAPI = "http://localhost:3004/myRefferal";
export const yourReferralsAPI = "http://localhost:3004/yourRefferal";
export const accountBilling = "http://localhost:3004/accountBilling";
export const manageAPI = "http://localhost:3004/manageAPI";
export const apiKeys = "http://localhost:3004/APIKeys";
export const accountDetails = "http://localhost:3004/accountDetails";
export const profile = "http://localhost:3004/profile";
export const profileSettings = "http://localhost:3004/profile_settings";
export const scheduledOffers = "http://localhost:3004/scheduleOffer";
export const accountSettings = "http://localhost:3004/accountSettings";
export const notifications = "http://localhost:3004/notifications";
//account Details
export const AccountAPI = urlDomainV2 + "account";
//Theme Configurations
export const ThemeConfig = urlDomainV2 + "theme_config";
//get notifications
export const Notification = urlDomainV2 + "notifications";
//mark as read all
export const ReadAll = urlDomainV2 + "notifications/read_all";

//Featured offers
export const featuredOffers = urlDomainV2 + "featured_offers";
// get Offers
export const offersApi = urlDomainV2 + "offers";
//get postbackPixels
export const postbackPixels = "http://localhost:3002/affiliate/postback_pixels";

//get total Performance data
export const totalPerformance =
  "http://localhost:3002/affiliate/reports/total_performance";

//get performance Report
export const performanceReport =
  "http://localhost:3002/affiliate/reports/performance";

//export performance CSV
export const performanceExport =
  "http://localhost:3002/affiliate/reports/performance/export";

//smart Groups
export const smartGroupApi =
  "http://localhost:3002/affiliate/filling-helpers/smart-group";

//categories
export const CategoriesApi = urlDomainV2 + "filling-helpers/categories";
//Currency
export const currencyAPI =
  "http://localhost:3002/affiliate/filling-helpers/currency";

//Conversion Report API
export const conversionReportAPI =
  "http://localhost:3002/affiliate/reports/conversions";
//set see message as see all
export const seeAll = urlDomainV2 + "notifications/see_all";

//get last seven days chart data
export const lastSevenDaysChartData =
  urlDomainV2 + "dashboard_stats/7_day_chart_stats";

//get last seven days comparison chart data
export const lastSevenDaysChartComparisonData =
  urlDomainV2 + "dashboard_stats/7_day_compare_total";

//get this month chart data
export const thisMonthChartData =
  urlDomainV2 + "dashboard_stats/this_month_total";
//get last month comparison data
export const lastMonthComparisonData =
  urlDomainV2 + "dashboard_stats/this_month_compare_total";

//get API data
export const APIData = urlDomainV2 + "api_manager";

//get myReferrals data
export const myReferralsData = "http://localhost:3002/affiliate/referrals";
//get Billing Profile data
export const billingProfile = urlDomainV2 + "billing/profile";

//get billing Invoice Data
export const billingInvoiceAPI = urlDomainV2 + "billing/invoices";

//get Billing Configurations
export const billingConfigurations = urlDomainV2 + "billing/configurations";

//offer Postback Macro URL
export const macroPostback = urlDomainV2 + "macros/postback_url";

//offer Macro URLs
export const offerMacroURl = urlDomainV2 + "macros/offer_url";

//postback Pixel

export const postback_pixels_API = urlDomainV2 + "postback_pixels";

//offer Events
export const EventFromOffer = urlDomainV2 + "offers/";

//Tracking URL
export const trackingURL = urlDomainV2 + "tracking_links/offer_link";

//tracking Smart Link
export const trackingSmartLink = urlDomainV2 + "tracking_links/smart_link";

//link of liveOffers
export const liveOffersAPI = urlDomainV2 + "live_offers";

//link of smart Links
export const smartLinksAPI = urlDomainV2 + "smart_links";

//link of scheduleChanges
export const scheduleChangesAPI = urlDomainV2 + "scheduled_changes";

//Offers filling API
export const filterOffersAPI = urlDomainV2 + "filling-helpers/offers";

//offer Events
export const offerEvents = urlDomainV2 + "filling-helpers/offer-event";

//Payout Type
export const payoutType = urlDomainV2 + "filling-helpers/payout-type";

//Countries
export const countriesList = urlDomainV2 + "filling-helpers/countries";

// Mobile Carrier
export const MobileCarriers = urlDomainV2 + "filling-helpers/carriers";

//Device List
export const deviceList = urlDomainV2 + "filling-helpers/devices";

//Platforms
export const platforms = urlDomainV2 + "filling-helpers/platform";

//TimeZone
export const timezone = urlDomainV2 + "filling-helpers/timezones";

//update company Details
export const updateCompany = urlDomainV2 + "account/update_company";

//update user details
export const updateUserDetails = urlDomainV2 + "account/update_user";

//update password
export const updatePassword = urlDomainV2 + "account/update_password";

//update notification Settings
export const updateNotificationSettings =
  urlDomainV2 + "account/update_notification_settings";
export default {
  macurl,
  timeZone,
  defaultSearchView,
  offers,
  payoutType,
  Countries,
  smartGroupApi,
  CategoriesApi,
  currencyAPI,
  eventsAPI,
  searchResultAPI,
  searchOptionAPI,
  conversionReport,
  referralAPI,
  clickStatics,
  revenueStatics,
  monthlyStatics,
  deviceList,
  platforms,
  MobileCarriers,
  offerDetails,
  Creatives,
  postBackPixelAPI,
  offer_eventsAPI,
  smartLinks,
  myReferralsAPI,
  yourReferralsAPI,
  accountBilling,
  manageAPI,
  apiKeys,
  accountDetails,
  profile,
  profileSettings,
  scheduledOffers,
  accountSettings,
  notifications,
  AccountAPI,
  ThemeConfig,
  Notification,
  ReadAll,
  featuredOffers,
  offersApi,
  postbackPixels,
  smartLinksAPI,
  liveOffersAPI,
  scheduleChangesAPI,
  totalPerformance,
  performanceReport,
  performanceExport,
  filterOffersAPI,
  countriesList,
  offerEvents,
  seeAll,
  lastSevenDaysChartData,
  lastSevenDaysChartComparisonData,
  thisMonthChartData,
  lastMonthComparisonData,
  APIData,
  myReferralsData,
  billingProfile,
  billingInvoiceAPI,
  billingConfigurations,
  macroPostback,
  EventFromOffer,
  postback_pixels_API,
  trackingURL,
  offerMacroURl,
  trackingSmartLink,
  updateCompany,
  updateUserDetails,
  updatePassword,
  updateNotificationSettings
};
