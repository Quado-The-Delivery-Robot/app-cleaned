<script lang="ts">
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
</script>

<button class=" w-fit h-fit">
    <img class=" p-" src={data.image} alt={data.name} />
</button>
