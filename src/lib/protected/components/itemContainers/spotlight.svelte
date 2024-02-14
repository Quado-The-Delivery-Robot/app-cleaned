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
    <button class="gap-2 w-12 rounded-lg" style="background-color:{backgroundColor}">
        <div class=" h-full p-2 flex items-center text-left justify-start snap-start overflow-hidden">
            <p class="text-base"><span>{data.name}</span>{data.data.subName}</p>
            <p class="text-sm">{data.data.description}</p>
        </div>
    </button>
</Base>
