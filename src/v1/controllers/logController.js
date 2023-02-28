const logService = require("../../v1/services/logService");

const getAllLogs = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    res.status(200).json(await logService.getAllLogs());
  } catch (err) {
    res.status(400).send(err.message)
  }
 };

const getAllUserLogs = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    res.status(200).json(await logService.getAllUserLogs(req.params.user_id));
  } catch (err) {
    res.status(400).send(err.message)
  }
 };

 const createNewLog = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    const { user_id, mood_id, mood_comments } = req.body;
    var result = await logService.createNewLog(user_id, mood_id, mood_comments);
    res.status(201).json({log_id: result.insertId});
  } catch (err) {
    res.status(400).send(err.message)
  }
};

const updateOneLog = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    const { mood_id, mood_comments } = req.body;
    var result = logService.updateOneLog(mood_id, mood_comments, req.params.mood_log_id);
    if (result.affectedRows == 0) {
      res.status(404).json({result: "log not found"});
      return;
    }
    res.status(200).json({result: "log updated"});
  } catch (err) {
    res.status(400).send(err.message)
  }
};

const deleteOneLog = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    var result = logService.deleteOneLog(req.params.mood_log_id);
    if (result.affectedRows == 0) {
      res.status(404).json({result: "log not found"});
      return;
    }
    res.status(200).json({result: "log deleted"});
  } catch (err) {
    res.status(400).send(err.message)
  }
};
  
 module.exports = {
  getAllLogs,
  getAllUserLogs,
  createNewLog,
  updateOneLog,
  deleteOneLog
};