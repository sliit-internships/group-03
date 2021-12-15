import React, { Component } from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { MenuItem } from "@material-ui/core";

import CardFooter from "../../Card/CardFooter";
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
class AdminProfileComponent extends Component {
  state = {
    formData: {
      studentID: "",
      companyName: "",
      supervisorName: "",
      supervisorTitle: "",
      supervisorContactNo: "",
      supervisorEmail: "",
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <div id="example3">
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          <TextValidator
            label="First Name"
            onChange={this.handleChange}
            name="fname"
            fullWidth
            helperText="Eg: Saman"
            variant="standard"
            value={formData.fname}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            label="Last Name"
            onChange={this.handleChange}
            name="lname"
            fullWidth
            helperText="Eg: Gunawardena"
            variant="standard"
            value={formData.lname}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            label="Email Address"
            onChange={this.handleChange}
            name="email"
            fullWidth
            helperText="Eg: Saman.g@sliit.lk"
            variant="standard"
            value={formData.email}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <CardFooter style={{ justifyContent: "right" }}>
            <Button
              color="info"
              variant="contained"
              type="submit"
              value="Update Profile"
              disabled={submitted}
            >
              {(submitted && "Profile Updated!") || (!submitted && "Submit")}
            </Button>
          </CardFooter>
        </ValidatorForm>
      </div>
    );
  }
}

export default AdminProfileComponent;
