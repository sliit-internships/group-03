import React, { useRef, useState } from 'react';
import axios from 'axios';
import './file.css';
import {fileUploadAPI} from "../config/config";
import CardHeader from "../../../Card/CardHeader";
import GridContainer from "../../../Grid/GridContainer";
import GridItem from "../../../Grid/GridItem";
import Card from "../../../Card/Card";
import CardBody from "../../../Card/CardBody";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

function FormI6() {
    const classes = useStyles();

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post(fileUploadAPI, formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                path: 'http://localhost:8282' + res.data.path
            })
        }).catch(err => console.log(err))}

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Form-I6</h4>
                        <p className={classes.cardCategoryWhite}>
                            To be filled by the Intern Please ensure to upload duly filled set of forms at end of internship program complete to the provided page.
                        </p>
                    </CardHeader>
                    <CardBody>
                        <div className="file-upload">
                            <p className="text-center">Click on the "Choose File" button to upload a file</p>
                            <input type="file" ref={el} onChange={handleChange} />
                            <br/>
                            <div className="progessBar" style={{ width: progress }}>
                                {progress}
                            </div>
                            <br/>
                            <button onClick={uploadFile} className="upbutton">
                                Upload
                            </button>
                            <hr />
                            {/* displaying received file details */}
                            <a href="/" className="text-primary text-center">{data.name}</a>
                            <br/>
                            <br/>

                        </div>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default FormI6;