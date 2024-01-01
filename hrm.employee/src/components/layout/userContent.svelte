<script>
	import IconButton from '$cmps/ui/iconButton.svelte';
	import { Avatar, Tooltip } from 'flowbite-svelte';
</script>

<div class="flex items-center justify-between w-full">
	<div class="flex items-center ">
		<div class=" ">
			<Avatar
				class="w-[4rem] h-[4rem]"
				src="https://t3.ftcdn.net/jpg/03/73/52/24/360_F_373522464_UzkM3IvqgqpS0qIy2kpkB5QiV7Bw7NyS.jpg"
			/>
		</div>
		<div class="block w-40 pl-3">
			<p class="truncate block">Theophilus Adusei</p>
			<p class="text-gray-400 font-light text-sm truncate block">Content here</p>
		</div>
	</div>
	<IconButton icon="mdi-light:logout" otherClasses="bg-pink-100/70 text-pink-700" on:click/>
	<Tooltip placement="right" color="light">Logout</Tooltip>
</div>
