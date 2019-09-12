const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const Recipes = require('./api/recipe-model');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
    Recipes.getRecipes()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

server.get('/api/shopping/:id', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
});

server.get('/api/instructions/:id', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
});

server.get('/api/ingredients', (req, res) => {
    db('ingredients')
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
});

server.get('/api/recipeingredients', (req, res) => {
    db('recipe_ingredients')
    .then(response => {
        res.status(200).json(response)
    })
});

server.get('/api/ingredients', (req, res) => {
    res.status(200).json({message: 'ingredients here'})
});


module.exports = server;
