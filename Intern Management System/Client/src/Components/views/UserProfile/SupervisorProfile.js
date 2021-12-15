import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import Grid from "@mui/material/Grid";

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
import CardFooter from "../../Card/CardFooter.js";

//import avatar from "assets/img/faces/marc.jpg";
import avatar from "../../../Assets/img/faces/Profile.png";

import SupervisorProfileComponent from "./SupervisorProfileComponent";

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

  const [year, setYear, sem, setSeme] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

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
                <h6 className={classes.cardCategory}>Supervisor</h6>
                <h4 className={classes.cardTitle}>User Name</h4>
                <p className={classes.description}>
                  <div></div>
                  <div></div>
                  <br></br>
                  <br></br>
                  <Button color="info">Upload Photo</Button>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Grid item>
              <Card>
                <CardContent align="center">
                  <Typography gutterBottom variant="h5" component="div">
                    Motivate Yourself
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    " Stay away from those people who try to disparage your
                    ambitions. Small minds will always do that, but great minds
                    will give you a feeling that you can become great too. "
                    <br></br>
                    <b>
                      <i>~ Mark Twain ~</i>{" "}
                    </b>
                  </Typography>
                </CardContent>
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
                  <SupervisorProfileComponent />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
