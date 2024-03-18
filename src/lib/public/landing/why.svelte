<script lang="ts">
    import Section from "./components/section.svelte";
</script>

<Section id="why" title="Why did we<br>make Quado?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla odio ipsum sit asperiores alias iste nesciunt architecto iusto quam">
    <div class="w-full md:w-[45%] absolute md:relative h-full md:h-4/5 top-1/2 md:top-0 -translate-y-1/2 md:translate-y-0 blur-sm brightness-[0.25] lg:blur-none lg:brightness-100 select-none z-[-1]">
        {#each Array(4) as _value, quadrant}
            <div class="absolute w-[calc(50%-5%)] h-[calc(50%-5%)]" style="top: calc({25 * (quadrant == 0 || quadrant == 1 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 1 ? 0 : 1)}%); left: calc({25 * (quadrant == 0 || quadrant == 2 ? 0 : 2)}% + {5 * (quadrant == 0 || quadrant == 2 ? 0 : 1)}%);">
                {#each Array(4) as _value}
                    <p class="questionMark aspect-square absolute fill text-5xl md:text-3xl font-semibold" style="--rotation: {Math.random() * (Math.random() < 0.5 ? -50 : 50)}deg; --delay: {Math.random() * 3}s; width: {Math.random() * 20 + 30}px; {quadrant == 0 || quadrant == 1 ? 'top' : 'bottom'}: {Math.random() * 100}%; {quadrant == 0 || quadrant == 2 ? 'left' : 'right'}: {Math.random() * 100}%;">?</p>
                {/each}
            </div>
        {/each}

        <div class="w-[25vh] aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[2]">
            <img class="w-full h-full" alt="Quado logo" src="/images/ios/1024.png" />
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
