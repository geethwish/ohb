import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faAsterisk,
  faChartLine,
  faUsers,
  faCreditCard,
  faCode,
  faCogs,
  faComments
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faStroopwafel,
  faAsterisk,
  faChartLine,
  faUsers,
  faCreditCard,
  faCode,
  faCogs,
  faComments
);

export default class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavBar: true,
      nightMode: false,
      permissions: []
    };
  }
  handleOnclick = () => {
    const { nightMode } = this.state;
    if (nightMode) {
      this.setState({
        nightMode: false
      });
      localStorage.setItem("nightmode", "off");
    } else {
      this.setState({
        nightMode: true
      });
      localStorage.setItem("nightmode", "on");
    }
  };

  componentWillReceiveProps() {
    const currentMode = localStorage.getItem("nightmode");
    if (currentMode === "on") {
      this.setState({
        nightMode: true
      });
    } else {
      this.setState({
        nightMode: false
      });
    }
    if (this.props.apiLoad && this.props.active) {
      let account = this.props.account;
      this.setState({ permissions: account.permissions });
      //console.log(account.permissions["affiliate.access_reports"]); //check the values passing or not
    }
  }

  render() {
    const { nightMode } = this.state;
    return (
      <div>
        <div className={`site-menubar ${nightMode ? "site-menubar-dark" : ""}`}>
          <div className="site-menubar-body">
            <div>
              <div>
                <ul className="site-menu" data-plugin="menu">
                  <li className="site-menu-category">AFFLIATE</li>

                  <li className="site-menu-item active">
                    <a className="animsition-link" href="/">
                      <i
                        className="site-menu-icon md-view-dashboard"
                        aria-hidden="true"
                      />
                      <span className="site-menu-title">Dashboard</span>
                    </a>
                  </li>

                  <li className="site-menu-item has-sub">
                    <div className="pd30x30">
                      <FontAwesomeIcon
                        icon="asterisk"
                        className="site-menu-icon"
                      />
                      <span className="site-menu-title">Offers</span>
                      <span className="site-menu-arrow" />
                    </div>
                    <ul className="site-menu-sub">
                      {this.state.permissions["affiliate.access_offers"] && (
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/offers/all"
                          >
                            <span className="site-menu-title">
                              Browse Offers
                            </span>
                          </a>
                        </li>
                      )}
                      {this.state.permissions[
                        "affiliate.access_smart_links"
                      ] && (
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/offers/smart_link"
                          >
                            <span className="site-menu-title">Smart Links</span>
                          </a>
                        </li>
                      )}
                      {this.state.permissions["affiliate.access_offers"] && (
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/offers/live"
                          >
                            <span className="site-menu-title">Live Offers</span>
                          </a>
                        </li>
                      )}
                      {this.state.permissions["affiliate.access_offers"] && (
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/offers/schedules"
                          >
                            <span className="site-menu-title">
                              Scheduled Changes
                            </span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </li>

                  {this.state.permissions["affiliate.access_reports"] && (
                    <li className="site-menu-item has-sub">
                      <div className="pd30x30">
                        <FontAwesomeIcon
                          icon="chart-line"
                          className="site-menu-icon"
                        />
                        <span className="site-menu-title">Reports</span>
                        <span className="site-menu-arrow" />
                      </div>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/report/performance"
                          >
                            <span className="site-menu-title">
                              Performance Report
                            </span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/report/conversions"
                          >
                            <span className="site-menu-title">
                              Conversion Report
                            </span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/report/referral_commissions"
                          >
                            <span className="site-menu-title">
                              Referral Commissions
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li className="site-menu-item">
                    <a className="animsition-link" href="/affiliate/referrals">
                      <FontAwesomeIcon
                        icon="users"
                        className="site-menu-icon"
                      />
                      <span className="site-menu-title">Referrals</span>
                    </a>
                  </li>

                  {this.state.permissions["affiliate.access_billing"] && (
                    <li className="site-menu-item">
                      <a className="animsition-link" href="/affiliate/billing">
                        <FontAwesomeIcon
                          icon="credit-card"
                          className="site-menu-icon"
                        />
                        <span className="site-menu-title">Billing</span>
                      </a>
                    </li>
                  )}
                  {this.state.permissions["affiliate.access_api"] && (
                    <li className="site-menu-item">
                      <a
                        className="animsition-link"
                        href="/affiliate/manage_api"
                      >
                        <FontAwesomeIcon
                          icon="code"
                          className="site-menu-icon"
                        />
                        <span className="site-menu-title">API</span>
                      </a>
                    </li>
                  )}
                  {this.state.permissions["affiliate.access_postback"] && (
                    <li className="site-menu-item has-sub">
                      <div className="pd30x30">
                        <FontAwesomeIcon
                          icon="cogs"
                          className="site-menu-icon"
                        />
                        <span className="site-menu-title">Settings</span>
                        <span className="site-menu-arrow" />
                      </div>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a
                            className="animsition-link"
                            href="/affiliate/postback"
                          >
                            <span className="site-menu-title">
                              Postback Setup
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li className="site-menu-item">
                    <a className="animsition-link" href="/affiliate/support">
                      <FontAwesomeIcon
                        icon="comments"
                        className="site-menu-icon"
                      />
                      <span className="site-menu-title">Support</span>
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>

          <div className="site-menubar-footer">
            <div
              className="fold-show"
              data-placement="top"
              data-toggle="tooltip"
              data-original-title="Settings"
            >
              <span className="icon md-settings" aria-hidden="true" />
            </div>
            <div
              data-placement="top"
              data-toggle="tooltip"
              data-original-title="Lock"
              onClick={this.handleOnclick}
            >
              <span
                className={`${nightMode ? "icon md-eye-off" : "icon md-eye"}`}
                aria-hidden="true"
              />
            </div>
            <div
              data-placement="top"
              data-toggle="tooltip"
              data-original-title="Logout"
            >
              <span className="icon md-power" aria-hidden="true" />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
