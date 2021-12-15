import React, { Fragment } from "react";
import { FormGroup, Label} from "reactstrap";

const empty = (...para) => undefined;

const Specialization = ({
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
                    <option value="IT">IT</option>
                    <option value="DS">DS</option>
                    <option value="SE">SE</option>
                    <option value="IM">IM</option>
                    <option value="CS">CS</option>
                    <option value="CSNE">CSNE</option>
                    <option value="ISE">ISE</option>
                    <option value="Not Yet Finalized(2nd year Student)">Not Yet Finalized(2nd year Student)</option>
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

export default Specialization;

