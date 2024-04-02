import type { Movie } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { TMDB_API_KEY } from "$env/static/private";

export const load: PageServerLoad = async ({ params, fetch }) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${TMDB_API_KEY}`);
    const data = await response.json();

    const posterURL = "https://image.tmdb.org/t/p/w500" + data.poster_path;

    const movie: Movie = {
        id: data.id,
        title: data.title,
    }
    return {
        movie: movie,
        posterURL: posterURL,
    };
};