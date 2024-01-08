<script>
	import BiodataHeader from './partials/biodataHeader.svelte';
	import Editor from './partials/editor.svelte';
	import Footer from './partials/footer.svelte';
</script>

<div class="w-full h-full flex flex-col flex-grow">
	<div class=" lg:h-[500px]">
		<BiodataHeader />
	</div>
	<div class=" lg:container lg:mx-auto 2xl:px-40 flex-grow transform lg:-translate-y-20 h-full">
		<div class="  bg-white pz-2 lg:px-6 pt-4 rounded-t-lg">
			<Editor />
		</div>
	</div>
	<div class="lg:h-40">
		<Footer />
	</div>
</div>
