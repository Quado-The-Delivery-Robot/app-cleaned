<script lang="ts">
    import type { restaurantItem } from "$lib/core/types";
    import { onMount } from "svelte";

    export let items: restaurantItem[];
    let groups: { [key: string]: restaurantItem[] } = {};
    let currentGroup: string = "";

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

<div class="flex flex-col lg:flex-row">
    <div class="flex gap-[1px] flex-row lg:flex-col overflow-hidden rounded-xl border border-background-800 bg-background-800">
        {#each Object.entries(groups) as [group, items]}
            <button
                class="onlyGlass px-5 py-2.5"
                on:click={() => {
                    currentGroup = group;
                }}
            >
                {group} <span class="text-primary-700">({items.length})</span>
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-2 auto-rows-max">
        {#each items as item}
            {#if item.type === currentGroup}
                <p>{item.name}</p>
            {/if}
        {/each}
    </div>
</div>
