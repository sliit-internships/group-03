import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";
import "../form.css"
import {formI1CAPI} from "../config/config";
import {isEmpty} from "../helpers/common.helpers";
import Loader from "../components/loader/Loader";
import TextField from "../components/text-field/TextField";
import CheckBox from "../components/CheckBox/CheckBox";
import ButtonComponent from "../components/button/Button";
import CardHeader from "../../../Card/CardHeader";


class FormI1C extends Component {
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

                axios.post(formI1CAPI, this.state.formData)
                    .then((result) => {

                        this.setState({
                            ...this.state,
                            loader: false
                        }, () => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Saved',
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

    validateFn = (formObj2) => {
        let errors = {}

        if (isEmpty(formObj2.studentID)) {
            errors["studentID"] = "Student ID is required";
        }

        if (isEmpty(formObj2.companyName)) {
            errors["companyName"] = "Company Name is required"
        }

        if (isEmpty(formObj2.supervisorName)) {
            errors["supervisorName"] = "Supervisor Name is required"
        }

        if (isEmpty(formObj2.supervisorTitle)) {
            errors["supervisorTitle"] = "Supervisor Title is required"
        }

        if (isEmpty(formObj2.supervisorContactNo)) {
            errors["supervisorContactNo"] = "Supervisor Contact No is required"
        }

        if (isEmpty(formObj2.supervisorEmail)) {
            errors["supervisorEmail"] = "Supervisor Email is required";
        }

        if (isEmpty(formObj2.agreement)) {
            errors["agreement"] = "Supervisor Agreement is required";
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
                                    Form I-1C: Supervisor Change Form
                                </h5>

                                <p className={"text-white-50"}>
                                    (To be filled by the student)
                                </p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div>
                                {/*SLIIT Student ID Number*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"SLIIT Student ID Number"}
                                    name={"studentID"}
                                    value={get(this.state, "formData.studentID", "")}
                                    errorText={get(this.state, "inputErrors.studentID", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Company Name*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Company Name"}
                                    name={"companyName"}
                                    value={get(this.state, "formData.companyName", "")}
                                    errorText={get(this.state, "inputErrors.companyName", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Name*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor Name"}
                                    name={"supervisorName"}
                                    value={get(this.state, "formData.supervisorName", "")}
                                    errorText={get(this.state, "inputErrors.supervisorName", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Title (Organizational Designation)*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor Title (Organizational Designation)"}
                                    name={"supervisorTitle"}
                                    value={get(this.state, "formData.supervisorTitle", "")}
                                    errorText={get(this.state, "inputErrors.supervisorTitle", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Contact Number*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor Contact Number"}
                                    name={"supervisorContactNo"}
                                    value={get(this.state, "formData.supervisorContactNo", "")}
                                    errorText={get(this.state, "inputErrors.supervisorContactNo", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor E-Mail Address (Enter One Valid Company E-mail Address)*/}
                                <TextField
                                    isRequired={true}
                                    labelText={"Supervisor E-Mail Address (Enter One Valid Company E-mail Address)"}
                                    name={"supervisorEmail"}
                                    value={get(this.state, "formData.supervisorEmail", "")}
                                    errorText={get(this.state, "inputErrors.supervisorEmail", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                {/*Supervisor Agreement*/}
                                <CheckBox
                                    name={"agreement"}
                                    value={get(this.state, "formData.agreement", "")}
                                    errorText={get(this.state, "inputErrors.agreement", "")}
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

export default FormI1C;
