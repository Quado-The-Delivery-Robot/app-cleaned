<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import type { sectionItem, restuarantItem } from "$lib/core/types";

    export let data: sectionItem;
    export let itemData: restuarantItem;
</script>

<SplideSlide>
    <button class="gap-2 w-12 rounded-lg">
        <div class=" p-2 flex items-center text-left justify-start snap-start">
            <p class="text-lg font-bold">{data.name}</p>
            <p class="text-base"><span>{itemData.name}</span>{itemData.price}</p>
            <p class="text-sm">{itemData.description}</p>
        </div>
    </button>
</SplideSlide>
