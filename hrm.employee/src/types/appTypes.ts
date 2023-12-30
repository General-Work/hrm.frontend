export type IMenuItems = {
	icon?: string;
	iconSize?: number;
	label: string;
	path?: string;
	count?: number;
};

export interface IRouteInfo {
	title: string;
	showBreadCrumb?: boolean;
}

export interface ISideMenu {
	component: any;
	props: any;
	title: string;
}
