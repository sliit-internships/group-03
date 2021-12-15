import React, { Fragment } from "react";
import { FormGroup} from "reactstrap";

const empty = (...para) => undefined;

const CheckBox = ({
                         elementWrapperStyle = "",
                         name = "",
                         errorText = "",
                         helperText = "",
                         onChangeFn = empty,

                     }) => {
    return (
        <Fragment>
            <FormGroup className={`${elementWrapperStyle} ${errorText ? "text-danger" : ""}`}>
                <br/>
                <div>
                    <input
                        value="Agree"
                        name="example"
                        type="checkbox"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; I  certify above information is correct and take the full responsibility of the information provided
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

export default CheckBox;

