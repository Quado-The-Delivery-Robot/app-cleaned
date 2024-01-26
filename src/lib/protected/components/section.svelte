<script lang="ts">
    import type { restuarantItem, restaurant } from "$lib/core/types";
    import { Splide } from "@splidejs/svelte-splide";
    import { Container } from "postcss";
    

    export let hasHeader: boolean;
    export let data: restaurant[] | restuarantItem[] = [];
    export let sectionData: string = "";
    export let sectionName: string;
    export let items:any[];
</script>

<div class=" flex felx-col gap-2 py-2 px-4">
    {#if hasHeader}
        <div class="flex justify-between items-center mb-1">
            <p class="text-lg font-semibold">{sectionName}</p>
            <a href="/{sectionName.toLowerCase()}/all" class="flex items-center text-sm opacity-50 font-light">See all </a>
        </div>
    {/if}
    <div class="rounded-lg overflow-hidden">
        <Splide
            options={{
                gap: "1rem",
                perMove: 1,
                wheel: true,
                autoHeight: true,
                autoWidth: true,
                focus: 0,
                arrows: false,
                omitEnd: true,
            }}
        >
            {#each items as item}
                <Container data={items}></Container>
        </Splide>
    </div>
</div>
