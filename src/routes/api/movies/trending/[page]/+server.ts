import { TMDB_API_KEY } from "$env/static/private";
import type { Movie, MovieSearch, MovieSearchResult } from "$lib/types";
import { typeMovieSearchResult } from "$lib/util";
import { json } from "@sveltejs/kit";

export async function GET({ params, fetch }) {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${TMDB_API_KEY}&page=${params.page}`);
    const data = await res.json();

    const results = data.results.map((result: any) => {
        const movie: MovieSearchResult = typeMovieSearchResult(result);
        return movie;
    });

    const movieSearch: MovieSearch = {
        page: data.page,
        results: results,
        totalPages: data.total_pages,
        totalResults: data.total_results,
    }

    return json(movieSearch);
}