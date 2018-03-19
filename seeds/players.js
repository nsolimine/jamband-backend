
exports.seed = function(knex, Promise) {
  return knex('players').del()
    .then(function () {
      return knex('players').insert([{
        id: 1,
        name: 'George Harrison',
        instrument: 'Guitar',
        sing: 'Yes',
        friends: 'Paul McCartney, John Lennon, Ringo Starr'
      },{
        id: 2,
        name: 'Paul McCartney',
        instrument: 'Bass',
        sing: 'Yes',
        friends: 'George Harrison, John Lennon, Ringo Starr'
      },{
        id: 3,
        name: 'John Lennon',
        instrument: 'Guitar',
        sing: 'Yes',
        friends: 'George Harrison, Paul McCartney, Ringo Starr'
      },{
        id: 4,
        name: 'Ringo Starr',
        instrument: 'Drums',
        sing: 'Yes',
        friends: 'George Harrison, Paul McCartney, John Lennon'
      },{
        id: 5,
        name: 'Robert Plant',
        instrument: 'Vocals',
        sing: 'Yes',
        friends: 'Jimmy Page, John Paul Jones, John Bonham'
      },{
        id: 6,
        name: 'Jimmy Page',
        instrument: 'Guitar',
        sing: 'No',
        friends: 'Robert Plant, John Paul Jones, John Bonham'
      },{
        id: 7,
        name: 'John Paul Jones',
        instrument: 'Bass, Mandolin, Hammond',
        sing: 'No',
        friends: 'Robert Plant, Jimmy Page, John Bonham'
      },{
        id: 8,
        name: 'John Bonham',
        instrument: 'Drums',
        sing: 'No',
        friends: 'Robert Plant, Jimmy Page, John Paul Jones'
      },{
        id: 9,
        name: 'Thom Yorke',
        instrument: 'Vocals, Guitar',
        sing: 'Yes',
        friends: "Johnny Greenwood, Colin Greenwood, Ed O'Brien, Philip Selway"
      },{
        id: 10,
        name: 'Jonny Greenwood',
        instrument: 'Guitar, Ondes Martenot',
        sing: 'No',
        friends: "Thom Yorke, Colin Greenwood, Ed O'Brien, Philip Selway"
      },{
        id: 11,
        name: 'Colin Greenwood',
        instrument: 'Bass',
        sing: 'No',
        friends: "Thom Yorke, Johnny Greenwood, Ed O'Brien, Philip Selway"
      },{
        id: 12,
        name: "Ed O'Brien",
        instrument: 'Guitar',
        sing: 'Yes',
        friends: 'Thom Yorke, Johnny Greenwood, Colin Greenwood, Philip Selway'
      },{
        id: 13,
        name: 'Philip Selway',
        instrument: 'Drums',
        sing: 'No',
        friends: "Thom Yorke, Johnny Greenwood, Colin Greenwood, Ed O'Brien"
      },{
        id: 14,
        name: 'Ozzy Osbourne',
        instrument: 'Vocals',
        sing: 'Yes',
        friends: 'Tony Iommi, Geezer Butler, Bill Ward'
      },{
        id: 15,
        name: 'Tony Iommi',
        instrument: 'Guitar',
        sing: 'No',
        friends: 'Ozzy Osbourne, Geezer Butler, Bill Ward'
      },{
        id: 16,
        name: 'Geezer Butler',
        instrument: 'Bass',
        sing: 'No',
        friends: 'Ozzy Osbourne, Tony Iommi, Bill Ward'
      },{
        id: 17,
        name: 'Bill Ward',
        instrument: 'Drums',
        sing: 'No',
        friends: 'Ozzy Osbourne, Tony Iommi, Geezer Butler'
      }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE players_id_seq RESTART WITH 18;');
    });
};
