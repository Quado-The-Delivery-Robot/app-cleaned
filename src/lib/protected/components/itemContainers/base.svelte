<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
</script>

<SplideSlide>
    <div class="w-fit h-fit snap-start shrink-0 !bg-opacity-60 [&>button]:!p-2">
        <slot />
    </div>
</SplideSlide>
