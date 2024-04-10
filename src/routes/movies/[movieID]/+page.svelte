<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    const posterURLBase = "https://image.tmdb.org/t/p/w500";
</script>

<div class="flex flex-col justify-items-center items-center content-center">
    <h1 class="h-16 w-full flex justify-center items-center bg-slate-300 text-2xl">{data.movie.title}</h1>
    <a href="https://www.imdb.com/title/{data.movie.imdbId}" target="_blank">
        <img src={posterURLBase + data.movie.posterPath} alt="poster" />
    </a>
</div>
