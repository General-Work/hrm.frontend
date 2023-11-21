<script>
	import { componentClass } from '$lib/dev';
	export let otherClasses = '';
</script>

<div class={componentClass('my-1 h-px bg-gray-100 dark:bg-gray-600', otherClasses)} />
