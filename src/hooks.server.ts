import { SvelteKitAuth } from "@auth/sveltekit";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "@auth/core/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_SECERT } from "$env/static/private";
import database from "$lib/core/database";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = SvelteKitAuth({
    providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_SECERT, redirectProxyUrl: "https://www.quadoapp.com/auth" })],
    adapter: MongoDBAdapter(database, { databaseName: "app" }),
    pages: {
        signIn: "/login",
    },
    cookies: {
        sessionToken: {
            name: "authjs.session-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                domain: ".quadoapp.com",
            },
        },
        csrfToken: {
            name: "__Host-authjs.csrf-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                domain: ".quadoapp.com",
            },
        },
    },
});
