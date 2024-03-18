<script lang="ts">
    import type { restaurantItem } from "$lib/core/types";
    import { onMount } from "svelte";

    export let items: restaurantItem[];
    let groups: { [key: string]: restaurantItem[] };
    let currentGroup: string;

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
    <div class="flex gap-1 flex-row lg:flex-col">
        {#each Object.keys(groups) as group}
            <button
                on:click={() => {
                    currentGroup = group;
                }}>{group}</button
            >
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
