const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormI1BSchema=new Schema({
    studentID_su: {
        type: String,
        required: "Student ID is required",
    },
    companyName_su: {
        type: String,
        required: "Company Name is required"
    },
    companyAddress_su: {
        type: String,
        required: "Company Address is required"
    },
    supervisorName_su: {
        type: String,
        required: "Supervisor Name is required"
    },
    supervisorTitle_su: {
        type: String,
        required: "Supervisor Title is required"
    },
    supervisorContactNo_su: {
        type: Number,
        required: "Supervisor Contact No is required"
    },
    supervisorEmail_su: {
        type: String,
        required: "Supervisor Email is required"
    },
    startDate_su: {
        type: Date,
        required: "Start Date is required"
    },
    endDate_su: {
        type: Date,
        required: "End Date is required"
    },
    noh_su: {
        type: Number,
        required: "No of Hours is required"
    },
    task_su: {
        type: String,
        required: "Task is required"
    },
    learn_su: {
        type: String,
        required: "Learn is required"
    },
    specialization_su: {
        type: String,
        required: "Specialization is required"
    },
    jobtitle_su: {
        type: String,
        required: "Specialization Related Internship Title is required"
    },
    agreement_su: {
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
    "FormI1BModel": mongoose.model("FormI1B", FormI1BSchema)
}