import { SvelteKitAuth } from "@auth/sveltekit";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "@auth/core/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_SECERT } from "$env/static/private";
import database from "$lib/core/scripts/database";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = SvelteKitAuth({
    providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_SECERT, redirectProxyUrl: "https://www.quadoapp.com/auth" })],
    adapter: MongoDBAdapter(database, { databaseName: "accounts" }),
    pages: {
        signIn: "/login",
    },
    cookies: {
        sessionToken: {
            name: "authjs.session-token",
            options: {
                httpOnly: false,
                sameSite: "lax",
                path: "/",
                domain: ".quadoapp.com",
            },
        },
        csrfToken: {
            name: "authjs.csrf-token",
            options: {
                httpOnly: false,
                sameSite: "lax",
                path: "/",
                domain: ".quadoapp.com",
            },
        },
        pkceCodeVerifier: {
            name: "authjs.pkce.code_verifier",
            options: {
                httpOnly: false,
                sameSite: "lax",
                path: "/",
                domain: ".quadoapp.com",
            },
        },
    },
});
