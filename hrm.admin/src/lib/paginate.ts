export class PageInfo {
	skip: number = 0;
	take: number = 0;
	totalRecords: number = 0;
	hasNextPage: boolean = false;
	hasPreviousPage: boolean = false;
	nextPageUrl: string = '';
	previousPageUrl: string = '';
	gotoStart() {
		this.skip = 0;
	}
	gotoNext() {
		if (this.hasNextPage) {
			this.skip += this.take;
			return true;
		}
		return false;
	}
	gotoPrev() {
		if (this.hasPreviousPage) {
			this.skip -= this.take;
			if (this.skip < 0) this.skip = 0;
			return true;
		}
		return false;
	}
}
