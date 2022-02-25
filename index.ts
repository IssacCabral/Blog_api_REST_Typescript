import express, {json} from 'express'
const app = express()
const PORT = 3333

app.use(json())

app.get('/', (req, res) => {
    res.json({message: 'Tudo ok'})
})

app.listen(PORT)