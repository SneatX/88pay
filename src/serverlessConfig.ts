import ServerlessHttp from 'serverless-http'
import express from 'express'
import router from './router/main.router'

const app = express()
app.use(express.json())

app.use('/', router)

module.exports.handler = ServerlessHttp(app);