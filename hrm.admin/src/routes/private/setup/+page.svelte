<script lang="ts">
	import { activePage } from '$data/appStore';
	import Setup from '$modules/setup/index.svelte';

	$activePage = {
		title: 'Application Setup',
		showBreadCrumb: false
	};
</script>

<div class="w-full h-full px-6 pt-6">
	<Setup />
</div>
