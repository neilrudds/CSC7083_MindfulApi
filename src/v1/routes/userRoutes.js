const express = require("express");
const userController = require("../../v1/controllers/userController");
const methods = require("../methods");

const router = express.Router();

router.get("/", methods.ensureToken, userController.getAllUsers);

router.get("/:username", methods.ensureToken, userController.getOneUser);

router.post("/", methods.ensureToken, userController.createNewUser);

router.patch("/:user_id", methods.ensureToken, userController.updateOneUser);

router.delete("/:user_id", methods.ensureToken, userController.deleteOneUser);

module.exports = router;