<script lang="ts">
	export let href = '';
	export let label = '';
	export let active = false;
	export let icon = '';
	export let iconSize = 20;
</script>

<a
	{href}
	class="flex items-center gap-3 p-2.5 px-4 font-medium"
	class:active
	class:notActive={!active}
>
	<iconify-icon {icon} class:hidden={!icon} style="font-size: {iconSize}px;" />
	{label}</a
>

<style lang="postcss">
	.active {
		@apply rounded-md bg-white shadow text-pink-600;
	}
	.notActive {
		@apply text-gray-500 hover:rounded-md hover:bg-gray-100 hover:shadow;
	}
</style>
