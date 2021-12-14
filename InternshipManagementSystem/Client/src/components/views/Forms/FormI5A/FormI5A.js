import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";
import "../form.css"
import {formI5AAPI} from "../config/config";
import {isEmpty} from "../helpers/common.helpers";
import Loader from "../components/loader/Loader";
import TextField from "../components/text-field/TextField";
import RadioButton from "../components/RadioButton/RadioButton";
import Performance from "../components/RadioButton/Performance";
import YourAgreement1 from "../components/CheckBox/YourAgreement1";
import YourAgreement2 from "../components/CheckBox/YourAgreement2";
import ButtonComponent from "../components/button/Button";
import CardHeader from "../../../Card/CardHeader";

class FormI5A extends Component {
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
        let { history } = this.props;

        if (this.validateFn(this.state.formData)) {

            this.setState({
                ...this.state,
                inputErrors: {},
                loader: true
            }, () => {

                axios.post(formI5AAPI, this.state.formData)
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

    validateFn = (formObj5) => {
        let errors = {}

        if (isEmpty(formObj5.studentID_sup)) {
            errors["studentID_sup"] = "Student ID is required";
        }

        if (isEmpty(formObj5.internshipTitle_sup)) {
            errors["internshipTitle_sup"] = "Internship Title is required"
        }

        if (isEmpty(formObj5.fromDate_sup)) {
            errors["fromDate_sup"] = "Internship Start Date is required"
        }

        if (isEmpty(formObj5.toDate_sup)) {
            errors["toDate_sup"] = "Internship End Date is required"
        }

        if (isEmpty(formObj5.companyName_sup)) {
            errors["companyName_sup"] = "Company Name is required"
        }

        if (isEmpty(formObj5.supervisorName_sup)) {
            errors["supervisorName_sup"] = "Supervisor Name is required";
        }

        if (isEmpty(formObj5.supervisorEmail_sup)) {
            errors["supervisorEmail_sup"] = "Supervisor Email is required";
        }

        if (isEmpty(formObj5.strengths_sup)) {
            errors["strengths_sup"] = "Strengths are required";
        }

        if (isEmpty(formObj5.weaknesses_sup)) {
            errors["weaknesses_sup"] = "Weaknesses are required"
        }

        if (isEmpty(formObj5.qow_sup)) {
            errors["qow_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.ta_sup)) {
            errors["ta_sup"] = "This Field is required";
        }

        if (isEmpty(formObj5.communication_sup)) {
            errors["communication_sup"] = "This Field is required";
        }

        if (isEmpty(formObj5.leadership_sup)) {
            errors["leadership_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.points_sup)) {
            errors["points_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.effective_sup)) {
            errors["effective_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.suggest_sup)) {
            errors["suggest_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.overallFeedback_sup)) {
            errors["overallFeedback_sup"] = "This Field is required";
        }

        if (isEmpty(formObj5.otherComments_sup)) {
            errors["otherComments_sup"] = "This Field is required";
        }

        if (isEmpty(formObj5.overallStudentPerformance_sup)) {
            errors["overallStudentPerformance_sup"] = "This Field is required";
        }

        if (isEmpty(formObj5.percentage_sup)) {
            errors["percentage_sup"] = "This Field is required"
        }

        if (isEmpty(formObj5.agreement1_sup)) {
            errors["agreement1_sup"] = "Supervisor Agreement is Required"
        }

        if (isEmpty(formObj5.agreement2_sup)) {
            errors["agreement2_sup"] = ""
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
                <br/>
                <div className="col d-flex justify-content-center">
                    <Card>
                        <CardHeader color="primary">
                            <div className={"text-primary text-center p-4"}>

                                <h5 className={"text-white font-size-20"}>
                                    Form I-5A : Student Final Performance Evaluation
                                </h5>

                                <p className={"text-white-50"}>
                                    (To be filled by the Supervisor)
                                </p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div>
                                {/*SLIIT Student ID Number*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"SLIIT Student ID Number"}
                                    name={"studentID_sup"}
                                    value={get(this.state, "formData.studentID_sup", "")}
                                    errorText={get(this.state, "inputErrors.studentID_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Internship Title*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Internship Title"}
                                    name={"internshipTitle_sup"}
                                    value={get(this.state, "formData.internshipTitle_sup", "")}
                                    errorText={get(this.state, "inputErrors.internshipTitle_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Actual Period Completed - From Date*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Actual Period Completed - From Date"}
                                    type={"date"}
                                    name={"fromDate_sup"}
                                    value={get(this.state, "formData.fromDate_sup", "")}
                                    errorText={get(this.state, "inputErrors.fromDate_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Actual Period Completed - To Date*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Actual Period Completed - To Date"}
                                    type={"date"}
                                    name={"toDate_sup"}
                                    value={get(this.state, "formData.toDate_sup", "")}
                                    errorText={get(this.state, "inputErrors.toDate_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Company Name*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Company Name"}
                                    name={"companyName_sup"}
                                    value={get(this.state, "formData.companyName_sup", "")}
                                    errorText={get(this.state, "inputErrors.companyName_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Name*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor Name"}
                                    name={"supervisorName_sup"}
                                    value={get(this.state, "formData.supervisorName_sup", "")}
                                    errorText={get(this.state, "inputErrors.supervisorName_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor E-Mail Address*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor E-Mail Address"}
                                    name={"supervisorEmail_sup"}
                                    type={"email"}
                                    value={get(this.state, "formData.supervisorEmail_sup", "")}
                                    errorText={get(this.state, "inputErrors.supervisorEmail_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Student's Strengths*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Student's Strengths"}
                                    name={"strengths_sup"}
                                    value={get(this.state, "formData.strengths_sup", "")}
                                    errorText={get(this.state, "inputErrors.strengths_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Student's weaknesses*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Student's weaknesses"}
                                    name={"weaknesses_sup"}
                                    value={get(this.state, "formData.weaknesses_sup", "")}
                                    errorText={get(this.state, "inputErrors.weaknesses_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Quality of work*/}
                                <RadioButton
                                    isRequired={true}
                                    labelText={"Quality of work"}
                                    name={"qow_sup"}
                                    value={get(this.state, "formData.qow_sup", "")}
                                    errorText={get(this.state, "inputErrors.qow_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Technical Ability*/}
                                <RadioButton
                                    isRequired={true}
                                    labelText={"Technical Ability"}
                                    name={"ta_sup"}
                                    value={get(this.state, "formData.ta_sup", "")}
                                    errorText={get(this.state, "inputErrors.ta_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Communication*/}
                                <RadioButton
                                    isRequired={true}
                                    labelText={"Communication"}
                                    name={"communication_sup"}
                                    value={get(this.state, "formData.communication_sup", "")}
                                    errorText={get(this.state, "inputErrors.communication_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Leadership*/}
                                <RadioButton
                                    isRequired={true}
                                    labelText={"Leadership"}
                                    name={"leadership_sup"}
                                    value={get(this.state, "formData.leadership_sup", "")}
                                    errorText={get(this.state, "inputErrors.leadership_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Provide some points on how student can develop his/her career after internship*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Provide some points on how student can develop his/her career after internship"}
                                    name={"points_sup"}
                                    value={get(this.state, "formData.points_sup", "")}
                                    errorText={get(this.state, "inputErrors.points_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*How effective has the Internship Program been in meeting the needs of your organization?*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"How effective has the Internship Program been in meeting the needs of your organization?"}
                                    name={"effective_sup"}
                                    value={get(this.state, "formData.effective_sup", "")}
                                    errorText={get(this.state, "inputErrors.effective_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Please suggest ways you feel we could make our program more meaningful to the student and you, the employer*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Please suggest ways you feel we could make our program more meaningful to the student and you, the employer"}
                                    name={"suggest_sup"}
                                    value={get(this.state, "formData.suggest_sup", "")}
                                    errorText={get(this.state, "inputErrors.suggest_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Overall feedback comments about the student*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Overall feedback comments about the student"}
                                    name={"overallFeedback_sup"}
                                    value={get(this.state, "formData.overallFeedback_sup", "")}
                                    errorText={get(this.state, "inputErrors.overallFeedback_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Any other comments about the student for the Faculty Advisory*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Any other comments about the student for the Faculty Advisory"}
                                    name={"otherComments_sup"}
                                    value={get(this.state, "formData.otherComments_sup", "")}
                                    errorText={get(this.state, "inputErrors.otherComments_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Overall Students performance*/}
                                <Performance
                                    isRequired={true}
                                    labelText={"Overall Students performance"}
                                    name={"overallStudentPerformance_sup"}
                                    value={get(this.state, "formData.overallStudentPerformance_sup", "")}
                                    errorText={get(this.state, "inputErrors.overallStudentPerformance_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Your percentage rating (out of 100) on student's overall performance as an intern*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Your percentage rating (out of 100) on student's overall performance as an intern"}
                                    name={"percentage_sup"}
                                    value={get(this.state, "formData.percentage_sup", "")}
                                    errorText={get(this.state, "inputErrors.percentage_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Agreement*/}
                                <YourAgreement1
                                    isRequired={true}
                                    labelText={"Your Agreement"}
                                    name={"agreement1_sup"}
                                    value={get(this.state, "formData.agreement1_sup", "")}
                                    errorText={get(this.state, "inputErrors.agreement1_sup", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Agreement2*/}
                                <YourAgreement2
                                    name={"agreement2_sup"}
                                    value={get(this.state, "formData.agreement2_sup", "")}
                                    errorText={get(this.state, "inputErrors.agreement2_sup", "")}
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

export default FormI5A;
