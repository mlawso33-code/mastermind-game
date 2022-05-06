// get the client
const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "mlawso33",
  password: "password",
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
