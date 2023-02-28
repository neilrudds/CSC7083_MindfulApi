const mariadb = require('mariadb');

module.exports = Object.freeze({
  pool: mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mindful",
    connectionLimit: 5
})
});