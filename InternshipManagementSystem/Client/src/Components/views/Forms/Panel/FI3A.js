import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../dashcomponents/Grid/GridContainer.js";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FileUpload from "../FIleUpload/FileUpload";

const useStyles = makeStyles(styles);

export default function FI3A() {
    const classes = useStyles();
    return (
        <div>
                <FileUpload/>
        </div>
    );
}
