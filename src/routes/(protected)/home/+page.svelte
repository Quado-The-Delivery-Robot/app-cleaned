<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { restuarantItem, restaurant } from "$lib/core/types";

    export let data: { page: { [key: string]: { type: string; restaurant: restaurant[] } } } = { page: {} };
</script>

<Search />

{#each Object.entries(data.page) as [sectionName, sectionData]}
    <Section {sectionName} type={sectionData.type} data={sectionData.restaurant} />
{/each}
