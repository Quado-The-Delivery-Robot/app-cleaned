<script lang="ts">
    import Base from "./base.svelte";
    import { onMount } from "svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";

    onMount(() => {
        if (data.name.length > 37) {
            data.name = `${data.name.slice(0, 37)}...`;
        }

        if (data.data.description.length > 47) {
            data.data.description = `${data.data.description.slice(0, 37)}...`;
        }
    });
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class="primary gap-2 aspect-square w-60 relative text-center font-semibold flex flex-col justify-center items-center overflow-hidden" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <div class="w-full h-2/3 flex justify-center items-center">
            <img class="h-full aspect-square" src={data.image} alt={data.name} />
        </div>

        <div class="w-full h-1/3 flex flex-col justify-between items-center">
            <p class="font-semibold">{data.name}</p>
            <p class="text-sm font-normal">{data.data.subName} | {data.data.description}</p>
        </div>
    </div>
</Base>
