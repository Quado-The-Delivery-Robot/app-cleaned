<script lang="ts">
    import "$lib/core/tailwind.css";
    import "@splidejs/svelte-splide/css/core";
    import HeightFix from "$lib/core/heightFix.svelte";
</script>

<HeightFix />

<slot />

<style lang="postcss">
    :global(body) {
        @apply w-full h-screen text-center overflow-hidden;
    }

    :global(.splide__pagination) {
        @apply !hidden;
    }
</style>
