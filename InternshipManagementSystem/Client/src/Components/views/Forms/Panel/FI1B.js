import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI1B from "../FormI1B/FormI1B";



const useStyles = makeStyles(styles);

export default function FI1B() {
    const classes = useStyles();
    return (
        <div>
            <FormI1B/>
        </div>
    );
}
