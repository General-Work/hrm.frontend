<script lang="ts">
	import BreadCrumbView from '$cmps/ui/breadCrumb.svelte';
	import RightPanel from '$modules/membership/partials/rightPanel.svelte';
	import { BreadCrumb, type IBreadCrumb } from '$lib/breadcrumb';
	import { goto } from '$app/navigation';
	import { hideRightDrawer, sideQuickActions } from '$data/appStore';
	// import type { IButtonConfig } from '$cmps/ui/cardButton.svelte';

	const breadCrumb = new BreadCrumb();
	let breadCrumbOptions: IBreadCrumb[] = [];
	breadCrumb.addToFirstIndex({ title: 'Home', path: '/private/membership' });

	const actionClicked = ({ detail }: any) => {
		goto(detail.path);
		breadCrumb.makeFirst({ title: detail.label, path: detail.path ?? '' });
		updateBreadCrumbOptions();
	};

	const removeCrumb = ({ detail }: any) => {
		goto(detail.path);
		breadCrumb.removeFromFront(detail.index);
		updateBreadCrumbOptions();
	};

	const updateBreadCrumbOptions = () => {
		breadCrumbOptions = breadCrumb.crumbs;
	};

	$: activeBreadCrumb = breadCrumbOptions[breadCrumbOptions.length - 1]?.title;

	$sideQuickActions = {
		component: RightPanel,
		props: { actionClicked },
		title: 'Quick Actions'
	};
</script>

<div class=" w-full h-full flex gap-4 overflow-y-hidden">
	<section class=" flex-grow flex flex-col gap-2">
		{#if breadCrumbOptions.length > 1}
			<BreadCrumbView options={breadCrumbOptions} on:click={removeCrumb} {activeBreadCrumb} />
		{/if}
		<div class="w-full h-full">
			<slot />
		</div>
	</section>
	<div class="h-full bg-gray-200 w-0.5 pb-10 hidden md:block" />
	<aside class="hidden w-[24rem]" class:md:block={$hideRightDrawer}>
		<RightPanel on:actionClicked={actionClicked} showActionLabel/>
	</aside>
</div>
