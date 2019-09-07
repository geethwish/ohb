import React, { Component } from "react";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
//import Footer from "../components/footer";
//import HomeBody from "../components/homepageContent";
// import BrowseOffers from "../components/browseOffers";
// import SmartLink from "../components/smartLink";
// import LiveOffers from "../components/liveOffers";
// import ScheduledOffer from "../components/ScheduledOffer";
// import MyReferrals from "../components/myReferrals";
// import Support from "../components/support";
// import ManageApi from "../components/manageApi";
// import Billing from "../components/Billing";
// import PostBack from "../components/postBack";
// import performanceReport from "../components/report/performance";
// import conversionReport from "../components/report/conversion";
// import referralReport from "../components/report/referral";
// import offerSettings from "../components/offerSettings";
// import AccountDetails from "../components/accountDetails";
// import AllNotifications from "../components/allNotifications";
import TestC from "./../components/text";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import endpoints from "./../Data/urlConfig";
import { requestsData } from "./../utils/api";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountSetting: [],
      themeConfig: [],
      accountAPload: false,
      themeLoad: false,
      loaded: false,
      accountAPI: false,
      themeAPILoad: false
    };
  }
  componentDidMount = () => {
    // requestsData(endpoints.AccountAPI)
    //   .then(response => {
    //     if (Object.keys(response).length > 0) {
    //       this.setState({ accountSetting: response });
    //       localStorage.setItem("DefaultCurrency", response.currency_code);
    //       this.setState({ accountAPload: true });
    //     }
    //     //console.log(response);
    //   })
    //   .finally(() => {
    //     this.setState({ accountAPI: true });
    //   });
    // requestsData(endpoints.ThemeConfig)
    //   .then(data => {
    //     // console.log(data);
    //     if (Object.keys(data).length > 0) {
    //       this.setState({ themeConfig: data });
    //       this.setState({ themeLoad: true });
    //     }
    //   })
    //   .finally(() => {
    //     this.setState({ themeAPILoad: true });
    //   });
  };

  render() {
    const urlName = "/affiliate/";
    return (
      <div>
        <Sidebar
          account={this.state.accountSetting}
          active={this.state.accountAPload}
          apiLoad={this.state.accountAPI}
        />
        <NavBar
          data={this.state.themeConfig}
          account={this.state.accountSetting}
        />

        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={TestC} />
              {/* 

              <Route path={`${urlName}offers/all`} component={BrowseOffers} />
              <Route
                path={`${urlName}offers/smart_link`}
                component={SmartLink}
              />
              <Route path={`${urlName}offers/live`} component={LiveOffers} />
              <Route
                path={`${urlName}offers/schedules`}
                component={ScheduledOffer}
              />

              <Route
                path={`${urlName}report/performance`}
                component={performanceReport}
              />
              <Route
                path={`${urlName}report/conversions`}
                component={conversionReport}
              />
              <Route
                path={`${urlName}report/referral_commissions`}
                component={referralReport}
              />

              <Route path={`${urlName}referrals`} component={MyReferrals} />

              <Route path={`${urlName}billing`} component={Billing} />

              <Route path={`${urlName}postback`} component={PostBack} />

              <Route path={`${urlName}support`} component={Support} />

              <Route path={`${urlName}manage_api`} component={ManageApi} />

              <Route path={"/affiliate/offers/:id"} component={offerSettings} />
              <Route path={`${urlName}account`} component={AccountDetails} />
              <Route
                path={`${urlName}notifications`}
                component={AllNotifications}
              />
              <Route component={Error} /> */}
            </Switch>
          </BrowserRouter>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
