const express = require("express");

const formI5ACtrl = require("../controller/formI5A.controller");


const router = express.Router();

router.route("/")
    .post(formI5ACtrl.createFormI5A);


module.exports = {
    router
}