<script lang="ts">
    import Base from "./base.svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class="primary w-24 aspect-square" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <img class="w-full aspect-square p-2" src={data.image} alt={data.name} />
    </div>
</Base>
