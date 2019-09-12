
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255).notNullable();
        tbl.text('instructions')
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.primary(['recipe_id', 'ingredient_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
