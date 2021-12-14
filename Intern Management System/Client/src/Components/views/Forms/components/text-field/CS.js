import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const CS = ({
                            elementWrapperStyle = "",
                            labelText = "",
                            type = "select",
                            name = "",
                            isRequired = false,
                            value = "",
                            errorText = "",
                            helperText = "",
                            onChangeFn = empty,

                        }) => {
    return (
        <Fragment>
            <FormGroup className={`${elementWrapperStyle} ${errorText ? "text-danger" : ""}`}>
                <Label>{labelText} {isRequired ? (<span style={{ color: "red" }}>*</span>) : null}</Label>
                <br/>
                <select
                    type={type}
                    className={`errorText ? "is-invalid" : "" form-control`}
                    name={name}
                    value={value}
                    onChange={(event) => {
                        onChangeFn({
                            value: event.target.value,
                            name: name,
                            eventInfo: event
                        })
                    }}
                >
                    <option value="">---Select Option---</option>
                    <option value="Secure Software Development and Engineering">Secure Software Development and Engineering</option>
                    <option value="Network Security Administration/Engineering">Network Security Administration/Engineering</option>
                    <option value="Information Security/Cybersecurity Engineering">Information Security/Cybersecurity Engineering</option>
                    <option value="Security Operations Centre (SOC) ">Security Operations Centre (SOC) </option>
                    <option value="Digital Forensics">Digital Forensics</option>
                    <option value="Vulnerability Assessment and Penetration testing">Vulnerability Assessment and Penetration testing</option>
                    <option value="Information Security Auditing">Information Security Auditing</option>
                    <option value="Information Security Risk Management">Information Security Risk Management</option>
                    <option value="Information Security Compliance">Information Security Compliance</option>
                    <option value="Information Security Governance">Information Security Governance</option>
                    <option value="Incident Handling/Response">Incident Handling/Response</option>
                    <option value="Secure System Administration/Engineering">Secure System Administration/Engineering</option>
                    <option value="Information Security Policy Management">Information Security Policy Management</option>
                    <option value="Dev Ops Security">Dev Ops Security</option>
                    <option value="Data Intelligence">Data Intelligence</option>
                    <option value="Platform Security/Cloud Security Engineering">Platform Security/Cloud Security Engineering</option>
                    <option value="Security Pre-sales Engineering">Security Pre-sales Engineering</option>
                    <option value="Data Privacy Engineering">Data Privacy Engineering</option>
                    <option value="Cyber Defense Operations">Cyber Defense Operations</option>
                    <option value="Health Information Security">Health Information Security</option>
                    <option value="Security on Edge devices">Security on Edge devices</option>
                    <option value="IOT security and industrial security systems (hardware security aspects)">IOT security and industrial security systems (hardware security aspects)</option>
                    <option value="Other">Other</option>
                </select>
                <small>
                    {
                        errorText ? errorText : helperText
                    }
                </small>

            </FormGroup>
        </Fragment>
    )
}

export default CS;

