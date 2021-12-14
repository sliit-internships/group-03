const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormI1ASchema=new Schema({
    studentID: {
        type: String,
        required: "Student ID is required",
        unique: "Student ID is already exists"
    },
    currentYearRegister: {
        type: String,
        required: "Current Year of Registration at SLIIT is required"
    },
    completedUptoNow: {
        type: String,
        required: "Completed Year Upto Now is required"
    },
    planningToCompleteSecondYear: {
        type: String,
        required: "Which period of the year are you planning to complete or completed your second year is required"
    },
    specialization: {
        type: String,
        required: "Specialization is required"
    },
    studentName: {
        type: String,
        required: "Student Name with initials is required"
    },
    studentMobileNo: {
        type: Number,
        required: "Student Mobile Number is required"
    },
    studentHomeNo: {
        type: Number,
        required: "Student Home Phone Number is required"
    },
    studentEmail: {
        type: String,
        required: "Student E-Mail is required"
    },
    internshipStartDate: {
        type: Date,
        required: "The date you started or plan to start your internship is required"
    },
    supervisorEmail: {
        type: String,
        required: "Supervisor E-Mail address is required"
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
    "FormI1AModel": mongoose.model("FormI1A", FormI1ASchema)
}