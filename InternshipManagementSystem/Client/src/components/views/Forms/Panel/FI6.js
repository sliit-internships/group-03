import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI6 from "../FormI6/FormI6";

const useStyles = makeStyles(styles);

export default function FI6() {
    const classes = useStyles();
    return (
        <div>
            <FormI6/>
        </div>
    );
}
