// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/colorado_rockies_roster'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
}
