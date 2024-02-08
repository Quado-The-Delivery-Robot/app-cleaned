<script lang="ts">
    import Base from "./base.svelte";
    import type { sectionItem, restuarantItem } from "$lib/core/types";

    export let data: sectionItem;
    export let itemData: restuarantItem;
</script>

<Base>
    <button class="gap-2 w-12 rounded-lg">
        <div class=" p-2 flex items-center text-left justify-start snap-start">
            <p class="text-lg font-bold">{data.name}</p>
            <p></p>
            <p class="text-sm">{itemData.description}</p>
        </div>
    </button>
</Base>
