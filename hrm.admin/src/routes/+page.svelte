<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";


onMount(() => {
	setTimeout(() => {
		goto('private/dashboard')
	},1000)
})
</script>

<div class="w-screen h-screen flex items-center justify-center">
  <iconify-icon icon="svg-spinners:3-dots-move" class="text-purple-600" style="font-size: 80px;"/>
</div>