import type { IBreadCrumb } from '$cmps/ui/breadCrumb.svelte';
import { userInfo } from '$svc/auth';
import { writable } from 'svelte/store';
import { twMerge } from 'tailwind-merge';
import { toast } from 'svelte-french-toast';

export function init() {
	userInfo.set({
		firstName: 'Theophilus',
		surname: 'Adusei',
		otherNames: '',
		fullName: 'Theophilus Adusei',

		// phoneNumber: '02444444444',
		profileImage:
			'https://t3.ftcdn.net/jpg/03/73/52/24/360_F_373522464_UzkM3IvqgqpS0qIy2kpkB5QiV7Bw7NyS.jpg',
		initials: 'TA',
		// username: 'tadusei',
		email: 'tadusei@mail.com',
		status: 'Active',
		role: 'Developer',
		roleId: 1,

		permissions: ['*'],
		tags: ['*']
	});
}

export function componentClass(className: string, otherClasses: string) {
	return twMerge(className, otherClasses);
}

export function createBreadCrumb() {
	const { subscribe, set, update } = writable<IBreadCrumb[]>([{ title: 'Home' }]);
	return {
		subscribe,
		addToFirstIndex: (newCrumb: IBreadCrumb | IBreadCrumb[], clear = false) => {
			update((value) => {
				if (clear) {
					return Array.isArray(newCrumb) ? [...newCrumb] : [newCrumb];
				}

				if (Array.isArray(newCrumb)) {
					return [...newCrumb, ...value];
				} else if (newCrumb) {
					return [newCrumb, ...value];
				}

				return value;
			});
		},
		addToLastIndex: (newCrumb: IBreadCrumb) => {
			update((value) => {
				if (Array.isArray(newCrumb)) {
					return [...value, ...newCrumb];
				} else if (newCrumb) {
					return [...value, newCrumb];
				}
				return value;
			});
		},
		removeFromFront: (index: number) => {
			update((value) => {
				return value.slice(0, index + 1);
			});
		},
		reset: () => set([{ title: 'Home' }])
	};
}

export function showError(message: string) {
	toast.error(message);
	// error(message)
}

export function showInfo(message: string) {
	// info(message)
	toast.success(message);
}

export async function showPromise(task: any, messages: any) {
	try {
		await toast.promise(task(messages), messages);
	} catch (e: any) {
		toast.error(e);
	}
}
