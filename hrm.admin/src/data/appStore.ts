import type { IPageInfo } from '$types';
import { writable } from 'svelte/store';

export let activePage = writable<IPageInfo>({
	title: 'Dashboard',
	showBreadCrumb: false
});
