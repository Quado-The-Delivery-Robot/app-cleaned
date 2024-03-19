<script lang="ts">
    import BrandTitle from "$lib/public/components/brandTitle.svelte";
    import { signIn } from "@auth/sveltekit/client";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.register ? "Register" : "Login"}</title>
</svelte:head>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5"><BrandTitle /></div>

<button class="absolute bottom-[100px] w-[55%] left-1/2 -translate-x-1/2 bg-brand rounded-xl px-12 py-4 text-2xl text-black max-w-[650px]" on:click={() => signIn("google")}>{data.register ? "Register" : "Login"}</button>

<style lang="postcss">
    :global(body) {
        @apply bg-gradient-to-b from-secondary to-primary bg-no-repeat;
    }
</style>
