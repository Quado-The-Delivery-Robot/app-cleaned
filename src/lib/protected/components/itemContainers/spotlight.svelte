<script lang="ts">
    import Base from "./base.svelte";
    import { onMount } from "svelte";
    import shadeColor from "$lib/protected/shadeColor";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";

    onMount(() => {
        if ("colors" in data) {
            backgroundColor = (data as any).colors[0];
            borderColor = shadeColor(backgroundColor, -50);
        }

        if (data.name.length > 37) {
            data.name = `${data.name.slice(0, 37)}...`;
        }

        if (data.data.description.length > 47) {
            data.data.description = `${data.data.description.slice(0, 37)}...`;
        }
    });
</script>

<Base {data}>
    <div class="gap-2 aspect-square w-60 onlyGlass relative text-center font-semibold" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <div class="w-full h-1/2 absolute left-1/2 -translate-x-1/2 bottom-1/2 flex justify-center items-center pb-1">
            <img class="h-full aspect-square" src={data.image} alt={data.name} />
        </div>

        <div class="w-full h-1/2 absolute left-1/2 -translate-x-1/2 top-1/2 mt-2 pt-1">
            <p class="font-semibold">{data.name}</p>
            <p class="text-sm font-normal max-w-[80%] mt-2">{data.data.subName} | {data.data.description}</p>
        </div>
    </div>
</Base>
