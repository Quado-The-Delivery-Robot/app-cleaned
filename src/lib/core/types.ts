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

export type restuarantItem = {
    name: string;
    price: number;
    type: string;
    description: string;
    calories: number;
};

export type restaurant = {
    name: string;
    colors: string[];
    tags: string[];
    image: string;
    nameID: string;
    items: any;
    description: string;
};

export type sectionType = "icon" | "spotlight";

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
