import type { ICampaignTemplate, IPageInfo } from '$types';

export function readSmsTemplates(): Promise<{
	success: boolean;
	message: string;
	data: { totalCount: number; pageInfo: IPageInfo; items: ICampaignTemplate[] };
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const x: ICampaignTemplate[] = [
				{
					id: 1,
					name: 'New Recruitment',
					notes: '',
					message: 'Welcome to ',
					category: '',
					isSystemTemplate: true
				}
			];
			resolve({
				success: true,
				message: 'success',
				data: {
					totalCount: x.length,
					pageInfo: {
						hasNextPage: false,
						hasPreviousPage: false,
						nextPageUrl: '',
						previousPageUrl: ''
					},
					items: x
				}
			});
		}, 700);
	});
}

export function readSmsTemplate(id: number): Promise<{
	success: boolean;
	message: string;
	data: ICampaignTemplate;
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const x: ICampaignTemplate = {
				id: 1,
				name: 'New Recruitment',
				notes: '',
				message: 'Welcome to ',
				category: '',
				isSystemTemplate: true
			};

			resolve({
				success: true,
				message: 'success',
				data: x
			});
		}, 700);
	});
}

export function createSmsTemplates(input: any): Promise<{
	success: boolean;
	message: string;
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success: true,
				message: 'Successfully created template'
			});
		}, 700);
	});
}

export function updateSmsTemplates(input: any): Promise<{
	success: boolean;
	message: string;
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success: true,
				message: 'Successfully updated template'
			});
		}, 700);
	});
}

export function deleteSmsTemplates(id: number): Promise<{
	success: boolean;
	message: string;
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success: true,
				message: 'Successfully deleted template'
			});
		}, 1000);
	});
}
