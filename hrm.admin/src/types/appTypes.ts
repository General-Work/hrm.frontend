export interface IMenuItem {
	title: string;
	icon?: string;
	path?: string;
	items?: IMenuItem[] | null;
	description?: string;
	iconBg?: string;
	iconColor?: string;
}

export interface IRouteInfo {
	title: string;
	showBreadCrumb?: boolean;
}

export interface IUserInfo {
	email: string;
	firstName: string;
	surname: string;
	otherNames: string;
	fullName: string;
	profileImage: string | null;
	role: string;
	roleId: number;
	status: string;
	initials: string;
	permissions: string[];
	tags: string[];
}
export interface IPageInfo {
	hasNextPage: false;
	hasPreviousPage: false;
	nextPageUrl: string;
	previousPageUrl: string;
}

export interface ICampaignTemplate {
	id: number;
	name: string;
	notes: string;
	message: string;
	category: string;
	isSystemTemplate: boolean;
	subject?: string | null;
}
