<script lang="ts">
    import Section from "$lib/protected/components/section.svelte";
    import type { restaurantItem } from "$lib/core/types";

    export let item: restaurantItem;
</script>

<div class="lg:flex">
    {#if (item.type = item.type)}
        <div>{item}</div>
    {:else}
        <div class=" hidden">{item}</div>
    {/if}
</div>
