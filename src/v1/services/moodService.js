const db = require('../../database/db');

  const getAllMoods = async () => {
    return await db.pool.query("SELECT * FROM mood");
  };
  
  const getOneMood = async (mood_id) => {
    return await db.pool.query("SELECT * FROM mood WHERE mood_id=?", mood_id);
  };
  
  const createNewMood = async (description) => {
    return await db.pool.query("INSERT INTO mood (description) VALUES (?)", description);
  };
  
  const updateOneMood = async (description, mood_id) => {
    return await db.pool.query("UPDATE mood SET description = ? WHERE mood_id = ?", [description, mood_id]);
  };
  
  const deleteOneMood = async (mood_id) => {
    return await db.pool.query("DELETE FROM mood WHERE mood_id = ?", mood_id);;
  };
  
  module.exports = {
    getAllMoods,
    getOneMood,
    createNewMood,
    updateOneMood,
    deleteOneMood,
  };