//requires
const db = require("./index.js");
const bcrypt = require("bcrypt");
const path = require("path");
require("dotenv").config();

//controllers
const controllers = {
  initialLogin(req, res) {
    db.query(`SELECT * FROM users`, (err, result) => {
      err ? console.log(err) : res.send(result);
    });
  },

  getUser(req, res) {
    let { id } = req.params;
    db.query(
      `SELECT user, password, email FROM users WHERE id=${id}`,
      (err, dbRes) => {
        if (err) {
          alert("User does not exist!");
          console.log(err);
        }
        res.send(dbRes);
      }
    );
  },
  // submitUser(req, res) {
  //   db.query('')
  // },

  allOther(req, res) {
    res.sendFile(
      path.join(__dirname, "../../build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  },

};

module.exports = controllers;
