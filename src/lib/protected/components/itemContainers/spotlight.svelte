<script lang="ts">
    import Base from "./base.svelte";
    import type { sectionItem } from "$lib/core/types";
    import { onMount } from "svelte";

    export let data: sectionItem;
    let backgroundColor: string = "#000000";
    let borderColor: string = "#000000";

    // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    function shadeColor(color: string, percent: number): string {
        let R: number = parseInt(color.substring(1, 3), 16);
        let G: number = parseInt(color.substring(3, 5), 16);
        let B: number = parseInt(color.substring(5, 7), 16);

        R = (R * (100 + percent)) / 100;
        G = (G * (100 + percent)) / 100;
        B = (B * (100 + percent)) / 100;

        R = R < 255 ? R : 255;
        G = G < 255 ? G : 255;
        B = B < 255 ? B : 255;

        R = Math.round(R);
        G = Math.round(G);
        B = Math.round(B);

        let RR: string = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
        let GG: string = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
        let BB: string = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

        return "#" + RR + GG + BB;
    }

    onMount(() => {
        if ("colors" in data) {
            backgroundColor = (data as any).colors[0];
            borderColor = shadeColor(backgroundColor, -50);
        }
    });
</script>

<Base>
    <button class="gap-2 f-full w-fit rounded-lg" style="background-colors;{backgroundColor}; border-color:{borderColor};">
        <div class=" p-2 flex items-center text-left justify-start snap-start overflow-hidden">
            <p class="text-base"><span>{data.name}</span>{data.data.subName}</p>
            <p class="text-sm">{data.data.description}</p>
        </div>
    </button>
</Base>
