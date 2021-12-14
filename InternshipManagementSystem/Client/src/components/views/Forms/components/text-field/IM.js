import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const IM = ({
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
                    <option value="Full stack software development">Full stack software development</option>
                    <option value="Mobile application development">Mobile application development</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Audio Engineering">Audio Engineering</option>
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

export default IM;

