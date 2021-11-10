import React, {Component} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./formI_1A.css"
import {MenuItem} from "@material-ui/core";

const field2 = [
    {
        value: 'Year 1',
        label: 'Year 1',
    },
    {
        value: 'Year 2',
        label: 'Year 2',
    },
    {
        value: 'Year 3',
        label: 'Year 3',
    },
    {
        value: 'Year 4',
        label: 'Year 4',
    },
    {
        value: 'Year 4 completed- Prorata registered',
        label: 'Year 4 completed- Prorata registered',
    },
];

const field3 = [
    {
        value: '2017 or before',
        label: '2017 or before',
    },
    {
        value: '2018',
        label: '2018',
    },
    {
        value: '2019',
        label: '2019',
    },
    {
        value: '2020',
        label: '2020',
    },
    {
        value: '2021',
        label: '2021',
    },
    {
        value: '2022',
        label: '2022',
    },
    {
        value: '2023 and after',
        label: '2023 and after',
    },
];

const field4 = [
    {
        value: 'Jan-Jun',
        label: 'Jan-Jun',
    },
    {
        value: 'Jul-Nov',
        label: 'Jul-Nov',
    },
];

const field5 = [
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
    {
        value: 'Not Yet Finalized(2nd year Student)',
        label: 'Not Yet Finalized(2nd year Student)',
    },
];
class FormI1A extends Component {
    state = {
        formData: {
            studentID: '',
            currentRegisteredYear: '',
            secondYearComplete: '',
            secondYear: '',
            specialization: '',
            studentName: '',
            mobileNumber: '',
            homeNumber: '',
            email: '',
            startDate: '',
            supervisorEmail: '',
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
        const { formData, submitted, select, selection, tree, flower} = this.state;
        return (
            <div id="example1">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center">Form I-1A : To be filled by the student</h3>
                    <h5 className="text-center">Internship Registration Form  - Part 1</h5><br/>

                    {/*SLIIT Student Identification Number*/}
                    <TextValidator
                        label="SLIIT Student Identification Number"
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
                    {/*Current Year of Registration at SLIIT*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="Current Year of Registration at SLIIT"
                        value={formData.select}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field2.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
                    {/*Which calendar year have you completed or planning to complete your second year?*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="Which calendar year have you completed or planning to complete your second year?"
                        value={formData.selection}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field3.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
                    {/*Which period of the year are you planning to complete or completed your second year?*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="Which period of the year are you planning to complete or completed your second year?"
                        value={formData.tree}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field4.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
                    {/*Specialization*/}
                    <TextValidator
                        select
                        fullWidth
                        variant="standard"
                        label="Specialization"
                        value={formData.flower}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    >
                        {field5.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextValidator>
                    <br />
                    {/*Student Name with Initials*/}
                    <TextValidator
                        label="Student Name with Initials"
                        onChange={this.handleChange}
                        name="studentName"
                        fullWidth
                        placeholder="e.g. Rathnayaka M.H.K.R."
                        variant="standard"
                        value={formData.studentName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*Student Mobile Phone Number*/}
                    <TextValidator
                        label="Student Mobile Phone Number"
                        onChange={this.handleChange}
                        name="mobileNumber"
                        fullWidth
                        placeholder="e.g. 94772269563"
                        variant="standard"
                        value={formData.mobileNumber}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*Student Home Phone Number*/}
                    <TextValidator
                        label="Student Home Phone Number"
                        onChange={this.handleChange}
                        name="homeNumber"
                        fullWidth
                        placeholder="e.g. 94112590558"
                        variant="standard"
                        value={formData.homeNumber}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*Student E-Mail (Enter One Primary E-mail Address that you use)*/}
                    <TextValidator
                        label="Student E-Mail (Enter One Primary E-mail Address that you use)"
                        onChange={this.handleChange}
                        name="email"
                        placeholder="e.g it17051456@my.sliit.lk"
                        variant="standard"
                        fullWidth
                        value={formData.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    {/*What is the date you started or plan to start your internship?*/}
                    <label>What is the date you started or plan to start your internship?</label><br/>
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
                    {/*Specify Supervisor E-Mail address for the supervisor to fill his/her information*/}
                    <TextValidator
                        label="Specify Supervisor E-Mail address for the supervisor to fill his/her information"
                        onChange={this.handleChange}
                        name="supervisorEmail"
                        fullWidth
                        variant="standard"
                        value={formData.supervisorEmail}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
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

export default FormI1A;

