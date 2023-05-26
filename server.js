const express = require("express")
const cors = require('cors')
const app = express()
const weatherdata = require("./data/weather.json");
const axios = require('axios')
const dotenv = require("dotenv")
const getWeather = require('./weather.js')

dotenv.config()

app.use(cors())
class Forecast {
    constructor(date, description) {
        this.date = date
        this.description = description
    }
}


app.get('/weather', async function (request, response) {
    let forecastData = await getWeather(request.query.searchQuery)
    response.send(forecastData)
})

let headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTFkNmNiODUyOWRlMjFlNGJhZjY4OWJmOGZjYzMzYiIsInN1YiI6IjY0NmU2MTQwZTIyZDI4MDBmODNhNGNhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mY-gkW_DKZ39qQBZxNZFJZV4Wfz1omGvcXRvq94APi'
}
class Movie {
    constructor(adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
        this.adult = adult
        this.backdrop_path = backdrop_path
        this.genre_ids = genre_ids
        this.id = id
        this.original_language = original_language
        this.original_title = original_title
        this.overview = overview
        this.popularity = popularity
        this.release_date = release_date
        this.title = title
        this.video = video
        this.vote_average = vote_average
        this.vote_count = vote_count
    }
}

// let movieArray = [
//     Movie.adult,
//     Movie.backdrop_path,
//     Movie.genre_ids,
//     Movie.id,
//     Movie.original_language,
//     Movie.original_title,
//     Movie.overview,
//     Movie.popularity,
//     Movie.release_date,
//     Movie.title,
//     Movie.video,
//     Movie.vote_average,
//     Movie.vote_count];
    // console.log(movieArray);
app.get('/movies', async function (request, response) {
    
    let movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_APT_KEY}&query=${request.query.searchQuery}`, headers = headers)
    console.log(movieResponse.data.results)
    response.send(movieResponse.data.results)
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3001)