import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const SE = ({
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
                    <option value="Front end software development">Front end software development</option>
                    <option value="Back end software development">Back end software development</option>
                    <option value="Full stack software development">Full stack software development</option>
                    <option value="Mobile application development">Mobile application development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Data Engineering (collecting, storing and processing data)">Data Engineering (collecting, storing and processing data)</option>
                    <option value="Robotic Process Automation">Robotic Process Automation</option>
                    <option value="DevOps (Development Operations)">DevOps (Development Operations)</option>
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

export default SE;

