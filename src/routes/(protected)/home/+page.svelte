<script lang="ts">
    import { page } from "$app/stores";
    import Search from "$lib/protected/home/search.svelte";

    export let data: any;
</script>

<Search />

{#each Object.entries(data.page) as [sectionName, sectionData]}
    dnsbf
{/each}
