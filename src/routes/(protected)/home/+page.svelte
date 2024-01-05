<script lang="ts">
    import { page } from "$app/stores";
    import Search from "$lib/protected/home/search.svelte";

    export let data: any;
</script>

<Search />

{#each Object.entries(data.page) as [sectionName, sectionData]}
    dnsbf
{/each}
<div class=" flex flex-row py-2 gap-2 w-full">
    <button class="glass rounded-lg py-2 px-4">{data.image}</button>
    <button class="glass rounded-lg py-2 px-4">{data.image}</button>
</div>
