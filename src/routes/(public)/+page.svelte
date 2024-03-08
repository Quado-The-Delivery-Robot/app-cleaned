<script lang="ts">
    import Header from "$lib/public/index/header.svelte";
    import Footer from "$lib/public/index/footer.svelte";
    import Landing from "$lib/public/index/landing.svelte";
    import Why from "$lib/public/index/why.svelte";
    import Mission from "$lib/public/index/mission.svelte";
</script>

<Header />
<Landing />
<Why />
<Mission />
<Footer />

<style lang="postcss">
    :global(body) {
        @apply bg-background;
    }
</style>
