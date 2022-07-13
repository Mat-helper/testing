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
import {submit} from "../actions/e-p-axios";
import {loaddetail} from "../actions/e-p-axios";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const backend="http://localhost:2001/image/";
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
  const [display_Name , setDisplay_Name] =useState('')
  const [custom_Url , setCustom_Url]=useState('')
  const [email,setEmail]=useState('')
  const [portfolio,setPortfolio]=useState('')
  const [bio,setBio]=useState('')
  const [selectedFile, setSelectedFile] = useState('');
  const [twitter, setTwitter]=useState('');
  const [facebook, setFacebook]=useState('');
  const [instagram, setInstagram]=useState('');
  const [youtube, setYoutube]=useState('');
  const [username, setUsername]=useState('');
  const [blob,setBlob]=useState('');
  const [password, setPassword]=useState('');
  const { ...rest } = props;
  let  location=useLocation();
  useEffect(()=>{
    if(location && location.state && location.state.cardData && location.state.cardData.display_Name)
    {
    console.log("location",location.state.cardData);
    initialfinddata({_id:location.state.cardData._id});
    
    
    console.log("carddata",location.state.cardData);
    }
  },[]);
  const onChange=(e)=>{
    console.log(e);
  switch(e.target.name)
  {
    case 'selectedFile':
      console.log("file...",e.target.files[0]);
      setSelectedFile(e.target.files[0])  
      if (e.target.files && e.target.files[0]) {
        setBlob({
          image: URL.createObjectURL(e.target.files[0])
        });
      }                                                                                                                                                  
       console.log(e.target.files[0]);
      break;
    case 'display_Name':
      setDisplay_Name(e.target.value)
      console.log(e.target.value);
      break;
    case 'custom_Url':
      setCustom_Url(e.target.value)
      console.log(e.target.value);
      break;
    case 'email':
      setEmail(e.target.value)
      console.log(e.target.value); 
      break; 
    case 'portfolio':
      setPortfolio(e.target.value)
      console.log(e.target.value);
      break;
    case 'bio':
      setBio(e.target.value)
      console.log(e.target.value);  
      break;  
    case 'twitter':
      setTwitter(e.target.value);
      break;
    case 'facebook':
      setFacebook(e.target.value);
      break;
    case 'instagram':
      setInstagram(e.target.value);
       break;
    case 'youtube':
      setYoutube(e.target.value);
      break;
    case 'username':
      setUsername(e.target.value);
       break;
    case 'password':
      setPassword(e.target.value);
      break;
  }
}
let formadd=async()=>{
    let payload={
      display_Name:display_Name,
      custom_Url:custom_Url,
      portfolio:portfolio,
      email:email,
      selectedFile:selectedFile,
      bio:bio,
      twitter:twitter,
      facebook:facebook,
      instagram:instagram,
      youtube:youtube,
      username:username,
      password:password
    }
    console.log("payload data>>>>>>>>>>  >>>>",payload,selectedFile);
    var reloaddata = await submit(payload);
    // console.log("reloaddata",reloaddata.data.data.data.display_Name);
    if(reloaddata && reloaddata.data && reloaddata.data.data && reloaddata.data.data.data &&  reloaddata.data.data.data.display_Name)
    {
       
      console.log("reloaddata",reloaddata.data.data.data);
      setDisplay_Name(reloaddata.data.data.data.display_Name);
      setCustom_Url(reloaddata.data.data.data.custom_Url);
      setEmail( reloaddata.data.data.data.email);
      setPortfolio(reloaddata.data.data.data.portfolio);
      setBio(reloaddata.data.data.data.bio);
      setTwitter(reloaddata.data.data.data.twitter);
      setFacebook(reloaddata.data.data.data.facebook);
      setInstagram(reloaddata.data.data.data.instagram);
      setYoutube(reloaddata.data.data.data.youtube);
      setUsername(reloaddata.data.data.data.username);
      setPassword(reloaddata.data.data.data.password);
      setSelectedFile(backend+reloaddata.data.data.data.selectedFile);
      
    }
  //   var formdata=new FormData()

  //   formdata.append('selectedFile',selectedfile)
  //   formdata.append('display_Name',displayname)
  //   formdata.append('custom_Url',customurl)
  //   formdata.append('portfolio',portfolio)
  //   formdata.append('email',email)
  //   formdata.append('bio',bio)
  //   formdata.append('twitter',twitter)
  //   formdata.append('facebook',facebook)
  //   formdata.append('instagram',instagram)
  //   formdata.append('youtube',youtube)
  //   const config={
  //     headers:{
  //     'content-type':'multipart/form-data'
  //   }
  // }
  // console.log(formdata);
  // axios.post("http://localhost:2030/v1/save",formdata,config)
  // .then((data)=>console.log("data success>>>",data))
  // .catch((e)=>console.log("error>>>",e))
 
}
const initialfinddata=async (id)=>{
 
 var l= await loaddetail(id);
 console.log("llll",l.data.data.data.display_Name);
 setDisplay_Name(l.data.data.data?.display_Name);
 setCustom_Url(l.data.data.data?.custom_Url);
 setEmail(l.data.data.data?.email);
 setPortfolio(l.data.data.data?.portfolio);
 setBio(l.data.data.data?.bio);
 setTwitter(l.data.data.data?.twitter);
 setFacebook(l.data.data.data?.facebook);
 setInstagram(l.data.data.data?.instagram)
 setYoutube(l.data.data.data?.youtube)
 setUsername(l.data.data.data?.username)
 setPassword(l.data.data.data?.password)
 
 setSelectedFile(backend+l.data.data.data?.selectedFile)
}

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
                <h2 className="inner_title">Edit Profile</h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container">
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <div class="holder">
                {
                 <img src={selectedFile? typeof selectedFile == "string" ? selectedFile : URL.createObjectURL(selectedFile):require("../assets/images/profile_img.png")} alt="logo" id="imgPreview" className="img-fluid"/>

                //  <img src={blob ?  blob.image :selectedFile? backend+selectedFile:require("../assets/images/profile_img.png")} alt="logo" id="imgPreview" className="img-fluid"/>
                // :<img src={require("../assets/images/profile_img.png")}/>
                }
                <div className="profile_edit_panel">
                <div className="profile_edit_icon">
                  <i class="fas fa-pencil-alt"></i>
                </div>
               <input type="file"  name="selectedFile" id="photo" required="true" onChange={(e)=>onChange(e)}/>
                
                
              </div>
              </div>
              
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">Display Name</label>
                    <input type="text" className="form-control primary_inp" id="name" value={display_Name}  name="display_Name"  placeholder="Enter your display name" onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Personal site or portfolio</label>
                    <input type="text" className="form-control primary_inp" id="desccription" value={portfolio} name="portfolio" defaultValue="http://"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">Custom URL</label>
                    <input type="text" className="form-control primary_inp" id="name" value={custom_Url} name="custom_Url" defaultValue="Ultrasafe.io/" onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Email</label>
                    <input type="text" className="form-control primary_inp" id="desccription" name="email" 
                    value={email} placeholder="Your email for marketplace notifications"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">User Name</label>
                    <input type="text" className="form-control primary_inp" id="name" value={username} name="username" placeholder="Enter you user name" onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Password</label>
                    <input type="password" className="form-control primary_inp" id="desccription" value={password} name="password" 
                    placeholder="Your password"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">Bio</label>
                    <input type="text" className="form-control primary_inp" id="name" value={bio} name="bio"
                    placeholder="Tell about yourself in a few words"  onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="desccription">Verification</label>
                    <div className="">
                      <Button className="primary_btn w-100">Get verified</Button>
                      <p className="text-muted mb-0 ml-3">Procceed with verification proccess to get more visibility and gain trust on Ultrasafe Marketplace. Please allow up to several weeks for the process.</p>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="primary_label" htmlFor="name">Social Media Links</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Twitter account address"
                   value={twitter} name="twitter"  onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control primary_inp" id="desccription" placeholder="Youtube channel address"
                  value={youtube} name="youtube"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Facebook account address"
                   value={facebook} name="facebook"  onChange={(e)=>onChange(e)}/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control primary_inp" id="desccription" placeholder="Instagram address"
                   value={instagram} name="instagram"  onChange={(e)=>onChange(e)}/>
                  </div>
                </div>
                <div className="mt-3">
                  <Button className="create_btn" onClick={formadd}>Update Profile</Button>
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
