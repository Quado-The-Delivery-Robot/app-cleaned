<script lang="ts">
    import Search from "$lib/protected/components/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Search />

<div class="flex flex-col gap-6 justify-start items-start">
    {#await data.feed}
        <p>Loading...</p>
    {:then}
        {#each Object.values(data.feed) as section}
            <Section name={section.name} hasHeader={section.hasHeader} items={section.data} sectionType={section.sectionType} itemType={section.itemType} />
        {/each}
    {/await}
</div>
