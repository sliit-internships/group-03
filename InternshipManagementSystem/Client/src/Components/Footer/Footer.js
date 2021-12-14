/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
//import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import styles from "../../Assets/jss/material-dashboard-react/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}></div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()} Group 03, SLIIT INTERNAL
            INTERNSHIP 2021
          </span>
        </p>
      </div>
    </footer>
  );
}