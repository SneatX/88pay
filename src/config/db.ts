import mysql, { Pool } from 'mysql2/promise';
import envData from './env'

const databse:Pool = mysql.createPool({
    host: envData.db_host,
    user: envData.db_user,
    password: envData.db_password,
    database: envData.db_name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default databse