<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";

    export let data: PageData;

    onMount(() => {
        console.log(data.feed);
    });
</script>

<Search />

{#await data.feed}
    <p>Loading...</p>
{:then}
    {#each Object.values(data.feed) as section}
        <Section name={section.name} hasHeader={section.hasHeader} items={section.data} type={section.type} />
    {/each}
{/await}
