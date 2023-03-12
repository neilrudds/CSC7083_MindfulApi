const moodService = require("../../v1/services/moodService");

const getAllMoods = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    res.status(200).json(await moodService.getAllMoods());
  } catch (err) {
    res.status(400).send(err.message)
  }
 };
  
  const getOneMood = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      res.status(200).json(await moodService.getOneMood(req.params.mood_id));
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const createNewMood = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      const { description, html_colour } = req.body;
      var result = await moodService.createNewMood(description, html_colour);
      res.status(201).json({mood_id: result.insertId});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const updateOneMood = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      const { description, html_colour } = req.body;
      var result = moodService.updateOneMood(description, html_colour, req.params.mood_id);
      if (result.affectedRows == 0) {
        res.status(404).json({result: "mood not found"});
        return;
      }
      res.status(200).json({result: "mood updated"});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const deleteOneMood = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      var result = moodService.deleteOneMood(req.params.mood_id);
      if (result.affectedRows == 0) {
        res.status(404).json({result: "mood not found"});
        return;
      }
      res.status(200).json({result: "mood deleted"});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };

  // Add support for BigInt onto the toJSON method
  BigInt.prototype.toJSON = function() {       
    return this.toString()
  }
  
  module.exports = {
    getAllMoods,
    getOneMood,
    createNewMood,
    updateOneMood,
    deleteOneMood,
  };