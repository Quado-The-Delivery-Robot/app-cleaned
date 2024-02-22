<script lang="ts">
    import Base from "./base.svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string;
    let borderColor: string;
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class=" w-32 aspect-square onlyGlass" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <div class="w-full flex justify-center items-center">
            <img class="w-full aspect-square" src={data.image} alt={data.name} />
        </div>

        <div class="w-full justify-between items-center">
            <p>{data.name}</p>
            <p>{data.data.subName}</p>
        </div>
    </div>
</Base>
