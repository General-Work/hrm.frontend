<script lang="ts">
	import Button from '$cmps/ui/button.svelte';
	import SvelteOtp from '@k4ung/svelte-otp';
	import { onMount } from 'svelte';
	export let isAuthencticated = false;
	let value = '';
	let hasError = false;

	let seconds = 20;
	let countdownInterval: any;

	function startCountdown() {
		countdownInterval = setInterval(() => {
			if (seconds > 0) {
				seconds--;
			} else {
				clearInterval(countdownInterval);
			}
		}, 1000);
	}

	const submit = () => {
		if (!value) {
			hasError = true;
			return;
		}
		hasError = false;
		isAuthencticated = true;
	};

	onMount(() => startCountdown());
</script>

<div class="flex flex-col gap-8 px-12">
	<p class="text-gray-500 text-sm items-center flex gap-1 justify-center">
		<iconify-icon icon="solar:danger-circle-bold-duotone" class="text-red-600" />
		Enter the digits that were sent to your phone number
	</p>
	<div class="flex justify-center">
		<SvelteOtp
			numberOnly
			bind:value
			separator="-"
			numOfInputs={4}
			inputStyle={`width: 50px; height:50px; border-radius: 5px; ${
				hasError && 'border: 1px solid red;'
			} `}
		/>
	</div>
	<div class="flex items-center gap-2 justify-center">
		<Button label="Resend OTP" color="goldOutline" disabled={seconds !== 0} />
		<p class:hidden={!(seconds !== 0)} class="flex items-center gap-1 text-blue-600 text-sm">
			after
			{seconds} seconds
		</p>
	</div>
	<Button label="Submit" color="darkBlue" otherClasses="mx-20" on:click={() => submit()} />
</div>
