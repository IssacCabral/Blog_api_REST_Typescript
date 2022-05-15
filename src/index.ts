import express, {json} from 'express'
import router from './routes/router'
import db from './config/db_connection'
const PORT = 3333
const app = express()

app.use(json())
app.use(router)

app.get('/', (req, res) => {
    res.send('Bem vindo a API')
})

app.listen(PORT, async () => {
    //await db.sync()
    console.log(`Listening on port ${PORT}`)
})