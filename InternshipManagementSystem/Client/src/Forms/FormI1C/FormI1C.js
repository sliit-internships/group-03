import React, {Component} from 'react';
import "./formI_1C.css"

class FormI1C extends Component {
    render() {
        return (
            <div id="main-FormI1C-container">
                <div id="ia">
                    <h3 className="text-secondary text-center">Form I-1C: Supervisor Change Form</h3>
                    <h6 className="text-secondary text-center">(To be filled by the student)</h6><br/>
                    <form className="formAbc">
                        {/*SLIIT Student ID Number*/}
                        <label>SLIIT Student ID Number</label>
                        <input
                            id="i"
                            name="i"
                            type="text"
                            placeholder="Please enter your student id number without any spaces, e.g IT17121966"
                            required
                        />
                        <br/>
                        {/*Company Name*/}
                        <label>Company Name</label>
                        <input
                            id="cyr"
                            name="cyr"
                            type="text"
                            placeholder="Enter Your Answer"
                            required
                        />
                        <br/>
                        {/*Supervisor Name*/}
                        <label>Supervisor Name</label>
                        <input
                            id="yc"
                            name="yc"
                            type="text"
                            placeholder="Enter Your Answer"
                            required
                        />
                        <br/>
                        {/*Supervisor Title (Organizational Designation)*/}
                        <label>Supervisor Title (Organizational Designation)</label>
                        <input
                            id="w"
                            name="w"
                            type="text"
                            placeholder="Enter Your Answer"
                            required
                        />
                        <br/>
                        {/*Supervisor Contact Number*/}
                        <label>Supervisor Contact Number</label>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            placeholder="The value must be a number"
                            required
                        />
                        {/*Supervisor E-Mail Address (Enter One Valid Company E-mail Address)*/}
                        <label>Supervisor E-Mail Address (Enter One Valid Company E-mail Address)</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="such as abc@abc.com"
                            required
                        />
                        <br/>
                        {/*Your Agreement*/}
                        <label>Your Agreement</label>
                        <label> I certify above information is correct and take the full responsibility of the information provided</label><br/>
                        <br/>
                        <input type="button" value="Submit" className="btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormI1C;