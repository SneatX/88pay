import mysql, { Pool } from 'mysql2/promise';
import env from './env'

const databse:Pool = mysql.createPool({
    host: env.db_host,
    user: env.db_user,
    password: env.db_password,
    database: env.db_name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default databse