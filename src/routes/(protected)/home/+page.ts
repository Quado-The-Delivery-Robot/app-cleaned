import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";
import type { sectionType } from "$lib/core/types";

const sections: { [key: string]: any[] } = {
    Recommended: ["icon", false, "v1/restaurants/recommended"],
    "New to you": ["icon", true, "v1/restaurants/recommended"],
    Popular: ["icon", true, "v1/restaurants/recommended"],
};

export const load: PageLoad = async ({ fetch }) => {
    const data: { [key: string]: { hasHeader: boolean; type: sectionType; data: any[] } } = {};

    for (const [key, sectionData] of Object.entries(sections)) {
        const result = await fetch(`${PUBLIC_ENDPOINT}/${sectionData[2]}`, {
            credentials: "include",
        });
        const { data } = await result.json();
        data[key] = {
            type: sectionData[0],
            hasHeader: sectionData[1],
            data,
        };
    }

    return { feed: data };
};
