<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import shadeColor from "$lib/protected/shadeColor";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    export let backgroundColor: string = "#000000";
    export let borderColor: string = "#000000";

    function click() {
        if (data.type === "restaurant") {
            goto(`/restaurant/${data.id}`);
        } else if (data.type === "item") {
            goto(`/item/${data.id}`);
        }
    }

    onMount(() => {
        if ("colors" in data) {
            backgroundColor = (data as any).colors[0];
            borderColor = shadeColor(backgroundColor, -50);
        }
    });
</script>

<SplideSlide>
    <button class="w-fit h-fit snap-start shrink-0 [&>.primary]:rounded-lg [&>.primary]:border [&>.primary]:!bg-opacity-60 [&>.primary]:!p-2" on:click={click}>
        <slot />
    </button>
</SplideSlide>
