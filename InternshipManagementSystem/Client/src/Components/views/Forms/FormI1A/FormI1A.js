import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";
import "../form.css"
import TextField from "../components/text-field/TextField";
import Loader from "../components/loader/Loader";
import CurrentYear from "../components/text-field/CurrentYear";
import CompletedYear from "../components/text-field/CompletedYear";
import PlanedYear from "../components/text-field/PlanedYear";
import Specialization from "../components/text-field/Specialization";
import ButtonComponent from "../components/button/Button";
import {formI1AAPI} from "../config/config";
import {isEmpty} from "../helpers/common.helpers";
import CardHeader from "../../../Card/CardHeader";



class FormI1A extends Component {
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

            axios.post(formI1AAPI, this.state.formData)
                .then((result) => {

                    this.setState({
                        ...this.state,
                        loader: false
                    }, () => {

                        Swal.fire({
                            icon: 'success',
                            title: 'Successfully Registered',
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

validateFn = (formObj) => {
    let errors = {}
    let studentIdRegex = /^[IT]+[0-9]{8}$/;
    let nameRegex = /^([A-Z]\.)+$/;
    let mobileRegex = /^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\\d)\\d{6}$/;
    let homePhoneRegex = /^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\\d)\\d{6}$/;
    /*let supervisorEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;*/

    if (isEmpty(formObj.studentID)) {
        errors["studentID"] = "Student ID is required";
    } /*else
        if(studentIdRegex.test(formObj.studentID)) {
        errors["studentID"] = "Student ID is not valid";
    }*/

    if (isEmpty(formObj.currentYearRegister)) {
        errors["currentYearRegister"] = "This Field is required"
    }else
    if(formObj.currentYearRegister === "Year1" || formObj.currentYearRegister === "Year2") {
        errors["currentYearRegister"] = "!!You are not eligible to start Internship Module!!";
    }

    if (isEmpty(formObj.completedUptoNow)) {
        errors["completedUptoNow"] = "This Field is required"
    }

    if (isEmpty(formObj.planningToCompleteSecondYear)) {
        errors["planningToCompleteSecondYear"] = "This Field is required"
    }

    if (isEmpty(formObj.specialization)) {
        errors["specialization"] = "This Field is required"
    }

    if (isEmpty(formObj.studentName)) {
        errors["studentName"] = "Student Name is required";
    } else
    if(nameRegex.test(formObj.studentName)) {
        errors["studentName"] = "Student Name is not valid";
    }

    if (isEmpty(formObj.studentMobileNo)) {
        errors["studentMobileNo"] = "Student Mobile No is required";
    } else
    if(mobileRegex.test(formObj.studentMobileNo)) {
        errors["studentMobileNo"] = "Student Mobile No is not valid";
    }

    if (isEmpty(formObj.studentHomeNo)) {
        errors["studentHomeNo"] = "Student Home No is required";
    } else
    if(homePhoneRegex.test(formObj.studentHomeNo)) {
        errors["studentHomeNo"] = "Student Home No is not valid";
    }

    if (isEmpty(formObj.studentEmail)) {
        errors["studentEmail"] = "Student Email is required"
    }

    if (isEmpty(formObj.internshipStartDate)) {
        errors["internshipStartDate"] = "This Field is required"
    }

    if (isEmpty(formObj.supervisorEmail)) {
        errors["supervisorEmail"] = "Supervisor Email is required";
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
                                Form I-1A : To be filled by the student
                            </h5>

                            <p className={"text-white-50"}>
                                Internship Registration Form  - Part 1
                            </p>
                        </div>
                        </CardHeader>
                    <CardBody>
                        <div>
                            {/* SLIIT Student Identification Number */}
                            <TextField
                                isRequired={true}
                                labelText={"SLIIT Student Identification Number"}
                                name={"studentID"}
                                placeholder={"e.g IT17121966"}
                                value={get(this.state, "formData.studentID", "")}
                                errorText={get(this.state, "inputErrors.studentID", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Current Year of Registration at SLIIT */}
                            <CurrentYear
                                isRequired={true}
                                labelText={"Current Year of Registration at SLIIT"}
                                name={"currentYearRegister"}
                                value={get(this.state, "formData.currentYearRegister", "")}
                                errorText={get(this.state, "inputErrors.currentYearRegister", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Which calendar year have you completed or planning to complete your second year? */}
                            <CompletedYear
                                isRequired={true}
                                labelText={"Which calendar year have you completed or planning to complete your second year?"}
                                name={"completedUptoNow"}
                                value={get(this.state, "formData.completedUptoNow", "")}
                                errorText={get(this.state, "inputErrors.completedUptoNow", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Which period of the year are you planning to complete or completed your second year? */}
                            <PlanedYear
                                isRequired={true}
                                labelText={"Which period of the year are you planning to complete or completed your second year?"}
                                name={"planningToCompleteSecondYear"}
                                value={get(this.state, "formData.planningToCompleteSecondYear", "")}
                                errorText={get(this.state, "inputErrors.planningToCompleteSecondYear", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Specialization */}
                            <Specialization
                                isRequired={true}
                                labelText={"Specialization"}
                                name={"specialization"}
                                value={get(this.state, "formData.specialization", "")}
                                errorText={get(this.state, "inputErrors.specialization", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Student Name with Initials */}
                            <TextField
                                isRequired={true}
                                labelText={"Student Name with Initials"}
                                name={"studentName"}
                                placeholder={"e.g. Rathnayaka M.H.K.R."}
                                value={get(this.state, "formData.studentName", "")}
                                errorText={get(this.state, "inputErrors.studentName", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Student Mobile Phone Number */}
                            <TextField
                                isRequired={true}
                                labelText={"Student Mobile Phone Number"}
                                name={"studentMobileNo"}
                                placeholder={"e.g. 94772269563"}
                                value={get(this.state, "formData.studentMobileNo", "")}
                                errorText={get(this.state, "inputErrors.studentMobileNo", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Student Home Phone Number */}
                            <TextField
                                isRequired={true}
                                labelText={"Student Home Phone Number"}
                                name={"studentHomeNo"}
                                placeholder={"e.g. 94112590558"}
                                value={get(this.state, "formData.studentHomeNo", "")}
                                errorText={get(this.state, "inputErrors.studentHomeNo", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Student E-Mail (Enter One Primary E-mail Address that you use) */}
                            <TextField
                                isRequired={true}
                                labelText={"Student E-Mail (Enter One Primary E-mail Address that you use)"}
                                name={"studentEmail"}
                                placeholder={"e.g it17051456@my.sliit.lk"}
                                value={get(this.state, "formData.studentEmail", "")}
                                errorText={get(this.state, "inputErrors.studentEmail", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* What is the date you started or plan to start your internship? */}
                            <TextField
                                isRequired={true}
                                labelText={"What is the date you started or plan to start your internship?"}
                                type={"date"}
                                name={"internshipStartDate"}
                                value={get(this.state, "formData.internshipStartDate", "")}
                                errorText={get(this.state, "inputErrors.internshipStartDate", "")}
                                onChangeFn={(event) => this.onChangeFn(event)}
                            />

                            {/* Specify Supervisor E-Mail address for the supervisor to fill his/her information */}
                            <TextField
                                isRequired={true}
                                labelText={"Specify Supervisor E-Mail address for the supervisor to fill his/her information"}
                                name={"supervisorEmail"}
                                value={get(this.state, "formData.supervisorEmail", "")}
                                errorText={get(this.state, "inputErrors.supervisorEmail", "")}
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

export default FormI1A;
