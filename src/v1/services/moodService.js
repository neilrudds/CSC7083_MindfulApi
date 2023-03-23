const db = require('../../database/db');

  const getAllMoods = async () => {
    return await db.pool.query("SELECT * FROM mood");
  };
  
  const getOneMood = async (mood_id) => {
    return await db.pool.query("SELECT * FROM mood WHERE mood_id=?", mood_id);
  };
  
  const createNewMood = async (description, html_colour) => {
    return await db.pool.query("INSERT INTO mood (description, html_colour) VALUES (?, ?)", [description, html_colour]);
  };
  
  const updateOneMood = async (description, html_colour, mood_id) => {
    return await db.pool.query("UPDATE mood SET description = ?, html_colour = ? WHERE mood_id = ?", [description, html_colour, mood_id]);
  };
  
  const deleteOneMood = async (mood_id) => {
    return await db.pool.query("DELETE FROM mood WHERE mood_id = ?", mood_id);
  };
  
  module.exports = {
    getAllMoods,
    getOneMood,
    createNewMood,
    updateOneMood,
    deleteOneMood,
  };