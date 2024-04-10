import type { MovieSearch } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("/api/movies/trending/1");
    const movieSearch = await res.json() as MovieSearch;

    return {
        movieSearch: movieSearch,
    };
}
