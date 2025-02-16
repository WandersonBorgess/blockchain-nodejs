const express = require('express');
const bodyParser = require('body-parser');
const {Blockchain, Block } = requrie('./src/blockchain');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))