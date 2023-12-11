<script lang="ts">
    import ArrowLeft from "$lib/core/components/images/arrowLeft.svelte";
    import { page, navigating } from "$app/stores";
    import { onMount } from "svelte";

    $: isHome = $page.url.pathname === "/app";
    let isMounted: boolean = false;
    let pageName: string = $page.url.pathname;
    let headerContainer: HTMLDivElement;

    function getPageName() {
        if (!isMounted) return;

        const header: HTMLHeadingElement | null = document.querySelector("h1");

        if (header !== null) {
            header.style.display = "none";
            pageName = header.innerText;
        } else {
            pageName = "Quado";
        }
    }

    $: if ($navigating === null) getPageName();

    onMount(() => {
        isMounted = true;
        getPageName();
    });
</script>

<header class="w-full mb-6 flex {isHome ? 'justify-between' : 'justify-center'} items-center relative" bind:this={headerContainer}>
    {#if isHome}
        <div class="text-left">
            <p class="text-lg font-semibold">Quado</p>
            <p class="text-sm font-normal">Welcome, {$page.data.session?.user?.name}</p>
        </div>

        <img class="aspect-square h-9 rounded-full border border-backgroundSecondary" src={$page.data.session?.user?.image} alt={$page.data.session?.user?.name} />
    {:else}
        <button
            class="aspect-square w-5 absolute left-0 top-1/2 -translate-y-1/2"
            on:click={() => {
                history.back();
            }}
        >
            <ArrowLeft classes="w-full h-full stroke-white" />
        </button>

        <p class="text-lg text-primary font-semibold">{pageName}</p>
    {/if}
</header>
