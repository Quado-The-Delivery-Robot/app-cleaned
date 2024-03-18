export type orderItem = {
    id: number;
    quantity: number;
    price: number;
};

type orderState = "Not started" | "Picking up order" | "Waiting for order" | "On its way" | "Delivered";

export type order = {
    price: number;
    state: orderState;
    restaurant: string;
    items: orderItem[];
    placed: number;
};

export type restaurantItem = {
    name: string;
    price: number;
    type: string;
    description: string;
    calories: number;
    data: any;
    id: string;
};

export type restaurant = {
    name: string;
    colors: string[];
    tags: string[];
    image: string;
    id: string;
    items: restaurantItem[];
    description: string;
    location: string;
};

export type sectionType = "icon" | "spotlight" | "info";

export type itemType = "restaurant" | "item";

export type sectionItem = {
    [x: string]: any;
    name: string;
    colors: string[] | null;
    image: string;
    id: string;
    data: any;
    type: itemType;
};

export type cart = {
    restaurant: string;
    items: string[];
};

export type feedSection = {
    name: string;
    hasHeader: boolean;
    sectionType: sectionType;
    itemType: itemType;
    data: restaurantItem[];
};
