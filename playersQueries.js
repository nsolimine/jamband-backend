const database = require("./database-connection");

module.exports = {
    list(){
      return database("players");
    },
    read(id){
      return database("players")
      .select()
      .where("id", id)
      .first();
    },
    create(players){
      return database("players")
      .insert(players)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, players){
      return database("players")
      .update(players)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("players")
      .delete()
      .where("id", id);
    },
    signedup(sessionID) {
    return database('players')
      .join('purgatory', 'players.id', '=', 'purgatory.players_id')
      .join('session', 'session.id', '=', 'purgatory.session_id')
      .select('players.players_name')
      .where('session.id', sessionID)
  },
  getJoinedData() {
    return database('session')
      .join('purgatory', 'session.id', '=', 'purgatory.session_id')
      .join('players', 'players.id', '=', 'purgatory.players_id')
  },
  getPlayerId(id) {
    return getJoinedData().where('players_id', id)
  },

  testJoin(table) {
    console.log('Sql string:', getJoinedData().toSQL())
  }
};
