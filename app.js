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

// THOSE BLOCKS must use the right function from SAPI
// THEY MUST USE THE GET_RANDOM_SAPI function as well

app.get('/api/blocks', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/api/block/{hash}', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/api/transactions', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/api/transaction/{txid}', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/api/address/{address}', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

//Melhor exemplo!

app.get('/api/smartrewards/roi', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/smartrewards/roi')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/api/smartnode/roi', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch('https://sapi.smartcash.cc/v1/smartnode/roi')
        .then(res => res.json())
        .then(json => {
            res.send(json);
        });
});

module.exports = app;
