import type { IMenuItems } from '$types/appTypes';
import { writable } from 'svelte/store';

const allMenuItems: IMenuItems[] = [
	{ label: 'Home', icon: 'radix-icons:dashboard', path: '/private/home' },
	{ label: 'Membership', icon: 'medical-icon:i-registration', path: '/private/membership' },
	{ label: 'Leave', icon: 'clarity:calendar-line', path: '/private/leave' },
	{
		label: 'Appraisal',
		icon: 'healthicons:register-book',
		path: '/private/appraisal',
		iconSize: 25
	},
	{
		label: 'Support',
		icon: 'fluent:chat-mail-20-regular',
		path: '/private/support',
		iconSize: 25
	},
	{
		label: 'Settings',
		icon: 'clarity:cog-line',
		path: '/private/settings',
		iconSize: 20
	}
];

const adminItems: IMenuItems[] = [
	{
		label: 'Approvals',
		icon: 'fluent:approvals-app-28-filled',
		path: '/private/admin/approvals',
		iconSize: 20,
		count: 10
	}
];

export let menuItems = writable<IMenuItems[]>(allMenuItems);
export let adminMenuItems = writable<IMenuItems[]>(adminItems);
