const express = require("express");

const formI1ACtrl = require("../controller/formI1A.controller");


const router = express.Router();

router.route("/")
    .post(formI1ACtrl.createFormI1A)
    .get(formI1ACtrl.getAllFormI1A);


module.exports = {
    router
}


