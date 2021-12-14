import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI5A from "../FormI5A/FormI5A";



const useStyles = makeStyles(styles);

export default function FI5A() {
    const classes = useStyles();
    return (
        <div>
            <FormI5A/>
        </div>
    );
}
