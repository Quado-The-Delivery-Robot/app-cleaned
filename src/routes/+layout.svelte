<script lang="ts">
    import "$lib/core/tailwind.css";
</script>

<svelte:head>
    <title>Quado</title>
</svelte:head>

<slot />

<style lang="postcss">
    :global(body) {
        @apply w-full h-screen text-center;
    }
</style>
