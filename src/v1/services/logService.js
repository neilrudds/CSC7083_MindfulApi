const db = require('../../database/db');

    const getAllLogs = async () => {
    return await db.pool.query("SELECT mood_log_id, user_id, ml.mood_id, m.description as mood_description, m.html_colour, mood_comments, entry_timestamp FROM mood_log ml INNER JOIN mood m ON ml.mood_id = m.mood_id");
  };

  const getAllUserLogs = async (user_id) => {
    return await db.pool.query("SELECT mood_log_id, user_id, ml.mood_id, m.description as mood_description, m.html_colour, mood_comments, entry_timestamp FROM mood_log ml INNER JOIN mood m ON ml.mood_id = m.mood_id WHERE user_id = ?", user_id);
  };

  const createNewLog = async (user_id, mood_id, mood_comments) => {
    return await db.pool.query("INSERT INTO mood_log (user_id, mood_id, mood_comments) VALUES (?, ?, ?)", [user_id, mood_id, mood_comments]);
  };

  // do we need a new timestamp field for last updated.
  const updateOneLog = async (mood_id, mood_comments, mood_log_id) => {
    return await db.pool.query("UPDATE mood_log SET mood_id = ?, mood_comments = ? WHERE mood_log_id = ?", [mood_id, mood_comments, mood_log_id]);
  };

  const deleteOneLog = async (mood_log_id) => {
    return await db.pool.query("DELETE FROM mood_log WHERE mood_log_id = ?", mood_log_id);;
  };
  
  module.exports = {
    getAllLogs,
    getAllUserLogs,
    createNewLog,
    updateOneLog,
    deleteOneLog
  };