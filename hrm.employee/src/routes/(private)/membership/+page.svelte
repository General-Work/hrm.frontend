<script>
	import { activePage } from '$data/appStore';
	import Home from '$modules/membership/home/index.svelte';

	$activePage.title = 'Membership';
</script>

<Home />
