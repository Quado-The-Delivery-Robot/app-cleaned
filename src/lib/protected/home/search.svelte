<script lang="ts">
    const phrases: string[] = ["Burger", "Fresh", "Salad", "Healthy"];
    let placeholderPhrase: string = phrases[Math.floor(Math.random() * phrases.length)];
</script>

<div class="w-full flex flex-col gap-3">
    <div class="glass flex gap-3 rounded-full px-5 py-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
        </svg>

        <input class="bg-transparent" placeholder={`Try searching "${placeholderPhrase}"`} />
    </div>

    <div class="flex gap-3 text-sm text-primary-700">
        {#each [{ name: "All", icon: "" }, { name: "Burger", icon: "burger" }, { name: "Salad", icon: "salad" }] as searchTag}
            <button class="glass rounded-full">{searchTag.name}</button>
        {/each}
    </div>
</div>
