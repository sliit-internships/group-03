import React, {useContext} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks";
import StudentNavbarLinks from "../Navbars/StudentNavbarLinks";
import EvaluatorNavbarLinks from "../Navbars/EvaluatorNavbarLinks";
import SupervisorNavbarLinks from "../Navbars/SupervisorNavbarLinks";
import Button from "../CustomButtons/Button";

//hooks
import { useRouteName } from "../../Hooks/useRouteName";

import styles from "../../Assets/jss/material-dashboard-react/components/headerStyle";

//Auth

import { AuthContext } from '../../Context/AuthContext';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  const {user} = useContext(AuthContext);

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {routeName}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {
            user.role === "admin" ? <AdminNavbarLinks /> : null
          },
                    {
            user.role === "student" ? <StudentNavbarLinks /> : null
          },
                    {
            user.role === "supervisor" ? <SupervisorNavbarLinks /> : null
          },
                    {
            user.role === "evaluator" ? <EvaluatorNavbarLinks /> : null
          }
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  //rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};

//{props.rtlActive ? <AdminNavbarLinks /> : <StudentNavbarLinks />}