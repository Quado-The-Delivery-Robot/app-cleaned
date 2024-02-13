<script lang="ts">
    import Base from "./base.svelte";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
</script>

<Base>
    <button class="w-24 aspect-square" style="background-color:{data.colors}">
        <img class="w-full h-full p-2" src={data.image} alt={data.name} />
    </button>
</Base>
