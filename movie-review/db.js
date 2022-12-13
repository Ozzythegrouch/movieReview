const Pool = require('pg').Pool

const pool = new Pool({
    user: 'oscartrejo',
    password: 'kth18822',
    host: 'localhost',
    port: 5432,
    database: 'users'
})

module.exports = pool;