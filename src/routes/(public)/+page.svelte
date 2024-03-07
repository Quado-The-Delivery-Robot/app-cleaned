<script lang="ts">
    import Header from "$lib/public/index/header.svelte";
    import Landing from "$lib/public/index/landing.svelte";
</script>

<Header />
<Landing />

<style lang="postcss">
    :global(body) {
        @apply bg-background;
    }
</style>
