<script lang="ts">
    import type { Movie, MovieSearchResult } from "$lib/types";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const posterURLBase = "https://image.tmdb.org/t/p/w92";

    export let movies: Movie[] | MovieSearchResult[];
    export let showLoadMore: boolean;

    function loadMore() {
        dispatch("loadMore");
    }
</script>

<div class="w-full h-8 grid grid-cols-12 justify-center items-center">
    <div class="col-span-3 xl:col-span-1">Poster</div>
    <div class="col-span-6 xl:col-span-10">Title</div>
    <div class="col-span-3 xl:col-span-1">ID</div>
</div>
{#each movies as movie}
    <a href="/movies/{movie.id}" class="w-full h-[130px] grid grid-cols-12 items-center odd:bg-slate-50 even:bg-slate-100 hover:bg-slate-200">
        <div class="col-span-3 xl:col-span-1"><img src={posterURLBase + movie.posterPath} alt="poster" /></div>
        <div class="col-span-6 xl:col-span-10">{movie.title}</div>
        <div class="col-span-3 xl:col-span-1">{movie.id}</div>
    </a>
{/each}

{#if showLoadMore}
    <button class="w-full h-16 bg-slate-100 hover:bg-slate-200" on:click={loadMore}>Load more</button>
{/if}