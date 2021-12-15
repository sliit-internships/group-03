const express = require("express");

const formI1cCtrl = require("../controller/formI1C.controller");


const router = express.Router();

router.route("/")
    .post(formI1cCtrl.createFormI1C);


module.exports = {
    router
}


