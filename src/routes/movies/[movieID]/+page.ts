import type { Movie } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch(`/api/movies/${params.movieID}`);
    const movie = await res.json() as Movie;

    return {
        movie: movie,
    };
};