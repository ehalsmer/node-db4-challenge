const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    // getInstructions
}

function getRecipes(){
    return db('recipes')
    .then(recipes => {
        return recipes
    })
}

function getShoppingList(inputId){
    // return db('recipe_ingredients').where({recipe_id: id})
    return db('recipe_ingredients').join('ingredients', 'ingredient_id', '=', 'id').where({recipe_id: inputId})
    .then(results => {
        return results
    })
}