const express = require("express");
const logController = require("../../v1/controllers/logController");
const methods = require("../methods");

const router = express.Router();

router.get("/", methods.ensureToken, logController.getAllLogs);

router.get("/:user_id", methods.ensureToken, logController.getAllUserLogs);

router.post("/", methods.ensureToken, logController.createNewLog);

router.patch("/:mood_log_id", methods.ensureToken, logController.updateOneLog);

router.delete("/:mood_log_id", methods.ensureToken, logController.deleteOneLog);

module.exports = router;