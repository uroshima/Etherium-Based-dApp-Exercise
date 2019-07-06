var Web3 = require('web3');
const fs = require('fs');

// Initiating web3
// Connect to test-RPC network
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
// set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

var web3Socket = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));

//INIT ABI
var result = JSON.parse(fs.readFileSync("../../build/contracts/Migrations.json"));
var contractAbi = result.abi;