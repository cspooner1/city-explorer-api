const axios = require('axios')

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

async function getMovies(searchQuery){
    let movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_APT_KEY}&query=${searchQuery}`, headers = headers)
    let movieData = movieResponse.data.results

    return (
        movieData
    )
}
module.exports = getMovies