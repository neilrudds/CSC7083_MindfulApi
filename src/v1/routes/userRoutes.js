const express = require("express");
const userController = require("../../v1/controllers/userController");
const methods = require("../methods");

const router = express.Router();

router.get("/", methods.ensureToken, userController.getAllUsers);

router.get("/:username", userController.getOneUser); // No JWT required for registering

router.post("/", userController.createNewUser); // No JWT required for registering

router.patch("/:user_id", methods.ensureToken, userController.updateOneUser);

router.delete("/:user_id", methods.ensureToken, userController.deleteOneUser);

module.exports = router;