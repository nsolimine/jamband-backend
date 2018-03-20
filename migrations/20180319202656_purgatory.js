exports.up = function(knex, Promise) {
  return knex.schema.createTable('purgatory', table => {
    table.increments('id').primary;
    table.integer('players_id');
    table.foreign('players_id').references('players.id');
    table.integer('session_id');
    table.foreign('session_id').references('session.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('purgatory')
};
