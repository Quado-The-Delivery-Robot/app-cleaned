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

<div class="flex flex-col gap-6 justify-start items-start">
    {#await data.restaurant}
        <p>Loading...</p>
    {:then}
        <p>{data.restaurant.description}</p>

        {#await data.feed}
            <p>Loading...</p>
        {:then}
            {#each Object.values(data.feed) as section}
                <Section name={section.name} hasHeader={section.hasHeader} items={section.data} sectionType={section.sectionType} itemType={section.itemType} />
            {/each}
        {/await}
    {/await}
</div>
