<script lang="ts">
    import { page, navigating } from "$app/stores";
    import { onMount } from "svelte";

    export let header: HTMLElement;
    let pageTitle: HTMLHeadingElement | null = null;
    let pageTitleObserver: MutationObserver | null = null;
    let isMounted: boolean = false;
    let pageName: string = $page.url.pathname;
    $: isHome = $page.url.pathname === "/home";

    function getPageName() {
        if (!isMounted) return;

        pageTitle = document.querySelector("h1");

        if (pageTitle !== null) {
            pageTitle.style.display = "none";
            pageName = pageTitle.innerText;
            startObserving();
        } else {
            pageName = "Quado";
            stopObserving();
        }
    }

    function stopObserving() {
        if (!pageTitleObserver) return;

        pageTitleObserver.disconnect();
        pageTitleObserver = null;
    }

    function startObserving() {
        stopObserving();

        pageTitleObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "characterData" || mutation.type === "childList") {
                    pageName = pageTitle!.innerText;
                }
            });
        });

        pageTitleObserver.observe(pageTitle!, { characterData: true, subtree: true });
    }

    $: if ($navigating === null) getPageName();

    onMount(() => {
        isMounted = true;
        getPageName();
    });
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<header class="onlyGlass border-b-0 lg:border-b absolute top-0 left-0 w-full py-6 px-7 z-10 lg:px-12 flex {isHome ? 'justify-between' : 'justify-start'} items-center" bind:this={header}>
    {#if isHome}
        <div class="text-left">
            <p class="text-lg font-semibold">Quado</p>
            <p class="text-sm font-normal">Welcome, {$page.data.session?.user?.name}</p>
        </div>

        <img class="aspect-square h-9 rounded-full border border-secondary" src={$page.data.session?.user?.image} alt={$page.data.session?.user?.name} />
    {:else}
        <button
            class="aspect-square w-5"
            on:click={() => {
                history.back();
            }}
        >
            <svg class="w-full h-full stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>

        <p class="text-lg text-primary font-semibold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{pageName}</p>
    {/if}
</header>
