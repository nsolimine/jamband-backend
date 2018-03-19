exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', table => {
    table.increments('id').primary;
    table.text('name');
    table.text('instrument');
    table.text('sing');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('friends');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players')
};
