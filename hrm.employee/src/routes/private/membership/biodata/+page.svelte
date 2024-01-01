<script>
	import { activePage } from '$data/appStore';
	import Biodata from '$modules/membership/biodata/index.svelte';
	import { breadCrumbData } from '../+layout.svelte';
	$activePage.title = 'Membership';
	$breadCrumbData = [
		{ title: 'Home', path: '/private/membership' },
		{ title: 'Bio Details', path: '/private/membership/biodata' }
	];
</script>

<Biodata />
