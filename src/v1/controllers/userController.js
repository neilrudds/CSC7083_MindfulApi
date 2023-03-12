const userService = require("../../v1/services/userService");

const getAllUsers = async (req, res) => {
  try {
    console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
    res.status(200).json(await userService.getAllUsers());
  } catch (err) {
    res.status(400).send(err.message)
  }
 };
  
  const getOneUser = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      res.status(200).json(await userService.getOneUser(req.params.username));
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const createNewUser = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      const { username, user_email, hashed_password, user_status } = req.body;
      var result = await userService.createNewUser(username, user_email, hashed_password, user_status);
      res.status(201).json({user_id: result.insertId});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const updateOneUser = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      const { username, user_email, hashed_password, user_status } = req.body;
      var result = userService.updateOneUser(username, user_email, hashed_password, user_status, req.params.user_id);
      if (result.affectedRows == 0) {
        res.status(404).json({result: "user not found"});
        return;
      }
      res.status(200).json({result: "user updated"});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };
  
  const deleteOneUser = async (req, res) => {
    try {
      console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
      var result = userService.deleteOneUser(req.params.user_id);
      if (result.affectedRows == 0) {
        res.status(404).json({result: "user not found"});
        return;
      }
      res.status(200).json({result: "user deleted"});
    } catch (err) {
      res.status(400).send(err.message)
    }
  };

  // Add support for BigInt onto the toJSON method
  BigInt.prototype.toJSON = function() {       
    return this.toString()
  }
  
  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
  };