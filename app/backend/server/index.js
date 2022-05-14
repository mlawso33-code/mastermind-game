const express = require('express');
const path = require('path')
const db = require('../database/index.js');
const app = express();
const controllers = require('../database/controllers.js');
const cors = require('cors');
const bcrypt = require('bcrypt')

var corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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