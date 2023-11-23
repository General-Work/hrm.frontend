<script>
	import SMS from '$modules/campaigns/sms/index.svelte';
	import { activePage, breadCrumb } from '$data/appStore';

	$activePage = {
		title: 'Campaigns',
		showBreadCrumb: true
	};
	breadCrumb.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/campaign' },
			{ title: 'SMS Campaign', path: '/private/campaign/sms' }
		],
		true
	);
</script>

<div class="px-6 pb-6 w-full h-full">
	<SMS />
</div>
