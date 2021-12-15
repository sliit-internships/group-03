import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
//import GridItem from "components/Grid/GridItem.js";
import GridItem from "../../Grid/GridItem";
//import GridContainer from "components/Grid/GridContainer.js";
import GridContainer from "../../Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import CustomInput from "../../CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Button from "../../CustomButtons/Button.js";
//import Card from "components/Card/Card.js";
import Card from "../../Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
import CardHeader from "../../Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardAvatar from "../../Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
import CardBody from "../../Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CardFooter from "../../Card/CardFooter.js";

//import avatar from "assets/img/faces/marc.jpg";
import avatar from "../../../Assets/img/faces/Profile.png";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//import { MenuItem } from "@material-ui/core";
import StudentProfileComponent from "./StudentProfileComponent";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridContainer direction="column" xs={12} sm={12} md={4}>
          <GridItem>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}></h6>
                <h4 className={classes.cardTitle}>User Email</h4>
                <p className={classes.description}>
                  <div></div>
                  <div></div>
                  <br></br>
                  <br></br>
                  <Button color="info">Upload CV</Button>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Grid item>
              <Card>
                <CardContent align="center">
                  <Typography gutterBottom variant="h5" component="div">
                    Register Module
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    If you are currently reached or passed 2nd year and 2nd
                    semester you will be eligible to register this module.
                    Please click below button to register to the module.
                    <br></br>
                    <i>
                      (You will not be eligible until you meet the above
                      criteria.)
                    </i>
                  </Typography>
                </CardContent>

                <Button size="small" color="info">
                  Register
                </Button>
              </Card>
            </Grid>
          </GridItem>
        </GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <StudentProfileComponent />
                </GridItem>
              </GridContainer>

              <div></div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardBody>
            {/*<CardFooter style={{ justifyContent: "right" }}>
                <Button color="info">Update Profile</Button>
              </CardFooter>*/}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
