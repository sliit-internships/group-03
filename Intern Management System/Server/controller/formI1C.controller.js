const { FormI1CModel } = require("../models/FormI1CModel");

const createFormI1C = async (req, res) => {
    const formData = {
        studentID: req.body.studentID,
        companyName: req.body.companyName,
        supervisorName: req.body.supervisorName,
        supervisorTitle: req.body.supervisorTitle,
        supervisorContactNo: req.body.supervisorContactNo,
        supervisorEmail: req.body.supervisorEmail,
        agreement: req.body.agreement,
    }

    try {
        const createdFormI1C = await FormI1CModel.create(formData);

        res.status(201).json({ data: createdFormI1C });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createFormI1C
}