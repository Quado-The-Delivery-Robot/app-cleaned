<script lang="ts">
    import Header from "$lib/public/landing/header.svelte";
    import Footer from "$lib/public/landing/footer.svelte";
    import Landing from "$lib/public/landing/landing.svelte";
    import Why from "$lib/public/landing/why.svelte";
    import Mission from "$lib/public/landing/mission.svelte";
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
