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



export default function Info(props) {

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
  function hideDetail() {
    document.getElementById("image_div").classList.toggle('expand_img');
    document.getElementById("img_des").classList.toggle('show_des');
    document.getElementById("detai_div").classList.toggle('hide_detail');
    document.getElementById("arrow_icon").classList.toggle('fa-shrink');

  }

  function hideDetailowner() {
    document.getElementById("image_div_owner").classList.toggle('expand_img');
    document.getElementById("img_des_owner").classList.toggle('show_des');
    document.getElementById("detai_div_owner").classList.toggle('hide_detail');
    document.getElementById("arrow_icon_owner").classList.toggle('fa-shrink');
  }
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
      <div className={classes.pageHeader + " inner_pageheader info_header"}>
       
  <main class="main">
    <div class="container">
      <div class="row row--grid">
     
        
        <div class="col-12">
          <div class="main__title main__title--page">
            <h1>Exclusive digital asset</h1>
          </div>
        </div>
        
      </div>

      <div class="row">
        
        <div class="col-12 col-xl-8">
          <div class="asset__item">
            <a class="asset__img" href="#"><img src={require("../assets/images/cover/cover-big.jpg")} alt="" /></a>

          
            <div class="share share--asset">
              <a href="#" class="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"/></svg> <span>share</span></a>
              <a href="#" class="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z"/></svg> <span>tweet</span></a>
              <a href="#" class="share__link share__link--link"><svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"/></svg> <span>copy link</span></a>
            </div>
           
            <button class="asset__likes" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
              <span>358</span>
            </button>
           
          </div>
        </div>
       
        <div class="col-12 col-xl-4">
          <div class="asset__info">
            <div class="asset__desc">
              <h2>Descriptions</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>

            <ul class="asset__authors">
              <li>
                <span>Creator</span>
                <div class="asset__author asset__author--verified">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
                </div>
              </li>
              <li>
                <span>Collection</span>
                <div class="asset__author ">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="collection.html">The Meta Key</a>
                </div>
              </li>
            </ul>

            
            <ul class="nav nav-tabs asset__tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">History</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Bids</a>
              </li>


              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Details</a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
                <div class="asset__actions asset__actions--scroll" id="asset__actions--scroll">
                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>11.00 ETH</b> 4 hours ago <br />by <a href="#">@erikkk</a></p>
                  </div>

                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>10.00 ETH</b> 5 hours ago <br />by <a href="#">@johndoe</a></p>
                  </div>

                  

                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>2.2799 ETH</b> 6 hours ago <br />by <a href="#">@johndoe</a></p>
                  </div>

                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Put on sale for <b>0.55 ETH</b> 1 days ago <br />by <a href="#">@midinh</a></p>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="tab-2" role="tabpanel">
                <div class="asset__actions">
                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>11.00 ETH</b> 4 hours ago <br />by <a href="#">@erikkk</a></p>
                  </div>

                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>10.00 ETH</b> 5 hours ago <br />by <a href="#">@johndoe</a></p>
                  </div>

                  <div class="asset__action asset__action--verified">
                    <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                    <p>Bid placed for <b>2.508 ETH</b> 5 hours ago <br />by <a href="#">@n1ckname</a></p>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="tab-3" role="tabpanel">
                <ul class="asset__authors asset__authors--tab">
                  <li>
                    <span>Owner</span>
                    <div class="asset__author asset__author--verified">
                      <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                      <a href="#">@midinh</a>
                    </div>
                  </li>
                  <li>
                    <span>Year created</span>
                    <p>2021</p>
                  </li>
                </ul>
              </div>
            </div>
           
            <div class="asset__btns">
              <button class="asset__btn asset__btn--clr" type="button">Buy - 3.19 ETH</button>

              <a href="#modal-bid" class="asset__btn open-modal">Place a bid</a>
            </div>
            
          </div>
        </div>
       
      </div>

      
      <section class="row row--grid">
        
        <div class="col-12">
          <div class="main__title main__title--border-top">
            <h2><a href="explore.html">Other author assets</a></h2>
          </div>
        </div>
        
        <div class="col-12">
          <div class="main__carousel-wrap">
            <div class="main__carousel main__carousel--explore owl-carousel" id="explore">
              <Slider {...settingsLiveAuction}>
              <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover2.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">Walking on Air</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
             <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover2.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">Les Immortels, the Treachery of Artificial Shadows</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
              <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover3.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">Flowers in Concrete</a></h3>
                <div class="card__author">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
              <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover4.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">Industrial Revolution</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
              <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover5.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">I Love You</a></h3>
                <div class="card__author card__author--verified">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
             <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover card__cover--video">
                  <img src={require("../assets/images/cover/cover6.jpg")} alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/></svg>
                </a>
                <h3 class="card__title"><a href="item.html">Walking on Air</a></h3>
                <div class="card__author">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
              <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={require("../assets/images/cover/cover7.jpg")} alt="" />
                </a>
                <h3 class="card__title"><a href="item.html">Tranquility</a></h3>
                <div class="card__author">
                  <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                  <a href="#">@midinh</a>
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
            </Slider>
            </div>
          </div>
        </div>
        
      </section>
      
    </div>
  </main>
  
      </div>
      <Footer />
      {/* buy Modal */}
      <div class="modal fade primary_modal" id="buy_modal" tabindex="-1" role="dialog" aria-labelledby="buy_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="buy_modalLabel">Checkout</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row mx-0 bor_bot_modal">
                <div className="col-12 col-md-12 p-0">
                  <p className="buy_title_sm">Seller</p>
                  <p className="buy_title_md">Uniaqua</p>
                </div>
                <div className="col-12 col-md-12 p-0">
                  <p className="buy_title_sm">Buyer</p>
                  <p className="buy_title_md short_address">0x75Cf28f29266A413eC878CE5C4a1c9682C819586</p>
                </div>
              </div>
              <div className="bor_bot_modal mb-3">
                <p className="buy_title_md px-4 py-3 text-center mb-0">1.01 ETH</p>
              </div>
              <div className="row mx-0 pb-3">
                <div className="col-12 col-sm-6 p-0">
                  <p className="buy_desc_sm">Your balance</p>
                </div>
                <div className="col-12 col-sm-6 p-0 text-sm-right">
                  <p className="buy_desc_sm_bold">10.25 ETH</p>
                </div>
              </div>
              <div className="row mx-0 pb-3">
                <div className="col-12 col-sm-6 p-0">
                  <p className="buy_desc_sm">Service fee</p>
                </div>
                <div className="col-12 col-sm-6 p-0 text-sm-right">
                  <p className="buy_desc_sm_bold">0.012 ETH</p>
                </div>
              </div>
              <div className="row mx-0 pb-3">
                <div className="col-12 col-sm-6 p-0">
                  <p className="buy_desc_sm">You will pay</p>
                </div>
                <div className="col-12 col-sm-6 p-0 text-sm-right">
                  <p className="buy_desc_sm_bold">1.112 ETH</p>
                </div>
              </div>
              <form className="p-0">
                <div className="text-center">
                  <Button className="create_btn btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_modal">Proceed to payment</Button>
                  <Button className="btn_outline_red btn-block" data-dismiss="modal" aria-label="Close">Cancel</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end buy modal */}

      {/* proceed Modal */}
      <div class="modal fade primary_modal" id="proceed_modal" tabindex="-1" role="dialog" aria-labelledby="proceed_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="proceed_modalLabel">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <p className="mt-0 purchase_text text-center">Purchase</p>
                <p className="mt-0 purchase_desc text-center">Send transaction with your wallet</p>

                <div className="text-center my-3">
                  <Button className="btn_outline_red btn-block">Inprogress</Button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end proceed modal */}

      {/* place_bid Modal */}
      <div class="modal fade primary_modal" id="place_bid_modal" tabindex="-1" role="dialog" aria-labelledby="place_bid_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="place_bid_modalLabel">Place a bid</h5>
              <p className="text-center place_bit_desc">You are about to place a bid for</p>
              <p className="place_bit_desc_2"><span className="text_red mr-2">Uniaqua</span>by<span className="text_red ml-2">NFTbuyer</span></p>


              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="bid_form">
                <label for="bid">Your bid</label>
                <div class="input-group mb-3 input_grp_style_1">
                  <input type="text" id="bid" class="form-control" placeholder="Enter your display name" aria-label="bid" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">ETH</span>
                  </div>
                </div>

                {/* <label for="qty">Enter quantity <span className="label_muted pl-2">(30 available)</span></label>
            <div class="mb-3 input_grp_style_1">
          <input type="text" id="qty" class="form-control" placeholder="1"  />
         
        </div> */}
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Your balance</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">10.25 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Your bidding balance</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">0.012 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Service fee</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">1.112 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">You will pay</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">1.112 ETH</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="create_btn btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_bid_modal">Place a bid</Button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end place_bid modal */}


      {/* place_bid multiple */}
      <div class="modal fade primary_modal" id="place_bid_multiple_modal" tabindex="-1" role="dialog" aria-labelledby="place_bid_multiple_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="place_bid_multiple_modalLabel">Place a bid</h5>
              <p className="text-center place_bit_desc">You are about to place a bid for</p>
              <p className="place_bit_desc_2"><span className="text_red mr-2">Uniaqua</span>by<span className="text_red ml-2">NFTbuyer</span></p>


              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="px-4 bid_form">
                <label for="bid">Your bid</label>
                <div class="input-group mb-3 input_grp_style_1">
                  <input type="text" id="bid" class="form-control" placeholder="Enter your display name" aria-label="bid" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">ETH</span>
                  </div>
                </div>

                <label for="qty">Enter quantity <span className="label_muted pl-2">(30 available)</span></label>
                <div class="mb-3 input_grp_style_1">
                  <input type="text" id="qty" class="form-control" placeholder="1" />

                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Your balance</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">10.25 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Your bidding balance</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">0.012 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">Service fee</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">1.112 ETH</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-12 col-sm-6">
                    <p className="buy_desc_sm">You will pay</p>
                  </div>
                  <div className="col-12 col-sm-6 text-sm-right">
                    <p className="buy_desc_sm_bold">1.112 ETH</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="create_btn btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_bid_modal">Place a bid</Button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end place_bid modal multiple */}

      {/* proceed_bid Modal */}
      <div class="modal fade primary_modal" id="proceed_bid_modal" tabindex="-1" role="dialog" aria-labelledby="proceed_bid_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="proceed_bid_modalLabel">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="media approve_media">
                  <i className="fas fa-check mr-3 pro_complete" aria-hidden="true"></i>
                  {/* <i class="fa fa-spinner mr-3 spinner_icon" aria-hidden="true"></i> */}
                  <div className="media-body">
                    <p className="mt-0 approve_text">Approve</p>
                    <p className="mt-0 approve_desc">Checking balance and approving</p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button className="btn_outline_red btn-block">Done</Button>
                </div>
                <div className="media approve_media">
                  <i className="fas fa-check mr-3" aria-hidden="true"></i>
                  <div className="media-body">
                    <p className="mt-0 approve_text">Signature</p>
                    <p className="mt-0 approve_desc">Create a signatute to place a bid</p>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Button className="create_btn btn-block" disabled>Start</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end proceed_bid modal */}

      {/* accept bid Modal */}
      <div class="modal fade primary_modal" id="accept_modal" tabindex="-1" role="dialog" aria-labelledby="accept_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="accept_modalLabel">Accept bid</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="img_accept text-center">
                <img src={require("../assets/images/img_info.png")} alt="Collections" className="img-fluid" />
              </div>
              <p className="text-center accept_desc">
                <span className="buy_desc_sm">You are about to accept bid for</span>
                <span className="buy_desc_sm_bold pl-2">Uniaqua</span>
                <span className="buy_desc_sm pl-2">from</span>
                <span className="buy_desc_sm_bold pl-2 short_address m-auto d-block">0x75Cf28f29266A413eC878CE5C4a1c9682C819586</span>
              </p>
              <p className="info_title text-center">0 ETH for 1 edition(s)</p>


              <div className="row mx-0 pb-3">
                <div className="col-12 col-sm-6 px-4">
                  <p className="buy_desc_sm">Service fee</p>
                </div>
                <div className="col-12 col-sm-6 px-4 text-sm-right">
                  <p className="buy_desc_sm_bold">0.012 ETH</p>
                </div>
              </div>
              <div className="row mx-0 pb-3">
                <div className="col-12 col-sm-6 px-4">
                  <p className="buy_desc_sm">You will get</p>
                </div>
                <div className="col-12 col-sm-6 px-4 text-sm-right">
                  <p className="buy_desc_sm_bold">1.112 ETH</p>
                </div>
              </div>
              <form className="px-4">
                <div className="text-center">
                  <Button className="create_btn btn-block" data-dismiss="modal" aria-label="Close">Accept bid</Button>
                  <Button className="btn_outline_red btn-block" data-dismiss="modal" aria-label="Close">Cancel</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end accept bid modal */}
    </div>
  );
}
