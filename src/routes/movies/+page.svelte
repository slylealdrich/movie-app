<script lang="ts">
    import MovieList from "$lib/components/MovieList.svelte";
import type { Movie, MovieSearch, MovieSearchResult } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;

    let page = 1;
    let movies = data.movieSearch.results;
    let loadedMovies: MovieSearchResult[] = [];
    let showLoadMore = true;

    $: movies = [...movies, ...loadedMovies];

    async function loadMoreMovies() {
        if (page >= data.movieSearch.totalPages) return;

        page++;
        const res = await fetch(`/api/movies/trending/${page}`);
        const newSearch = await res.json() as MovieSearch;
        loadedMovies = newSearch.results;

        if (page >= data.movieSearch.totalPages) showLoadMore = false;
    }
</script>

<h1 class="w-full h-16 flex justify-center items-center bg-slate-300 text-2xl">Trending Movies</h1>

<MovieList movies={movies} showLoadMore={showLoadMore} on:loadMore={loadMoreMovies} />
