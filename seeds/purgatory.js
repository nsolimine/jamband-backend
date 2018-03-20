
exports.seed = function(knex, Promise) {
  return knex('purgatory').del()
    .then(function () {
      return knex('purgatory').insert([{
        id: 1,
        players_id: 1,
        session_id: 1
      },{
        id: 2,
        players_id: 2,
        session_id: 1
      },{
        id: 3,
        players_id: 3,
        session_id: 1
      },{
        id: 4,
        players_id: 4,
        session_id: 1
      },{
        id: 5,
        players_id: 5,
        session_id: 2
      },{
        id: 6,
        players_id: 6,
        session_id: 2
      },{
        id: 7,
        players_id: 7,
        session_id: 2
      },{
        id: 8,
        players_id: 8,
        session_id: 2
      },{
        id: 9,
        players_id: 9,
        session_id: 3
      },{
        id: 10,
        players_id: 10,
        session_id: 3
      },{
        id: 11,
        players_id: 11,
        session_id: 3
      },{
        id: 12,
        players_id: 12,
        session_id: 3
      },{
        id: 13,
        players_id: 13,
        session_id: 3
      },{
        id: 14,
        players_id: 14,
        session_id: 4
      },{
        id: 15,
        players_id: 15,
        session_id: 4
      },{
        id: 16,
        players_id: 16,
        session_id: 4
      },{
        id: 17,
        players_id: 17,
        session_id: 4
      }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE purgatory_id_seq RESTART WITH 18;');
    });
};
