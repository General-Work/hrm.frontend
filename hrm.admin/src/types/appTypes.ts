export interface IMenuItem {
	title: string;
	icon?: string;
	path?: string;
	items?: IMenuItem[] | null;
}

export interface IPageInfo {
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
