import type { order } from "$lib/core/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const result = await fetch(`api/v1/orders/get`);
    const { orders }: { success: boolean; orders: order[] } = await result.json();

    return { orders };
};
