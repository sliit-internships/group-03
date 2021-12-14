import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const YourAgreement1 = ({
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
                    &nbsp; I certify that above information is correct and genuine feedback of mine
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

export default YourAgreement1;

