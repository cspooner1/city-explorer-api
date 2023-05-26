const axios = require('axios')
class Forecast {
    constructor(date, description) {
        this.date = date
        this.description = description
    }
}


async function getWeather(searchQuery){
    let cityData = await axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHER_APT_KEY}&city=${searchQuery}`)
    //  response.send(cityData.data)
    console.log(cityData.data)
    let forecastData = cityData.data.data.map(function (element) {
        return new Forecast(element.datetime, element.weather.description)
    })
    return (
        forecastData
    )
}
module.exports = getWeather