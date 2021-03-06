import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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

export default function Following(props) {
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
        <div className="bg_red_1">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="inner_title">Following</h2>
                  <div className="custom_filter">
                    <a href="#discoverFilter" className="menu_btn landingFilterButton" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="discoverFilter">Filter & Sort <img src={require("../assets/images/filtersorticon.png")} alt="" /></a>
                  </div>
                </div>
                <div class="collapse" id="discoverFilter">
                <div class="card card-body my-2">
                  <GridContainer className="w-100">
                    <GridItem xs={12} sm={12} md={6} lg={3}>
                      <div className="form-group">
                        <label htmlFor="inputEmail4" className="auth_label">Price</label>
                        <select className="custom-select auth_inp">
                          <option selected>Highest Price</option>
                          <option value="1">Lowest Price</option>
                        </select>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={3}>
                      <div className="form-group">
                        <label htmlFor="inputEmail4" className="auth_label">Likes</label>
                        <select className="custom-select auth_inp">
                          <option selected>Most Liked</option>
                          <option value="1">Most Viewed</option>
                          <option value="1">Un Liked</option>
                        </select>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={3}>
                      <div className="form-group">
                        <label htmlFor="inputEmail4" className="auth_label">Creator</label>
                        <select className="custom-select auth_inp">
                          <option selected>Verified Only</option>
                          <option value="1">Popular Creators</option>
                          <option value="1">New Creators</option>
                        </select>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={3}>
                      <div className="form-group">
                        <label htmlFor="inputEmail4" className="auth_label">Sort By</label>
                        <select className="custom-select auth_inp">
                          <option selected>Newest</option>
                          <option value="1">Popular</option>
                          <option value="1">Price Low</option>
                          <option value="1">Price High</option>
                        </select>
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
                  <div className="col-md-3">
                    <div class="card">
                      <a href="item.html" class="card__cover">
                        <img src={require("../assets/images/cover/cover1.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="item.html">Walking on Air</a></h3>
                      <div class="card__author">
                        <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                        <a href="author.html">@nickname</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>4.89 ETH</span>
                        </div>
                        
                        <button class="card__likes" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>189</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                      <a href="item.html" class="card__cover">
                        <img src={require("../assets/images/cover/cover2.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="item.html">Les Immortels, the Treachery of Artificial Shadows</a></h3>
                      <div class="card__author card__author--verified">
                        <img src={require("../assets/images/avatars/avatar10.jpg")} alt="" />
                        <a href="author.html">@neo</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>2.61 ETH</span>
                        </div>
                        
                        <button class="card__likes" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>702</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                      <a href="#modal-asset" class="card__cover open-modal">
                        <img src={require("../assets/images/cover/cover3.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="#modal-asset" class="open-modal">Flowers in Concrete (Modal)</a></h3>
                      <div class="card__author">
                        <img src={require("../assets/images/avatars/avatar.jpg")} alt="" />
                        <a href="author.html">@min1max</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>3.19 ETH</span>
                        </div>
                        
                        <button class="card__likes card__likes--active" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>37</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                      <a href="item.html" class="card__cover">
                        <img src={require("../assets/images/cover/cover4.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="item.html">Industrial Revolution</a></h3>
                      <div class="card__author card__author--verified">
                        <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                        <a href="author.html">@midinh</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>1.11 ETH</span>
                        </div>
                        
                        <button class="card__likes" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>23</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                        <a href="item.html" class="card__cover">
                          <img src={require("../assets/images/cover/cover5.jpg")} alt="" />
                        </a>
                        <h3 class="card__title"><a href="item.html">I Love You</a></h3>
                        <div class="card__author card__author--verified">
                          <img src={require("../assets/images/avatars/avatar9.jpg")} alt="" />
                          <a href="author.html">@nicky87</a>
                        </div>
                        <div class="card__info">
                          <div class="card__price">
                            <span>Reserve price</span>
                            <span>0.99 ETH</span>
                          </div>
                          
                          <button class="card__likes" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                            <span>358</span>
                          </button>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                        <a href="item.html" class="card__cover card__cover--video">
                          <img src={require("../assets/images/cover/cover6.jpg")} alt="" />
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/></svg>
                        </a>
                        <h3 class="card__title"><a href="item.html">Walking on Air</a></h3>
                        <div class="card__author">
                          <img src={require("../assets/images/avatars/avatar14.jpg")} alt="" />
                          <a href="author.html">@redalert</a>
                        </div>
                        <div class="card__info">
                          <div class="card__price">
                            <span>Reserve price</span>
                            <span>1.63 ETH</span>
                          </div>
                          
                          <button class="card__likes" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                            <span>90</span>
                          </button>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                      <a href="#modal-asset" class="card__cover open-modal">
                        <img src={require("../assets/images/cover/cover7.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="#modal-asset" class="open-modal">Tranquility (Modal)</a></h3>
                      <div class="card__author">
                        <img src={require("../assets/images/avatars/avatar4.jpg")} alt="" />
                        <a href="author.html">@aaarthur</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>2.55 ETH</span>
                        </div>
                        
                        <button class="card__likes" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>64</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card">
                      <a href="#modal-asset" class="card__cover open-modal">
                        <img src={require("../assets/images/cover/cover7.jpg")} alt="" />
                      </a>
                      <h3 class="card__title"><a href="#modal-asset" class="open-modal">Tranquility (Modal)</a></h3>
                      <div class="card__author">
                        <img src={require("../assets/images/avatars/avatar4.jpg")} alt="" />
                        <a href="author.html">@aaarthur</a>
                      </div>
                      <div class="card__info">
                        <div class="card__price">
                          <span>Reserve price</span>
                          <span>2.55 ETH</span>
                        </div>
                        
                        <button class="card__likes" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                          <span>64</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
