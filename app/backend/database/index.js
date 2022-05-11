// get the client
const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  //port: process.env.PORT
});

db.connect((err, result) => {
  console.log('Database connection good!');
  if (err) {
    throw err;
  }
});

db.end((err) => {

});

module.exports = db;
