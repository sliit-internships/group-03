import React, {Component} from 'react';
import {Table} from "@material-ui/core";
import "./formI_13A.css"

class FormI3A extends Component {
    render() {
        return (
            <div id="main-FormI3A-container">
                <div id="ia">
                    <h3 className="text-secondary text-center">Form I – 3A</h3>
                    <h5 className="text-secondary text-center">INTERN’S DAILY DIARY</h5><br/>
                    <p>(To be filled by the Intern- Please ensure to upload duly filled set of forms at end of four weeks to the provided folder)</p>
                    <form className="formAbc">
                        <h4>Intern’s Information</h4>
                        {/*Intern’s Name*/}
                        <label>Intern’s Name</label>
                        <input
                            id="i"
                            name="i"
                            type="text"
                            required
                        />
                        <br/>
                        {/*Student ID*/}
                        <label>Student ID</label>
                        <input
                            id="cyr"
                            name="cyr"
                            type="text"
                            required
                        />
                        <br/>
                        <h4>Internship Information</h4>
                        {/*Internship Title*/}
                        <label>Internship Title</label>
                        <input
                            id="yc"
                            name="yc"
                            type="text"
                            required
                        />
                        <br/>
                        {/*Specialisation*/}
                        <label>Specialisation</label>
                        <input
                            id="w"
                            name="w"
                            type="text"
                            required
                        />
                        <br/>
                        {/*Supervisor Name*/}
                        <label>Supervisor Name</label>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            required
                        />
                        <br/>
                        <br/>
                        <h4>Training Information For the Week  (to be filled by the intern)</h4><br/>
                        <div>
                            <Table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Details and notes of work carried out, problems encountered and how solved etc.,sketches and dimensions to be given wherever possible</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <br/>
                        {/*SUPERVISOR COMMENTS FOR THE WEEK*/}
                        <h4>Supervisor Comments for the Week </h4>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            required
                        />
                        <br/>
                        {/*Supervisor’s Signature*/}
                        <label>Supervisor’s Signature</label>
                        <input
                            id="s"
                            name="s"
                            type="text"
                            required
                        />
                        <br/>
                        {/*Date*/}
                        <label>Date</label>
                        <input
                            id="s"
                            name="s"
                            type="date"
                            required
                        />
                        <br/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormI3A;