const { Pool} = require('pg')

const pool = new Pool({
  user: 'admin',
  database: 'reserva',
  password: 'admin',
  port: 5432,
  host: 'localhost',
});

module.exports = { pool };