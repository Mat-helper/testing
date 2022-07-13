import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Activity(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChangeFaq = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="inner_header">
      <Header
        fixed
        color="transparent"
        routes={dashboardRoutes}
        brand={<Link to="/home"><img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid" /></Link>}
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...rest}
      />
      <ScrollToTopOnMount />
      <div className={classes.pageHeader + " inner_pageheader"}>
        
        <div className="container mt-3">
          <GridContainer className="align-items-start">
            <GridItem xs={12} sm={8} md={8}>
            <div className="d-flex justify-content-between">
                  <h2 className="inner_title">Activity</h2>
                </div>
              <nav className="masonry_tab_nav mt-4 items_tab_outer">
                <div className="nav nav-tabs masonry_tab primary_tab" id="nav-tab" role="tablist">
                  <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">
                    All
                  </a>

                  <a className="nav-link" id="following-tab" data-toggle="tab" href="#following" role="tab" aria-controls="following" aria-selected="false">
                    Following
                  </a>
                  <a className="nav-link" id="activity-tab" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">
                    My Activity
                  </a>
                </div>
              </nav>
              <div className="tab-content explore_tab_content mt-2" id="nav-tabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                  <div className="proposal_panel_overall">
                    <div className="followers_overall py-3">
                      <div className="row">
                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 hours ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 hour ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 day ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                  <div className="proposal_panel_overall">
                    <div className="followers_overall py-3">
                      <div className="row">
                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 hours ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 hour ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 day ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                  <div className="proposal_panel_overall">
                    <div className="followers_overall py-3">
                      <div className="row">
                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 hours ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 hour ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">1 day ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">2 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 mb-4">
                          <div className="card my-0">
                            <div className="card-body px-3">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="User" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="my-0 media_text">ThePop</p>
                                    <p className="mt-0 media_num mt-0">Started following - <span className="media_text">You</span></p>

                                  </div>

                                </div>
                              </div>
                              <div className="ml-2">
                                <p className="mt-0 media_num mb-0 dur_text">3 days ago</p>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div className="filter_panel">
                <h2>Filter</h2>
                <div className="filter_panel_grp">
                  <Button className="filter_btn">Listings</Button>
                  <Button className="filter_btn">Purchases</Button>
                  <Button className="filter_btn">Sales</Button>
                  <Button className="filter_btn">Transfers</Button>
                  <Button className="filter_btn">Burns</Button>
                  <Button className="filter_btn">Bids</Button>
                  <Button className="filter_btn">Likes</Button>
                  <Button className="filter_btn">Followings</Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
