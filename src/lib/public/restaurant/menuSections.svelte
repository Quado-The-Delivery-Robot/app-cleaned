<script lang="ts">
    import Section from "$lib/protected/components/section.svelte";
    import type { restuarantItem } from "$lib/core/types";

    export let item: restuarantItem;
</script>

<div class="lg:flex">
    {#if (item.type = item.type)}
        <div>{item}</div>
    {:else}
        <div class=" hidden">{item}</div>
    {/if}
</div>
