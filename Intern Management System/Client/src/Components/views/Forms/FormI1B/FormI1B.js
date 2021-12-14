import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";
import "../form.css"
import {formI1BAPI} from "../config/config";
import {isEmpty} from "../helpers/common.helpers";
import Loader from "../components/loader/Loader";
import TextField from "../components/text-field/TextField";
import Specialization from "../components/text-field/Specialization";
import ButtonComponent from "../components/button/Button";
import CardHeader from "../../../Card/CardHeader";
import IT from "../components/text-field/IT";
import DS from "../components/text-field/DS";
import SE from "../components/text-field/SE";
import IM from "../components/text-field/IM";
import CS from "../components/text-field/CS";
import CSNE from "../components/text-field/CSNE";
import ISE from "../components/text-field/ISE";
import Agreement from "../components/CheckBox/Agreement";


class FormI1B extends Component {
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

                axios.post(formI1BAPI, this.state.formData)
                    .then((result) => {

                        this.setState({
                            ...this.state,
                            loader: false
                        }, () => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Save',
                                showConfirmButton: false,
                                timer: 6000
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

    validateFn = (formObj3) => {
        let errors = {}

        if (isEmpty(formObj3.studentID_su)) {
            errors["studentID_su"] = "Student ID is required";
        }

        if (isEmpty(formObj3.companyName_su)) {
            errors["companyName_su"] = "Company Name is required"
        }

        if (isEmpty(formObj3.companyAddress_su)) {
            errors["companyAddress_su"] = "Company Address is required"
        }

        if (isEmpty(formObj3.supervisorName_su)) {
            errors["supervisorName_su"] = "Supervisor Name is required"
        }

        if (isEmpty(formObj3.supervisorTitle_su)) {
            errors["supervisorTitle_su"] = "Supervisor Title is required"
        }

        if (isEmpty(formObj3.supervisorContactNo_su)) {
            errors["supervisorContactNo_su"] = "Supervisor Contact No is required"
        }

        if (isEmpty(formObj3.supervisorEmail_su)) {
            errors["supervisorEmail_su"] = "Supervisor Email is required"
        }

        if (isEmpty(formObj3.startDate_su)) {
            errors["startDate_su"] = "Internship Start Date is required"
        }

        if (isEmpty(formObj3.endDate_su)) {
            errors["endDate_su"] = "Internship End Date is required"
        }

        if (isEmpty(formObj3.noh_su)) {
            errors["noh_su"] = "No of Hours Work is required"
        }

        if (isEmpty(formObj3.task_su)) {
            errors["task_su"] = "This Field is required"
        }

        if (isEmpty(formObj3.learn_su)) {
            errors["learn_su"] = "This Field is required"
        }

        if (isEmpty(formObj3.specialization_su)) {
            errors["specialization_su"] = "Specialization is required"
        }

        if (isEmpty(formObj3.jobtitle_su)) {
            errors["jobtitle_su"] = "Specialization Related Internship Title is required"
        }

        if (isEmpty(formObj3.agreement_su)) {
            errors["agreement_su"] = "Supervisor Agreement is required"
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
        <div className="col d-lg-flex justify-content-center">
            <Card>
                <CardHeader color="primary">
                    <div className={"text-primary text-center p-4"}>

                        <h5 className={"text-white font-size-20"}>
                            Form I-1B : To be filled by the supervisor
                        </h5>

                        <p className={"text-white-50"}>
                            Internship Registration Form - Part 2
                        </p>
                    </div>
                </CardHeader>
                <CardBody>
                    <div>
                        {/* SLIIT Student ID Number */}
                        <TextField
                            isRequired={true}
                            labelText={"SLIIT Student ID Number"}
                            name={"studentID_su"}
                            placeholder={"e.g IT17121966"}
                            value={get(this.state, "formData.studentID_su", "")}
                            errorText={get(this.state, "inputErrors.studentID_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/* Company Name */}
                        <TextField
                            isRequired={true}
                            labelText={"Company Name"}
                            name={"companyName_su"}
                            value={get(this.state, "formData.companyName_su", "")}
                            errorText={get(this.state, "inputErrors.companyName_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Company Address*/}
                        <TextField
                            isRequired={true}
                            labelText={"Company Address"}
                            name={"companyAddress_su"}
                            value={get(this.state, "formData.companyAddress_su", "")}
                            errorText={get(this.state, "inputErrors.companyAddress_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Supervisor Name*/}
                        <TextField
                            isRequired={true}
                            labelText={"Supervisor Name"}
                            name={"supervisorName_su"}
                            value={get(this.state, "formData.supervisorName_su", "")}
                            errorText={get(this.state, "inputErrors.supervisorName_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*5 Supervisor Title (Organizational Designation)*/}
                        <TextField
                            isRequired={true}
                            labelText={"Supervisor Title (Organizational Designation)"}
                            name={"supervisorTitle_su"}
                            value={get(this.state, "formData.supervisorTitle_su", "")}
                            errorText={get(this.state, "inputErrors.supervisorTitle_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Supervisor Contact Number*/}
                        <TextField
                            isRequired={true}
                            labelText={"Supervisor Contact Number"}
                            name={"supervisorContactNo_su"}
                            value={get(this.state, "formData.supervisorContactNo_su", "")}
                            errorText={get(this.state, "inputErrors.supervisorContactNo_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Supervisor E-Mail Address (Enter One Valid Company E-mail Address)*/}
                        <TextField
                            isRequired={true}
                            labelText={"Supervisor E-Mail Address (Enter One Valid Company E-mail Address)"}
                            name={"supervisorEmail_su"}
                            placeholder={"abc@abc.com"}
                            value={get(this.state, "formData.supervisorEmail_su", "")}
                            errorText={get(this.state, "inputErrors.supervisorEmail_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Internship Start Date*/}
                        <TextField
                            isRequired={true}
                            labelText={"Internship Start Date"}
                            type={"date"}
                            name={"startDate_su"}
                            value={get(this.state, "formData.startDate_su", "")}
                            errorText={get(this.state, "inputErrors.startDate_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Internship End Date*/}
                        <TextField
                            isRequired={true}
                            labelText={"Internship End Date"}
                            type={"date"}
                            name={"endDate_su"}
                            value={get(this.state, "formData.endDate_su", "")}
                            errorText={get(this.state, "inputErrors.endDate_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Expected Number of Hours Per Week that the student needs to work*/}
                        <TextField
                            isRequired={true}
                            labelText={"Expected Number of Hours Per Week that the student needs to work"}
                            type={"number"}
                            name={"noh_su"}
                            placeholder={"Please enter a number less than or equal to 45"}
                            value={get(this.state, "formData.noh_su", "")}
                            errorText={get(this.state, "inputErrors.noh_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Describe the tasks student needs to complete*/}
                        <TextField
                            isRequired={true}
                            labelText={"Describe the tasks student needs to complete"}
                            name={"task_su"}
                            placeholder={"Each task should be separated by a comma and spacing e.g. Task 1, Task 2,"}
                            value={get(this.state, "formData.task_su", "")}
                            errorText={get(this.state, "inputErrors.task_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Describe what student will learn*/}
                        <TextField
                            isRequired={true}
                            labelText={"Describe what student will learn"}
                            placeholder={"Each item should be separated by a comma and spacing"}
                            name={"learn_su"}
                            value={get(this.state, "formData.learn_su", "")}
                            errorText={get(this.state, "inputErrors.learn_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                        {/*Student Specialization*/}
                        <Specialization
                            isRequired={true}
                            labelText={"Specialization"}
                            name={"specialization_su"}
                            value={get(this.state, "formData.specialization_su", "")}
                            errorText={get(this.state, "inputErrors.specialization_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

                    {/*How would supervisor broadly categorize type of training the specialization of the student will get?*/}
                    <div>
                    {(this.state.formData.specialization_su === 'IT')?
                        <IT
                            isRequired={true}
                            labelText={"IT: How would you broadly categorize type of training the IT student will get?"}
                            name={"jobtitle_su"}
                            value={get(this.state, "formData.jobtitle_su", "")}
                            errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />
                     :
                      <div>
                        {(this.state.formData.specialization_su === 'DS')?
                            <DS
                                isRequired={true}
                                labelText={"DS: How would you broadly categorize type of training the DS student will get?"}
                                name={"jobtitle_su"}
                                value={get(this.state, "formData.jobtitle_su", "")}
                                errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />:
                            <div>
                                {(this.state.formData.specialization_su === 'SE')?
                                    <SE
                                        isRequired={true}
                                        labelText={"SE: How would you broadly categorize type of training the SE student will get?"}
                                        name={"jobtitle_su"}
                                        value={get(this.state, "formData.jobtitle_su", "")}
                                        errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                        onChangeFn={(event) => this.onChangeFn(event)}
                                    />:
                                <div>
                                    {(this.state.formData.specialization_su === 'IM')?
                                    <IM
                                        isRequired={true}
                                        labelText={"IM: How would you broadly categorize type of training the IM student will get?"}
                                        name={"jobtitle_su"}
                                        value={get(this.state, "formData.jobtitle_su", "")}
                                        errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                        onChangeFn={(event) => this.onChangeFn(event)}
                                    />:
                                <div>
                                    {(this.state.formData.specialization_su === 'CS')?
                                    <CS
                                        isRequired={true}
                                        labelText={"CS: How would you broadly categorize type of training the CS student will get?"}
                                        name={"jobtitle_su"}
                                        value={get(this.state, "formData.jobtitle_su", "")}
                                        errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                        onChangeFn={(event) => this.onChangeFn(event)}
                                    />:
                                    <div>
                                    {(this.state.formData.specialization_su === 'CSNE')?
                                        <CSNE
                                            isRequired={true}
                                            labelText={"CSNE: How would you broadly categorize type of training the CSNE student will get?"}
                                            name={"jobtitle_su"}
                                            value={get(this.state, "formData.jobtitle_su", "")}
                                            errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                            onChangeFn={(event) => this.onChangeFn(event)}
                                        />:
                            <div>
                                {(this.state.formData.specialization_su === 'ISE')?
                                    <ISE
                                        isRequired={true}
                                        labelText={"ISE: How would you broadly categorize type of training the CSNE student will get?"}
                                        name={"jobtitle_su"}
                                        value={get(this.state, "formData.jobtitle_su", "")}
                                        errorText={get(this.state, "inputErrors.jobtitle_su", "")}
                                        onChangeFn={(event) => this.onChangeFn(event)}
                                    />
                                    :null}
                                    </div>
                                }</div>}
                                </div>}
                            </div>}
                    </div>}
                    </div>}
                    </div>

                        {/*Supervisor Agreement*/}
                        <Agreement
                            name={"agreement_su"}
                            value={get(this.state, "formData.agreement_su", "")}
                            errorText={get(this.state, "inputErrors.agreement_su", "")}
                            onChangeFn={(event) => this.onChangeFn(event)}
                        />

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

export default FormI1B;
