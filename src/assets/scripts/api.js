import store from "./storage.js";
import { createCard } from "../components/card.js";
import { createSmallCard } from "../components/card.js";

async function get(url, message)
{
    const response = await fetch(url, {headers:{'authorization':`Bearer ${store.RAT}`,'Content-Type':'application/json'}})
    if (response.ok)
    {
        const data = await response.json()
        return data.results;
    }
    else
    {
        alert("ERROR fetching " + message)
    }
}

export async function getMovie_nowPlaying()
{
    const movies = await get(store.movie_nowPlaying, "Movie Now Playing");
    const movieCards = []
    movies.forEach((movie) => {
        console.log(movie);
        
        movieCards.push(createSmallCard({ image:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}))

    })
    return movieCards
}