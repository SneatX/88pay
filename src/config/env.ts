process.loadEnvFile()

const PORT: string | undefined = process.env.EXPRESS_PORT
const DB_HOST: string | undefined = process.env.DB_HOST
const DB_USER: string | undefined = process.env.DB_USER
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD
const DB_NAME: string | undefined = process.env.DB_NAME

const data = {
    port:PORT,
    db_host: DB_HOST,
    db_user: DB_USER,
    db_password: DB_PASSWORD,
    db_name: DB_NAME,
}

export default data