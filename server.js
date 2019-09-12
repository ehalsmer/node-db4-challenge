const express = require('express');
const helmet = require('helmet');

// const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
    res.status(200).json({message: 'recipes here'})
});

server.get('/api/ingredients', (req, res) => {
    res.status(200).json({message: 'ingredients here'})
});


module.exports = server;
