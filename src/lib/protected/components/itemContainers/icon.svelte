<script lang="ts">
    import Base from "./base.svelte";
    import hexToRgb from "$lib/protected/hexToRGB";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
    let backgroundColor: string;
    let borderColor: string;
</script>

<Base {data} bind:backgroundColor bind:borderColor>
    <div class="w-24 aspect-square onlyGlass" style="background-color: rgba({hexToRgb(backgroundColor)}, var(--tw-bg-opacity)); border-color: {borderColor};">
        <img class="w-full aspect-square p-2" src={data.image} alt={data.name} />
    </div>
</Base>
