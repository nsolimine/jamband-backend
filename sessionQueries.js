const database = require("./database-connection");

module.exports = {
    list(){
      return database("session");
    },
    read(id){
      return database("session")
      .select()
      .where("id", id)
      .first();
    },
    create(session){
      return database("session")
      .insert(session)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, session){
      return database("session")
      .update(session)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("session")
      .delete()
      .where("id", id);
    }
};
