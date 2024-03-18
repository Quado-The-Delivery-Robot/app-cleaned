import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";
import type { itemType, sectionType, feedSection } from "$lib/core/types";

type section = {
    name: string;
    sectionType: sectionType;
    itemType: itemType;
    endpoint: string;
    hasHeader: boolean;
};

const sections: section[] = [
    {
        name: "Recommended",
        sectionType: "spotlight",
        itemType: "item",
        endpoint: "v1/items/recommended",
        hasHeader: false,
    },
    {
        name: "New to you",
        sectionType: "icon",
        itemType: "restaurant",
        endpoint: "v1/restaurants/recommended",
        hasHeader: true,
    },
    {
        name: "Popular",
        sectionType: "icon",
        itemType: "restaurant",
        endpoint: "v1/restaurants/recommended",
        hasHeader: true,
    },
];

export const load: PageLoad = async ({ fetch }) => {
    const feed: feedSection[] = [];

    for (let index = 0; index < sections.length; index++) {
        const { name, sectionType, itemType, endpoint, hasHeader }: section = sections[index];
        const result = await fetch(`${PUBLIC_ENDPOINT}/${endpoint}`, {
            credentials: "include",
        });
        const { data } = await result.json();

        feed.push({
            name,
            sectionType,
            itemType,
            hasHeader,
            data,
        });
    }

    return { feed };
};
