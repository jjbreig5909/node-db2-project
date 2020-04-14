
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl=>{
      tbl.increments();
      tbl.text('vin', 128).unique().notNullable();
      tbl.text('make', 128).notNullable();
      tbl.text('model', 128).notNullable();
      tbl.integer('milage').notNullable();
      tbl.boolean('automatic');
      tbl.text('title');
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('car-dealer');
};
