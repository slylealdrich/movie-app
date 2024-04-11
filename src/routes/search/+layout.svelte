<script lang="ts">
    import type { LayoutLoad } from "./$types";

    export let data: LayoutLoad;

    let query = data.query ? data.query : "";
</script>

<form class="h-16 grid grid-cols-12 gap-x-1 p-4" action="/search/{query}" target="_top">
    <input
        class="col-span-9 xl:col-span-11 px-1 bg-slate-300 focus:ring-slate-500 focus:border-slate-500"
        type="text"
        placeholder="{query}"
        bind:value={query}
    />
    <button class="col-span-3 xl:col-span-1 grid justify-center content-center bg-amber-300" type="submit">Search</button>
</form>

<slot />
