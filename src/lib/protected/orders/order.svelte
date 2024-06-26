<script lang="ts">
    import "maplibre-gl/dist/maplibre-gl.css";
    import { Map, NavigationControl, Marker } from "maplibre-gl";
    import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
    import { formatDistanceToNow } from "date-fns";
    import { onMount } from "svelte";
    import type { order } from "$lib/core/types";

    export let order: order;
    let map: Map;
    let mapContainer: HTMLElement;
    let inProgress: boolean = false;

    onMount(() => {
        inProgress = order.state !== "Delivered" && order.state !== "Not started";

        // Wrapping this prevents the main function from halting.
        (async function () {
            if (inProgress) {
                while (mapContainer === undefined) {
                    await new Promise((resolve) => setTimeout(resolve, 100));
                }

                map = new Map({
                    container: mapContainer,
                    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`,
                    center: [139.753, 35.6844],
                    zoom: 15,
                });

                map.addControl(new NavigationControl(), "top-right");

                // Show the current position of the robot.
                new Marker({ color: "#FF0000" }).setLngLat([139.753, 35.6844]).addTo(map);
                new Marker({ color: "#00FF00" }).setLngLat([139.753, 35.6844]).addTo(map);
            }
        })();

        return () => {
            if (!map) return;

            map.remove();
        };
    });
</script>

<div class="primary p-5 text-left">
    <div class="flex justify-between items-center gap-2">
        <p class="text-2xl text-left font-semibold">{order.restaurant}</p>
        <p class="text-red-400 font-medium text-lg">${order.price}</p>
    </div>

    <div class="flex gap-4 justify-start items-center text-primary-700 text-lg">
        <p class="font-medium flex justify-start items-center">
            {#if inProgress}
                <div class="inProgressIndicator aspect-square h-2.5 bg-brand rounded-full mr-2" />
            {/if}

            {order.state}
        </p>

        {#if !inProgress}
            <p class="font-medium">{formatDistanceToNow(order.placed, { addSuffix: true })}</p>
        {/if}
    </div>

    {#if inProgress}
        <div class="relative aspect-[1.5/1] w-full sm:w-auto sm:h-72 overflow-hidden rounded-lg mt-2">
            <div class="absolute w-full h-full" bind:this={mapContainer} />
        </div>
    {/if}
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
