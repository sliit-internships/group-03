import React, { Component } from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
//import { MenuItem } from "@material-ui/core";

import CardFooter from "../../Card/CardFooter";

class SupervisorProfileComponent extends Component {
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
            helperText="Eg: Tharuka"
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
            helperText="Eg: Wishvamali"
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
            helperText="Eg: tharuka.w@sliit.lk"
            variant="standard"
            value={formData.email}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            label="Designation"
            onChange={this.handleChange}
            name="designation"
            fullWidth
            helperText="Eg: Software Engineer"
            variant="standard"
            value={formData.designation}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            label="Company Name"
            onChange={this.handleChange}
            name="comName"
            fullWidth
            helperText="Eg: ExCompany(Pvt)Ltd"
            variant="standard"
            value={formData.comName}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            label="Phone Number"
            onChange={this.handleChange}
            name="phone"
            fullWidth
            helperText="Eg: 0781234567 or 0111234567"
            variant="standard"
            value={formData.phone}
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

export default SupervisorProfileComponent;
