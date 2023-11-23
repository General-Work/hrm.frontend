<script>
	import Mail from '$modules/campaigns/mail/index.svelte';
	import { activePage, breadCrumb } from '$data/appStore';

	$activePage = {
		title: 'Campaigns',
		showBreadCrumb: true
	};
	breadCrumb.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/campaign' },
			{ title: 'Mail Campaign', path: '/private/campaign/mail' }
		],
		true
	);
</script>

<div class="px-6 pb-6 w-full h-full">
	<Mail />
</div>
