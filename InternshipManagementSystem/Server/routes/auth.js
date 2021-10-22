const express = require('express');
const router = express.Router();

const { 
    register, 
    login, 
    forgeotpassword, 
    resetpassword 
} = require('../controllers/auth')

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgeotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
