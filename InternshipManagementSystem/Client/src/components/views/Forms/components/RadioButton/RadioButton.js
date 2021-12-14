import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const RadioButton = ({
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
                <div className="radio-buttons">
                    <input
                        value="Above Average"
                        name="platform"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Above Average
                    <br/>
                    <input
                        value="Average"
                        name="platform"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Average
                    <br/>
                    <input
                        value="Below Average"
                        name="platform"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Below Average
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

export default RadioButton;

