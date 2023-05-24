const express = require("express")
const cors = require('cors')
const app = express()
const weatherdata = require("./data/weather.json");

app.use(cors())
class Forecast {
    constructor(date, description) {
        this.date = date
        this.description = description
    }
}

app.get('/', function (request, response) {
    response.send("hello")
})

app.get('/weather', function (request, response) {
    let cityData = weatherdata.find(function (element) {
        if (element.city_name === request.query.searchQuery) {
            return true
        }
        else {
            return false
        }
    })
    console.log(cityData.data)
    let forecastData = cityData.data.map(function (element) {
        return new Forecast(element.datetime, element.weather.description)
    })
    response.send(forecastData)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
app.listen(3001)