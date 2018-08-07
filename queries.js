const database = require("./database-connection");

module.exports = {
    list(){
        return database('rockies_players').select().orderBy('id', 'asc')
    },

    read(id){
        return database('rockies_players')
        .select()
        .where('id', id)
    },

    create(player){
        return database('rockies_players')
        .insert(player)
        .returning('*')
        .then(record => record[0])
    },

    update(id, player){
        return database('rockies_players')
        .update(player)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },

    delete(id){
        return database('rockies_players').delete().where('id', id)
    }
};