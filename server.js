const express = require('express');
const app = express();

app.use(express.json())

const connection = require('./app/database/DBConnection');

var User = require('./app/src/models/User.js')

require('./app/src/routes/routes.js')(app)

User.init(connection);

const PORT = process.env.PORT || 3333;

app.listen(PORT , () => console.log('O PAI TA INLINE'));