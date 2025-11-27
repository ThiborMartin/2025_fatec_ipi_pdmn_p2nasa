require('dotenv').config()
const cors = require('cors')
const express = require ('express')
const app = express()
const axios = require ('axios')
app.use(cors())

app.get('/search', async (req, res) => {
    const nasaClient = axios.create({
        baseURL: 'https://images-api.nasa.gov'
    })

    const result = await nasaClient.get('/search', {
        params:{
            q: req.query.q,
            year_start: req.query.year_start,
            year_end: req.query.year_end
        }
    })
    res.json(result.data.collection.items)
})

app.get('/apod', async (req, res) => {
    const nasaClient = axios.create({
        baseURL: 'https://api.nasa.gov/planetary/apod',
    })

    const result = await nasaClient.get('/', {
        params:{
            api_key: process.env.NASA_KEY,
            start_date: req.query.start_date,
            end_date: req.query.end_date
        }
    })
    res.json(result.data)
})

const port = 3000
app.listen(port, () => console.log(`Back na porta ${port}`))
