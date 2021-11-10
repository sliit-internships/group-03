import React, {Component} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./formI1B.css"
import {MenuItem} from "@material-ui/core";


const field13 = [
    {
        value: 'IT',
        label: 'IT',
    },
    {
        value: 'DS',
        label: 'DS',
    },
    {
        value: 'SE',
        label: 'SE',
    },
    {
        value: 'IM',
        label: 'IM',
    },
    {
        value: 'CS',
        label: 'CS',
    },
    {
        value: 'CSNE',
        label: 'CSNE',
    },
    {
        value: 'ISE',
        label: 'ISE',
    },
];
class FormI1B extends Component {
    state = {
        formData: {
            studentID: '',
            companyName: '',
            companyAddress: '',
            supervisorName: '',
            supervisorTitle: '',
            supervisorContactNo: '',
            supervisorEmail: '',
            startDate: '',
            endDate: '',
            noh: '',
            task: '',
            learn: '',
            specialization: '',
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
            <div id="example2">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center">Form I-1B : To be filled by the supervisor</h3>
                    <h5 className="text-center">Internship Registration Form - Part 2</h5><br/>

                    <h6 className="text-success">Company, Supervisor and Internship Details</h6><br/>

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
                    {/*3 Company Address*/}
                    <TextValidator
                        label="Company Address"
                        onChange={this.handleChange}
                        name="companyAddress"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.companyAddress}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*4 Supervisor Name*/}
                    <TextValidator
                        label="Supervisor Name"
                        onChange={this.handleChange}
                        name="supervisorName"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.supervisorName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*5 Supervisor Title (Organizational Designation)*/}
                    <TextValidator
                        label="Supervisor Title (Organizational Designation)"
                        onChange={this.handleChange}
                        name="supervisorTitle"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.supervisorTitle}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*6 Supervisor Contact Number*/}
                    <TextValidator
                        label="Supervisor Contact Number"
                        onChange={this.handleChange}
                        name="supervisorContactNo"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.supervisorContactNo}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*7 Supervisor E-Mail Address (Enter One Valid Company E-mail Address)*/}
                    <TextValidator
                        label="Supervisor E-Mail Address (Enter One Valid Company E-mail Address)"
                        onChange={this.handleChange}
                        name="supervisorEmail"
                        fullWidth
                        placeholder="such as abc@abc.com"
                        variant="standard"
                        value={formData.supervisorEmail}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    {/*8 Internship Start Date*/}
                    <label>Internship Start Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <TextValidator
                        onChange={this.handleChange}
                        name="startDate"
                        fullWidth
                        type="date"
                        variant="standard"
                        value={formData.startDate}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*9 Internship End Date*/}
                    <label>Internship End Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <TextValidator
                        onChange={this.handleChange}
                        name="endDate"
                        fullWidth
                        type="date"
                        variant="standard"
                        value={formData.endDate}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*10 Expected Number of Hours Per Week that the student needs to work*/}
                    <TextValidator
                        label="Expected Number of Hours Per Week that the student needs to work"
                        onChange={this.handleChange}
                        name="noh"
                        fullWidth
                        placeholder="Please enter a number less than or equal to 45"
                        variant="standard"
                        value={formData.noh}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*11 Describe the tasks student needs to complete*/}
                    <TextValidator
                        label="Describe the tasks student needs to complete"
                        onChange={this.handleChange}
                        name="task"
                        fullWidth
                        placeholder="Each task should be separated by a comma and spacing e.g. Task 1, Task 2,"
                        variant="standard"
                        value={formData.task}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*12 Describe what student will learn*/}
                    <TextValidator
                        label="Describe what student will learn"
                        onChange={this.handleChange}
                        name="learn"
                        fullWidth
                        placeholder="Each item should be separated by a comma and spacing"
                        variant="standard"
                        value={formData.learn}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*13 Student Specialization*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="Student Specialization"
                        value={formData.select}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field13.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
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

export default FormI1B;

