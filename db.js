import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
    user: "zuristage2_user",
    host: "dpg-ck1habvdorps73ej8ni0-a.oregon-postgres.render.com",
    database: "zuristage2",
    password: "IS2IBnVXszEY8C3SpGuG5snijySEKXrA",
    port: 5432,
    ssl: true
});

export default pool;
