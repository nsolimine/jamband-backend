
exports.seed = function(knex, Promise) {
  return knex('players').del()
    .then(function () {
      return knex('players').insert([{
        id: 1,
        name: 'George McCartney',
        instrument: 'Guitar',
        sing: 'Yes',
        friends: 'Paul Lennon, John Starr, Ringo Harrison'
      },{
        id: 2,
        name: 'Paul Lennon',
        instrument: 'Bass',
        sing: 'Yes',
        friends: 'George McCartney, John Starr, Ringo Harrison'
      },{
        id: 3,
        name: 'John Starr',
        instrument: 'Guitar',
        sing: 'Yes',
        friends: 'George McCartney, Paul Lennon, Ringo Harrison'
      },{
        id: 4,
        name: 'Ringo Harrison',
        instrument: 'Drums',
        sing: 'Yes',
        friends: 'George McCartney, Paul Lennon, John Starr'
      },{
        id: 5,
        name: 'Robert Page',
        instrument: 'Vocals',
        sing: 'Yes',
        friends: 'Jimmy Plant, John Paul Bonham, John Jones'
      },{
        id: 6,
        name: 'Jimmy Plant',
        instrument: 'Guitar',
        sing: 'No',
        friends: 'Robert Page, John Paul Bonham, John Jones'
      },{
        id: 7,
        name: 'John Paul Bonham',
        instrument: 'Bass, Mandolin, Hammond',
        sing: 'No',
        friends: 'Robert Page, Jimmy Plant, John Jones'
      },{
        id: 8,
        name: 'John Jones',
        instrument: 'Drums',
        sing: 'No',
        friends: 'Robert Page, Jimmy Plant, John Paul Bonham'
      },{
        id: 9,
        name: 'Thom Greenwood',
        instrument: 'Vocals, Guitar',
        sing: 'Yes',
        friends: "Johnny Yorke, Colin O'Brien, Ed Selway, Philip Greenwood"
      },{
        id: 10,
        name: 'Johnny Yorke',
        instrument: 'Guitar, Ondes Martenot',
        sing: 'No',
        friends: "Thom Greenwood, Colin O'Brien, Ed Selway, Philip Greenwood"
      },{
        id: 11,
        name: "Colin O'Brien",
        instrument: 'Bass',
        sing: 'No',
        friends: "Thom Greenwood, Johnny Yorke, Ed Selway, Philip Greenwood"
      },{
        id: 12,
        name: "Ed Selway",
        instrument: 'Guitar',
        sing: 'Yes',
        friends: "Thom Greenwood, Johnny Yorke, Colin O'Brien, Philip Greenwood"
      },{
        id: 13,
        name: 'Philip Greenwood',
        instrument: 'Drums',
        sing: 'No',
        friends: "Thom Greenwood, Johnny Yorke, Colin O'Brien, Ed Selway"
      },{
        id: 14,
        name: 'Ozzy Iommi',
        instrument: 'Vocals',
        sing: 'Yes',
        friends: 'Tony Butler, Geezer Ward, Bill Osbourne'
      },{
        id: 15,
        name: 'Tony Butler',
        instrument: 'Guitar',
        sing: 'No',
        friends: 'Ozzy Iommi, Geezer Ward, Bill Osbourne'
      },{
        id: 16,
        name: 'Geezer Ward',
        instrument: 'Bass',
        sing: 'No',
        friends: 'Ozzy Iommi, Tony Butler, Bill Osbourne'
      },{
        id: 17,
        name: 'Bill Osbourne',
        instrument: 'Drums',
        sing: 'No',
        friends: 'Ozzy Iommi, Tony Butler, Geezer Ward'
      },{
        id: 18,
        name: 'House Band Vocalist',
        instrument: 'Vocals',
        sing: 'Yes',
        friends: ''
      },{
        id: 19,
        name: 'House Band Guitar Player',
        instrument: 'Guitar',
        sing: 'Yes',
        friends: ''
      },{
        id: 20,
        name: 'House Band Bass Player',
        instrument: 'Bass',
        sing: 'Yes',
        friends: ''
      },{
        id: 21,
        name: 'House Band Drummer',
        instrument: 'Drums',
        sing: 'Yes',
        friends: ''
      }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE players_id_seq RESTART WITH 22;');
    });
};
