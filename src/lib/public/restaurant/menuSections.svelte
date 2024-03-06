<script lang="ts">
    import type { restaurant } from "$lib/core/types";

    export let data: restaurant;
</script>

<div class="lg:flex">
    {data.tags}
</div>
