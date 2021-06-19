# SAPI Explorer

**A blockchain explorer for SmartCash.**

## Quick Start

To get started you only need to connect to a SAPI server;

Each node is a server, so you can pool the servers or choose your own;

You can check our Swagger for SAPI (SmartCash Decentralized API) calls:
https://editor.swagger.io/

Import the swagger.json file that is in the root folder to see all API calls.

To list the servers you must use:

https://sapi.smartcash.cc/v1/smartnode/list

Filter by actives nodes then you can random servers:

http://167.86.103.167:8080/v1/smartnode/list

```sh

sudo apt install npm
sudo npm install node
git clone https://github.com/SmartCash/sapiexplorer
cd sapi_explorer
npm install
npm start
```
