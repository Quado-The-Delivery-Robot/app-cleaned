<script lang="ts">
    import Background from "$lib/protected/components/background.svelte";
    import Header from "$lib/protected/components/header.svelte";
    import ActionBar from "$lib/protected/components/actionBar.svelte";
</script>

<Background></Background>

<div class="w-screen h-screen overflow-hidden flex flex-col lg:flex-row-reverse justify-center items-center">
    <div class="w-screen flex flex-col flex-1 h-full relative">
        <Header></Header>

        <main class="w-screen px-7 h-full lg:px-12 lg:w-full flex-1 overflow-x-hidden overflow-y-auto">
            <slot />
        </main>
    </div>

    <ActionBar></ActionBar>
</div>
