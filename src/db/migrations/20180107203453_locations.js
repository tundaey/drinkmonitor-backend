exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', (table) => {
        table.increments();
        table.string('longitude').notNullable();
        table.string('latitude').notNullable();
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations');
};
