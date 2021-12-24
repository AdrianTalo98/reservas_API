const { Pool} = require('pg')


const pool = new Pool({
  user: 'bzpnpjxuhhuafg',
  database: 'deavuufno0etts',
  password: 'f200c9343a23a396ad7cdc40c6b43bc8d424f6b07015f714b53ec2bfbec41e2a',
  port: 5432,
  host: 'ec2-50-19-160-40.compute-1.amazonaws.com',
  ssl : {
    require: true,
    rejectUnauthorized: false
  }
});

module.exports = { pool };
