<script lang="ts">
    import type { PageData } from "../$types";
    export let data: PageData;
</script>

<h1>Search Movies</h1>
<table class="w-full text-left">
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
        </tr>
    </thead>

    <tbody>
        {#await data.streamed.items then items}
            {#each items as { id, title }}
                <tr class="odd:bg-gray-100">
                    <td>{id}</td>
                    <td><a href="/movies/{id}">{title}</a></td>
                </tr>
            {/each}
        {/await}
    </tbody>
</table>
