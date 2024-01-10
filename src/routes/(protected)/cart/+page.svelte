<script lang="ts">
    let result: boolean = false;

    async function send() {
        const createFetch = await fetch(
            `api?url=v1/orders/new&method=POST&body=${JSON.stringify({
                restaurant: "subway",
                items: [
                    {
                        id: 0,
                        quantity: 1,
                    },
                ],
            })}`
        );
        const { success } = await createFetch.json();
        result = success;
    }
</script>

<button on:click={send}>place order</button>
{result}
