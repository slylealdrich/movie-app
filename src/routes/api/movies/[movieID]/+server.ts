import { TMDB_API_KEY } from "$env/static/private";
import type { Movie } from "$lib/types";
import { typeMovie } from "$lib/util.js";
import { json } from "@sveltejs/kit";

export async function GET({ params, fetch }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${TMDB_API_KEY}`);
    const data = await res.json();

    const movie: Movie = typeMovie(data);

    return json(movie);
}