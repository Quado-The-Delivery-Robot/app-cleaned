import { json, type RequestEvent } from "@sveltejs/kit";
import { PUBLIC_ENDPOINT } from "$env/static/public";

async function redirect({ request, url, fetch }: RequestEvent): Promise<Response> {
    const apiURL: string = url.searchParams.get("url")!;
    const method: string = url.searchParams.get("method") || "GET";
    const body: string | null = url.searchParams.get("body");
    console.log(`${PUBLIC_ENDPOINT}/${apiURL}`);
    return json(
        await fetch(`${PUBLIC_ENDPOINT}/${apiURL}`, {
            body: body,
            headers: request.headers,
            method: method || "GET",
            credentials: "include",
        }).then(async (response) => await response.json())
    );
}

export async function GET(event: RequestEvent) {
    return await redirect(event);
}
