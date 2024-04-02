import { TMDB_API_KEY } from "$env/static/private";
import type { Movie } from "$lib/types";
import type { PageServerLoad } from "./[movieID]/$types";

export const load: PageServerLoad = () => {
    return {
        streamed: {
            items: getMovies()
        }
    };
}

async function getMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${TMDB_API_KEY}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data.results[0]);

    const items = data.results.map((item: any) => {
        const movie: Movie = { id: item.id, title: item.title };
        return movie;
    });
    return items;
}