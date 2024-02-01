import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/get`, {
        credentials: "include",
    });

    return { orders: await result.json() };
};
