<script lang="ts">
    import "$lib/core/tailwind.css";
    import HeightFix from "$lib/core/heightFix.svelte";
</script>

<svelte:head>
    <title>Quado</title>
</svelte:head>

<HeightFix />

<slot />

<style lang="postcss">
    :global(body) {
        @apply w-full h-screen text-center;
    }
</style>
