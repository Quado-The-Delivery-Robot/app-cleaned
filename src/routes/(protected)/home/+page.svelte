<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { restuarantItem, restaurant } from "$lib/core/types";

    export let data: { page: { [key: string]: { type: string; restaurant: restaurant[] } } } = { page: {} };
</script>

<Search />

{#await data.page}
    <p>Loading...</p>
{:then}
    {#each Object.entries(data.page) as [sectionName, sectionData]}
        <Section {sectionName} items={[{ name: "something", colors: ["#000", "#000"], id: "adddsd", image: "", decription: "yummy" }]} hasHeader={true} />
    {/each}
{/await}
