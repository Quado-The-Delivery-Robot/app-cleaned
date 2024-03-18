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

<div class="w-full flex flex-col lg:flex-row gap-2">
    <div class="flex gap-[1px] flex-row lg:flex-col overflow-hidden rounded-xl border border-background-800 bg-background-800">
        {#each Object.entries(groups) as [group, items]}
            <button
                class="onlyGlass px-6 py-3"
                on:click={() => {
                    currentGroup = group;
                }}
            >
                {group} <span class="text-primary-700">({items.length})</span>
            </button>
        {/each}
    </div>

    <div class="flex-grow grid grid-cols-2 auto-rows-max">
        {#each items as item}
            {#if item.type === currentGroup || currentGroup === "All"}
                <div class="onlyGlass w-full overflow-hidden">
                    <div class="w-full flex justify-start items-center gap-2 overflow-hidden">
                        <img class="w-14 h-14 aspect-square" src={item.image} alt={item.name} />

                        <div class="flex flex-col justify-start items-start flex-grow text-left [&>p]:overflow-hidden [&>p]:text-nowrap [&>p]:text-ellipsis">
                            <p class="text-lg font-semibold">{item.name}</p>

                            <div class="flex gap-2">
                                <p>${item.price}</p>
                                <p>{item.calories} calories</p>
                            </div>

                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>
