import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";

const SECTIONS: { [key: string]: string[] } = {
    Recommended: ["full", "v1/restaurants/recommended"],
    "New to you": ["mini", "v1/restaurants/recommended"],
    Popular: ["mini", "v1/restaurants/recommended"],
};

export const load: PageLoad = async ({ fetch }) => {
    const data: { [key: string]: { type: string; data: any[] } } = {};

    for (const [key, sectionData] of Object.entries(SECTIONS)) {
        const result = await fetch(`${PUBLIC_ENDPOINT}/${sectionData[1]}`, {
            credentials: "include",
        });
        const { data } = await result.json();
        data[key] = {
            type: sectionData[0],
            data,
        };
    }

    return { data };
};
