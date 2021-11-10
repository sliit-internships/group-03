import React, {Component} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./supervisor.css"
import {MenuItem} from "@material-ui/core";

const field6 = [
    {
        value: 'Once a week',
        label: 'Once a week',
    },
    {
        value: 'Once in two weeks',
        label: 'Once in two weeks',
    },
    {
        value: 'Once a Month',
        label: 'Once a Month',
    },
    {
        value: 'Once in Two Months',
        label: 'Once in Two Months',
    },
    {
        value: 'Only twice during the period',
        label: 'Only twice during the period',
    },
    {
        value: 'Only once during the period',
        label: 'Only once during the period',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];
class FormI3ASupervisor extends Component {
    state = {
        formData: {
            studentID: '',
            companyName: '',
            internshipTitle: '',
            fromDate: '',
            toDate: '',
            frequently : '',
            summary : '',
            overallComment : '',
            supervisorEmail : '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }



    render() {
        const { formData, submitted, select} = this.state;
        return (
            <div id="example5">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center">Form I-3A Approval</h3>
                    <h6 className="text-center">Supervisor Feedback and Approval of the Daily Diaries</h6><br/>

                    <p className="text-danger">Supervisor Feedback and Approval of  all the diaries submitted throughout the internship period</p>

                    {/*1 SLIIT Student ID Number*/}
                    <TextValidator
                        label="SLIIT Student ID Number"
                        onChange={this.handleChange}
                        name="studentID"
                        fullWidth
                        placeholder="Please enter your student id number without any spaces, e.g IT17121966"
                        variant="standard"
                        value={formData.studentID}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*2 Company Name*/}
                    <TextValidator
                        label="Company Name"
                        onChange={this.handleChange}
                        name="companyName"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.companyName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*3 Internship Title*/}
                    <TextValidator
                        label="Internship Title"
                        onChange={this.handleChange}
                        name="internshipTitle"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.internshipTitle}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*4 Period - From Date*/}
                    <label>Period - From Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <TextValidator
                        onChange={this.handleChange}
                        name="fromDate"
                        fullWidth
                        type="date"
                        variant="standard"
                        value={formData.fromDate}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*5 Period - To Date*/}
                    <label>Period - To Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <TextValidator
                        onChange={this.handleChange}
                        name="toDate"
                        fullWidth
                        type="date"
                        variant="standard"
                        value={formData.toDate}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*6 How frequently did the student submit the diaries for feedback throughout the internship?*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="How frequently did the student submit the diaries for feedback throughout the internship?"
                        value={formData.select}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field6.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
                    {/*7 Summarize the tasks / projects completed for the period of the internship*/}
                    <TextValidator
                        label="Summarize the tasks / projects completed for the period of the internship"
                        onChange={this.handleChange}
                        name="summary"
                        fullWidth
                        placeholder="Please summaries at a high level to validate the content provided by the student in the diaries"
                        variant="standard"
                        value={formData.summary}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*8 Your overall comment on how you interacted with the student and observations of the work logged in the daily diaries*/}
                    <TextValidator
                        label="Your overall comment on how you interacted with the student and observations of the work logged in the daily diaries"
                        onChange={this.handleChange}
                        name="overallComment"
                        fullWidth
                        placeholder="Provide sufficient information to help the examiner to determine the work logged in the diaries Vs actual work
                            student did as per your understanding"
                        variant="standard"
                        value={formData.overallComment}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*7 Supervisor E-Mail Address*/}
                    <TextValidator
                        label="Supervisor E-Mail Address"
                        onChange={this.handleChange}
                        name="supervisorEmail"
                        fullWidth
                        placeholder="such as xyz@abc.com"
                        variant="standard"
                        value={formData.supervisorEmail}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    {/*7 Your Agreement*/}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                        />
                        <label className="form-check-label" htmlFor="form1Example3">I certify that above information is correct and genuine feedback of mine</label>
                    </div>
                    <br/>
                    <br/>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitted}
                    >
                        {
                            (submitted && 'Your form is submitted!')
                            || (!submitted && 'Submit')
                        }
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default FormI3ASupervisor;

