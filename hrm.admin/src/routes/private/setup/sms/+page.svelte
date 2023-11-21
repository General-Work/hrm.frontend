<script>
	import SMS from '$modules/setup/sms/index.svelte';
	import { activePage, breadCrumb } from '$data/appStore';

	$activePage = {
		title: 'Application Setup',
		showBreadCrumb: true
	};
	breadCrumb.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/setup' },
			{ title: 'SMS Templates', path: '/private/setup/sms' }
		],
		true
	);
</script>

<div class="px-6 pb-6 w-full h-full">
	<SMS />
</div>
