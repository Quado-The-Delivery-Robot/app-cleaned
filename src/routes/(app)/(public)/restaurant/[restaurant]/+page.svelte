<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import Rating from "$lib/public/restaurant/rating.svelte";
    import MenuSections from "$lib/public/restaurant/menuSections.svelte";
    import { onMount } from "svelte";
    import shadeColor from "$lib/protected/shadeColor";
    import { background } from "$lib/stores/app";
    import type { PageData } from "./$types";

    export let data: PageData;
    let restaurantName: string = "Restaurant";

    onMount(() => {
        restaurantName = data.restaurant.name;

        background.set({
            from: shadeColor(data.restaurant.colors[0], -50),
            to: "#000000",
        });
    });
</script>

<Title>{restaurantName}</Title>

<div class="flex flex-col gap-6 justify-start items-start">
    {#await data.restaurant && data.feed}
        <p>Loading...</p>
    {:then}
        <div class="text-left">
            <p class="text-2xl font-semibold">{data.restaurant.name}</p>
            <p class="text-sm mt-2">{data.restaurant.location}</p>

            <Rating rating={2.7} />

            <p class="mt-3">{data.restaurant.description}</p>
        </div>

        <MenuSections />

        {#each Object.values(data.feed) as section}
            <Section name={section.name} hasHeader={section.hasHeader} items={section.data} sectionType={section.sectionType} itemType={section.itemType} />
        {/each}
    {/await}
</div>
