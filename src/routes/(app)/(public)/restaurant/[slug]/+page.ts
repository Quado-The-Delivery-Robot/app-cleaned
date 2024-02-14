import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { restaurant } from "$lib/core/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/restaurants/info/${params.slug}`, {
        credentials: "include",
    });
    const { restaurant }: { restaurant: restaurant } = await result.json();

    return { restaurant };
};
