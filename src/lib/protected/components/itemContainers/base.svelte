<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
</script>

<SplideSlide>
    <div class="w-fit h-fit snap-start shrink-0">
        <slot />
    </div>
</SplideSlide>
