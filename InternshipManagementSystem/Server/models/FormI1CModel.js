const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormI1CSchema=new Schema({
    studentID: {
        type: String,
        required: "Student ID is required",
        unique: "Student ID is already exists"
    },
    companyName: {
        type: String,
        required: "Company Name is required"
    },
    supervisorName: {
        type: String,
        required: "Supervisor Name is required"
    },
    supervisorTitle: {
        type: String,
        required: "Supervisor Title is required"
    },
    supervisorContactNo: {
        type: Number,
        required: "Supervisor Contact No is required"
    },
    supervisorEmail: {
        type: String,
        required: "Supervisor Email is required"
    },
    agreement: {
        type: String,
        required: "Supervisor Agreement is required"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
    }
});

module.exports = {
    "FormI1CModel": mongoose.model("FormI1C", FormI1CSchema)
}