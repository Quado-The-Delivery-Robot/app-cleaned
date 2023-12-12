<script lang="ts">
    import Background from "$lib/core/components/background.svelte";
    import "$lib/core/tailwind.css";
</script>

<svelte:head>
    <title>Quado</title>
</svelte:head>

<slot />

<Background />

<style lang="postcss">
    :global(body) {
        @apply w-full h-screen;
    }
</style>
