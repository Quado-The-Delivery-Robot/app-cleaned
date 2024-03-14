import { PUBLIC_ENDPOINT } from "$env/static/public";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { cart } from "$lib/core/types";

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/carts/get/${params.cartID}`, {
        credentials: "include",
    });
    const { cart }: { cart: cart | undefined } = await result.json();

    if (typeof cart === "undefined") {
        throw redirect(307, "/carts");
    }

    return { cart };
};
