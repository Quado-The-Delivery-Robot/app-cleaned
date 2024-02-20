<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Title>Cart</Title>

{#await data.carts}
    <p>Loading...</p>
{:then}
    {#each Object.values(data.carts) as cart}
        <p>{cart.restaurant}</p>
    {/each}
{/await}
