const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const distDir = __dirname + '/www/';
app.use(express.static(distDir));

app.get('/*', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

// app.use('/api', apiController);
module.exports = app;
