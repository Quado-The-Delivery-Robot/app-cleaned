<script lang="ts">
    import Base from "./base.svelte";
    import { onMount } from "svelte";
    import shadeColor from "$lib/protected/shadeColor";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";

    onMount(() => {
        if ("colors" in data) {
            backgroundColor = (data as any).colors[0];
            borderColor = shadeColor(backgroundColor, -50);
        }
    });
</script>

<Base>
    <button class="gap-2 aspect-square w-48 glass" style="background-color: {backgroundColor}; border-color: {borderColor};">
        <div class="p-2 h-full text-center flex items-center justify-center snap-start overflow-hidden flex-col text-base font-semibold">
            <img class="w-full aspect-square" src={data.image} alt={data.name} />
            <p>{data.name}</p>
            <p>{data.data.subName}</p>
            <p class="text-sm font-normal">{data.data.description}</p>
        </div>
    </button>
</Base>
