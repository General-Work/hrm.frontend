<script lang="ts">
	import Button from '$cmps/ui/button.svelte';
	import DataTable from '$cmps/ui/dataTable.svelte';
	import Editor from './editor.svelte';
</script>

<div class="">
	<DataTable
		addButtonLabel="New Campaign"
		addNewHeading="New Campaign"
		updateHeading="Update Campaign"
		{Editor}
		sideModalSize="xl"
    showModalButtons
	/>
</div>
