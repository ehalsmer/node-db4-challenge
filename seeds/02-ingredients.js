
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'Soymilk'},
    {id: 2, ingredient_name: 'Peanut butter'},
    {id: 3, ingredient_name: 'Bread'},
    {id: 4, ingredient_name: 'Pasta'},
    {id: 5, ingredient_name: 'Tomato Sauce'},
    {id: 6, ingredient_name: 'Basil'},
    {id: 7, ingredient_name: 'Jelly'},
    {id: 8, ingredient_name: 'Calcium sulfate'}
  ]);
};
