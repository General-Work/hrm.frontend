<script>
	import Navbar from '$cmps/layout/navbar.svelte';
	import SideNav from '$cmps/layout/sidenav.svelte';
	import { menuItems } from '$data/userStore';
	import { userInfo } from '$svc/auth';
  import LogoUrl from "$assets/images/logo_full.png"

	let hideSidebar = false;
</script>

<div class="w-screen h-screen overflow-hidden">
	<aside id="sidebar" class="relative" class:hide={hideSidebar}>
		<a href="/private/dashboard" class="brand py-4">
			<!-- <img src={LogoUrl} alt="Logo" class={hideSidebar ? 'w-12 ' : 'w-12 md:w-20'} /> -->
      <img src={LogoUrl} alt="logo"/>
		
		</a>
		<SideNav menuItems={$menuItems} {hideSidebar} />
	</aside>
	<section id="content" class="w-full h-full">
		<Navbar user={$userInfo} bind:hideSidebar />

		<section class="bg-gray-200/50 w-full h-full flex-grow">
			<slot />
		</section>
	</section>
</div>
