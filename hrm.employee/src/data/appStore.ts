import type { IRouteInfo, ISideMenu } from '$types/appTypes';
import { writable } from 'svelte/store';

export let activePage = writable<IRouteInfo>({
	title: 'Overview',
	showBreadCrumb: false
});

export const showPageLoader = writable(false);
export const sideQuickActions = writable<ISideMenu>();
export const hideRightDrawer = writable(true);
export const hideNavDrawer = writable(true);