import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// core components
//import GridItem from "components/Grid/GridItem.js";
import GridItem from "../../Grid/GridItem";
//import GridContainer from "components/Grid/GridContainer.js";
import GridContainer from "../../Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import CustomInput from "../../CustomInput/CustomInput.js";
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
import avatar from "../../../Assets/img/faces/Lalith.jpg";
import pdf from "../../../Assets/img/pdf.jpg";

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

const years = [
  {
    value: "1",
    label: "1st Year",
  },
  {
    value: "2",
    label: "2nd Year",
  },
  {
    value: "3",
    label: "3rd Year",
  },
  {
    value: "4",
    label: "4th Year",
  },
];

const semesters = [
  {
    value: "1",
    label: "1st Semester",
  },
  {
    value: "2",
    label: "2nd Semester",
  },
];
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
                <h6 className={classes.cardCategory}></h6>
                <h4 className={classes.cardTitle}>Lalith Gamage</h4>
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
                    <b>
                      If you are currently reached or passed 2nd year and 2nd
                      semester you will be eligible to register this module.
                      Please click below button to register to the module.
                    </b>
                    <br></br>
                    <i>
                      (You will not be eligible until you meet the above
                      criteria.)
                    </i>
                  </Typography>
                </CardContent>

                <Button size="small" color="info">
                  Download Folder
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
                  <CustomInput
                    labelText="Reg Number"
                    id="regNo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email Address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Full Name"
                    id="full-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    id="standard-select-year"
                    select
                    label="Year"
                    value={year}
                    onChange={handleChange}
                    helperText="Please select your year"
                    variant="standard"
                  >
                    {years.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </GridItem>
                <div></div>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    id="standard-select-semester"
                    select
                    label="Semester"
                    value={sem}
                    onChange={handleChange}
                    helperText="Please select your semester"
                    variant="standard"
                  >
                    {semesters.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Confrim Password"
                    id="Cpassword"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
