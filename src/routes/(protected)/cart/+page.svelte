<script lang="ts">
    import Title from "$lib/core/components/title.svelte";
    import { PUBLIC_ENDPOINT } from "$env/static/public";
    let result: boolean = false;

    async function send() {
        const createFetch = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/new`, {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({
                restaurant: "subway",
                items: [
                    {
                        id: 0,
                        quantity: 1,
                    },
                ],
            }),
        });
        const a = await createFetch.json();
        console.log(a);
        result = true;
    }
</script>

<Title>Cart</Title>

<button on:click={send}>place order</button>
{result}
