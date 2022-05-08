//requires
const db = require("./index.js");
require('dotenv').config();


//controllers

const controllers ={
  initialLogin(req, res) {
      db.query(`SELECT * FROM users`, (err, result) => {
        err ? console.log(err) : res.send(result);
      });
  },

  getUser(req, res) {
    let {id} = req.params;
    db.query(`SELECT user, password, email FROM users WHERE id=${id}`, (err, dbRes) => {
      if(err) {
        alert('User does not exist!');
        console.log(err);
      }
      res.send(dbRes);
    })
  },


};

module.exports = controllers;