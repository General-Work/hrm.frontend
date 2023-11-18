import { userInfo } from '$svc/auth';
import { twMerge } from 'tailwind-merge';

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
