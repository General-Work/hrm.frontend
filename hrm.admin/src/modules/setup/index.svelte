<script>
	import { goto } from '$app/navigation';
	import ActionButton from '$cmps/ui/actionButton.svelte';
	import Box from '$cmps/ui/box.svelte';
	import { dataPages } from '$svc/setup/index';
</script>

<Box transitionIn="slide">
	{#if dataPages && dataPages.length}
		<div class="flex flex-col gap-5">
			{#each dataPages as card}
				<div class="space-y-3">
					<div class="border-b border-gray-300 text-teal-500 text-lg">{card.title}</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
						{#if card?.items && card.items.length}
							{#each card?.items as item (item.title)}
								<ActionButton
									label={item.title}
									subLabel={item.description}
									showArrow
									iconBgColor={item.iconBg}
									icon={item.icon}
									iconColor={item.iconColor}
									showIconHover={false}
									moreHeight={false}
									iconSize={20}
									on:click={() => {
										goto(item.path || '');
									}}
								/>
							{/each}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</Box>
