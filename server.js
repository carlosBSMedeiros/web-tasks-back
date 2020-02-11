const express = require('express');
const app = express();

app.use(express.json())

const connection = require('./app/database');

var User = require('./app/src/models/User.js')
var Task = require('./app/src/models/Task.js')

User.init(connection)
Task.init(connection)

Task.associate(connection.models)

app.use(require('./app/src/routes/routes'));

const PORT = process.env.PORT || 3333;

app.listen(PORT , () => console.log('O PAI TA INLINE'));