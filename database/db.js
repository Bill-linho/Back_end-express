import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    port: 5433,
    database: 'Clinica',
    user: 'Jubileu',
    password: '12345'
});

export default pool