<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import { Splide } from "@splidejs/svelte-splide";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    export let hasHeader: boolean;
    export let name: string;
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
{/await}

<div class="w-full">
    {#if hasHeader}
        <div class="flex justify-between items-center mb-1">
            <p class="text-lg font-semibold">{name}</p>
            <a href="/{name.toLowerCase()}/all" class="flex items-center text-sm opacity-50 font-light">See all </a>
        </div>
    {/if}

    <div class="rounded-lg overflow-hidden">
        <Splide></Splide>
    </div>
</div>
