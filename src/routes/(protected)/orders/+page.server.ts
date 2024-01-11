import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { order } from "$lib/core/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/get`, {
        credentials: "include",
    });
    const { orders }: { success: boolean; orders: order[] } = await result.json();

    return { orders };
};
