import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { order } from "$lib/core/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/get/${params.orderID}`, {
        credentials: "include",
    });
    const { order }: { order: order } = await result.json();

    return { order };
};
