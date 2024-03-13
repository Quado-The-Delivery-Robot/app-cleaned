import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";
import type { cart } from "$lib/core/types";

export const load: PageLoad = async ({ fetch }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/carts/get`, {
        credentials: "include",
    });
    const { carts }: { carts: cart[] } = await result.json();

    return { carts };
};
