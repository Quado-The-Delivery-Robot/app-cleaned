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
    <button class="gap-2 aspect-square w-48 border rounded-lg" style="background-color: {backgroundColor}; border-color: {borderColor};">
        <div class="p-2 flex items-center text-left justify-start snap-start overflow-hidden">
            <p class="text-base font-bold"><span class="mr-2 font-semibold">{data.name}</span>{data.data.subName}</p>
            <p class="text-sm">{data.data.description}</p>
        </div>
    </button>
</Base>
