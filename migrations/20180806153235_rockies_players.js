
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rockies_players', table => {
    table.increments()
    table.text('firstname')
    table.text('lastname')
    table.text('position')
  }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rockies_players') 
}
