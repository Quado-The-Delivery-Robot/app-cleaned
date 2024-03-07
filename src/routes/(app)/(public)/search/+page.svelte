<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Title>Results for '{data.query}'</Title>
