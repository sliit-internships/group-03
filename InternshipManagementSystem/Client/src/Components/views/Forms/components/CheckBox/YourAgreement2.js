import React, { Fragment } from "react";
import { FormGroup} from "reactstrap";

const empty = (...para) => undefined;

const YourAgreement2 = ({
                      elementWrapperStyle = "",
                      name = "",
                      errorText = "",
                      helperText = "",
                      onChangeFn = empty,

                  }) => {
    return (
        <Fragment>
            <FormGroup className={`${elementWrapperStyle} ${errorText ? "text-danger" : ""}`}>
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
                    &nbsp; I have given this feedback to the student
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

export default YourAgreement2;

