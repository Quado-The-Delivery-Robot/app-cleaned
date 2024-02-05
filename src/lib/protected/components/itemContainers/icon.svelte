<script lang="ts">
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
</script>

<button class=" w-12 aspect-square">
    <img class=" w-full h-full p-2" src={data.image} alt={data.name} />
</button>
