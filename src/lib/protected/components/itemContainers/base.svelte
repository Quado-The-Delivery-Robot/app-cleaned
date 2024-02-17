<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import { goto } from "$app/navigation";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;

    function click() {
        if (data.type === "restaurant") {
            goto(`/restaurant/${data.id}`);
        } else if (data.type === "item") {
        }
    }
</script>

<SplideSlide>
    <button class="w-fit h-fit snap-start shrink-0 [&>.onlyGlass]:rounded-lg [&>.onlyGlass]:border [&>.onlyGlass]:!bg-opacity-60 [&>.onlyGlass]:!p-2" on:click={click}>
        <slot />
    </button>
</SplideSlide>
