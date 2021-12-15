const express = require("express");

const UserProfileCtrl = require("../controller/UserProfile.controller");

const router = express.Router();

router
  .route("/")
  .post(UserProfileCtrl.createUserProfile)
  .get(UserProfileCtrl.getAllUserProfile);

module.exports = {
  router,
};
