const express = require("express");
const loginController = require("../../v1/controllers/loginController");

const router = express.Router();

router.post("/", loginController.login);

module.exports = router;