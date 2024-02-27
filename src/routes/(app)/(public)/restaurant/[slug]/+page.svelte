<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import Section from "$lib/protected/components/section.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    let restaurantName: string = "Restaurant";
    let restaurantRating: number = 2.7;

    onMount(() => {
        restaurantName = data.restaurant.name;
    });
</script>

<Title>{restaurantName}</Title>

<div class="flex flex-col gap-6 justify-start items-start">
    {#await data.restaurant && data.feed}
        <p>Loading...</p>
    {:then}
        <div class="text-lg relative flex gap-0.5 items-center justify-start">
            <div class="w-full">
                {#each Array(2) as _, index}
                    <div class="flex gap-0.5 overflow-hidden {index == 1 ? 'absolute top-0 left-0' : ''}" style="width: {index == 1 ? (index / 5) * 100 : 100}%;">
                        {#each Array(5) as _index}
                            <svg class="flex-shrink-0 w-6 aspect-square {index == 1 ? 'fill-yellow-500' : 'fill-white'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        {/each}
                    </div>
                {/each}
            </div>

            <p class="font-semibold">4.9</p>
        </div>

        <p>{data.restaurant.description}</p>

        {#each Object.values(data.feed) as section}
            <Section name={section.name} hasHeader={section.hasHeader} items={section.data} sectionType={section.sectionType} itemType={section.itemType} />
        {/each}
    {/await}
</div>
