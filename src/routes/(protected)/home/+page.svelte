<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { restuarantItem, restaurant } from "$lib/core/types";

    export let data: any;
</script>

<Search />

{#each Object.entries(data.page) as [sectionName, sectionData]}
    <Section data={sectionData.restaurants} />
{/each}
