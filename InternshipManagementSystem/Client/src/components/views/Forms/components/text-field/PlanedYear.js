import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const PlanedYear = ({
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
                    <option value="Jan-Jun">Jan-Jun</option>
                    <option value="Jul-Nov">Jul-Nov</option>
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

export default PlanedYear;

