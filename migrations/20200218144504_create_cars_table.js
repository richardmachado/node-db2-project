
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();

      tbl.string('vin', 128)
      .notNullable()
      .unique();

    tbl.string('make',128)
    .notNullable();


    tbl.string('model',128)
    .notNullable();

    tbl.string('mileage', 128)
    .notNullable();
 
    tbl.string('transmission', 128)
    .defaultTo("Automatic V6");

    tbl.string('title_status', 128)
    .defaultTo("Clean");

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
