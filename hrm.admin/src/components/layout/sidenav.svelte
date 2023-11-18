<script lang="ts">
	import type { IMenuItem } from '$types';
	import { page } from '$app/stores';

	export let menuItems: IMenuItem[] = [];
	export let hideSidebar = false;

	$: activePage = $page.url.pathname;

	const name = (str: string) => {
		if (str) {
			const parts = str.split('/');
			return parts[2];
		}
	};
</script>

{#if menuItems.length}
	<ul class="flex flex-col gap-1 side-menu">
		{#each menuItems as item}
			{@const active = name(activePage) === name(item?.path ?? '')}
			{#if !item.items}
				<li class:active class:isActive={active} class:inactive={!active} class="px-4 ml-[1px]">
					<a href={item.path} class="space-x-3 pl-3">
						<iconify-icon icon={item.icon} />
						<span>
							{item.title}
						</span>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
{/if}

<style lang="postcss">
	.isActive {
		@apply text-blue-600 bg-gray-200/50 py-3 border-l-[3px] border-blue-600 ;
	}
	.inactive {
		@apply py-3 border-l-[3px] border-white hover:text-blue-600;
	}
</style>
