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

        if (data.data.name.length > 37) {
            data.data.name.value = `${data.data.name.value.slice(0, 37)}...`;
        }

        if (data.data.description.length > 47) {
            data.data.description.value = `${data.data.description.value.slice(0, 37)}...`;
        }
    });
</script>

<Base>
    <button class="gap-2 aspect-square w-48 glass text-center flex items-center justify-center flex-col font-semibold" style="background-color: {backgroundColor} / var(--tw-bg-opacity); border-color: {borderColor};">
        <img class="w-full aspect-square" src={data.image} alt={data.name} />
        <p class="font medium">{data.name}</p>
        <p>{data.data.subName}</p>
        <p class="text-sm font-normal">{data.data.description}</p>
    </button>
</Base>
