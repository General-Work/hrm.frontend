export interface IBreadCrumb {
	title: string;
	component?: any;
	props?: any;
	path?: string;
}

export class BreadCrumb {
	private _crumbs: IBreadCrumb[] = [];

	get crumbs(): IBreadCrumb[] {
		return this._crumbs;
	}

	makeFirst(newCrumb: IBreadCrumb | IBreadCrumb[]): void {
		if (Array.isArray(newCrumb)) {
			this._crumbs = [this._crumbs[0], ...newCrumb];
		} else {
			this._crumbs = [this._crumbs[0], newCrumb];
		}
	}

	addToFirstIndex(newCrumb: IBreadCrumb | IBreadCrumb[], clear = false): void {
		if (clear) {
			this._crumbs = Array.isArray(newCrumb) ? [...newCrumb] : [newCrumb];
		} else {
			const newCrumbs = Array.isArray(newCrumb) ? newCrumb : [newCrumb];

			newCrumbs.forEach((crumb) => {
				const existingIndex = this._crumbs.findIndex((existingCrumb) => {
					return existingCrumb.title === crumb.title;
				});

				if (existingIndex !== -1) {
					this._crumbs[existingIndex] = crumb;
				} else {
					this._crumbs = [...newCrumbs, ...this._crumbs];
				}
			});
		}
	}

	addToLastIndex(newCrumb: IBreadCrumb): void {
		const existingIndex = this._crumbs.findIndex((existingCrumb) => {
			return existingCrumb.title === newCrumb.title;
		});

		if (existingIndex !== -1) {
			this._crumbs[existingIndex] = newCrumb;
		} else {
			this._crumbs = [...this._crumbs, newCrumb];
		}
	}

	removeFromFront(index: number): void {
		this._crumbs = this._crumbs.slice(0, index + 1);
	}

	reset(): void {
		this._crumbs = [];
	}
}
