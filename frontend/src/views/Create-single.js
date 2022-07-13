import React, { useCallback, useEffect, useState  } from "react";

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
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { create } from "nouislider";
import {create1,randomimg} from "../actions/e-p-axios";
import { useCookies } from 'react-cookie';
// import {clearcookie} from './log_in';
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function CreateSingle(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [token,setToken] = useState(10);
  const [price,setPrice] = useState(10);
  const [tknname,setTknname] = useState('');
  const [username,setUsername] = useState(localStorage.username);
  const [total,setTotal] = useState('');
  const [cookies, setCookie,removeCookie] = useCookies(['user']);
  const [cookie_exp,setCookie_exp]  = useState(document.cookie)
  // useEffect(()=>{
  //   console.log("useeffect",document.visibilityState);
  //    if(!document.cookie){
  //     console.log("cookies", document.cookie.length);
  //     history.push({
  //       pathname:'/log_in',
  //   });}
    
  // },[document.cookie]);
 
  // useEffect(()=>{
  //    let handle;
  //    setCookie_exp(document.cookie)
  //    handle = setInterval(() => {
  //      if(!cookie_exp)
  //      {
  //        history.push('/login')
  //      }
  //    }, 2000);
  //    if(!cookie_exp)clearInterval(handle)
  //   return()=>{ if(!cookie_exp)clearInterval(handle)}
  // },[cookie_exp]);
  const onChange  = useCallback((e)=>
  {
    console.log(e);
  switch(e.target.name)
  {
    case 'username':
      setUsername(e.target.value)                                                                                                                                                    
      break;
    case 'tknname':
      setTknname(e.target.value)
      console.log(e.target.value);
      break;
    case 'token':
       setToken(e.target.value)
       console.log(e.target.value);
       break;
    case 'price':
       setPrice(e.target.value)
       console.log(e.target.value);
       break;
    case 'total':
       setTotal(e.target.value)
       console.log(e.target.value);
       break;
  }
},[token,username,total,price])
 let history = useHistory();
let log=async()=>{
  let pay_load={
    username:username,
    tknname:tknname,
    token:token,
    price:price,
    total:token*price
   }
   
  console.log("payload data>>>>>>>>>>  >>>>",pay_load);
  var assign  = await create1(pay_load);
  console.log("aaa",assign.data.data.data);
  // let randomimgdata = await randomimg();
  // console.log("randomimage",randomimgdata.data.data.data[0].image)
//   let files=[];
  
//   for(let i=0;i<token;i++){
//   let randomImage = randomimgdata.data.data.data[0].image[Math.floor(Math.random() *(randomimgdata.data.data.data[0].image.length))];
//   files.push(randomImage);  
// }
  if(assign.data.data.sucess =='sucess'){
  history.push({
    pathname: '/home',
     
    //  state: {cardData:assign.data.data.data}
});
  }
}
const clearcookie = async() => {
  // removeCookie("username");
  // let cookie = document.cookie;
  // document.cookie = cookie +";max-age=0";  
   if(document.cookie.length == 0){
  history.push({
    // pathname: '/edit-profile',
    pathname:'/log_in',
    // state: {cardData:data.data}
}); 
}}
  return (
    <div className="inner_header">
      <Header
        fixed
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid"/>}
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...rest}
      />
      <ScrollToTopOnMount/>
      <div className={classes.pageHeader + " inner_pageheader"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="d-flex align-items-center">
                <Link to="/home">
                  <img src={require("../assets/images/arrow_icon.png")} alt="logo" className="arrow_icon"/>
                </Link>
                <h2 className="inner_title">Create Single NFT</h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container">
          <GridContainer>
          
            <GridItem xs={12} sm={8} md={9}>
              <form>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">User Name</label>
                    <input type="text" className="form-control primary_inp" value={username}
                    name="username" onChange={(e)=>onChange(e)} id="name" placeholder="e.g. Redeemable" readOnly={true}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">Token name</label>
                    <input type="text" className="form-control primary_inp" id="name"
                    name="tknname" onChange={(e)=>onChange(e)} placeholder="e.g. Redeemable"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">No Of Tokens</label>
                    <input type="text" className="form-control primary_inp" id="name" 
                    name="token" value={token} onChange={(e)=>onChange(e)} placeholder="e.g. Redeemable"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Price <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control primary_inp" id="desccription" value={price} defaultValue="10"
                    name="price"  onChange={(e)=>onChange(e)} placeholder="e.g. After purchasing..."/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Total <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control primary_inp" id="desccription" name="total"
                    value={price*token}  onChange={(e)=>onChange(e)} placeholder="e.g. After purchasing..."/>
                  </div>
                </div>

                
                <div>
                  <Button className="create_btn" onClick={log} data-toggle="modal" data-target="#create_item_modal">Create item</Button><br></br><br></br><br></br>
                </div>
                <Button className="create_btn" onClick={clearcookie} data-toggle="modal" data-target="#create_item_modal">log out</Button>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer/>

      {/* Choose Collection Modal */}
      {/* <div class="modal fade primary_modal" id="choose_collection_modal" tabindex="-1" role="dialog" aria-labelledby="choose_collection_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="choose_collection_modalLabel">Collection</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="d-flex align-items-center">
                <div class="hex center">
                  <div class="hex__shape">
                    <div class="hex__shape">
                      <div class="hex__shape">
                        <img src={require("../assets/images/img_01.png")} alt="logo" className="img-fluid"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font_16 font_600 line_20 mb-1">We recommend an image of at least 400x400. Gifs work too.</p>
                  <div className="file_btn primary_btn d-inline-block">Choose File
                    <input className="inp_file" type="file" name="file"/>
                  </div>
                </div>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label className="primary_label" htmlFor="name">Display Name <span className="text-muted">(30 available)</span></label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Enter token name"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label className="primary_label" htmlFor="desccription">Symbol <span className="text-muted">(required)</span></label>
                    <input type="text" className="form-control primary_inp" id="desccription" placeholder="Enter token symbol"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label className="primary_label" htmlFor="name">Description <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Spread some words about token collection"/>                  
                  </div>
                  <div className="form-group col-md-12">
                    <label className="primary_label" htmlFor="desccription">Short url</label>
                    <input type="text" className="form-control primary_inp" id="desccription" defaultValue="Ultrasafe.io/"/>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="create_btn">Create Collection</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* Create Item Modal */}
      <div class="modal fade primary_modal" id="create_item_modal" tabindex="-1" role="dialog" aria-labelledby="create_item_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            {/* <div class="modal-header text-center">
              <h5 class="modal-title" id="create_item_modalLabel">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> */}
            {/* <div class="modal-body">                         
              <form> 
              <div className="media approve_media">
              <i className="fas fa-check mr-3 pro_complete" aria-hidden="true"></i>
              {/* <i class="fa fa-spinner mr-3 spinner_icon" aria-hidden="true"></i> */}
              {/* <div className="media-body">
                <p className="mt-0 approve_text">Approve</p> 
                <p className="mt-0 approve_desc">Approve performing transactions with your wallet</p>
              </div>
            </div>
              <div className="text-center my-3">
              <Button className="btn_outline_red btn-block">Done</Button>                
              </div>
              <div className="media approve_media">
              <i className="fas fa-check mr-3" aria-hidden="true"></i>
              <div className="media-body">
                <p className="mt-0 approve_text">Upload files & Mint token</p> 
                <p className="mt-0 approve_desc">Call contract method</p>
              </div>
            </div>
              <div className="text-center my-3">
              <Button className="create_btn btn-block">Start</Button>                
              </div>

              <div className="media approve_media">
              <i className="fas fa-check mr-3" aria-hidden="true"></i>
              <div className="media-body">
                <p className="mt-0 approve_text">Sign sell order</p> 
                <p className="mt-0 approve_desc">Sign sell order using tour wallet</p>
              </div>
            </div>
              <div className="text-center my-3">
              <Button className="create_btn btn-block" disabled>Start</Button>                
              </div>

              <div className="media approve_media">
              <i className="fas fa-check mr-3" aria-hidden="true"></i>
              <div className="media-body">
                <p className="mt-0 approve_text">Sign lock order</p> 
                <p className="mt-0 approve_desc">Sign lock order using tour wallet</p>
              </div>
            </div>
              <div className="text-center mt-3">
              <Button className="create_btn btn-block" disabled>Start</Button>                
              </div>
              </form>
            </div> */} 
          </div>
        </div>
        </div>

    </div>
  );
}
