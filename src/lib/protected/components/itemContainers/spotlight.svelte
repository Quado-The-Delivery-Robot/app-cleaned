<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
</script>

<SplideSlide>
    <button class="gap-2 w-12 rounded-lg">
        <div class=" p-2 flex items-center text-left justify-start snap-start">
            <p class="text-lg font-semibold">{data.name}</p>
            <p class="text-sm">{data.description}</p>
        </div>
    </button>
</SplideSlide>
