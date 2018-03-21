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
    join(){
      return database('players')
      .select()
      .innerJoin('purgatory', 'players.id', 'purgatory.players_id')
      .innerJoin('session', 'session.id', 'purgatory.session_id')
  }
};
