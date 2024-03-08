<script lang="ts">
    import Background from "$lib/protected/background.svelte";
    import Header from "$lib/protected/header.svelte";
    import ActionBar from "$lib/protected/actionBar.svelte";
    import { Svrollbar } from "svrollbar";
    import { onMount } from "svelte";
    import { navigating, page } from "$app/stores";
    import { background } from "$lib/stores/app";

    let header: HTMLElement;
    let actionBar: HTMLElement;
    let viewportContainer: HTMLDivElement;
    let contentContainer: HTMLElement;
    let isMounted: boolean = false;
    let updateBackgroundPosition: () => never;
    $: dontResetBackground = $page.url.pathname.includes("/restaurant/");

    function updateViewport() {
        if (!isMounted) return;

        viewportContainer.style.height = `${window.innerHeight - actionBar.clientHeight}px`;

        const paddingBottom: string = window.getComputedStyle(header, null).getPropertyValue("padding-bottom");
        viewportContainer.style.paddingTop = `${header.clientHeight + parseInt(paddingBottom.match(/\d+/g)?.toString() || "0")}px`;

        viewportContainer.scrollTop = 0;
    }

    function resetBackground() {
        if (dontResetBackground) return;

        background.set({
            from: "#1E1E21",
            to: "#000000",
        });
    }

    $: if ($navigating === null) {
        updateViewport();
        resetBackground();
    }

    onMount(() => {
        isMounted = true;
        updateViewport();

        window.addEventListener("resize", updateViewport);

        return () => {
            window.removeEventListener("resize", updateViewport);
        };
    });
</script>

<div class="w-screen h-screen overflow-hidden flex flex-col lg:flex-row-reverse justify-center items-center">
    <div class="w-screen flex flex-col flex-1 h-full relative">
        <Header bind:header />

        <div class="pageViewport w-screen h-full overflow-x-hidden lg:w-full lg:flex-1 flex" bind:this={viewportContainer} on:scroll={updateBackgroundPosition}>
            <main class="w-screen px-7 pb-6 h-fit lg:pb-0 lg:px-12 lg:w-full" bind:this={contentContainer}>
                <slot />
            </main>
        </div>

        <Svrollbar viewport={viewportContainer} contents={contentContainer} />
    </div>

    <ActionBar bind:actionBar />
</div>

<Background {viewportContainer} bind:updatePosition={updateBackgroundPosition} />

<style lang="postcss">
    .pageViewport {
        -ms-overflow-style: none;
        scrollbar-width: none;
        -webkit-overflow-scrolling: auto;
    }

    .pageViewport::-webkit-scrollbar {
        display: none;
    }
</style>
