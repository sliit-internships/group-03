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

export default function StudentForms() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Students Forms</h4>
                        <p className={classes.cardCategoryWhite}>
                            This section will outline all on-line forms available which is essential to carryout the internship program
                        </p>
                    </CardHeader>
                    <CardBody>
                        <h4>Form I-1A</h4>
                        <p>The below link provides Student Information Submission Part of Form I-1 (Form I-1A) where student applies for internship through the system mentioning the supervisor e-mail. Then the supervisor should receive and email with a link to enter rest of the information for internship registration. There may be delays in sending this e-mail and therefore share the Form I-1B link with your supervisor to submit his details. </p>
                        <Typography noWrap><a href="/fI1A" className="btn btn-lg btn-dark">Form I-1A</a></Typography>
                        <br/>
                        <h4>Form I-1C</h4>
                        <p>The below link provides Supervisor Information Change request Form (Form I-1C) in the case the supervisor gets changed during the internship. It is strongly recommended to keep the assigned supervisor throughout the six months of internship, but in case supervisor gets changed, student should use this link to change the supervisor. A supervisor can be changed only within the same company. If the internship company changes that is treated as a separate internship. </p>
                        <Typography noWrap><a href="/fI1C" className="btn btn-lg btn-dark">Form I-1C</a></Typography>
                        <br/>
                        <h4>Form I-3A</h4>
                        <p>The Form I-3A should be filled daily by the student and show the work and get supervisor comments and the signature at the end of each week. When four weeks are completed student should upload the scanned complete set of forms of four weeks in the folder location provided for each month. The upload file of scanned copies of weekly work should merge the weeks of the month into one pdf file and the naming convention should go as  StudentNo_Form I-3A_Month1.pdf (e.g. IT18013092_Form I-3A_Month1.pdf). The report file naming convention should go as e.g. Form I-6(IT18112610Keshana R.P.H.H.)SE.pdf</p>
                        <Typography noWrap><a href="/fI3A" className="btn btn-lg btn-dark">Form I-3A</a></Typography>
                        <br/>
                        <h4>Form I-6</h4>
                        <p>The below is the key manual forms students need to submit. All students need to complete and submit this form The report file naming convention should go as e.g. Form I-6(IT18112610Keshana R.P.H.H.)SE.pdf</p>
                        <Typography noWrap><a href="/fI6" className="btn btn-lg btn-dark">Form I-6</a></Typography>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}


