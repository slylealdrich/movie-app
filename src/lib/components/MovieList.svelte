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
    <a
        href="/movies/{movie.id}"
        class="w-full h-[138px] grid grid-cols-12 items-center odd:bg-slate-50 even:bg-slate-100 hover:bg-slate-200"
    >
        <div class="col-span-3 xl:col-span-1">
            {#if movie.posterPath}
                <img src={posterURLBase + movie.posterPath} alt="poster" />
            {:else}
                <div class="w-[92px] h-[138px] grid justify-center items-center bg-slate-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-16 h-16"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                        />
                    </svg>
                </div>
            {/if}
        </div>
        <div class="col-span-6 xl:col-span-1">{movie.title}</div>
        <div class="hidden col-span-6 xl:col-span-8">{movie.overview}</div>
        <div class="col-span-3 xl:col-span-1">{movie.id}</div>
    </a>
{/each}

{#if showLoadMore}
    <button
        class="w-full h-16 bg-slate-100 hover:bg-slate-200"
        on:click={loadMore}>Load more</button
    >
{/if}
