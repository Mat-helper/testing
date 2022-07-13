import React, { useEffect,useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinksAfterLogin from "components/Header/HeaderLinksAfterLogin.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";
import {login,userdetail} from "../actions/e-p-axios";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function EditProfile(props) {
  const classes = useStyles();
  const [username , setUsername] =useState('')
  const [password , setPassword]=useState('')
  const [cookies, setCookie,removeCookie] = useCookies(['user']);
  const [card , setCard] = useState([])
  const { ...rest } = props;
  const onChange=(e)=>{
    console.log(e);
  switch(e.target.name)
  {
    case 'username':
     
      setUsername(e.target.value)                                                                                                                                                    
      
      break;
    case 'password':
      setPassword(e.target.value)
      console.log(e.target.value);
      break;
   
  }
}
// export const clearcookie = async() => {
//   removeCookie("username");
//   history.push({
//     // pathname: '/edit-profile',
//     pathname:'/log_in',
//     // state: {cardData:data.data}
// }); 
// }
let history = useHistory();
let log=async()=>{
    let pay_load={
      username:username,
      password:password,
     }
    //  setCookie('username',username);
     localStorage.setItem('username',username);
    console.log("payload data>>>>>>>>>>  >>>>",pay_load);
    var assign  = await login(pay_load);
    
    console.log("aaa",assign.data.data);
    // if(assign.data.data?.username == username){
    //   // setCookie('username',username);
    //   // var date = new Date();
    //   // date.setTime(date.getTime() + (30 * 1000));
      
    //   // document.cookie="name="+username+";expires="+date.toGMTString();  
    // }
    var data=assign;
    
    history.push({
      // pathname: '/edit-profile',
      pathname:'/create-single',
      // state: {cardData:data.data}
  }); 
    //  setCard(data);
    //  await  someEventHandler();
 
}
// let history = useHistory();

//     const someEventHandler = event => {
//       console.log("logincard", card);
//        history.push({
//            pathname: '/edit-profile',
          
//            state: {cardData:card}
//        });
      
//     };
    //useEffect(()=>{userdetail()},[]);

  
  return (
    <div className="inner_header">
      <Header
        fixed
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid"/>}
        rightLinks={<HeaderLinksAfterLogin />}
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
                <h2 className="inner_title">Login</h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container">
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              
              
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">User Name</label>
                    <input type="text" className="form-control primary_inp" id="name" name="username" placeholder="Enter your user name"  onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Password</label>
                    <input type="password" className="form-control primary_inp" id="desccription" name="password" placeholder="Enter your password"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>

                
                <div className="mt-3">
                  <Button className="create_btn" onClick={log}>Login</Button>
                </div>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
