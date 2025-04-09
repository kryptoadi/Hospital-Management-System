const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hospital_db',
    password: 'root', // Replace with your actual password
    port: 5432,
});

module.exports = pool;
