import { PUBLIC_ENDPOINT } from "$env/static/public";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";

export default async function POST({ request }: RequestEvent) {
    const createFetch = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/new`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(await request.json()),
    });
    const { success } = await createFetch.json();

    return json({
        success,
    });
}
