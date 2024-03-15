<script lang="ts">
    export let id: string;
    export let direction: "left" | "right" = "left";
    export let title: string;
    export let description: string;
</script>

<span {id} class="relative"></span>

<div class="flex flex-col justify-center md:justify-between items-center w-full h-screen px-10 {direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}" id="#{id}">
    <div class="w-full md:w-[45%] h-full text-center md:text-left flex flex-col justify-center items-center md:items-start gap-4 {direction === 'right' ? 'md:pr-[10%] 2xl:pr-[18%]' : 'md:pl-[10%] 2xl:pl-[18%]'}">
        <p class="text-3xl font-semibold">{@html title}</p>
        <p class="text-lg">{description}</p>
    </div>

    <div class="w-full relative md:w-[55%] h-[80vh]">
        <slot />
    </div>
</div>
