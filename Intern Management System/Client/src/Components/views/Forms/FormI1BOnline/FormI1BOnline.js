import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";
import "../form.css"
import {isEmpty} from "../helpers/common.helpers";
import Loader from "../components/loader/Loader";
import TextField from "../components/text-field/TextField";
import * as PropTypes from "prop-types";
import CheckBox from "../components/CheckBox/CheckBox";
import ButtonComponent from "../components/button/Button";
import {formI1BOnlineAPI} from "../config/config";
import CardHeader from "../../../Card/CardHeader";
import Frequently from "../components/text-field/Frequently";


Frequently.propTypes = {
    errorText: PropTypes.any,
    value: PropTypes.any,
    isRequired: PropTypes.bool,
    onChangeFn: PropTypes.func,
    name: PropTypes.string,
    labelText: PropTypes.string
};

class FormI1BOnline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {},
            inputErrors: {},
            loader: false
        }
    }

    onChangeFn = (event) => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [event.name]: event.value
            }
        })
    }

    onSubmitFn = () =>{
    

        if (this.validateFn(this.state.formData)) {

            this.setState({
                ...this.state,
                inputErrors: {},
                loader: true
            }, () => {

                axios.post(formI1BOnlineAPI, this.state.formData)
                    .then((result) => {

                        this.setState({
                            ...this.state,
                            loader: false
                        }, () => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Saved',
                                showConfirmButton: false,
                                timer: 5000
                            })
                                .then((result) => {
                                    window.location.reload();
                                })
                        })
                    })
                    .catch((error) => {
                        this.setState({
                            ...this.state,
                            loader: false
                        })
                    })
            })
        }
    }

    validateFn = (formObj90) => {
        let errors = {}

        if (isEmpty(formObj90.studentID_on)) {
            errors["studentID_on"] = "Student ID is required";
        }

        if (isEmpty(formObj90.companyName_on)) {
            errors["companyName_on"] = "Company Name is required"
        }

        if (isEmpty(formObj90.internshipTitle_on)) {
            errors["internshipTitle_on"] = "Internship Title is required"
        }

        if (isEmpty(formObj90.fromDate_on)) {
            errors["fromDate_on"] = "Internship Start Date is required"
        }

        if (isEmpty(formObj90.toDate_on)) {
            errors["toDate_on"] = "Internship End Date is required"
        }

        if (isEmpty(formObj90.frequently_on)) {
            errors["frequently_on"] = "This field is required";
        }

        if (isEmpty(formObj90.summary_on)) {
            errors["summary_on"] = "This field is required";
        }
        if (isEmpty(formObj90.overallComment_on)) {
            errors["overallComment_on"] = "This field is required";
        }
        if (isEmpty(formObj90.supervisorEmail_on)) {
            errors["supervisorEmail_on"] = "Supervisor Email is required";
        }
        if (isEmpty(formObj90.agreement_on)) {
            errors["agreement_on"] = "Supervisor Agreement is required";
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                ...this.state,
                inputErrors: errors
            });

            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                {
                    (this.state.loader === true) ? (
                        <Loader />
                    ) : null
                }
                <div className="col d-flex justify-content-center">
                    <Card>
                        <CardHeader color="primary">
                            <div className={"text-primary text-center p-4"}>

                                <h5 className={"text-white font-size-20"}>
                                    Form I-3A Approval
                                </h5>

                                <p className={"text-white-50"}>
                                    Supervisor Feedback and Approval of the Daily Diaries
                                </p>

                                <p className={"text-white-50"}>
                                    Supervisor Feedback and Approval of  all the diaries submitted throughout the internship period
                                </p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div>
                                {/*SLIIT Student ID Number*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"SLIIT Student ID Number"}
                                    name={"studentID_on"}
                                    value={get(this.state, "formData.studentID_on", "")}
                                    errorText={get(this.state, "inputErrors.studentID_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Company Name*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Company Name"}
                                    name={"companyName_on"}
                                    value={get(this.state, "formData.companyName_on", "")}
                                    errorText={get(this.state, "inputErrors.companyName_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Internship Title*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Internship Title"}
                                    name={"internshipTitle_on"}
                                    value={get(this.state, "formData.internshipTitle_on", "")}
                                    errorText={get(this.state, "inputErrors.internshipTitle_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Period - From Date*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Period - From Date"}
                                    name={"fromDate_on"}
                                    type={"date"}
                                    value={get(this.state, "formData.fromDate_on", "")}
                                    errorText={get(this.state, "inputErrors.fromDate_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Period - To Date*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Period - To Date"}
                                    name={"toDate_on"}
                                    type={"date"}
                                    value={get(this.state, "formData.toDate_on", "")}
                                    errorText={get(this.state, "inputErrors.toDate_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*How frequently did the student submit the diaries for feedback throughout the internship?*/}
                                <Frequently
                                    isRequired={true}
                                    labelText={"How frequently did the student submit the diaries for feedback throughout the internship?"}
                                    name={"frequently_on"}
                                    value={get(this.state, "formData.frequently_on", "")}
                                    errorText={get(this.state, "inputErrors.frequently_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Summarize the tasks / projects completed for the period of the internship*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Summarize the tasks / projects completed for the period of the internship"}
                                    name={"summary_on"}
                                    value={get(this.state, "formData.summary_on", "")}
                                    errorText={get(this.state, "inputErrors.summary_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Your overall comment on how you interacted with the student and observations of the work logged in the daily diaries*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Your overall comment on how you interacted with the student and observations of the work logged in the daily diaries"}
                                    name={"overallComment_on"}
                                    value={get(this.state, "formData.overallComment_on", "")}
                                    errorText={get(this.state, "inputErrors.overallComment_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor E-Mail Address*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor E-Mail Address"}
                                    name={"supervisorEmail_on"}
                                    value={get(this.state, "formData.supervisorEmail_on", "")}
                                    errorText={get(this.state, "inputErrors.supervisorEmail_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Agreement*/}
                                <CheckBox
                                    name={"agreement_on"}
                                    value={get(this.state, "formData.agreement_on", "")}
                                    errorText={get(this.state, "inputErrors.agreement_on", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                <br/>

                                <div className={"d-flex justify-content-end"}>
                                    <ButtonComponent
                                        btnText={"Submit"}
                                        isFullWidth={false}
                                        elementStyle={"loginBtn"}
                                        onClickFn={this.onSubmitFn}
                                    />
                                </div>
                            </div>
                        </CardBody>

                    </Card>

                </div>
            </div>
        )
    }
}

export default FormI1BOnline;
