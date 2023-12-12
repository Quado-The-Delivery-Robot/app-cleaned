<script lang="ts">
    import { signIn } from "@auth/sveltekit/client";
</script>

<button class="absolute bottom-[100px] w-[55%] left-1/2 -translate-x-1/2 bg-brand rounded-xl px-12 py-4 text-2xl text-black max-w-[650px]" on:click={() => signIn("google")}>Login</button>