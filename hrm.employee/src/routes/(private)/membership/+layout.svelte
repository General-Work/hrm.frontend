<script lang="ts" context="module">
	export const breadCrumbData = writable<IBreadCrumb[]>([]);
</script>

<script lang="ts">
	import BreadCrumbView from '$cmps/ui/breadCrumb.svelte';
	import RightPanel from '$modules/membership/partials/rightPanel.svelte';
	import { BreadCrumb, type IBreadCrumb } from '$lib/breadcrumb';
	import { goto } from '$app/navigation';
	import { hideRightDrawer, sideQuickActions } from '$data/appStore';
	import { writable } from 'svelte/store';

	const breadCrumb = new BreadCrumb();

	breadCrumb.addToFirstIndex({ title: 'Home', path: '/membership' });

	$: $breadCrumbData = breadCrumb.crumbs;

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
		$breadCrumbData = breadCrumb.crumbs;
	};

	$: activeBreadCrumb = $breadCrumbData[$breadCrumbData.length - 1]?.title;

	$sideQuickActions = {
		component: RightPanel,
		props: { actionClicked },
		title: 'Quick Actions'
	};
</script>

<div class=" w-full h-full flex gap-4 overflow-hidden pb-32 lg:pb-0">
	<section class=" flex-grow flex flex-col gap-2 h-full">
		{#if $breadCrumbData.length > 1}
			<BreadCrumbView options={$breadCrumbData} on:click={removeCrumb} {activeBreadCrumb} />
		{/if}
		<div class="w-full h-full">
			<slot />
		</div>
	</section>
	<div class="h-full bg-gray-200 w-0.5 pb-10 hidden md:block" />
	<aside class="hidden w-[21rem] shrink-0" class:md:block={$hideRightDrawer}>
		<RightPanel on:actionClicked={actionClicked} showActionLabel />
	</aside>
</div>
