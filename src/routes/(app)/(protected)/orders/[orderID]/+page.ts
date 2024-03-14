import { PUBLIC_ENDPOINT } from "$env/static/public";
import { redirect } from "@sveltejs/kit";
import type { order } from "$lib/core/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/get/${params.orderID}`, {
        credentials: "include",
    });
    const { order }: { order: order | undefined } = await result.json();

    if (typeof order === "undefined") {
        throw redirect(307, "/orders");
    }

    return { order };
};
