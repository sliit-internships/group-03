import React, {Component} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./formi5a.css"


class FormI5A extends Component {
    state = {
        formData: {
            studentID: '',
            internshipTitle: '',
            fromDate: '',
            toDate: '',
            companyName: '',
            supervisorName: '',
            supervisorEmail : '',
            strengths : '',
            weaknesses : '',
            points : '',
            effective : '',
            suggest : '',
            overallFeedback: '',
            otherComments : '',
            percentage : '',

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
            <div id="example1">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center">Form I-5A : Student Final Performance Evaluation</h3>
                    <h6 className="text-center">(To be filled by the Supervisor)</h6><br/>

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
                    {/*2 Internship Title*/}
                    <TextValidator
                        label="Internship Title"
                        onChange={this.handleChange}
                        name="internshipTitle"
                        fullWidth
                        placeholder="The designation title given to the student during the internship "
                        variant="standard"
                        value={formData.internshipTitle}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*3 Actual Period Completed - From Date*/}
                    <label>Actual Period Completed - From Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                    <p><b>IMPORTANT : Be vigilant of selecting the CORRECT Year and Month from the date picker</b></p>
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
                    {/*4 Actual Period Completed - To Date*/}
                    <label>Actual Period Completed - To Date<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                    <p><b>The date completed OR the date to be completed if providing the feedback early</b></p>
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
                    {/*5 Company Name*/}
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
                    {/*6 Supervisor Name*/}
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
                    {/*7 Supervisor E-Mail Address*/}
                    <TextValidator
                        label="Supervisor E-Mail Address"
                        onChange={this.handleChange}
                        name="supervisorEmail"
                        fullWidth
                        placeholder="Specify the official e-mail of the person filling this from in the format abc@abc.com"
                        variant="standard"
                        value={formData.supervisorEmail}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    {/*8 Student's Strengths*/}
                    <TextValidator
                        label="Student's Strengths"
                        onChange={this.handleChange}
                        name="strengths"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.strengths}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*9 Student's weaknesses*/}
                    <TextValidator
                        label="Student's weaknesses"
                        onChange={this.handleChange}
                        name="weaknesses"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.weaknesses}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*10 Quality of work*/}
                    <label>Quality of work<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Above Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Below Average
                        </label>
                    </div>
                    <br />
                    {/*11 Technical Ability*/}
                    <label>Technical Ability<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Above Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Below Average
                        </label>
                    </div>
                    <br />
                    {/*12 Communication*/}
                    <label>Communication<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Above Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Below Average
                        </label>
                    </div>
                    <br />
                    {/*13 Leadership*/}
                    <label>Leadership<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Above Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Average
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Below Average
                        </label>
                    </div>
                    <br />
                    {/*14 Provide some points on how student can develop his/her career after internship*/}
                    <TextValidator
                        label="Provide some points on how student can develop his/her career after internship"
                        onChange={this.handleChange}
                        name="points"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.points}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*15 How effective has the Internship Program been in meeting the needs of your organization?*/}
                    <TextValidator
                        label="How effective has the Internship Program been in meeting the needs of your organization?"
                        onChange={this.handleChange}
                        name="effective"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.effective}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*16 Please suggest ways you feel we could make our program more meaningful to the student and you, the employer*/}
                    <TextValidator
                        label="Please suggest ways you feel we could make our program more meaningful to the student and you, the employer"
                        onChange={this.handleChange}
                        name="suggest"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.suggest}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*17 Overall feedback comments about the student*/}
                    <TextValidator
                        label="Overall feedback comments about the student"
                        onChange={this.handleChange}
                        name="overallFeedback"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.overallFeedback}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*18 Any other comments about the student for the Faculty Advisory*/}
                    <TextValidator
                        label="Any other comments about the student for the Faculty Advisory"
                        onChange={this.handleChange}
                        name="otherComments"
                        fullWidth
                        placeholder="Enter your Answer"
                        variant="standard"
                        value={formData.otherComments}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*19 Overall Students performance*/}
                    <label>Overall Students performance<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label><br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Outstanding
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Very Good
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Good
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Marginal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Unsatisfactory
                        </label>
                    </div>
                    <br />
                    {/*20 Your percentage rating (out of 100) on student's overall performance as an intern*/}
                    <TextValidator
                        label="Your percentage rating (out of 100) on student's overall performance as an intern"
                        onChange={this.handleChange}
                        name="percentage"
                        fullWidth
                        placeholder="Number must be between 0-100"
                        variant="standard"
                        value={formData.percentage}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    {/*21 Your Agreement*/}
                    <label>Your Agreement</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                        />
                        <label className="form-check-label" htmlFor="form1Example3">I certify that above information is correct and genuine feedback of mine</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                        />
                        <label className="form-check-label" htmlFor="form1Example3">I have given this feedback to the studen</label>
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

export default FormI5A;

