import type { MovieSearch } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch(`/api/movies/search/${params.query}-1`);
    const movieSearch = await res.json() as MovieSearch;
    return {
        query: params.query,
        movieSearch: movieSearch,
    }
}