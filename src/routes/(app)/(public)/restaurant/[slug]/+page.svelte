<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    let restaurantName: string = "Restaurant";

    onMount(() => {
        restaurantName = data.restaurant.name;
    });
</script>

<Title>{restaurantName}</Title>

{#await data.restaurant}
    <p>Loading...</p>
{:then}
    <p>{data.restaurant.description}</p>

    {#each Object.values(data.feed) as section}
        <Section name={section.name} hasHeader={section.hasHeader} items={section.data} sectionType={section.sectionType} itemType={section.itemType} />
    {/each}
{/await}
