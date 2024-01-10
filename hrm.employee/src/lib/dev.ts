import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function validatePhoneNumber(value: string) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(value);
}
