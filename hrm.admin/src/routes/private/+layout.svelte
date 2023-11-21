<script lang="ts">
	import Navbar from '$cmps/layout/navbar.svelte';
	import SideNav from '$cmps/layout/sidenav.svelte';
	import { menuItems } from '$data/userStore';
	import { userInfo } from '$svc/auth';
	import LogoUrl from '$assets/images/logo_full.png';
	import { activePage, breadCrumb } from '$data/appStore';
	import BreadCrumb from '$cmps/ui/breadCrumb.svelte';
	import { goto } from '$app/navigation';
	import { Toaster } from 'svelte-french-toast';

	let hideSidebar = false;
	$: activeBreadCrumb = $breadCrumb[$breadCrumb.length - 1].title;

	function optionClicked({ detail }: any) {
		const { index, path } = detail;
		breadCrumb.removeFromFront(index);
		goto(path);
	}
</script>

<Toaster
	toastOptions={{
		style: 'background: #363636; color: #fff;'
	}}
/>

<div class="w-screen h-screen overflow-hidden">
	<aside id="sidebar" class="relative" class:hide={hideSidebar}>
		<a href="/private/dashboard" class="brand py-4">
			<!-- <img src={LogoUrl} alt="Logo" class={hideSidebar ? 'w-12 ' : 'w-12 md:w-20'} /> -->
			<img src={LogoUrl} alt="logo" />
		</a>
		<SideNav menuItems={$menuItems} {hideSidebar} />
	</aside>
	<section id="content" class="w-full h-full">
		<Navbar user={$userInfo} bind:hideSidebar />
		<section class="bg-gray-200/50 w-full h-full flex-grow flex flex-col">
			<div class:hidden={!$activePage.showBreadCrumb} class="head-title pt-3 pb-4 pl-6">
				<div class="left">
					<BreadCrumb options={$breadCrumb} {activeBreadCrumb} on:click={optionClicked} />
				</div>
			</div>
			<div class=" w-full h-full flex-grow overflow-hidden">
				<slot />
			</div>
		</section>
	</section>
</div>
