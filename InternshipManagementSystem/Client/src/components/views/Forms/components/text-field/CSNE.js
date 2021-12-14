import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const CSNE = ({
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
                    <option value="Network Engineering">Network Engineering</option>
                    <option value="Systems Engineering">Systems Engineering</option>
                    <option value="Database Administration">Database Administration</option>
                    <option value="DevOps (Development Operations)">DevOps (Development Operations)</option>
                    <option value="SysOps (System Operations)">SysOps (System Operations)</option>
                    <option value="TechOps (Technical Operations)">TechOps (Technical Operations)</option>
                    <option value="NetOps (Network Operations)">NetOps (Network Operations)</option>
                    <option value="Robotic Process Automation">Robotic Process Automation</option>
                    <option value="Network Security Related">Network Security Related</option>
                    <option value="Cyber Security related">Cyber Security related</option>
                    <option value="Network Design and Architechture">Network Design and Architechture</option>
                    <option value="Server Administration">Server Administration</option>
                    <option value="Project Management">Project Management</option>
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

export default CSNE;

