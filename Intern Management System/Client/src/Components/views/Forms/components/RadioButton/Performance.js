import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const Performance = ({
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
                        value="Outstanding"
                        name="platform2"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Outstanding
                    <br/>
                    <input
                        value="Very Good"
                        name="platform2"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Very Good
                    <br/>
                    <input
                        value="Good"
                        name="platform2"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Good
                    <br/>
                    <input
                        value="Marginal"
                        name="platform2"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Marginal
                    <br/>
                    <input
                        value="Unsatisfactory"
                        name="platform2"
                        type="radio"
                        onChange={(event) => {
                            onChangeFn({
                                value: event.target.value,
                                name: name,
                                eventInfo: event
                            })
                        }}
                    />
                    &nbsp; Unsatisfactory
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

export default Performance;

