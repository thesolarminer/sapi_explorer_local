const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const distDir = __dirname + '/www/';
const { createProxyMiddleware } = require('http-proxy-middleware');
var cron = require('node-cron');
const fs = require('fs');
app.use(express.static(distDir));

async function getEnabledNodes() {
    let date = new Date();
    let fileName = 'servers' + date.getFullYear() + date.getMonth() + date.getDate() + '.txt';

    try {
        if(!fs.existsSync(fileName)){
            let nodes = await fetch('https://sapi.smartcash.cc/v1/smartnode/check/ENABLED');
            nodes = await nodes.json();
            const servers = nodes.map((node) => 'http://' + node.ip.replace(':9678', ':8080'));

            fs.writeFileSync(fileName, JSON.stringify(servers));
        }

        return JSON.parse(fs.readFileSync(fileName));
    } catch (err) {
        console.error(err);
    }
}

async function electedSapi(){
    const sapis = await getEnabledNodes();
    return sapis[Math.floor(Math.random() * sapis.length)];
}

async function getRandomSapiUrl() {
    let prefix = `http://${await electedSapi()}:8080`;
    return prefix;
}

const options = {
    target: `https://sapi.smartcash.cc`,
    changeOrigin: true,
    onProxyReq: async (proxyReq, req, res) => {
        proxyReq.setHeader('host', await electedSapi());
    },
    onProxyRes: (onProxyRes, req, res) => {
    },
};

const sapiProxy = createProxyMiddleware(options);

app.use('/v1', sapiProxy);

app.use(bodyParser.json());

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


app.get('/api/getTransactions/:address', async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fetch(await getRandomSapiUrl() +  "/v1/address/transactions", {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
        "pageNumber": 1,
        "pageSize": 10,
        "ascending": false,
        "address": req.params.address
    }),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json())

// Displaying results to console
.then(json => res.send(json));
});
module.exports = app;
