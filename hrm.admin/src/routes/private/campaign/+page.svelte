<script lang="ts">
	import { activePage } from '$data/appStore';
	import Campaigns from '$modules/campaigns/index.svelte';

	$activePage = {
		title: 'Campagins',
		showBreadCrumb: false
	};
</script>

<div class="px-6 pb-6 w-full h-full pt-4">
	<Campaigns />
</div>
