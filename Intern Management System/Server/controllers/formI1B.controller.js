const { FormI1BModel } = require("../models/FormI1BModel");

const createFormI1B = async (req, res) => {
    const formData = {
        studentID_su: req.body.studentID_su,
        companyName_su: req.body.companyName_su,
        companyAddress_su: req.body.companyAddress_su,
        supervisorName_su: req.body.supervisorName_su,
        supervisorTitle_su: req.body.supervisorTitle_su,
        supervisorContactNo_su: req.body.supervisorContactNo_su,
        supervisorEmail_su: req.body.supervisorEmail_su,
        startDate_su: req.body.startDate_su,
        endDate_su: req.body.endDate_su,
        noh_su: req.body.noh_su,
        task_su: req.body.task_su,
        learn_su: req.body.learn_su,
        specialization_su: req.body.specialization_su,
        jobtitle_su: req.body.jobtitle_su,
        agreement_su: req.body.agreement_su,
    }

    try {
        const createdFormI1B = await FormI1BModel.create(formData);

        res.status(201).json({ data: createdFormI1B });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createFormI1B
}