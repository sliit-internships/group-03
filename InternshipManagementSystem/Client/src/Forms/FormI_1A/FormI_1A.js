import React, {Component} from 'react';
import "formI_1A.css"

class FormI1A extends Component {
    render() {
        return (
            <div id="main-FormI1A-container">
                <div id="ia">
                    <h3 className="text-secondary text-center">FormI-1A</h3><br/>
                    <form className="formAbc">
                        {/*SLIIT Student Identification Number*/}
                        <label>SLIIT Student Identification Number</label>
                        <input
                            id="ssin"
                            name="ssin"
                            type="text"
                            placeholder="Please enter your student id number without any spaces, e.g IT17121966"
                            required
                        />
                        <br/>
                        {/*Current Year of Registration at SLIIT*/}
                        <label>Current Year of Registration at SLIIT</label>
                        <input
                            id="cyr"
                            name="cyr"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Which calendar year have you completed or planning to complete your second year?*/}
                        <label>Which calendar year have you completed or planning to complete your second year?</label>
                        <input
                            id="yc"
                            name="yc"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Which period of the year are you planning to complete or completed your second year?*/}
                        <label>Which period of the year are you planning to complete or completed your second year?</label>
                        <input
                            id="w"
                            name="w"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Specialization*/}
                        <label>Specialization</label>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        {/*Student Name with Initials*/}
                        <label>Student Name with Initials</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Rathnayaka M.H.K.R."
                            required
                        />
                        <br/>
                        {/*Student Mobile Phone Number*/}
                        <label>Student Mobile Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            placeholder="e.g. 94772269563"
                            required
                        />
                        <br/>
                        {/*Student Home Phone Number*/}
                        <label>Student Home Phone Number</label>
                        <input
                            id="h_phone"
                            name="h_phone"
                            placeholder="e.g. 94112590558"
                            required
                        />
                        <br/>
                        {/*Student E-Mail (Enter One Primary E-mail Address that you use)*/}
                        <label>Student E-Mail (Enter One Primary E-mail Address that you use)</label>
                        <input
                            id="mail"
                            name="mail"
                            type="email"
                            placeholder="e.g it17051456@my.sliit.lk"
                            required
                        />
                        <br/>
                        {/*What is the date you started or plan to start your internship?*/}
                        <label>What is the date you started or plan to start your internship?</label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Please input date"
                            required
                        />
                        <br/>
                        {/*Specify Supervisor E-Mail address for the supervisor to fill his/her information*/}
                        <label>Specify Supervisor E-Mail address for the supervisor to fill his/her information</label>
                        <input
                            id="s_mail"
                            name="s_mail"
                            type="email"
                            required
                        />
                        <br/>
                        <input type="button" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormI1A;