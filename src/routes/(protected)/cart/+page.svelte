<script lang="ts">
    import { PUBLIC_ENDPOINT } from "$env/static/public";

    let result: boolean = false;

    async function send() {
        const createFetch = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/new`, {
            method: "POST",
            body: JSON.stringify({
                restaurant: "subway",
                items: {
                    id: 0,
                    quantity: 1,
                },
            }),
        });
        const { success } = await createFetch.json();
        result = success;
    }
</script>

<button on:click={send}>place order</button>
{result}
