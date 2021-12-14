const { FormI1AModel } = require("../models/FormI1AModel");

const createFormI1A = async (req, res) => {
    const formData = {
        studentID: req.body.studentID,
        currentYearRegister: req.body.currentYearRegister,
        completedUptoNow: req.body.completedUptoNow,
        planningToCompleteSecondYear: req.body.planningToCompleteSecondYear,
        specialization: req.body.specialization,
        studentName: req.body.studentName,
        studentMobileNo: req.body.studentMobileNo,
        studentHomeNo: req.body.studentHomeNo,
        studentEmail: req.body.studentEmail,
        internshipStartDate: req.body.internshipStartDate,
        supervisorEmail: req.body.supervisorEmail,
    }

    try {
        const createdFormI1A = await FormI1AModel.create(formData);
        res.status(201).json({ data: createdFormI1A });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const getAllFormI1A = async (req, res) => {
    try {
        const f1 = await FormI1AModel.find();

        res.status(200).json({ data: f1});
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createFormI1A,
    getAllFormI1A
}