<script lang="ts">
    import Base from "./base.svelte";
    import type { sectionItem } from "$lib/core/types";

    export let data: sectionItem;
</script>

<Base>
    <button class="gap-2 f-fit w-fit rounded-lg bg-white">
        <div class=" p-2 flex items-center text-left justify-start snap-start overflow-hidden">
            <p class="text-base"><span>{data.name}</span>{data.data.subName}</p>
            <p class="text-sm">{data.data.description}</p>
        </div>
    </button>
</Base>
