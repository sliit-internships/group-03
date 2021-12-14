const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormI1BOnlineSchema=new Schema({
    studentID_on: {
        type: String,
        required: "Student ID is required",
        unique: "Student ID is already exists"
    },
    companyName_on: {
        type: String,
        required: "Company Name is required"
    },
    internshipTitle_on: {
        type: String,
        required: "Internship Title is required"
    },
    fromDate_on: {
        type: Date,
        required: "Internship Start Date is required"
    },
    toDate_on: {
        type: Date,
        required: "Internship End Date is required"
    },
    frequently_on: {
        type: String,
        required: "Frequently is required"
    },
    summary_on: {
        type: String,
        required: "Summary is required"
    },
    overallComment_on: {
        type: String,
        required: "Overall Comment is required"
    },
    supervisorEmail_on: {
        type: String,
        required: "Supervisor Email is required"
    },
    agreement_on: {
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
    "FormI1BOnlineModel": mongoose.model("FormI1BOnline", FormI1BOnlineSchema)
}