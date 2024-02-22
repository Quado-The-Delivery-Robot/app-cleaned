<script lang="ts">
    import Base from "./base.svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class=" w-36 onlyGlass" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <div class="w-full flex justify-center items-center gap-2">
            <img class="w-full aspect-square" src={data.image} alt={data.name} />
            <p class="text-sm ml-2">{data.name} <span>{data.data.subName}</span></p>
        </div>
    </div>
</Base>
