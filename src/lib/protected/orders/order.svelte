<script lang="ts">
    import { formatRelative, subDays } from "date-fns";
    import type { order } from "$lib/core/types";

    export let order: order;
</script>

<div class="glass p-5 text-left">
    <div class="flex justify-between items-center gap-2">
        <p class="text-2xl text-left font-semibold">{order.restaurant}</p>
        <p class="text-red-400 font-medium text-lg">${order.price}</p>
    </div>

    <div class="flex gap-4 justify-start items-center text-primary-700 text-lg mb-2">
        <p class="font-medium flex justify-start items-center">
            {#if order.state !== "Delivered" && order.state !== "Not started"}
                <div class="inProgressIndicator aspect-square h-2.5 bg-brand rounded-full mr-2" />
            {/if}

            {order.state}
        </p>

        <p class="font-medium">{formatRelative(subDays(order.placed, 3), order.placed)}</p>
    </div>

    <p class="text-base text-primary-800 font-normal"></p>
</div>

<style>
    .inProgressIndicator {
        animation: inProgressIndicator 1s ease infinite alternate;
    }

    @keyframes inProgressIndicator {
        0% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }
</style>
