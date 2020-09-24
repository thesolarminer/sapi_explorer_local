const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const distDir = __dirname + "/www/";
app.use(express.static(distDir));
app.use('/api', apiController);
module.exports = app;
