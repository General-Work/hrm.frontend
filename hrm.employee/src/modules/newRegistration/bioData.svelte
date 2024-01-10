<script>
	import AlertDialog from '$cmps/alerts/alertDialog.svelte';
	import { Modal } from 'flowbite-svelte';
	import BiodataHeader from './partials/biodataHeader.svelte';
	import Editor from './partials/editor.svelte';
	import Footer from './partials/footer.svelte';
	import Login from './partials/login.svelte';

	let openAlert = false;
	let isAuthencticated = false;

	const toggleModal = () => {
		if (openAlert) {
			openAlert = false;
		} else {
			openAlert = true;
		}
	};

	const logout = () => {
		toggleModal();
		isAuthencticated = false;
	};
</script>

<div class="w-full h-full flex flex-col flex-grow bg-[#f7f8fa] overflow-y-auto">
	<div class="">
		<BiodataHeader on:logout={toggleModal} />
	</div>
	<div class=" lg:container lg:mx-auto xl:px-40 flex-grow transform -translate-y-11">
		<div class="  bg-[#f7f8fa] px-2 lg:px-6 pt-4 rounded-t-lg">
			<Editor />
		</div>
	</div>
	<div>
		<Footer />
	</div>
</div>

<Modal
	open={!isAuthencticated}
	backdropClass="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 backdrop-blur-md dark:bg-opacity-80"
	dismissable={false}
>
	<Login bind:isAuthencticated />
</Modal>

<AlertDialog
	bind:open={openAlert}
	on:cancel={toggleModal}
	on:yes={logout}
	icon="line-md:logout"
	message="Are you sure you want to logout?"
/>
