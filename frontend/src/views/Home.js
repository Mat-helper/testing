import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CountUp from 'react-countup';
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Button } from "@material-ui/core";

import Countdown, { zeroPad } from "react-countdown";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

// Slick Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {randomimg} from '../actions/e-p-axios';

const dashboardRoutes = [];
const backend="http://localhost:2001/image/"
const useStyles = makeStyles(styles);
// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
export default function Home(props) {
  const [randomdata , setRandomdata]= useState([]);
  const [fol_name, setFol_name] = useState('');
  let  location=useLocation();
  // let fol_name;
  useEffect(()=>{
    async function fetchdata(){
      let userdata = await randomimg();
      console.log("retrive db",userdata.data.data.data);
      setRandomdata(userdata.data.data.data);
      // console.log("card data",randomdata);
      }
      fetchdata();
    //  console.log("location",)
    //  if(location && location.state && location.state.cardData)
    //  {
    //   setRandomdata(location.state.cardData.images);
    //  }
    //    async function fetchdata(){
           
    //        let randomimgdata = await randomimg();
    //        console.log("userdata",randomimgdata.data.data.data[0].image);
    //         setRandomdata(randomimgdata.data.data.data[0].image)
    //        }
    //         await fetchdata();
    //         // await initialdata(randomdata);
    //         console.log("random data",randomdata)
     
       
           
  },[]);
  // let  location=useLocation();
  // const initialdata=()=>{
  //   if(location.state.cardData){
  //   // console.log("location1",location)
  //    const randomImage = randomdata[Math.floor(Math.random() *location.state.cardData)];
  //    console.log("randomimage",randomImage)
  //   }
  // }
  //  return null;

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
  var settingsHotCollection = {
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
    <div className="home_header">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 20,
          color: "white"
        }}
        {...rest}
      />
      <ScrollToTopOnMount />
      <section className="homeBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="homeDetails">
                <h2>ORE FORGE <small> - Next Gen NFT</small></h2>
                <p>Digital marketplace for Next-Gen crypto collectibles and non-fungible tokens. Buy, sell, and discover exclusive in-game digital assets.</p>
                <div className="homeBannerButton">
                  <a href="" className="btn btnRedButton">EXPLORE</a>
                  <a href="" className="btn btnyellowButton">CREATE</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="homeBannerImage text-right">
                <img src={require("../assets/images/bannerImg.png")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="homeMain">
      <section className="liveAuction">
        <div className="container">
        <div className="row row--grid">
        <div class="col-12">
          <div class="main__title">
            <h2>Live auctions</h2>
          </div>
        </div>
        <div class="col-12">
          <div class="main__carousel-wrap">
            <div class="main__carousel main__carousel--live owl-carousel" id="live">
              <Slider {...settingsLiveAuction}>
              {randomdata.map((c,i)=>{
                 
                //  setFol_name(fol[0]);
                //  console.log("folder name 1",fol_name);
                console.log("map data",c)
                return(
                <div className="px-3">
              <div class="card mb-0">
                <a href="item.html" class="card__cover">
                 { c.images.map((img,j)=>{
                   let fol = (img.name).split("_"); 
                   console.log("folder name",img);
                   return(
                <img src={backend+fol[0]+"/"+img.name} alt="" />)})}
                  {/* <img src={require("../assets/images/cover/cover1.jpg")} alt="" /> */}
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>189</span>
                  </button>
                </div>
              </div>
            </div>
              )}) }

            {/* <div className="px-3">
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
            </div> */}
               </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section className="liveAuction">
      {randomdata.map((c,i)=>{
              return(
               
        <div className="container">
       
      
       
          <div class="main__title">
            <h2>{c.tknname}</h2>
          </div>
      
          <div className="grid-container">
         
        { c.images.map((img,j)=>{
                
                let fol = (img.name).split("_");
                return(
                 
            <div class="main__carousel-wrap">
            <div class="main__carousel main__carousel--live owl-carousel" id="live">
             
            {/* {randomdata.map((c,i)=>{
              return(
               c.images.map((img,j)=>{
                
                let fol = (img.name).split("_");
                return( */}
             
             
             <div class="card mb-0">
                <a href="item.html" class="card__cover">
                  <img src={backend+fol[0]+"/"+img.name} alt="" />
                
                </a>
              
                <div class="card__info">
                  <div class="card__price">
                    <span>Current price</span>
                    <span>{c.price}</span>
                  </div>
                  
                  <button class="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>702</span>
                  </button>
                </div>
              </div>
            
             
             
           
       
             
            </div>
          </div>
         
          )})}
        </div>
    
    </div> )})}
      </section>
      <section className="homeTopSellers">
       <div className="container">
        <div className="row--grid">
        
          <div class="main__title">
            <h2>Top sellers</h2>
          </div>
        
       
          <div className="topSellersBox">
            
               <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={3}>
            
                <ul class="sellers-list topSellersHighlight">
                  <li>
                    <span class="sellers-list__number">1</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar.jpg")} alt="" />
                      <a href="author.html">@miriuuu</a>
                      <span>214.22 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">2</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar2.jpg")} alt="" />
                      <a href="author.html">@sc00ty</a>
                      <span>205.8 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">3</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar3.jpg")} alt="" />
                      <a href="author.html">@redalert</a>
                      <span>137.65 ETH</span>
                    </div>
                  </li>
                </ul>
              </GridItem>


             <GridItem xs={12} sm={12} md={12} lg={9}>
                <ul class="sellers-list otherSellerList">
                  <li>
                    <span class="sellers-list__number">4</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar4.jpg")} alt="" />
                      <a href="author.html">@1one</a>
                      <span>129.301 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">5</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar5.jpg")} alt="" />
                      <a href="author.html">@kateblank</a>
                      <span>112.3 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">6</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar6.jpg")} alt="" />
                      <a href="author.html">@johndoe</a>
                      <span>108.88 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">7</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar7.jpg")} alt="" />
                      <a href="author.html">@nickname</a>
                      <span>88.58 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">8</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar8.jpg")} alt="" />
                      <a href="author.html">@lllily</a>
                      <span>73.207 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">9</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar9.jpg")} alt="" />
                      <a href="author.html">@fantraingle</a>
                      <span>71.076 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">10</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar10.jpg")} alt="" />
                      <a href="author.html">@oxyoxyoxy</a>
                      <span>57.041 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">11</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar11.jpg")} alt="" />
                      <a href="author.html">@vandam</a>
                      <span>50.261 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">12</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar12.jpg")} alt="" />
                      <a href="author.html">@dididi</a>
                      <span>44.79 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">13</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar13.jpg")} alt="" />
                      <a href="author.html">@lyzzy</a>
                      <span>43.24 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">14</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar14.jpg")} alt="" />
                      <a href="author.html">@oceanu</a>
                      <span>41.221 ETH</span>
                    </div>
                  </li>
                  <li>
                    <span class="sellers-list__number">15</span>
                    <div class="sellers-list__author sellers-list__author--verified">
                      <img src={require("../assets/images/avatars/avatar15.jpg")} alt="" />
                      <a href="author.html">@justart</a>
                      <span>40.195 ETH</span>
                    </div>
                  </li>
                </ul>
              </GridItem>
            </GridContainer>
            </div>
       
        </div>
    </div>
      </section>
     
        <section className="explore_section section pb-0">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-0">
              <div className="main__title mt-0">
                <h2 className="m-0">Explore</h2>
              </div>
              <nav className="masonry_tab_nav">
                <div className="nav nav-tabs masonry_tab" id="nav-tab" role="tablist">
                  <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                  <a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="false">Art</a>
                  <a className="nav-link" id="photography-tab" data-toggle="tab" href="#photography" role="tab" aria-controls="photography" aria-selected="false">Photography</a>
                  <a className="nav-link" id="games-tab" data-toggle="tab" href="#games" role="tab" aria-controls="games" aria-selected="false">Games</a>
                  <a className="nav-link" id="music-tab" data-toggle="tab" href="#music" role="tab" aria-controls="music" aria-selected="false">Music</a>
                  <a className="nav-link" id="domains-tab" data-toggle="tab" href="#domains" role="tab" aria-controls="domains" aria-selected="false">Domains</a>
                  <a className="nav-link" id="memes-tab" data-toggle="tab" href="#memes" role="tab" aria-controls="memes" aria-selected="false">Memes</a>
                  <a className="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Video</a>
                </div>
              </nav>
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
            <div className="tab-content explore_tab_content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <GridContainer className="w-100">
                    <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                 <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={3}>
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
                  </GridItem>
                </GridContainer>
                </div>
             
              <div className="tab-pane fade" id="art" role="tabpanel" aria-labelledby="art-tab">Art</div>
              <div className="tab-pane fade" id="photography" role="tabpanel" aria-labelledby="photography-tab">Photography</div>
              <div className="tab-pane fade" id="games" role="tabpanel" aria-labelledby="games-tab">Games</div>
              <div className="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">Music</div>
              <div className="tab-pane fade" id="domains" role="tabpanel" aria-labelledby="domains-tab">Domains</div>
              <div className="tab-pane fade" id="memes" role="tabpanel" aria-labelledby="memes-tab">Memes</div>
              <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">Video</div>
            </div>
          </div>
        </section>
      <section className="homeHotCollection">
        <div className="container">
        <div class="row row--grid">
        <div class="col-12">
          <div class="main__title">
            <h2>Hot collections</h2>
          </div>
        </div>
        <div class="col-12">
          <div class="main__carousel-wrap">
            <div class="main__carousel main__carousel--collections owl-carousel" id="collections">
              <Slider {...settingsHotCollection}>
                <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar collection__avatar--verified">
                    <img src={require("../assets/images/avatars/avatar3.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">Hashmasks</a></h3>
                  <span class="collection__number">ERC-721</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar collection__avatar--verified">
                    <img src={require("../assets/images/avatars/avatar9.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">NFTheft</a></h3>
                  <span class="collection__number">ERC-721</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar collection__avatar--verified">
                    <img src={require("../assets/images/avatars/avatar12.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">Inventory</a></h3>
                  <span class="collection__number">ERC-1155</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar">
                    <img src={require("../assets/images/avatars/avatar15.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">ProphecyNFT</a></h3>
                  <span class="collection__number">ERC-721</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar collection__avatar--verified">
                    <img src={require("../assets/images/avatars/avatar4.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">Hashavatars</a></h3>
                  <span class="collection__number">ERC-1155</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar">
                    <img src={require("../assets/images/avatars/avatar11.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">Clap Token</a></h3>
                  <span class="collection__number">ERC-1155</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-5">
              <div class="collection">
                <a href="collection.html" class="collection__cover"><img src={require("../assets/images/bg/bg-small.png")} alt="" /></a>
                <div class="collection__meta">
                  <a href="author.html" class="collection__avatar collection__avatar--verified">
                    <img src={require("../assets/images/avatars/avatar15.jpg")} alt="" />
                  </a>
                  <h3 class="collection__name"><a href="collection.html">InventoryNFT</a></h3>
                  <span class="collection__number">ERC-721</span>
                </div>
              </div>
            </div>
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
      <Footer />
    </div>
  );
}
