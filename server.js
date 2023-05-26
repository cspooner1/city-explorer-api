const express = require("express")
const cors = require('cors')
const app = express()
const weatherdata = require("./data/weather.json");
const axios = require('axios')
const dotenv = require("dotenv")
const getWeather = require('./weather.js');
const getMovies = require('./movies.js');

dotenv.config()

app.use(cors())

app.get('/weather', async function (request, response) {
    let forecastData = await getWeather(request.query.searchQuery)
    response.send(forecastData)
})

app.get('/movies', async function (request, response) {
    let movieResponse = await getMovies(request.query.searchQuery)
    response.send(movieResponse)
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3001)