<script lang="ts">
    import { signIn } from "@auth/sveltekit/client";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<button class="absolute bottom-[100px] w-[55%] left-1/2 -translate-x-1/2 bg-brand rounded-xl px-12 py-4 text-2xl text-black max-w-[650px]" on:click={() => signIn("google")}>{data.register ? "Register" : "Login"}</button>
