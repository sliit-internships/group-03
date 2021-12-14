import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const Frequently = ({
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
                    <option value="Once a week">Once a week</option>
                    <option value="Once in two weeks">Once in two weeks</option>
                    <option value="Once a Month">Once a Month</option>
                    <option value="Once in Two Months">Once in Two Months</option>
                    <option value="Only twice during the period">Only twice during the period</option>
                    <option value="Only once during the period">Only once during the period</option>
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

export default Frequently;

