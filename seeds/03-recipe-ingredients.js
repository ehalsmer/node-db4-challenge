
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 2, quantity: 3.7},
    {recipe_id: 1, ingredient_id: 7, quantity: 0.4},
    {recipe_id: 1, ingredient_id: 3, quantity: 6.5},
    {recipe_id: 2, ingredient_id: 1, quantity: 1.72},
    {recipe_id: 2, ingredient_id: 8, quantity: 0.6},
    {recipe_id: 3, ingredient_id: 4, quantity: 4.8},
    {recipe_id: 3, ingredient_id: 5, quantity: 7.0},
    {recipe_id: 3, ingredient_id: 6, quantity: 2.1},
  ]);
};
