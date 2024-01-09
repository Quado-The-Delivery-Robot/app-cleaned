import { SvelteKitAuth } from "@auth/sveltekit";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "@auth/core/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_SECERT } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";
import database from "$lib/core/database";
import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";

export const proxy: Handle = async ({ event, resolve }) => {
    console.log("A");
    if (event.url.pathname.startsWith("/api")) {
        event.request = new Request(PUBLIC_ENDPOINT + event.url.pathname.replace("/api", ""), event.request);
    }

    return await resolve(event);
};

export const handle = sequence(
    proxy,
    SvelteKitAuth({
        providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_SECERT, redirectProxyUrl: "https://www.quadoapp.com/auth" })],
        adapter: MongoDBAdapter(database, { databaseName: "app" }),
        pages: {
            signIn: "/login",
        },
    })
);
