const { UserProfileModel } = require("../models/UserProfileModel");

const createUserProfile = async (req, res) => {
  const formData = {
    regNo: req.body.regNo,
    email: req.body.email,
    fullName: req.body.fullName,
    year: req.body.year,
    semester: req.body.semester,
  };

  try {
    const createdUserProfile = await UserProfileModel.create(formData);
    res.status(201).json({ data: createdUserProfile });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

const getAllUserProfile = async (req, res) => {
  try {
    const f1 = await UserProfileModel.find();

    res.status(200).json({ data: f1 });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

module.exports = {
  createUserProfile,
  getAllUserProfile,
};
