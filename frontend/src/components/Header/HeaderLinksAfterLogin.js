/*eslint-disable*/
import React from "react";
import { Notifications, AccountBalanceWallet, FileCopy } from '@material-ui/icons';
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Button } from "@material-ui/core";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinksAfterLogin(props) {
  const classes = useStyles();
  return (
    <List className={classes.list + " main_navbar"}>
      
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink + " create_btn"}>
          <Link to="/create">Create</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem + " menu_dropdown dropdown_header_ul noti_ul"}>
        <CustomDropdown
          noLiPadding
          buttonText={ <div><Notifications className="menu_icons"/></div>}        
          dropdownList={[
            <div className="noti_parent">
              <p className="noti_head">Notifications</p>
              <p className="no_noti">No new notifications</p>
              <Link to="/" className={classes.dropdownLink + " see_all_link"}>
                See all
              </Link>
            </div>
          ]}
        />
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <NavLink color="transparent" to="/wallet" className={classes.navLink}>
          <AccountBalanceWallet className="menu_icons"/>     
        </NavLink>
      </ListItem> */}

      <ListItem className={classes.listItem + " menu_dropdown dropdown_header_ul noti_ul wallet_drop"}>
      
        <CustomDropdown
            noLiPadding
            buttonText={ <div><AccountBalanceWallet className="menu_icons"/></div>}        
            dropdownList={[
            <div>
              <div className="noti_parent">
                <div className="d-flex align-items-center">
                  <p className="wallet_address">0x75Cf28f29266A413eC878CE5C4a1c9682C819586</p> <FileCopy className="ml-2 wllet_copy_icon"/>
                </div>
                <div className="wallet_balance">
                  <h4>Balance</h4>
                  <p>0 BNB</p>
                </div>
              </div>
              <hr/>
              <div className="noti_parent">
                <NavLink to="/my-items" className={classes.dropdownLink}>
                  My Items
                </NavLink>
                <NavLink to="/edit-profile" className={classes.dropdownLink}>
                  Edit Profile
                </NavLink>
                <Button type="submit" className={classes.dropdownLink + " p-0"}>
                  Disconnect
                </Button>
              </div>
            </div>
            ]}
          />
   
      </ListItem>

    </List>
  );
}
