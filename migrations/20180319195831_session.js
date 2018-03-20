exports.up = function(knex, Promise) {
  return knex.schema.createTable('session', table => {
    table.increments('id').primary;
    table.text('title');
    table.date('date');
    table.time('time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('session')
};
