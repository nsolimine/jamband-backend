
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session').del()
    .then(function () {
      return knex('session').insert([{
        id: 1,
        title: 'Group 1',
        date: '2018-03-29',
        time: '7:30'
      },{
        id: 2,
        title: 'Group 2',
        date: '2018-03-29',
        time: '8:15'
      },{
        id: 3,
        title: 'Group 3',
        date: '2018-03-29',
        time: '9:00'
      },{
        id: 4,
        title: 'Group 4',
        date: '2018-03-29',
        time: '9:45'
      },{
        id: 5,
        title: 'Group 5',
        date: '2018-03-29',
        time: '10:30'
      },{
        id: 6,
        title: 'Group 6',
        date: '2018-03-29',
        time: '11:15'
      }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE session_id_seq RESTART WITH 7;');
    });
};
