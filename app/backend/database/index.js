// get the client

const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.REACT_APP_DATABASE_USER,
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  database: process.env.REACT_APP_DATABASE_CURRENT_DB,
  port: process.env.REACT_APP_DATABASE_PORT
});

db.connect((err, result) => {
  console.log('Database connection good!');
  if (err) {
    console.log(err);
  }
});

db.end((err) => {

});

module.exports = db;
