<script lang="ts">
    import { Svrollbar } from "svrollbar";

    let viewportContainer: HTMLDivElement;
    let contentContainer: HTMLElement;
</script>

<div class="pageViewport w-screen h-full overflow-x-hidden" bind:this={viewportContainer}>
    <main class="w-screen h-fit lg:w-full" bind:this={contentContainer}>
        <slot />
    </main>
</div>

<Svrollbar viewport={viewportContainer} contents={contentContainer} />
