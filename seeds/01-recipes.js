
exports.seed = function(knex) {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'PB and J', instructions: 'Put peanut butter on one slice, jelly on another. Combine!'},
        {id: 2, recipe_name: 'Tofu', instructions: 'Pick soybeans, make soymilk. Coagulate it and press the resulting curds into blocks'},
        {id: 3, recipe_name: 'Spaghetti', instructions: 'Boil water, add pasta. While cooking noodles, prepare the sauce. Add vegetables. Combine sauce and noodles, finish with basil.'}
      ]);
};
