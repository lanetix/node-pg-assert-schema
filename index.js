'use strict'

const { Pool } = require('pg')

module.exports = function (connectionString, schema) {
  const pool = new Pool({
    connectionString
  })
  pool.query(`CREATE SCHEMA IF NOT EXISTS ${schema}`, (err, res) => {
    if (err) { process.emit('error', err) }
    pool.end()
  })
}
