<script lang="ts">
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { background as backgroundStore, background } from "$lib/stores/app";

    export let viewportContainer: HTMLDivElement;
    let scrollTicking: boolean = false;

    export function updatePosition() {
        if (scrollTicking) return;

        window.requestAnimationFrame(() => {
            viewportContainer.style.backgroundPosition = `0% ${Math.min((viewportContainer.scrollTop / viewportContainer.clientHeight) * 100, 100)}%`;
            scrollTicking = false;
        });

        scrollTicking = true;
    }

    function updateBackground(background: background) {
        viewportContainer.style.setProperty("--tw-gradient-from", background.from);
        viewportContainer.style.setProperty("--tw-gradient-stops", `var(--tw-gradient-from), ${background.to} var(--tw-gradient-via-position), var(--tw-gradient-to)`);
        viewportContainer.style.setProperty("--tw-gradient-to", background.to);
    }

    onMount(() => {
        updatePosition();

        updateBackground(get(backgroundStore));
        backgroundStore.subscribe(updateBackground);
    });
</script>

<style lang="postcss">
    :global(body) {
        @apply bg-background;
    }

    :global(.pageViewport) {
        background-size: 100% 200%;
        @apply bg-gradient-to-b from-backgroundSecondary to-background bg-no-repeat;
    }
</style>
