/*import React from "react";

export default function FormPanel() {
       return(
           <div id="container">
               <tr>
                   <td><a href="/fI1A" className="btn btn-dark"> Form I-1A</a></td>
               </tr>
               <tr>
                   <td><a href="/fI1C" className="btn btn-dark"> Form I-1C</a></td>
               </tr>
               <tr>
                   <td><a href="/fI3A" className="btn btn-dark"> Form I-3A</a></td>
               </tr>
               <tr>
                   <td><a href="/fI6" className="btn btn-dark"> Form I6</a></td>
               </tr>
           </div>
       );
}*/

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import CardBody from "../../Card/CardBody.js";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

export default function FormPanel() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>ALL Forms</h4>
                        <p className={classes.cardCategoryWhite}>
                            This section will outline all on-line forms available which is essential to carryout the internship program
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap><a href="/fI1A" className="btn btn-lg btn-dark">Form I-1A</a></Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap><a href="/fI1C" className="btn btn-lg btn-dark">Form I-1C</a></Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap><a href="/fI3A" className="btn btn-lg btn-dark">Form I-3A</a></Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap><a href="/fI6" className="btn btn-lg btn-dark">Form I6</a></Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}


