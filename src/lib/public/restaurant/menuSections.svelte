<script lang="ts">
    import type { sectionItem } from "$lib/core/types";
    export let data: sectionItem;
</script>

<div class="lg:flex">
    {data.type}
</div>
