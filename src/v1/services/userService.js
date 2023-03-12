const db = require('../../database/db');

  const getAllUsers = async () => {
    return await db.pool.query("SELECT * FROM user");
  };
  
  const getOneUser = async (username) => {
    return await db.pool.query("SELECT * FROM user WHERE username=?", username);
  };
  
  const createNewUser = async (username, user_email, hashed_password, user_status) => {
    return await db.pool.query("INSERT INTO user (username, user_email, hashed_password, user_status) VALUES (?, ?, ?, ?)", [username, user_email, hashed_password, user_status]);
  };
  
  const updateOneUser = async (username, user_email, hashed_password, user_status, user_id) => {
    return await db.pool.query("UPDATE user SET username = ?, user_email = ?, hashed_password = ?, user_status = ? WHERE user_id = ?", [username, user_email, hashed_password, user_status, user_id]);
  };
  
  const deleteOneUser = async (user_id) => {
    return await db.pool.query("DELETE FROM user WHERE user_id = ?", user_id);
  };
  
  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
  };