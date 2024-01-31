<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import IconItemContainer from "./itemContainers/icon.svelte";

    export let hasHeader: boolean;
    export let sectionName: string;
    export let items: any[] = [];
</script>

<div class=" w-full">
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
                <IconItemContainer data={item} />
            {/each}
            <div>dummydata</div>
        </Splide>
    </div>
</div>
