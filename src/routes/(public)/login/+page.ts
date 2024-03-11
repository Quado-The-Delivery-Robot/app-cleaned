import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const register: string = url.searchParams.get("register") || "";

    return {
        register: register === "true",
    };
};
