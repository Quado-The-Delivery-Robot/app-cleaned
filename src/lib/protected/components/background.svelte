<script lang="ts">
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { background as backgroundStore, type background } from "$lib/stores/app";

    export let viewportContainer: HTMLDivElement;
    let backgroundElement: HTMLElement;
    let scrollTicking: boolean = false;

    export function updatePosition() {
        if (scrollTicking) return;

        window.requestAnimationFrame(() => {
            backgroundElement.style.backgroundPosition = `0% ${(viewportContainer.scrollTop / backgroundElement.clientHeight) * 100}%`;
            scrollTicking = false;
        });

        scrollTicking = true;
    }

    function updateBackground(background: background) {
        backgroundElement.style.setProperty("--tw-gradient-from", background.from);
        backgroundElement.style.setProperty("--tw-gradient-stops", `var(--tw-gradient-from), ${background.to} var(--tw-gradient-via-position), var(--tw-gradient-to)`);
        backgroundElement.style.setProperty("--tw-gradient-to", background.to);
    }

    onMount(() => {
        backgroundElement = document.body;

        updatePosition();

        updateBackground(get(backgroundStore));
        backgroundStore.subscribe(updateBackground);
    });
</script>

<style lang="postcss">
    body {
        background-size: 100% 200%;
    }
</style>
