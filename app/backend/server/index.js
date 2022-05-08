const express = require('express');
const path = require('path')
const db = require('../database/index.js');
const app = express();
const controllers = require('../database/controllers.js')

app.get('/login', (req, res) => {
  db.query(`SELECT * FROM users`, (err, result) => {
    err ? console.log(err) : res.send(result);
  })
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});


const PORT = 3001;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server connected to port: ${PORT}!`);
});