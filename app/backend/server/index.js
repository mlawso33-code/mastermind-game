const express = require('express');
const path = require('path')
const db = require('../database/index.js');
const app = express();
const controllers = require('../database/controllers.js');
const cors = require('cors');
const bcrypt = require('bcrypt')

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  })
});
// app.get('/login', controllers.getUser())
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../../build/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });


const PORT = 3001;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server connected to port: ${PORT}!`);
});