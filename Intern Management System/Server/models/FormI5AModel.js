const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormI5ASchema=new Schema({
    studentID_sup: {
        type: String,
        required: "Student ID is required",
        unique: "Student ID is already exists"
    },
    internshipTitle_sup: {
        type: String,
        required: "Internship Title is required"
    },
    fromDate_sup: {
        type: Date,
        required: "From Date is required"
    },
    toDate_sup: {
        type: Date,
        required: "To Date is required"
    },
    companyName_sup: {
        type: String,
        required: "Company Name is required"
    },
    supervisorName_sup: {
        type: String,
        required: "Supervisor Name is required"
    },
    supervisorEmail_sup: {
        type: String,
        required: "Supervisor Email is required"
    },
    strengths_sup: {
        type: String,
        required: "Strengths are required"
    },
    weaknesses_sup: {
        type: String,
        required: "Weaknesses are required"
    },
    qow_sup: {
        type: String,
        required: "Quality of Work is required"
    },
    ta_sup: {
        type: String,
        required: "Technical Ability required"
    },
    communication_sup: {
        type: String,
        required: "Communication is required"
    },
    leadership_sup: {
        type: String,
        required: "Leadership is required"
    },
    points_sup: {
        type: String,
        required: "Provide some points on how student can develop his/her career after internship is required"
    },
    effective_sup: {
        type: String,
        required: "How effective has the Internship Program been in meeting the needs of your organization? is required"
    },
    suggest_sup: {
        type: String,
        required: "Please suggest ways you feel we could make our program more meaningful to the student and you, the employer"
    },
    overallFeedback_sup: {
        type: String,
        required: "Overall Feedback is required"
    },
    otherComments_sup: {
        type: String,
        required: "Any other comments about the student for the Faculty Advisory is required"
    },
    overallStudentPerformance_sup: {
        type: String,
        required: "Overall Students Performance is required"
    },
    percentage_sup: {
        type: Number,
        required: "Your percentage rating (out of 100) on student's overall performance as an intern is required"
    },
    agreement1_sup: {
        type: String,
        required: "Supervisor Agreement1 is required"
    },
    agreement2_sup: {
        type: String,
        required: "Supervisor Agreement2 is required"
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
    "FormI5AModel": mongoose.model("FormI5A", FormI5ASchema)
}