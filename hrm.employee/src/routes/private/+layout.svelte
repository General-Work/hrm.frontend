<script lang="ts">
	import HeaderPanel from '$cmps/layout/headerPanel.svelte';
	import SidePanel from '$cmps/layout/sidePanel.svelte';
</script>

<div class="w-screen h-screen overflow-hidden">
	<div class="flex w-full h-full">
		<div class="w-[19rem] h-full">
			<SidePanel />
		</div>
		<div class="flex-grow flex flex-col h-full gap-4">
			<div>
				<HeaderPanel />
			</div>
			<div class="h-full w-full">
				<slot />
			</div>
		</div>
	</div>
</div>
