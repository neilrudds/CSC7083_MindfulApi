const express = require("express");
const moodController = require("../../v1/controllers/moodController");
const methods = require("../methods");

const router = express.Router();

router.get("/", methods.ensureToken, moodController.getAllMoods);

router.get("/:mood_id", methods.ensureToken, moodController.getOneMood);

router.post("/", methods.ensureToken, moodController.createNewMood);

router.patch("/:mood_id", methods.ensureToken, moodController.updateOneMood);

router.delete("/:mood_id", methods.ensureToken, moodController.deleteOneMood);

module.exports = router;