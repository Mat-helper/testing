import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import './main.css';

// pages 
import Home from "views/Home.js";
import Create from "views/Create.js";
import CreateSingle from "views/Create-single.js";
import EditProfile from "views/edit-profile.js";
import Proposals from "views/proposals.js";
import Myitems from "views/my-items.js";
import Following from "views/following.js";
import Info from "views/info.js";
import Activity from "views/activity.js";
import Discussion from "views/discussion.js";
import DiscussionDetail from "views/discussion-detail.js";
import Community from "views/community.js";
import Terms from "views/Termsofservice.js";
import Privacypolicy from "views/Privacypolicy.js";
import HowItWorks from "views/how-it-works.js";
import connect from "views/connect-wallet.js";
import login from "views/log_in.js";
import {CookiesProvider} from "react-cookie";
ReactDOM.render(
  <CookiesProvider>
  <BrowserRouter basename="/ui-templates/nicknft" >
    <Switch>
      <Route path="/connect" component={connect} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/privacy" component={Privacypolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/community" component={Community} />
      <Route path="/discussion-detail" component={DiscussionDetail} />
      <Route path="/discussion" component={Discussion} />
      <Route path="/activity" component={Activity} />
      <Route path="/info" component={Info} />
      <Route path="/following" component={Following} />
      <Route path="/my-items" component={Myitems} />
      <Route path="/proposals" component={Proposals} />
      <Route path="/log_in" component={login}/>
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/create-single" component={CreateSingle} />
      <Route path="/create" component={Create} />
      <Route path="/home" component={Home} />
      <Route exact path="/*" component={Home}>
        <Redirect to="/home" />
      </Route>
     
    </Switch>
  </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);

