<script lang="ts">
    import Header from "$lib/protected/components/header.svelte";
    import ActionBar from "$lib/protected/components/actionBar.svelte";
</script>

<div class="w-screen h-screen overflow-hidden flex flex-col lg:flex-row-reverse justify-center items-center">
    <div class="w-screen flex flex-col flex-1 relative">
        <Header></Header>

        <main class="bg-orange-500 w-screen lg:w-full flex-1 overflow-x-hidden overflow-y-auto">
            <slot />
        </main>
    </div>

    <ActionBar></ActionBar>
</div>
