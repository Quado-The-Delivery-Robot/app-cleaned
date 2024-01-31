<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import Order from "$lib/protected/orders/order.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    onMount(() => {
        console.log(data);
    });
</script>

<Title>Orders</Title>

<div class="flex-col flex gap-4">
    <!--{#if data.orders.length == 0}
        <div class="flex flex-col gap-2 justify-center items-center">
            <svg class="fill-white aspect-square w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>

            <p class="text-xl">Try ordering something!</p>
        </div>
    {:else}
        {#each data.orders as { status, restaurant, items, price }}
            <Order order={{ status, restaurant, price, details: items.join(", ") }} />
        {/each}
    {/if}-->
</div>
