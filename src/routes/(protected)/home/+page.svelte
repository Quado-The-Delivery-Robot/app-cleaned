<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Search />

{#await data.feed}
    <p>Loading...</p>
{:then}
    {#each Object.entries(data.feed) as [sectionName, sectionData]}
        <Section {sectionName} hasHeader={sectionData.hasHeader} items={sectionData.data} type={sectionData.type} />
    {/each}
{/await}
