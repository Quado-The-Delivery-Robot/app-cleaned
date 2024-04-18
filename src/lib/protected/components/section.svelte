<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import IconItemContainer from "./itemContainers/icon.svelte";
    import SpotlightItemContainer from "./itemContainers/spotlight.svelte";
    import InfoItemCotainer from "./itemContainers/info.svelte";
    import type { itemType, sectionItem, sectionType } from "$lib/core/types";

    export let hasHeader: boolean;
    export let name: string;
    export let items: any[];
    export let sectionType: sectionType;
    export let itemType: itemType;

    function getColorsFromItem(item: sectionItem): string[] {
        // For some items the colors are inserted after they are gotten from the database, so they could be in data.
        if ("colors" in item && typeof item.colors !== null) {
            return item.colors!;
        } else if ("data" in item && "colors" in item.data) {
            return item.data.colors;
        } else {
            return ["#000000", "#000000", "#000000"];
        }
    }

    function getIDFromItem(item: sectionItem, index: number): string {
        if ("id" in item) {
            return item.id;
        } else {
            return index.toString();
        }
    }
</script>

<div class="w-full">
    {#if hasHeader}
        <div class="flex justify-between items-center mb-1">
            <p class="text-lg font-semibold">{name}</p>
            <a href="/{name.toLowerCase()}/all" class="flex items-center text-sm opacity-50 font-light"
                >See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="aspect-square h-6 fill-white">
                    <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                </svg>
            </a>
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
            {#each items as item, index}
                {#if sectionType === "icon"}
                    <IconItemContainer
                        data={{
                            colors: getColorsFromItem(item),
                            name: item.name,
                            image: item.image,
                            id: getIDFromItem(item, index),
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
                            id: getIDFromItem(item, index),
                            type: itemType,
                            data: {
                                subName: "price" in item ? `$${item.price}` : null,
                                description: "description" in item ? item.description : null,
                            },
                        }}
                    />
                {:else if sectionType === "info"}
                    <InfoItemCotainer
                        data={{
                            colors: getColorsFromItem(item),
                            name: item.name,
                            image: item.image,
                            id: getIDFromItem(item, index),
                            type: itemType,
                            data: {
                                subName: "price" in item ? `$${item.price}` : null,
                                description: "description" in item ? item.description : null,
                                calories: "calories" in item ? item.calories : null,
                            },
                        }}
                    />
                {/if}
            {/each}
        </Splide>
    </div>
</div>
