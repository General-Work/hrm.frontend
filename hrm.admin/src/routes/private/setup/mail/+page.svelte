<script>
	import Mail from '$modules/setup/mail/index.svelte';
	import { activePage, breadCrumb } from '$data/appStore';

	$activePage = {
		title: 'Application Setup',
		showBreadCrumb: true
	};
	breadCrumb.addToFirstIndex(
		[
			{ title: 'Home', path: '/private/setup' },
			{ title: 'Mail Templates', path: '/private/setup/mail' }
		],
		true
	);
</script>

<div class="px-6 pb-6 w-full h-full">
	<Mail />
</div>
