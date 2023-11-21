import { createBreadCrumb } from '$lib/dev';
import type { IRouteInfo } from '$types';
import { writable } from 'svelte/store';

export let activePage = writable<IRouteInfo>({
	title: 'Dashboard',
	showBreadCrumb: false
});

export const breadCrumb = createBreadCrumb();
