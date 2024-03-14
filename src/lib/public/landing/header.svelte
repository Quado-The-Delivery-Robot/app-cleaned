<script lang="ts">
    import { onMount } from "svelte";

    let pageViewport: HTMLDivElement;
    let ticking: boolean = false;
    let showMenu: boolean = false;
    $: scrolling = false;

    function scroll() {
        const scrollPosition: number = pageViewport.scrollTop;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                scrolling = scrollPosition >= 50;
                ticking = false;
            });

            ticking = true;
        }
    }

    onMount(() => {
        pageViewport = document.querySelector(".pageViewport")! as HTMLDivElement;

        scroll();
        pageViewport.addEventListener("scroll", scroll);

        return () => {
            pageViewport.removeEventListener("scroll", scroll);
        };
    });
</script>

<header class="w-full absolute top-0 left-0 z-10 text-lg text-primary transition-all duration-300 {scrolling || showMenu ? 'backdrop-blur-md backdrop-brightness-[0.15] py-4' : 'py-6'}">
    <div class="flex justify-center items-center relative">
        <button
            class="absolute top-1/2 -translate-y-1/2 left-8 h-6 aspect-square md:hidden z-20"
            on:click={() => {
                showMenu = !showMenu;
            }}
        >
            <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </button>

        <div class="justify-end items-center gap-8 basis-full hidden md:flex">
            <a href="/#why">Why</a>
            <a href="/#mission">Mission</a>
        </div>

        <img class="h-12 mx-12" src="/icon.png" alt="Quado logo" />

        <div class="justify-start items-center gap-8 basis-full hidden md:flex">
            <a href="/#team">Team</a>
            <a href="/#contact">Contact</a>
        </div>
    </div>

    {#if showMenu}
        <div class="flex flex-col gap-3 justify-center items-start py-4 px-8 md:hidden">
            <a href="/#why">Why</a>
            <a href="/#mission">Mission</a>
            <a href="/#team">Team</a>
            <a href="/#contact">Contact</a>
        </div>
    {/if}
</header>
