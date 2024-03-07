import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const query: string = url.searchParams.get("query") || "";

    return {
        query,
    };
};
