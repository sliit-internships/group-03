import React, {Component} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './formI_1C.css'

class FormI1C extends Component {
    state = {
        formData: {
            studentID: '',
            companyName: '',
            supervisorName: '',
            supervisorTitle: '',
            supervisorContactNo: '',
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
        const { formData, submitted} = this.state;
        return (
            <div id="example3">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center">Form I-1C: Supervisor Change Form</h3>
                    <h6 className="text-center">(To be filled by the student)</h6><br/>

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
                    {/*3 Supervisor Name*/}
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
                    {/*4 Supervisor Title (Organizational Designation)*/}
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
                    {/*5 Supervisor Contact Number*/}
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
                    {/*6 Supervisor E-Mail Address (Enter One Valid Company E-mail Address)*/}
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
                    {/*7 Your Agreement*/}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                        />
                        <label className="form-check-label" htmlFor="form1Example3">    I  certify above information is correct and take the full responsibility of the information provided </label>
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

export default FormI1C;

