import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import CardBody from "../../Card/CardBody.js";
import Typography from '@mui/material/Typography';


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};


const useStyles = makeStyles(styles);

export default function SupervisorForms() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Supervisor Forms</h4>
                        <p className={classes.cardCategoryWhite}>
                            This section will outline all on-line forms available which is essential to carryout the internship program
                        </p>
                    </CardHeader>
                    <CardBody>
                        <h4>Form I-1B</h4>
                        <p>The below link provides Supervisor Information Submission Part of Form I-1 (Form I-1B) where supervisor provides the details of the company, supervisor and about the details of the internship</p>
                        <Typography noWrap><a href="/fI1B" className="btn btn-lg btn-dark">Form I-1B</a></Typography>
                        <br/>
                        <h4>Form I-3A Approval</h4>
                        <p>In case students are finding difficult to get the supervisor's signature in Form I-3A document, below link can be used as the proof of the signature. This online form DOES NOT replace the manual Form I-3A. Students should upload the scanned copy of manual signed/unsigned Form I-3A in PDF format at the end of four weeks in the location given. </p>
                        <Typography noWrap><a href="/fI3ASupervisor" className="btn btn-lg btn-dark">Form I-3A Approval</a></Typography>
                        <br/>
                        <h4>Form I-5A</h4>
                        <p>The below link provides the link for the final student evaluation to be performed by the registered supervisor (Form I-5A). The supervisor who provides the evaluation of the student should have worked minimum of four months directly supervising the student. If the registered supervisor does not meet this criteria, student should initiate change supervisor process prior to providing the feedback.</p>
                        <Typography noWrap><a href="/fI5A" className="btn btn-lg btn-dark">Form I-5A</a></Typography>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}


