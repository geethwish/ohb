import React, { Component } from "react";
import { Notification, ReadAll, seeAll } from "./../Data/urlConfig";
import { requestsData, patchData } from "./../utils/api";
export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navInverse: false,
      navCol: "",
      navbarInvers: "",
      notifications: [],
      permissions: [],
      notificationCount: 0
    };
  }
  componentWillMount() {
    const { navInverse } = this.state;

    if (navInverse) {
      this.setState({
        navbarInvers: "navbar-inverse"
      });
    }
  }
  componentDidMount = () => {
    requestsData(Notification).then(response => {
      this.setState({ notifications: response.data });
      this.setState({ notificationCount: response.unread_count });
    });
    setInterval(() => {
      requestsData(Notification).then(response => {
        this.setState({ notifications: response.data });
        this.setState({ notificationCount: response.unread_count });
      });
    }, 10000);
  };
  componentWillReceiveProps = () => {
    const themeColor = this.props.data.theme_color;
    localStorage.setItem("themeColor", themeColor);
  };

  markAllAsRead = () => {
    patchData(ReadAll).then(response => {});
  };
  seeAll = () => {
    patchData(seeAll).then(response => {});
  };

  render() {
    //const { navbarInvers } = this.state;
    return (
      <div>
        <nav
          className={`site-navbar navbar navbar-inverse navbar-fixed-top navbar-mega `}
          role="navigation"
          style={{ backgroundColor: this.props.data.base_theme_color }}
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
              data-toggle="menubar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="hamburger-bar" />
            </button>
            <button
              type="button"
              className="navbar-toggler collapsed"
              data-target="#site-navbar-collapse"
              data-toggle="collapse"
            >
              <i className="icon md-more" aria-hidden="true" />
            </button>
            <a href="/">
              <div
                className="navbar-brand navbar-brand-center site-gridmenu-toggle"
                data-toggle="gridmenu"
              >
                <img
                  className="navbar-brand-logo"
                  src={this.props.data.logo_icon}
                  title="Remark"
                  alt="OffersHub"
                />

                <span className="navbar-brand-text hidden-xs-down">
                  {" "}
                  {this.props.account.name}
                </span>
              </div>
            </a>

            <button
              type="button"
              className="navbar-toggler collapsed"
              data-target="#site-navbar-search"
              data-toggle="collapse"
            >
              <span className="sr-only">Toggle Search</span>
              <i className="icon md-search" aria-hidden="true" />
            </button>
          </div>

          <div
            className="navbar-container container-fluid"
            style={{ backgroundColor: this.props.data.base_theme_color }}
          >
            {
              //</div></div><!-- Navbar Collapse -->
            }
            <div
              className="collapse navbar-collapse navbar-collapse-toolbar"
              id="site-navbar-collapse"
            >
              {
                //<!-- Navbar Toolbar -->
              }
              <ul className="nav navbar-toolbar">
                <li className="nav-item hidden-float" id="toggleMenubar">
                  <div className="nav-link" data-toggle="menubar" role="button">
                    <i className="icon hamburger hamburger-arrow-left">
                      <span className="sr-only">Toggle menubar</span>
                      <span className="hamburger-bar" />
                    </i>
                  </div>
                </li>
                <li className="nav-item hidden-sm-down" id="toggleFullscreen">
                  <div
                    className="nav-link icon icon-fullscreen"
                    data-toggle="fullscreen"
                    role="button"
                  >
                    <span className="sr-only">Toggle fullscreen</span>
                  </div>
                </li>
                <li className="nav-item hidden-float">
                  <div
                    className="nav-link icon md-search"
                    data-toggle="collapse"
                    data-target="#site-navbar-search"
                    role="button"
                  >
                    <span className="sr-only">Toggle Search</span>
                  </div>
                </li>
                <li />
              </ul>
              <ul
                className="nav navbar-toolbar centerImg"
                style={{ marginLeft: "35%" }}
              >
                <li>
                  <div className="centerImg">
                    <img
                      src={this.props.data.logo}
                      alt={this.props.account.name}
                      style={{
                        width: "100px",
                        marginTop: "15px",
                        float: "right"
                      }}
                    />
                  </div>
                </li>
              </ul>

              <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link"
                    data-toggle="dropdown"
                    data-animation="scale-up"
                    aria-expanded="false"
                    role="button"
                  >
                    <span className="flag-icon flag-icon-us" />
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-item" role="menuitem">
                      <span className="flag-icon flag-icon-gb" /> English
                    </div>
                    <div className="dropdown-item" role="menuitem">
                      <span className="flag-icon flag-icon-fr" /> French
                    </div>
                    <div className="dropdown-item" role="menuitem">
                      <span className="flag-icon flag-icon-cn" /> Chinese
                    </div>
                    <div className="dropdown-item" role="menuitem">
                      <span className="flag-icon flag-icon-de" /> German
                    </div>
                    <div className="dropdown-item" role="menuitem">
                      <span className="flag-icon flag-icon-nl" /> Dutch
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div
                    className="nav-link"
                    data-toggle="dropdown"
                    // href="javascript:void(0);"
                    title="Notifications"
                    aria-expanded="false"
                    data-animation="scale-up"
                    role="button"
                    onClick={this.seeAll}
                  >
                    <i className="icon md-notifications" aria-hidden="true" />
                    <span className="badge badge-pill badge-danger up">
                      {this.state.notificationCount}
                    </span>
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-right dropdown-menu-media"
                    role="menu"
                  >
                    <div className="dropdown-menu-header">
                      <h5>NOTIFICATIONS</h5>
                      <span
                        className="badge badge-round badge-info cus_Select"
                        onClick={this.markAllAsRead}
                      >
                        Mark All as Read
                      </span>
                    </div>

                    <div className="list-group">
                      <div data-role="container">
                        <div data-role="content">
                          {this.state.notifications.map(notification => (
                            <a
                              href={notification.link}
                              className="list-group-item dropdown-item"
                              role="menuitem"
                              key={notification.id}
                              id={notification.id}
                            >
                              <div className="media">
                                <div className="pr-10">
                                  <i
                                    className="icon md-receipt bg-red-600 white icon-circle"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="media-body">
                                  {notification.open_at === null ? (
                                    <h6 className="media-heading">
                                      {notification.subject}
                                    </h6>
                                  ) : (
                                    <p className="media-heading">
                                      {notification.subject}
                                    </p>
                                  )}

                                  <time
                                    className="media-meta"
                                    dateTime={notification.created_at}
                                  >
                                    {notification.time_dif}
                                  </time>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-menu-footer">
                      <div
                        style={{ padding: "15px 20px" }}
                        className="dropdown-menu-footer-btn"
                        role="button"
                      >
                        <i className="icon md-settings" aria-hidden="true" />
                      </div>
                      <a
                        className="dropdown-item"
                        href="/affiliate/notifications"
                        role="menuitem"
                      >
                        All notifications
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link navbar-avatar"
                    data-toggle="dropdown"
                    // href="javascript:void(0);"
                    aria-expanded="false"
                    data-animation="scale-up"
                    role="button"
                  >
                    <span className="avatar avatar-online">
                      <img src="/global/portraits/5.jpg" alt="..." />
                      <i />
                    </span>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <a
                      className="dropdown-item"
                      href="/affiliate/account"
                      role="menuitem"
                    >
                      <i className="icon md-account" aria-hidden="true" />{" "}
                      Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="/affiliate/billing"
                      role="menuitem"
                    >
                      <i className="icon md-card" aria-hidden="true" /> Billing
                    </a>
                    <div className="dropdown-divider" role="presentation" />
                    <div className="dropdown-item" role="menuitem">
                      <i className="icon md-power" aria-hidden="true" /> Logout
                    </div>
                  </div>
                </li>
              </ul>
              {
                //<!-- End Navbar Toolbar Right -->
              }
            </div>
            {/*
      <!-- End Navbar Collapse -->
  
      <!-- Site Navbar Seach -->

      */}
            <div
              className="collapse navbar-search-overlap"
              id="site-navbar-search"
            >
              <form role="search">
                <div className="form-group">
                  <div className="input-search">
                    <i
                      className="input-search-icon md-search"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="site-search"
                      placeholder="Search..."
                    />
                    <button
                      type="button"
                      className="input-search-close icon md-close"
                      data-target="#site-navbar-search"
                      data-toggle="collapse"
                      aria-label="Close"
                    />
                  </div>
                </div>
              </form>
            </div>
            {
              // <!-- End Site Navbar Seach -->
            }
          </div>
        </nav>
      </div>
    );
  }
}
