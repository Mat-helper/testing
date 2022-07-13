import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinksCommunity from "components/Header/HeaderLinksCommunity.js";

import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";
import CKEditor from 'ckeditor4-react';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Discussion(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className="inner_header">
      <Header
        fixed
        color="transparent"
        routes={dashboardRoutes}
        brand={<Link to="/home"><img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid" /></Link>}
        rightLinks={<HeaderLinksCommunity />}
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...rest}
      />
      <ScrollToTopOnMount />
      <div className={classes.pageHeader + " inner_pageheader"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="inner_title">Discussion</h2>
                <Button className="create_btn" data-toggle="modal" data-target="#new_top_modal">New Topic</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container mt-3">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <nav className="masonry_tab_nav mt-4 items_tab_outer px-0">
                <div className="nav nav-tabs masonry_tab primary_tab dis_tab px-0 mb-3" id="nav-tab" role="tablist">
                  <a className="nav-link ml-0 active" id="categories-tab" data-toggle="tab" href="#categories" role="tab" aria-controls="categories" aria-selected="true">
                    Categories
                  </a>

                  <a className="nav-link" id="latest-tab" data-toggle="tab" href="#latest" role="tab" aria-controls="latest" aria-selected="false">
                    Latest
                  </a>
                  <a className="nav-link" id="top-tab" data-toggle="tab" href="#top" role="tab" aria-controls="top" aria-selected="false">
                    Top
                  </a>
                </div>
              </nav>
              <div className="tab-content explore_tab_content mt-0" id="nav-tabContent">
                <div className="tab-pane fade show active" id="categories" role="tabpanel" aria-labelledby="all-tab">
                  <div className="proposal_panel_overall">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="title_div">
                          <div className="row">
                            <div className="col-9">
                              <p className="title_discussion mb-0">Category</p>
                            </div>
                            <div className="col-3">
                              <p className="title_discussion mb-0 text-right">Topics</p>
                            </div>
                          </div>
                        </div>
                        <div className="content_div">
                          <ul class="list-group list_grp_style_1 p-0">
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/category"><p className="cat_title">General Community</p></Link>
                                  <p className="cat_desc mb-0">General community discussion topics and posts</p>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>96 /</span>
                                    <span className="pl-1">week</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/category"><p className="cat_title">Technical upgrades</p></Link>
                                  <p className="cat_desc mb-0">Technical improvements, support of new formats, bug fixes, and other tech-related questions</p>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>6 /</span>
                                    <span className="pl-1">week</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/category"><p className="cat_title">Platform development / new features</p></Link>
                                  <p className="cat_desc mb-0">Feature requests, additions, new tabs & functions, and other questions on platform development.</p>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>2 /</span>
                                    <span className="pl-1">week</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/category"><p className="cat_title">General Community</p></Link>
                                  <p className="cat_desc mb-0">General community discussion topics and posts</p>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>96 /</span>
                                    <span className="pl-1">week</span>

                                  </p>
                                </div>
                              </div>
                            </li>

                          </ul>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="title_div">
                          <div className="row">
                            <div className="col-9">
                              <p className="title_discussion mb-0">Latest</p>
                            </div>
                            <div className="col-3">
                              <p className="title_discussion mb-0 text-right"></p>
                            </div>
                          </div>
                        </div>
                        <div className="content_div">
                          <ul class="list-group list_grp_style_1 p-0">
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/disussion-detail"><p className="cat_title">GIVEAWAY TIME-420 by 4/20</p></Link>
                                  <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>10 /</span>
                                    <span className="pl-1">32m</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/disussion-detail"><p className="cat_title">Is Metamask still be able to connect with Rarible?</p></Link>
                                  <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>24 /</span>
                                    <span className="pl-1">3hr</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/disussion-detail"><p className="cat_title">GIVEAWAY TIME-420 by 4/20</p></Link>
                                  <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>10 /</span>
                                    <span className="pl-1">32m</span>

                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div className="row">
                                <div className="col-9">
                                  <Link to="/disussion-detail"><p className="cat_title">Is Metamask still be able to connect with Rarible?</p></Link>
                                  <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>

                                </div>
                                <div className="col-3 px-0">
                                  <p className="cat_dur mb-0 text-right">
                                    <span>24 /</span>
                                    <span className="pl-1">3hr</span>

                                  </p>
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="following-tab">
                  <div className="proposal_panel_overall">

                    <div className="table-responsive">
                      <table class="table table_style_1">
                        <thead>
                          <tr>
                            <th>
                              <div class="form-group mb-0">
                                <select class="form-control sel_period" id="exampleFormControlSelect1">
                                  <option>All catrgories</option>
                                  <option>General</option>
                                  <option>Games</option>
                                </select>
                              </div>
                            </th>
                            <th className="text-right"></th>
                            <th className="text-right"> Replies </th>
                            <th className="text-right"> Views </th>
                            <th className="text-right"> Activity </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Share your art and follow let the good energy flow</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>
                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />

                              </div>
                            </td>
                            <td className="text-right"> 133 </td>
                            <td className="text-right"> 5.9k </td>
                            <td className="text-right"> 13h </td>

                          </tr>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">I want to buy some NFT art</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>
                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />

                              </div>
                            </td>
                            <td className="text-right"> 2133 </td>
                            <td className="text-right"> 1.7k </td>
                            <td className="text-right"> 30m </td>

                          </tr>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Drop Your NFT - I Will List It For Free</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>

                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                              </div>
                            </td>
                            <td className="text-right"> 89 </td>
                            <td className="text-right"> 1.2k </td>
                            <td className="text-right"> 20h </td>

                          </tr>

                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Sorting through bad art</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>

                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />

                              </div>
                            </td>
                            <td className="text-right"> 541 </td>
                            <td className="text-right"> 719 </td>
                            <td className="text-right"> 4h </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="top" role="tabpanel" aria-labelledby="activity-tab">
                  <div className="proposal_panel_overall">
                    <div className="table-responsive">
                      <table class="table table_style_1">
                        <thead>
                          <tr>
                            <th>
                              <div class="form-group mb-0">
                                <select class="form-control sel_period" id="exampleFormControlSelect1">
                                  <option>Select Period</option>
                                  <option>Yearly</option>
                                  <option>Monthly</option>
                                  <option>Weekly</option>
                                  <option>Today</option>
                                </select>
                              </div>
                            </th>
                            <th className="text-right"></th>
                            <th className="text-right"> Replies </th>
                            <th className="text-right"> Views </th>
                            <th className="text-right"> Activity </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Share your art and follow let the good energy flow</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>
                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />

                              </div>
                            </td>
                            <td className="text-right"> 133 </td>
                            <td className="text-right"> 5.9k </td>
                            <td className="text-right"> 13h </td>

                          </tr>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">I want to buy some NFT art</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>
                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />

                              </div>
                            </td>
                            <td className="text-right"> 2133 </td>
                            <td className="text-right"> 1.7k </td>
                            <td className="text-right"> 30m </td>

                          </tr>
                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Drop Your NFT - I Will List It For Free</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_green mb-0">General Community</p></Link>

                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                              </div>
                            </td>
                            <td className="text-right"> 89 </td>
                            <td className="text-right"> 1.2k </td>
                            <td className="text-right"> 20h </td>

                          </tr>

                          <tr>
                            <td>
                              <Link to="/disussion-detail"><p className="cat_title mb-0">Sorting through bad art</p></Link>
                              <Link to="/category"><p className="cat_link cat_link_blue mb-0">Technical upgrades</p></Link>

                            </td>
                            <td className="text-right">
                              <div className="d-flex creators_details_td justify-content-end">
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                                <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                              </div>
                            </td>
                            <td className="text-right"> 541 </td>
                            <td className="text-right"> 719 </td>
                            <td className="text-right"> 4h </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      {/* New Topic Modal */}
      <div class="modal fade primary_modal" id="new_top_modal" tabindex="-1" role="dialog" aria-labelledby="new_top_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal" role="document">
          <div class="modal-content" id="hide"  >
            <div class="modal-header text-center">
              <h5 class="modal-title" id="new_top_modalLabel_1">Create New Topic</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="login_form mt-3">
                <div className="form-row">
                  <div className="col-12">
                    <label for="title">Title</label>
                    <div class="mb-3">
                      <input type="text" id="title" class="form-control" placeholder="Title" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="category">Choose Category</label>
                    <select className="form-control">
                      <option>Art</option>
                      <option>Video</option>
                    </select>
                  </div>
                </div>
                <label className="mt-2" for="message">Message</label>
                <div class="my-3">
                  <CKEditor
                    data="<p>Hello</p>"
                    onChange={evt => console.log(evt)}
                  />
                </div>
                <div className="mt-3">
                  <Button className="create_btn">Create Topic</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
