<script lang="ts" context="module">
	export interface TableFilter {
		search?: string;
		actions?: { [key: string]: string };
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import SideModal from '$cmps/layout/sideModal.svelte';
	import { showError, showInfo } from '$lib/dev';
	import { PageInfo } from '$lib/paginate';
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	import Paginate from './paginate.svelte';
	import TableSearchBox from './tableSearchBox.svelte';

	export let hideSearchBox = false;
	export let searchPlaceholder = 'Search...';
	export let take = 10;
	export let addNewHeading = 'Add New Record';
	export let addButtonLabel = 'Add New';
	export let updateHeading = 'Update';
	export let newRecord: any = {};
	export let sideModalSize: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm';
	export let Editor: any;
	export let showModalButtons = false;
	export let createEntry = async (x: any) => {
		showError('Not implemented');
		return <any>null;
	};
	export let updateEntry = async (x: any) => {
		showError('Not implemented');
		return <any>null;
	};
	export let read = async (currentPage: number, pageSize: number, defn: TableFilter) => {
		return <any>[];
	};

	let showForm = false;
	let query = '';
	let pageInfo = new PageInfo();
	pageInfo.setPageSize(take);
	let editorHeading = '';
	let activeEntry = <any>{};
	let editing = false;
	let editor: any;
	let isValid = false;
	let busy = false;
	let tableData: any[] = [];
	let updating = false;

	async function fetchData() {
		try {
			busy = true;
			const ret = await read(pageInfo.currentPage, pageInfo.pageSize, { search: query });
			if (ret?.success) {
				const xs = ret.data.xs;
				pageInfo.totalItems = xs.totalCount;
				pageInfo.setHasNextPage(xs.pageInfo.hasNextPage);
				pageInfo.setHasPrevPage(xs.pageInfo.hasPreviousPage);
				tableData = xs.items;
				// filter(query, inlineFilter, true);
			} else {
				showError(ret?.message || 'Failed to load data');
			}
		} catch (e: any) {
			showError(e.message || e);
			console.log(e);
		} finally {
			busy = false;
		}
	}

	async function getMore() {
		if (pageInfo.gotoNext()) await fetchData();
	}
	async function getLess() {
		if (pageInfo.gotoPrev()) await fetchData();
	}

	function addNew() {
		editorHeading = addNewHeading;
		activeEntry = (newRecord && { ...newRecord }) || null;
		editing = false;
		showForm = true;
	}

	function closeSideModal() {
		showForm = false;
	}

	async function save(entry: any) {
		// try {
		// 	updating = true;
		// 	const ret: OperationResult<any, any> = entry.id
		// 		? await updateEntry(entry)
		// 		: await createEntry(entry);
		// 	if (ret.error?.message) {
		// 		showError(ret.error.message);
		// 	} else {
		// 		const output = ret.data.result;
		// 		if (!output.success) showError(output.message);
		// 		else {
		// 			showInfo(output.message || 'Entry saved successfully');
		// 			showForm = false;
		// 			activeEntry = null;
		// 			await fetchData();
		// 		}
		// 	}
		// } catch (e: any) {
		// 	showError(e.message || e);
		// 	console.log(e);
		// } finally {
		// 	updating = false;
		// }
	}

  onMount(async () => {
    await fetchData()
  })
</script>

<div class="w-full h-full">
	<div class="flex flex-col gap-2">
		<div class="flex justify-between">
			<div class:hidden={hideSearchBox} class="flex-grow max-w-md">
				<TableSearchBox placeholder={searchPlaceholder} bind:value={query} />
			</div>
			<div class="flex items-center gap-4">
				<div>
					<Paginate
						onNextPage={getMore}
						onPreviousPage={getLess}
						currentPage={pageInfo.currentPage}
						totalPages={pageInfo.totalPages}
						hasNextPage={pageInfo.hasNextPage}
						hasPreviousPage={pageInfo.hasPrevPage}
						refresh={fetchData}
					/>
				</div>
				<div>
					<Button label={addButtonLabel} color="primary" on:click={addNew} />
				</div>
			</div>
		</div>
	</div>
	Table
</div>

<SideModal
	open={showForm}
	title={editorHeading}
	on:close={closeSideModal}
	size={sideModalSize}
	{showModalButtons}
	{isValid}
	on:submit={() => editor.submit()}
>
	<Editor
		recordId={activeEntry.recordId}
		bind:this={editor}
		bind:isValid
		on:submit={(e) => save(e.detail)}
	/>
</SideModal>
