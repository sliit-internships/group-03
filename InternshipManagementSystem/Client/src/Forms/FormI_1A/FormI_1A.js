import React, {Component} from 'react';
import "./formI_1A.css"


class FormI1A extends Component {
    render() {
        return (
            <div id="main-FormI1A-container">
                <div id="ia">
                    <h3 className="text-secondary text-center">Form I-1A : To be filled by the student</h3><br/>
                    <form className="formAbc">
                        {/*SLIIT Student Identification Number*/}
                        <label>1. SLIIT Student Identification Number<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="ssin"
                            name="ssin"
                            type="text"
                            placeholder="Please enter your student id number without any spaces, e.g IT17121966"
                            required
                        />
                        <br/>
                        {/*Current Year of Registration at SLIIT*/}
                        <label>2. Current Year of Registration at SLIIT<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="cyr"
                            name="cyr"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Which calendar year have you completed or planning to complete your second year?*/}
                        <label>3. Which calendar year have you completed or planning to complete your second year?<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="yc"
                            name="yc"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Which period of the year are you planning to complete or completed your second year?*/}
                        <label>4. Which period of the year are you planning to complete or completed your second year?<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="w"
                            name="w"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Specialization*/}
                        <label>5. Specialization<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            placeholder="Select Your Answer"
                            required
                        />
                        <br/>
                        {/*Student Name with Initials*/}
                        <label>6. Student Name with Initials<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Rathnayaka M.H.K.R."
                            required
                        />
                        <br/>
                        {/*Student Mobile Phone Number*/}
                        <label>7. Student Mobile Phone Number<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="phone"
                            name="phone"
                            placeholder="e.g. 94772269563"
                            required
                        />
                        <br/>
                        {/*Student Home Phone Number*/}
                        <label>8. Student Home Phone Number<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="h_phone"
                            name="h_phone"
                            placeholder="e.g. 94112590558"
                            required
                        />
                        <br/>
                        {/*Student E-Mail (Enter One Primary E-mail Address that you use)*/}
                        <label>9. Student E-Mail (Enter One Primary E-mail Address that you use)<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="mail"
                            name="mail"
                            type="email"
                            placeholder="e.g it17051456@my.sliit.lk"
                            required
                        />
                        <br/>
                        {/*What is the date you started or plan to start your internship?*/}
                        <label>10. What is the date you started or plan to start your internship?<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Please input date"
                            required
                        />
                        <br/>
                        {/*Specify Supervisor E-Mail address for the supervisor to fill his/her information*/}
                        <label>11. Specify Supervisor E-Mail address for the supervisor to fill his/her information<span style={{ color: "red", fontSize:"1.1rem"}}>*</span></label>
                        <input
                            id="s_mail"
                            name="s_mail"
                            type="email"
                            required
                        />
                        <br/>
                        <input type="button" value="Submit" className="btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormI1A;