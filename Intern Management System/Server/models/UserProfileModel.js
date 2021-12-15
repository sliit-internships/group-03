const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  regNo: {
    type: String,
    required: "Student ID is required",
    unique: "Student ID is already exists",
  },
  email: {
    type: String,
    required: "Email is required",
  },
  fullName: {
    type: String,
    required: "Fullname is required",
  },
  year: {
    type: String,
    required: "Current Year is required",
  },
  semester: {
    type: String,
    required: "Current Semester is required",
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
});

module.exports = {
  UserProfileModel: mongoose.model("UserProfile", UserProfileSchema),
};
