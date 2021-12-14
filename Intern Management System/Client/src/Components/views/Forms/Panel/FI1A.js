import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../dashcomponents/Grid/GridContainer";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI1A from "../FormI1A/FormI1A";


const useStyles = makeStyles(styles);

export default function FI1A() {
    const classes = useStyles();
    return (
        <div>
          <FormI1A/>
        </div>
    );
}
