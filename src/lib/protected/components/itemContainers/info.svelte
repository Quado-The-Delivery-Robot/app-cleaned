<script lang="ts">
    import Base from "./base.svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class=" w-60 onlyGlass" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <div class="w-full flex justify-center items-center gap-2">
            <img class="w-14 h-14 aspect-square" src={data.image} alt={data.name} />

            <div class="flex flex-col justify-center items-start w-full text-left [&>p]:overflow-hidden [&>p]:text-nowrap [&>p]:text-ellipsis">
                <p class="font-semibold">{data.name}</p>
                <p class="text-sm">{data.data.subName} | {data.data.calories} calories</p>
            </div>
        </div>
    </div>
</Base>
