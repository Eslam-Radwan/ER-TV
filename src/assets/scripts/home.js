import { generateHeader } from "../components/header.js";
import { getMovie_nowPlaying } from "./api.js";



(async() => {
    const content = document.querySelector('.home__hero')

    const cards = await getMovie_nowPlaying();
    cards.forEach((card) => {content.appendChild(card)})

})()
generateHeader()
