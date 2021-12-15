const express = require("express");

const formI1bOnlineCtrl = require("../controller/formI1BOnline.controller");


const router = express.Router();

router.route("/")
    .post(formI1bOnlineCtrl.createFormI1BOnline);


module.exports = {
    router
}


