<script lang="ts">
    import Section from "./components/section.svelte";
</script>

<Section id="why" title="Why did we<br>make Quado?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla odio ipsum sit asperiores alias iste nesciunt architecto iusto quam">
    <div class="w-full h-full absolute right-0 top-1/2 -translate-y-1/2 blur-sm brightness-75 lg:blur-none lg:brightness-100">
        {#each Array(4) as _value, quadrant}
            <div class="absolute w-[calc(50%-8%)] h-[calc(50%-8%)]" style="top: calc({25 * (quadrant == 0 || quadrant == 1 ? 0 : 2)}% + {8 * (quadrant == 0 || quadrant == 1 ? -1 : 1)}%); left: calc({25 * (quadrant == 0 || quadrant == 2 ? 0 : 2)}% + {8 * (quadrant == 0 || quadrant == 2 ? -1 : 1)}%);">
                {#each Array(4) as _value, _index}
                    <p class="questionMark aspect-square absolute fill" style="--rotation: {Math.random() * (Math.random() < 0.5 ? -50 : 50)}deg; --delay: {Math.random() * 3}s; width: {Math.random() * 20 + 30}px; top: {Math.random() * 100}%; left: {Math.random() * 100}%;">?</p>
                {/each}
            </div>
        {/each}

        <div class="w-[15vw] aspect-square absolute lg:right-20 xl:right-40 top-1/2 -translate-y-1/2 z-[2] hidden lg:block">
            <img class="w-full h-full" alt="Quado logo" src="/images/icon.png" />
        </div>
    </div>
</Section>

<style lang="postcss">
    .questionMark {
        animation: hover infinite 6s ease-in-out var(--delay);
        transform: translateY(0px) rotate(var(--rotation));
    }

    @keyframes hover {
        0% {
            transform: translateY(0px) rotate(var(--rotation));
        }

        50% {
            transform: translateY(-15px) rotate(var(--rotation));
        }

        100% {
            transform: translateY(0px) rotate(var(--rotation));
        }
    }
</style>
