import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const ssr = false;

export const load: LayoutServerLoad = async ({ locals }) => {
    const session = await locals.getSession();

    if (!session) {
        throw redirect(307, "/login");
    }
};
