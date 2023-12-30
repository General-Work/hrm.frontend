<script lang="ts">
	import HeaderPanel from '$cmps/layout/headerPanel.svelte';
	import SidePanel from '$cmps/layout/sidePanel.svelte';
	import CommandPallete from '$cmps/ui/commandPallete.svelte';
	import { hideNavDrawer, hideRightDrawer, sideQuickActions } from '$data/appStore';
	import { adminMenuItems, menuItems } from '$data/userStore';
	import { showSearchBox } from '$svc/command';
	import { Drawer, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	const leftDrawerTransitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	const rightDrawerTransitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	$: rightDrawerOptions = $sideQuickActions;
</script>

{#if $showSearchBox}
	<CommandPallete on:close={(_) => ($showSearchBox = false)} />
{/if}
<div class="w-screen h-screen overflow-hidden">
	<div class="flex w-full h-full">
		<div class="w-[19rem] h-full hidden lg:flex">
			<SidePanel menuItems={$menuItems} adminItems={$adminMenuItems} />
		</div>
		<div class="flex-grow flex flex-col h-full gap-4">
			<HeaderPanel
				on:search={() => ($showSearchBox = true)}
				on:leftDrawer={() => ($hideNavDrawer = false)}
				on:rightDrawer={() => ($hideRightDrawer = !$hideRightDrawer)}
			/>
			<div class="h-full w-full px-6">
				<slot />
			</div>
		</div>
	</div>
</div>

<div class="nav-drawer lg:hidden">
	<Drawer
		bind:hidden={$hideNavDrawer}
		transitionType="fly"
		transitionParams={leftDrawerTransitionParams}
		bgOpacity="bg-opacity-50"
		divClass="overflow-y-hidden z-[50] pt-5 bg-gray-50 dark:bg-gray-800 "
	>
		<div class="h-full flex flex-col overflow-y-hidden">
			<div class="flex items-center">
				<h5 class="text-base font-semibold text-gray-500">&nbsp;</h5>
				<CloseButton on:click={(_) => ($hideNavDrawer = true)} />
			</div>
			<div
				class="flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
			>
				<SidePanel menuItems={$menuItems} adminItems={$adminMenuItems} />
			</div>
		</div>
	</Drawer>
</div>

<div class="md:hidden">
	{#if rightDrawerOptions}
		<Drawer
			bind:hidden={$hideRightDrawer}
			transitionType="fly"
			transitionParams={rightDrawerTransitionParams}
			backdrop={true}
			placement="right"
			bgOpacity="bg-opacity-50"
			width="w-[25rem]"
			divClass="overflow-y-hidden fixed z-50 pt-4 px-4 bg-white dark:bg-gray-800"
			title={rightDrawerOptions.title || 'Quick Actions'}
		>
			<div class="h-full flex flex-col overflow-y-hidden">
				<div class="flex items-center">
					<h5 class="text-base font-semibold text-gray-500">
						{rightDrawerOptions.title || 'Quick Actions'}
					</h5>
					<CloseButton on:click={(_) => ($hideRightDrawer = true)} />
				</div>
				<div class="flex-grow overflow-y-auto">
					<svelte:component this={rightDrawerOptions.component} />
				</div>
			</div>
		</Drawer>
	{/if}
</div>
