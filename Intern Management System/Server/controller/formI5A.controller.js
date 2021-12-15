const { FormI5AModel } = require("../models/FormI5AModel");

const createFormI5A = async (req, res) => {
    const formData = {
        studentID_sup: req.body.studentID_sup,
        internshipTitle_sup: req.body.internshipTitle_sup,
        fromDate_sup: req.body.fromDate_sup,
        toDate_sup: req.body.toDate_sup,
        companyName_sup: req.body.companyName_sup,
        supervisorName_sup: req.body.supervisorName_sup,
        supervisorEmail_sup: req.body.supervisorEmail_sup,
        strengths_sup: req.body.strengths_sup,
        weaknesses_sup: req.body.weaknesses_sup,
        qow_sup: req.body.qow_sup,
        ta_sup: req.body.ta_sup,
        communication_sup: req.body.communication_sup,
        leadership_sup: req.body.leadership_sup,
        points_sup: req.body.points_sup,
        effective_sup: req.body.effective_sup,
        suggest_sup: req.body.suggest_sup,
        overallFeedback_sup: req.body.overallFeedback_sup,
        otherComments_sup: req.body.otherComments_sup,
        overallStudentPerformance_sup: req.body.overallStudentPerformance_sup,
        percentage_sup: req.body.percentage_sup,
        agreement1_sup: req.body.agreement1_sup,
        agreement2_sup: req.body.agreement2_sup,
    }

    try {
        const createdFormI5A = await FormI5AModel.create(formData);

        res.status(201).json({ data: createdFormI5A });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createFormI5A
}