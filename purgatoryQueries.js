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
    }
};
