const database = require("./database-connection");

module.exports = {
    list(){
      return database("purgatory");
    },
    read(id){
      return database("purgatory")
      .select()
      .where("id", id)
      .first();
    },
    create(purgatory){
      return database("purgatory")
      .insert(purgatory)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, purgatory){
      return database("purgatory")
      .update(purgatory)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("purgatory")
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
    return database('purgatory')
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
