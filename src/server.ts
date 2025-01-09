import express from 'express'
import env from './config/env'
import router from './router/main.router'

const app = express()
app.use(express.json())

export default function server() {
    app.listen(env.port, () => {
        console.log('http://localhost:' + env.port)
    })

    app.use('/', router)
    
    app.use((req, res) => {
        res.status(404).json({ message: "Ruta no encontrada" });
    });
}

