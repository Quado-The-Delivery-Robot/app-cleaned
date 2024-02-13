<script lang="ts">
    import Base from "./base.svelte";
    import type { sectionItem } from "$lib/core/types";
    import { onMount } from "svelte";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";

    onMount(() => {
        if ("colors" in data) {
            backgroundColor = (data as any).colors[0];
        }
    });
</script>

<Base>
    <button class="w-24 aspect-square rounded-lg p-2" style="background-color: {backgroundColor};">
        <img class="w-full h-full p-2" src={data.image} alt={data.name} />
    </button>
</Base>
