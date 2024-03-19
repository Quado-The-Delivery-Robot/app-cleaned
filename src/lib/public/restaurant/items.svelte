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

<div class="w-full flex flex-col items-start justify-start lg:flex-row gap-4">
    <div class="flex gap-2 flex-row lg:flex-col w-full md:min-w-[188px] md:w-[188px] h-fit overflow-x-auto">
        {#each Object.keys(groups) as group}
            <button
                class="w-full px-3 py-3 text-nowrap text-left hover:bg-secondary border-opacity-0 hover:border-opacity-100 border border-secondary-300 transition-all rounded-lg"
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
                    <div class="w-full flex justify-start items-center gap-2 overflow-hidden pr-6">
                        <div class="flex flex-col justify-start items-start flex-grow text-left px-6 py-6 h-full">
                            <p class="text-lg font-semibold leading-none">{item.name}</p>

                            <p class="flex gap-2 text-sm leading-none mt-1.5">
                                <span>${item.price}</span>
                                <span>{item.calories} calories</span>
                            </p>

                            <p class="mt-3">{item.description}</p>
                        </div>

                        <img class="w-36 aspect-square" src={item.image} alt={item.name} />
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>
