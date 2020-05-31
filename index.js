const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js'); //destructuring syntax from ES6
var employeeController = require('./controllers/employeeConroller.js');
var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log('Express is up and Running'));

app.use('/employees', employeeController);