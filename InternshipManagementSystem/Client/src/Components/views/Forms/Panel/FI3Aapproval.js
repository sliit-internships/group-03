import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI1BOnline from "../FormI1BOnline/FormI1BOnline";


const useStyles = makeStyles(styles);

export default function FI3Aapproval() {
    const classes = useStyles();
    return (
        <div>
           <FormI1BOnline/>
        </div>
    );
}
