// db.js

const Pool = require("pg").Pool

const { connectionString } = require('./config')

const pool = new Pool({
    connectionString,
})

module.exports = pool
