/*eslint-disable*/
import React from "react";
import { Notifications, AccountBalanceWallet } from '@material-ui/icons';
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Button } from "@material-ui/core";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list + " main_navbar"}>
      
      
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink + " create_btn"}>
          <Link to="/create">Create</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem + " ml-3"}>
        <Button className={classes.navLink + " create_btn"}>
          <Link to="/connect">Connect Wallet</Link>
        </Button>
      </ListItem>
      
    </List>
  );
}
