<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
</script>

<SplideSlide>
    <div class="w-fit h-fit snap-start shrink-0 [&>.onlyGlass]:rounded-lg [&>.onlyGlass]:border [&>.onlyGlass]:!bg-opacity-60 [&>.onlyGlass]:!p-2">
        <slot />
    </div>
</SplideSlide>
