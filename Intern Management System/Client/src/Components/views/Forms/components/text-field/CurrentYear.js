import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const CurrentYear = ({
                       elementWrapperStyle = "",
                       labelText = "",
                       type = "select",
                       name = "",
                       isRequired = false,
                       value = "",
                       placeholder = "",
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
                    <option value="Year1">Year1</option>
                    <option value="Year2">Year2</option>
                    <option value="Year3">Year3</option>
                    <option value="Year4">Year4</option>
                    <option value="Year4completed-Prorataregistered">Year 4 completed- Prorata registered</option>
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

export default CurrentYear;

