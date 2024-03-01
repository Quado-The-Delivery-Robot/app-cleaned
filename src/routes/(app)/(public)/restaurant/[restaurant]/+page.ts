import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { restaurant, restuarantItem } from "$lib/core/types";
import type { PageLoad } from "./$types";
import type { itemType, sectionType } from "$lib/core/types";

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
        endpoint: "v1/items/recommended/",
        hasHeader: false,
    },
    {
        name: "New to you",
        sectionType: "info",
        itemType: "restaurant",
        endpoint: "v1/items/recommended/",
        hasHeader: true,
    },
    {
        name: "Popular",
        sectionType: "info",
        itemType: "restaurant",
        endpoint: "v1/items/recommended/",
        hasHeader: true,
    },
];

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/restaurants/info/${params.restaurant}`, {
        credentials: "include",
    });
    const { restaurant }: { restaurant: restaurant } = await result.json();
    const feed: { name: string; hasHeader: boolean; sectionType: sectionType; itemType: itemType; data: restuarantItem[] }[] = [];

    for (let index = 0; index < sections.length; index++) {
        const { name, sectionType, itemType, endpoint, hasHeader }: section = sections[index];
        const result = await fetch(`${PUBLIC_ENDPOINT}/${endpoint}${restaurant.id}`, {
            credentials: "include",
        });
        const { data } = await result.json();

        data.forEach((item: restuarantItem) => {
            (item as any).data = {
                colors: restaurant.colors,
            };
        });

        feed.push({
            name,
            sectionType,
            itemType,
            hasHeader,
            data,
        });
    }

    return { feed, restaurant };
};
