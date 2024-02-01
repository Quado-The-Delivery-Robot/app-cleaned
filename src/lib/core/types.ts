export type orderItem = {
    id: number;
    quantity: number;
    price: number;
};

type orderStatus = "Not started" | "Picking up order" | "Waiting for order" | "On its way" | "Delivered";

export type order = {
    price: number;
    status: orderStatus;
    restaurant: string;
    items: orderItem[];
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

export type sectionItem = {
    name: string;
    colors: string[];
    image: string;
    id: string;
    description: string;
};
