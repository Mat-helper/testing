import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";
// Slick Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Myitems(props) {
  const classes = useStyles();
  const { ...rest } = props;
 var settingsLiveAuction = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  // Countdown Timer
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="timer_panel">
        <span><span className="timer_time">{zeroPad(days)}</span><span className="timer_label">d</span></span>
        <span className="timer_dots"> </span>
        <span><span className="timer_time">{zeroPad(hours)}</span><span className="timer_label">h</span></span>
        <span className="timer_dots"> </span>
        <span><span className="timer_time">{zeroPad(minutes)}</span><span className="timer_label">m</span></span>
        <span className="timer_dots"> </span>
        <span><span className="timer_time">{zeroPad(seconds)}</span><span className="timer_label">s</span></span>
      </div>
    );
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
      <div className={classes.pageHeader + " inner_pageheader items_header"}>
        <div>
          <GridContainer className="mx-0">
            <GridItem xs={12} sm={12} md={12} className="px-0">
              <div className="items_bg">
                <img src={require("../assets/images/myitems_bg.png")} alt="profile" className="img-fluid" />
                <div className="container edit_cover_container">
                  <p className="edit_cover_text" data-toggle="modal" data-target="#edit_cover_modal">Edit cover</p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <GridContainer className="mx-0">
            <GridItem xs={12} sm={12} md={12} className="px-0">
              <div className="items_bg_pink">
                <div className="item_prof">
                  <img src={require("../assets/images/myitems-profile.png")} alt="profile" className="img-fluid items_profile" />
                  <Link to="/edit-profile">
                    <div className="profile_edit_panel item_prof_panel">
                      <div className="profile_edit_icon">
                        <i class="fas fa-pencil-alt"></i>
                      </div>
                      {/* <input type="file" name="photograph" id="photo" required="true" /> */}
                    </div>
                  </Link>

                </div>
                <p>
                  <span className="address_text">0x3f2ccfa83...db62dde</span>
                  <span>
                    <i className="fas fa-sticky-note notes_fa"></i>
                  </span>
                </p>
                <div className="mt-3">
                  {/* <Button className="btn_outline_red">Edit Profile</Button> */}
                  <Link className="btn_outline_red" to="/log_in">Login</Link>
                  <span className="bg_red_icon">
                    <i class="fas fa-share-alt"></i>
                  </span>
                  <span className="bg_red_icon">
                    <i class="fas fa-ellipsis-h"></i>
                  </span>
                </div>
                <div className="mt-3">
                  {/* <Button className="btn_outline_red">Edit Profile</Button> */}
                  <Link className="btn_outline_red" to="/edit-profile">Edit Profile</Link>
                  <span className="bg_red_icon">
                    <i class="fas fa-share-alt"></i>
                  </span>
                  <span className="bg_red_icon">
                    <i class="fas fa-ellipsis-h"></i>
                  </span>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <nav className="masonry_tab_nav mt-4 items_tab_outer">
                <div className="nav nav-tabs masonry_tab primary_tab items_tab" id="nav-tab" role="tablist">
                  <a className="nav-link active" id="onsale-tab" data-toggle="tab" href="#onsale" role="tab" aria-controls="onsale" aria-selected="true">
                    <div className="tab_head">OnSale</div>
                    <span className="tab_count">0</span>
                  </a>
                  <a className="nav-link" id="collectibles-tab" data-toggle="tab" href="#collectibles" role="tab" aria-controls="collectibles" aria-selected="false">
                    <div className="tab_head">NFTs</div>
                    <span className="tab_count">0</span>
                  </a>
                  <a className="nav-link" id="created-tab" data-toggle="tab" href="#created" role="tab" aria-controls="created" aria-selected="false">
                    <div className="tab_head">Created</div>
                    <span className="tab_count">0</span>
                  </a>
                  <a className="nav-link" id="liked-tab" data-toggle="tab" href="#liked" role="tab" aria-controls="liked" aria-selected="false">
                    <div className="tab_head">Liked</div>
                    <span className="tab_count">0</span>
                  </a>
                  <a className="nav-link" id="activity-tab" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">
                    <div className="tab_head">Activity</div>
                    <span className="tab_count">0</span>
                  </a>
                  <a className="nav-link" id="following-tab" data-toggle="tab" href="#following" role="tab" aria-controls="following" aria-selected="false">
                    <div className="tab_head">Following</div>
                    <span className="tab_count">20</span>
                  </a>
                  <a className="nav-link" id="followers-tab" data-toggle="tab" href="#followers" role="tab" aria-controls="followers" aria-selected="false">
                    <div className="tab_head">Followers</div>
                    <span className="tab_count">15</span>
                  </a>
                </div>
              </nav>
              <div className="tab-content explore_tab_content mt-2" id="nav-tabContent">
                <div className="tab-pane fade show active" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
                  <div class="main__carousel-wrap">
            <div class="main__carousel main__carousel--live owl-carousel" id="live">
              <Slider {...settingsLiveAuction}>
                <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover1.jpg")} alt="" />
                  <span class="card__time">15 minutes left</span>
                </a>
                <h3 class="card__title"><a href="#">Walking on Air</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar5.jpg")} alt="" />
                  <a href="author.html">@nickname</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>4.89 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>189</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover2.jpg")} alt="" />
                  <span class="card__time card__time--clock">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                    15 minutes left
                  </span>
                </a>
                <h3 class="card__title"><a href="item.html">Les Immortels, the Treachery of Artificial Shadows</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar3.jpg")} alt="" />
                  <a href="author.html">@neo</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>2.61 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>702</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="#modal-asset" class="card__cover open-modal">
                  <img src={require("../assets/images/cover/cover3.jpg")} alt="" />
                  <span class="card__time">an hour left</span>
                </a>
                <h3 class="card__title"><a href="#modal-asset" class="open-modal">Flowers in Concrete (Modal)</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar15.jpg")} alt="" />
                  <a href="author.html">@min1max</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>3.19 ETH</span>
                  </div>
                  
                  <button class="card__likes card__likes--active" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>37</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover4.jpg")} alt="" />
                  <span class="card__time card__time--clock">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                    15 minutes left
                  </span>
                </a>
                <h3 class="card__title"><a href="item.html">Industrial Revolution</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar11.jpg")} alt="" />
                  <a href="author.html">@midinh</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>1.11 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>23</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover5.jpg")} alt="" />
                  <span class="card__time">15 minutes left</span>
                </a>
                <h3 class="card__title"><a href="item.html">I Love You</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar10.jpg")} alt="" />
                  <a href="author.html">@nicky87</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>0.99 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>358</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover card__cover--video">
                  <img src={require("../assets/images/cover/cover6.jpg")} alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/></svg>
                  <span class="card__time">an hour left</span>
                </a>
                <h3 class="card__title"><a href="item.html">Walking on Air</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                  <a href="author.html">@redalert</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>1.63 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>90</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div class="card mb-0">
                <a href="#modal-asset" class="card__cover open-modal">
                  <img src={require("../assets/images/cover/cover7.jpg")} alt="" />
                  <span class="card__time">an hour left</span>
                </a>
                <h3 class="card__title"><a href="#modal-asset" class="open-modal">Tranquility (Modal)</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar.jpg")} alt="" />
                  <a href="author.html">@aaarthur</a>
                </div>
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>2.55 ETH</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>64</span>
                  </button>
                </div>
              </div>
            </div>
               </Slider>
            </div>
          </div>
                </div>
                <div className="tab-pane fade" id="collectibles" role="tabpanel" aria-labelledby="collectibles-tab">
                  <div className="proposal_panel_overall">
                    <div className="text-center py-5">
                      <p className="not_found_text">No items found</p>
                      <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                      <div className="mt-3">
                        <Button className="create_btn">Browse Marketplace</Button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="created" role="tabpanel" aria-labelledby="created-tab">
                  <div className="proposal_panel_overall">
                    <div className="text-center py-5">
                      <p className="not_found_text">No items found</p>
                      <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                      <div className="mt-3">
                        <Button className="create_btn">Browse Marketplace</Button>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="tab-pane fade" id="liked" role="tabpanel" aria-labelledby="liked-tab">
                  <div className="proposal_panel_overall">
                    <div className="text-center py-5">
                      <p className="not_found_text">No items found</p>
                      <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                      <div className="mt-3">
                        <Button className="create_btn">Browse Marketplace</Button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                  <div className="proposal_panel_overall">
                    <div className="text-center py-5">
                      <p className="not_found_text">No items found</p>
                      <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                      <div className="mt-3">
                        <Button className="create_btn">Browse Marketplace</Button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                  <div className="proposal_panel_overall">
                    <div className="text-center py-5">
                      <p className="not_found_text">No items found</p>
                      <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                      <div className="mt-3">
                        <Button className="create_btn">Browse Marketplace</Button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                  <div className="proposal_panel_overall">
                    {/* <div className="text-center py-5">
                  <p className="not_found_text">No items found</p>
                  <p className="not_found_text_sub">Explore the marketplace for your first NFT or subscribe for free drop notifications</p>
                  <div className="mt-3">
                  <Button className="create_btn">Browse Marketplace</Button>
                </div>             
                </div> */}
                    <div className="followers_overall py-5">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-4">
                          <div className="card my-0">
                            <div className="card-body w-100">
                              <div className="media follow_media">
                                <img src={require("../assets/images/avatars/avatar.jpg")} alt="" className="img-fluid mr-3" />
                                <div className="media-body flex_body">
                                  <div>
                                    <p className="mt-0 media_num mb-0">452 followers</p>
                                    <p className="mt-0 media_text">ThePop</p>
                                  </div>
                                  <div className="ml-2">
                                    <Button className="create_btn">Follow</Button>
                                  </div>
                                </div>
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
          </GridContainer>
        </div>
      </div>
      <Footer />


      {/* edit_cover Modal */}
      <div class="modal fade primary_modal" id="edit_cover_modal" tabindex="-1" role="dialog" aria-labelledby="edit_cover_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="edit_cover_modalLabel_1">Update cover</h5>
              <h5 class="modal-title d-none" id="edit_cover_modalLabel_2">Follow Steps</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="update_cover_div_1" id="update_cover_div_1">
                <p className="mt-0 approve_desc text-center mb-4">Upload new cover for your profile page. We recommended to upload images in 1140×260 resolution</p>
                <form className="text-center">
                  <div className="file_btn btn primary_btn">Choose image
                    <input className="inp_file" type="file" name="file" />
                  </div>
                </form>
              </div>
              <div className="update_cover_div_2 d-none" id="update_cover_div_2">
                <div className="media approve_media">
                  {/* <i className="fas fa-check mr-3 pro_complete" aria-hidden="true"></i> */}
                  <i class="fa fa-spinner mr-3 spinner_icon" aria-hidden="true"></i>
                  <div className="media-body">
                    <p className="mt-0 approve_text">Preferences</p>
                    <p className="mt-0 approve_desc">Updating cover</p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button className="btn_outline_red btn-block">Inprogress</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end edit_cover modal */}

      {/* Put Sale Modal */}
      <div class="modal fade primary_modal" id="put_sale_modal" tabindex="-1" role="dialog" aria-labelledby="put_sale_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content" id="hide"  >
            <div class="modal-header text-center">
              <h5 class="modal-title" id="put_sale_modalLabel_1">Put on Sale</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="update_cover_div_2" id="update_cover_div_2">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="input_group">
                        <input type="text" className="primary_inp form-control" id="price" name="price" placeholder="Enter price for one piece"/>
                        <select class="custom-select select_menu choose_price form-control">
                          <option selected>BNB</option>
                          <option>ETH</option>
                        </select>
                        </div>
                      <p class="form_note mb-0">Service fee <span className="text-dark">2.5%</span></p>
                      <p class="form_note mb-0">You will receive <span className="text-dark">0 ETH</span> $0.00</p>
                    </div>
                  </div>
                </form>
                <div className="text-center my-3">
                  <Button className="btn_outline_red btn-block" data-dismiss="modal" data-toggle="modal" data-target="#follow_steps_modal">Next Step</Button>
                  <Button className="btn_outline_red btn-block" data-dismiss="modal">Cancel</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Put Sale modal */}


      {/* Following Steps Modal */}
      <div class="modal fade primary_modal" id="follow_steps_modal" tabindex="-1" role="dialog" aria-labelledby="follow_steps_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content" id="hide"  >
            <div class="modal-header text-center">
              <h5 class="modal-title" id="follow_steps_modalLabel_1">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="update_cover_div_2" id="update_cover_div_2">
                <div className="media approve_media">
                  {/* <i className="fas fa-check mr-3 pro_complete" aria-hidden="true"></i> */}
                  <i class="fa fa-spinner mr-3 spinner_icon" aria-hidden="true"></i>
                  <div className="media-body">
                    <p className="mt-0 approve_text">Sign Sell Order</p>
                    <p className="mt-0 approve_desc">Sign sell order using your wallet</p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button className="btn_outline_red btn-block">Follow Wallet Instructions</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Following Steps modal */}


    </div>
  );
}
