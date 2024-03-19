<script lang="ts">
    import type { restaurantItem } from "$lib/core/types";
    import { onMount } from "svelte";

    export let items: restaurantItem[];
    let groups: { [key: string]: restaurantItem[] } = {};
    let currentGroup: string = "All";

    onMount(() => {
        groups["All"] = items;

        items.forEach((item: restaurantItem) => {
            if (!groups[item.type]) {
                groups[item.type] = [];
            }

            groups[item.type].push(item);
        });
    });
</script>

<div class="w-full flex flex-col lg:flex-row gap-4">
    <div class="flex gap-2 flex-row lg:flex-col w-full md:w-[20%] lg:w-[13%] h-fit overflow-x-auto">
        {#each Object.keys(groups) as group}
            <button
                class="primary w-full px-6 py-3 text-nowrap text-left"
                on:click={() => {
                    currentGroup = group;
                }}>{group}</button
            >
        {/each}
    </div>

    <div class="flex-grow grid grid-cols-2 auto-rows-max gap-3">
        {#each items as item}
            {#if item.type === currentGroup || currentGroup === "All"}
                <div class="primary w-full overflow-hidden rounded-lg">
                    <div class="w-full flex justify-start items-center gap-2 overflow-hidden pr-4">
                        <div class="flex flex-col justify-start items-start flex-grow text-left px-4 py-4">
                            <p class="text-lg font-semibold">{item.name}</p>

                            <div class="flex gap-2 text-sm">
                                <p>${item.price}</p>
                                <p>{item.calories} calories</p>
                            </div>

                            <p class="mt-2">{item.description}</p>
                        </div>

                        <img class="w-36 aspect-square" src={item.image} alt={item.name} />
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>
