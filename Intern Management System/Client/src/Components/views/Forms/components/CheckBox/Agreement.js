import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const Agreement = ({
                            elementWrapperStyle = "",
                            labelText = "",
                            name = "",
                            isRequired = false,
                            errorText = "",
                            helperText = "",
                            onChangeFn = empty,

                        }) => {
    return (
        <Fragment>
            <FormGroup className={`${elementWrapperStyle} ${errorText ? "text-danger" : ""}`}>
                <Label>{labelText} {isRequired ? (<span style={{ color: "red" }}>*</span>) : null}</Label>
                <br/>
                <div>
                    <input
                        value="Agree"
                        name="example123"
                        type="checkbox"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; We accept this student and would permit leave for the student for mandatory academic activities such as examinations during week days if and when required
                    <br/>
                </div>
                <small>
                    {
                        errorText ? errorText : helperText
                    }
                </small>

            </FormGroup>
        </Fragment>
    )
}

export default Agreement;

