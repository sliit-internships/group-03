const express = require("express");

const formI1BCtrl = require("../controller/formI1B.controller");


const router = express.Router();

router.route("/")
    .post(formI1BCtrl.createFormI1B);


module.exports = {
    router
}