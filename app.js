const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
app.use(bodyParser.json());
const distDir = __dirname + '/www/';
app.use(express.static(distDir));

app.get('/', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

app.get('/home', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

app.get('/tx/*', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

app.get('/block/*', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

app.get('/address/*', function(req, res) {
    res.sendFile(distDir + 'index.html');
});

app.get('/ext/getmoneysupply', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/blockchain/supply')
        .then(res => res.json())
        .then(json => {
            res.send(json.CurrentSupply.toString());
        });
});

// app.use('/api', apiController);
module.exports = app;
