const express = require('express');
const app = express();

app.use(express.json())

require('./app/database/DBConnection');

app.listen(3333);