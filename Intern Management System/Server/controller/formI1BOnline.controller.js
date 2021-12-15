const { FormI1BOnlineModel } = require("../models/FormI1BOnlineModel");

const createFormI1BOnline = async (req, res) => {
    const formData = {
        studentID_on: req.body.studentID_on,
        companyName_on: req.body.companyName_on,
        internshipTitle_on: req.body.internshipTitle_on,
        fromDate_on: req.body.fromDate_on,
        toDate_on: req.body.toDate_on,
        frequently_on: req.body.frequently_on,
        summary_on: req.body.summary_on,
        overallComment_on: req.body.overallComment_on,
        supervisorEmail_on: req.body.supervisorEmail_on,
        agreement_on: req.body.agreement_on,
    }

    try {
        const createdFormI1BOnline = await FormI1BOnlineModel.create(formData);

        res.status(201).json({ data: createdFormI1BOnline });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createFormI1BOnline
}