<script lang="ts">
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { background as backgroundStore, type background } from "$lib/stores/app";

    function updateBackground(background: background) {
        document.body.style.setProperty("--tw-gradient-from", background.from);
        //document.body.style.setProperty("--tw-gradient-stops", `var(--tw-gradient-from), ${background.to} var(--tw-gradient-via-position), var(--tw-gradient-to)`);
        document.body.style.setProperty("--tw-gradient-to", background.to);
    }

    onMount(() => {
        updateBackground(get(backgroundStore));
        backgroundStore.subscribe(updateBackground);
    });
</script>
