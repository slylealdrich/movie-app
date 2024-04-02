<script lang="ts">
    import type { PageData } from "../$types";
    export let data: PageData;
</script>

<div class="flex flex-col justify-items-center items-center content-center">
    <h1 class="font-bold">{data.movie.title}</h1>
    <img src={data.posterURL} alt="poster" />
</div>