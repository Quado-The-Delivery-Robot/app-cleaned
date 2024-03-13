<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import { SplideSlide } from "@splidejs/svelte-splide";
    import { goto } from "$app/navigation";
    import { PUBLIC_ENDPOINT } from "$env/static/public";
    import { onMount } from "svelte";

    let searchInput: HTMLInputElement;
    let tags: string[] = [];

    function search() {
        goto(`/search?query=${searchInput.value}`);
    }

    function inputKeyPress(event: KeyboardEvent) {
        if (event.key !== "Enter") return;

        search();
    }

    onMount(async () => {
        const tagsResponse = await fetch(`${PUBLIC_ENDPOINT}/v1/search/tags/get`);
        const { tags: newTags } = await tagsResponse.json();
        tags = newTags;
    });
</script>

<div class="w-full flex flex-col gap-2 pb-6">
    <div class="glass flex gap-3 rounded-full px-5 py-2.5">
        <button class="w-6 aspect-square" on:click={search}>
            <svg class="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
            </svg>
        </button>

        <input class="bg-transparent" placeholder={`Try searching "${tags[Math.floor(Math.random() * tags.length)]}"`} bind:this={searchInput} on:keypress={inputKeyPress} />
    </div>

    <div class="rounded-full overflow-hidden">
        <Splide
            options={{
                gap: "0.75rem",
                perMove: 1,
                wheel: true,
                autoHeight: true,
                autoWidth: true,
                focus: 0,
                arrows: false,
                omitEnd: true,
            }}
        >
            {#each tags as tag}
                <SplideSlide>
                    <button class="w-fit h-fit snap-start shrink-0 glass rounded-full text-sm text-primary-700">{tag}</button>
                </SplideSlide>
            {/each}
        </Splide>
    </div>
</div>
