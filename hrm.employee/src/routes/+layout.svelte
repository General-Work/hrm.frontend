<script>
	import '../app.css';
	import '../global.css';
	import 'iconify-icon';
	import Progress from '$cmps/ui/progress.svelte';
	import { slide } from 'svelte/transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let showProgess = false;

	beforeNavigate(() => {
		showProgess = true;
	});

	afterNavigate(() => {
		showProgess = false;
	});
</script>

{#if showProgess}
	<div out:slide class=" fixed inset-0 top-0 ">
		<Progress step={1} />
	</div>
{/if}

<slot />
