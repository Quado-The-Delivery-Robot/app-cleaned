import { writable, type Writable } from "svelte/store";

export type background = { from: string; to: string };
export const background: Writable<background> = writable({ from: "#000000", to: "#000000" });
