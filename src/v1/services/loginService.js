const db = require('../../database/db');

const getOneUser = async (username) => {
    return await db.pool.query("SELECT * FROM user WHERE username=?", username);
};

module.exports = {
    getOneUser
}