import type { IUserInfo } from "$types";
import { writable } from "svelte/store";

export const userInfo = writable<IUserInfo | null>()