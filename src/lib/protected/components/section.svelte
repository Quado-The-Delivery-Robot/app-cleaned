<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import IconItemContainer from "./itemContainers/icon.svelte";
    import SpotlightItemContainer from "./itemContainers/spotlight.svelte";
    import type { itemType, sectionItem, sectionType } from "$lib/core/types";

    export let hasHeader: boolean;
    export let name: string;
    export let items: sectionItem[];
    export let sectionType: sectionType;
    export let itemType: itemType;

    function getColorsFromItem(item: sectionItem): string[] {
        // For some items the colors are inserted after they are gotten from the database, so they could be in data.
        return item.colors ?? "colors" in item.data ? item.data.colors : ["#000000", "#000000", "#000000"];
    }
</script>

<div class="w-full">
    {#if hasHeader}
        <div class="flex justify-between items-center mb-1">
            <p class="text-lg font-semibold">{name}</p>
            <a href="/{name.toLowerCase()}/all" class="flex items-center text-sm opacity-50 font-light">See all </a>
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
            {#each items as item, itemID}
                {#if sectionType === "icon"}
                    <IconItemContainer
                        data={{
                            colors: getColorsFromItem(item),
                            name: item.name,
                            image: item.image,
                            id: itemID.toString(),
                            type: itemType,
                            data: {},
                        }}
                    />
                {:else if sectionType === "spotlight"}
                    <SpotlightItemContainer
                        data={{
                            colors: getColorsFromItem(item),
                            name: item.name,
                            image: item.image,
                            id: itemID.toString(),
                            type: itemType,
                            data: {
                                subName: "price" in item ? `$${item.price}` : null,
                                description: "description" in item ? item.description : null,
                            },
                        }}
                    />
                {/if}
            {/each}
        </Splide>
    </div>
</div>

<style lang="css">
    .splide__pagination {
        @apply !hidden;
    }
</style>
