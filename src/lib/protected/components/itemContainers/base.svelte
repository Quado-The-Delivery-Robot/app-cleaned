<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
</script>

<SplideSlide>
    <div class="w-fit h-fit snap-start shrink-0 [&>.glass]:noHover [&>.glass]:!bg-opacity-60 [&>.glass]:!p-2">
        <slot />
    </div>
</SplideSlide>
