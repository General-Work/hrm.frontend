<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	export let max = 100;
	export let value = 0;
	export let intermediate = true;
	export let interval = 50;
	export let step = 10;
	export let show = true;

	let timerId: NodeJS.Timer;

	onMount(() => {
		if (timerId) clearInterval(timerId as any);
		if (intermediate) {
			setInterval(() => {
				value += step;
				if (value > max) value = 0;
			}, interval);
		}
	});

	onDestroy(() => {
		if (timerId) clearInterval(timerId as any);
	});
</script>

{#if show}
	<progress {value} {max}></progress>
{/if}

<style>
  progress {
    @apply appearance-none block w-full  rounded-full h-[4px];
  }

  progress::-webkit-progress-value {
    @apply bg-pink-400 rounded-full;
  }
	progress::-webkit-progress-bar {
    @apply bg-transparent rounded-full;
  }
</style>
