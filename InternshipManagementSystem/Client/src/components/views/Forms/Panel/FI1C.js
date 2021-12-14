import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../dashcomponents/Grid/GridContainer.js";
import styles from "../../../../Assets/jss/material-dashboard-react/views/dashboardStyle";
import FormI1C from "../FormI1C/FormI1C";

const useStyles = makeStyles(styles);

export default function FI1C() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
               <FormI1C/>
            </GridContainer>
        </div>
    );
}
