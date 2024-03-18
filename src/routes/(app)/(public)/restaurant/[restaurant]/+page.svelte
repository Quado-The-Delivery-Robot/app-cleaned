<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import Rating from "$lib/public/restaurant/rating.svelte";
    import Items from "$lib/public/restaurant/items.svelte";
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
    {#await data.restaurant}
        <p>Loading...</p>
    {:then}
        <div class="text-left mb-10">
            <p class="text-2xl font-semibold">{data.restaurant.name}</p>
            <p class="text-sm mt-1 mb-4">{data.restaurant.location}</p>

            <Rating rating={2.7} />
        </div>

        <Items items={data.restaurant.items} />
    {/await}
</div>
