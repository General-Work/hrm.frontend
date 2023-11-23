import type { IMenuItem } from '$types/appTypes';

export const dataPages: IMenuItem[] = [
	{
		title: 'Campaigns',
		items: [
			{
				title: 'SMS',
				description: 'Send campaigns through SMS',
				icon: 'fa-solid:sms',
				path: '/private/campaign/sms',
				iconBg: 'bg-blue-300'
			},
			{
				title: 'Mail',
				description: 'Send campaigns through Mail',
				iconBg: 'bg-yellow-300',
				icon: 'uiw:mail',
				path: '/private/campaign/mail'
			}
		]
	}
];
