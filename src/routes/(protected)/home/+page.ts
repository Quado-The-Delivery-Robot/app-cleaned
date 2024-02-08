import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";
import type { sectionType } from "$lib/core/types";

type section = {
    name: string;
    type: sectionType;
    endpoint: string;
    hasHeader: boolean;
};

const sections: section[] = [
    {
        name: "Recommended",
        type: "icon",
        endpoint: "v1/restaurants/recommended",
        hasHeader: false,
    },
    {
        name: "New to you",
        type: "icon",
        endpoint: "v1/restaurants/recommended",
        hasHeader: true,
    },
    {
        name: "Popular",
        type: "icon",
        endpoint: "v1/restaurants/recommended",
        hasHeader: true,
    },
];

export const load: PageLoad = async ({ fetch }) => {
    const feed: { name: string; hasHeader: boolean; type: sectionType; data: any[] }[] = [];

    for (let index = 0; index < sections.length; index++) {
        const { name, type, endpoint, hasHeader }: section = sections[index];
        const result = await fetch(`${PUBLIC_ENDPOINT}/${endpoint}`, {
            credentials: "include",
        });
        const { data } = await result.json();

        feed.push({
            name,
            type,
            hasHeader,
            data,
        });
    }

    return { feed };
};
