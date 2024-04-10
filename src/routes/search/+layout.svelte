<script lang="ts">
    let query = "";
</script>

<form class="h-16 grid grid-cols-12 gap-x-1 p-4">
    <input
        class="col-span-9 xl:col-span-11 px-1 bg-slate-300 focus:ring-slate-500 focus:border-slate-500"
        type="text"
        bind:value={query}
    />
    <a class="col-span-3 xl:col-span-1 grid justify-center content-center bg-amber-300" href="/search/{query}" target="_self">Search</a>
</form>

<slot />
