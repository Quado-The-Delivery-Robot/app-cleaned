<script lang="ts">
    import Background from "$lib/protected/components/background.svelte";
    import Header from "$lib/protected/components/header.svelte";
    import ActionBar from "$lib/protected/components/actionBar.svelte";
    import { Svrollbar } from "svrollbar";
    import { onMount } from "svelte";
    import { navigating } from "$app/stores";

    let headerContainer: HTMLElement;
    let viewportContainer: HTMLDivElement;
    let contentContainer: HTMLElement;
    let isMounted: boolean = false;

    function updatePadding() {
        if (!isMounted) return;

        const paddingBottom: string = window.getComputedStyle(headerContainer, null).getPropertyValue("padding-bottom");
        viewportContainer.style.paddingTop = `${headerContainer.clientHeight + parseInt(paddingBottom.match(/\d+/g)?.toString() || "0")}px`;
    }

    $: if ($navigating === null) updatePadding();

    onMount(() => {
        isMounted = true;
        updatePadding();
    });
</script>

<Background />

<div class="w-screen h-screen overflow-hidden flex flex-col lg:flex-row-reverse justify-center items-center">
    <div class="w-screen flex flex-col flex-1 h-full relative">
        <Header bind:headerContainer />

        <div class="pageViewport w-screen h-full overflow-x-hidden lg:w-full flex-1 flex" bind:this={viewportContainer}>
            <main class="w-screen px-7 h-fit lg:px-12 lg:w-full" bind:this={contentContainer}>
                <slot />
            </main>
        </div>

        <Svrollbar viewport={viewportContainer} contents={contentContainer} />
    </div>

    <ActionBar />
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-gradient-to-b from-backgroundSecondary to-background bg-no-repeat;
    }

    .pageViewport {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .pageViewport::-webkit-scrollbar {
        display: none;
    }
</style>
