import React, {Component} from 'react';
import axios from "axios";
import {formI1AAPI} from "../config/config";
import Table from "@material-ui/core/Table";

class FormI1Aresponses extends Component {
    constructor() {
        super()
        this.state = {
            tt: []
        }
    }

    componentDidMount() {
        let photoArray = []; //photoArray
        let getPhoto;
        axios.get(formI1AAPI)

            .then(res => {
                const myObject = JSON.parse(res.data.data);
                photoArray.push(myObject);
                this.setState({
                    tt: myObject
                });
            })

            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        const { tt } = this.state;
        return (
            <div>
                <br/>
                <br/>
            <div className="table-wrapper">
                <h3 className="text-success text-center">Form I-1A Responses</h3><br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>StudentID</th>
                        <th>Current Year Register</th>
                        <th>Completed Upto Now</th>
                        <th>Planning To Complete Second Year</th>
                        <th>Specialization</th>
                        <th>Student Name</th>
                        <th>MobileNo</th>
                        <th>HomeNo</th>
                        <th>Student Email</th>
                        <th>Internship StartDate</th>
                        <th>Supervisor Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}

export default FormI1Aresponses;
