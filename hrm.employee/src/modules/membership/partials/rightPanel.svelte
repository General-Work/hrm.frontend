<script lang="ts">
	import CardButton, { type IButtonConfig } from '$cmps/ui/cardButton.svelte';
	import { createEventDispatcher } from 'svelte';

	export let showActionLabel = false;
	const dispatch = createEventDispatcher();

	const actionsButtons: IButtonConfig[] = [
		{
			label: 'Bio Details',
			kind: 'form',
			subLabel: 'Update your bio details',
			path: '/private/membership/biodata'
		},
		{
			label: 'Family Details',
			kind: 'generic',
			icon: 'fluent-mdl2:family',
			subLabel: 'Update family details'
		},
		{
			label: 'Children Details',
			kind: 'form',
			icon: 'fa6-solid:children',
			subLabel: 'Update children details',
			iconBgColor: 'bg-pink-100',
			iconColor: 'text-pink-500'
		},
		{
			label: 'Professional Licence',
			kind: 'form',
			icon: 'material-symbols:license',
			subLabel: 'Update your licence details'
		},
		{
			label: 'Accomodation',
			kind: 'form',
			icon: 'solar:home-bold',
			subLabel: 'Update your accomodation details',
			iconBgColor: 'bg-yellow-100',
			iconColor: 'text-yellow-600'
		}
	];
</script>

<div class="w-full h-full flex flex-col">
	<div class="flex flex-col w-full gap-4">
		<span class=" text-gray-500 font-medium" class:hidden={!showActionLabel}>Actions</span>
		<ul class="flex flex-col gap-4 w-full pr-1">
			{#each actionsButtons as item}
				<li class="w-full">
					<CardButton
						showArrow
						kind={item.kind}
						label={item.label}
						subLabel={item.subLabel}
						icon={item.icon}
						showBg
						showShadow={false}
						iconBgColor={item.iconBgColor}
						iconColor={item.iconColor}
						on:click={() => dispatch('actionClicked', item)}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>
