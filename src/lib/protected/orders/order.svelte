<script lang="ts">
    export let order: any;
</script>

<div class="rounded-lg p-5 bg-backgroundSecondary text-left">
    <div class="flex justify-between items-center gap-2">
        <p class="text-2xl text-left font-semibold">{order.restaurant.name}</p>
        <p class=" text-red-400 font-medium text-lg">${order.price}</p>
    </div>

    <p class="text-primary font-medium text-lg flex justify-start items-center mb-2">
        {#if order.state !== "Delivered" && order.state !== "Not started"}
            <div class="inProgressIndicator aspect-square h-2.5 bg-brand rounded-full mr-2" />
        {/if}

        {order.state}
    </p>

    <p class="text-base text-primary-800 font-normal">{order.details}</p>
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
