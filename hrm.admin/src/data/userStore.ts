import type { IMenuItem } from '$types';
import { writable } from 'svelte/store';

const allMenuItems: IMenuItem[] = [
	{ title: 'Dashboard*', icon: 'radix-icons:dashboard', path: '/private/dashboard' },
	{ title: 'Campaigns*', icon: 'ion:megaphone-outline', path: '/private/campaign' }

];

export let menuItems = writable<IMenuItem[]>(allMenuItems);
