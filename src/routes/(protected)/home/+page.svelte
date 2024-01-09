<script lang="ts">
    import Search from "$lib/protected/home/search.svelte";
    import Section from "$lib/protected/components/section.svelte";

    export let data: any;
</script>

<Search />

{#each Object.entries(data.page) as [sectionName, sectionData]}
    <div class=" flex flex-row py-2 gap-2 w-full">
        <Section />
    </div>
{/each}
