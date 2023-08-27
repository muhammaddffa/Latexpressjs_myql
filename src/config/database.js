const mysql = require('mysql2');

const dbPool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port:'3307'
  });

  module.exports = dbPool.promise();
