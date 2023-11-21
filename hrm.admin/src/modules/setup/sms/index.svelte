<script lang="ts">
	import SideModal from '$cmps/layout/sideModal.svelte';
	import Box from '$cmps/ui/box.svelte';
	import PageLoader from '$cmps/ui/pageLoader.svelte';
	import TemplateCard from '$cmps/ui/templateCard.svelte';
	import { showError, showInfo } from '$lib/dev';
	import { PageInfo } from '$lib/paginate';
	import {
		createSmsTemplates,
		deleteSmsTemplates,
		readSmsTemplates,
		updateSmsTemplates
	} from '$svc/setup/sms';
	import type { ICampaignTemplate } from '$types';
	import { onMount } from 'svelte';
	import Editor from './editor.svelte';
	import AlertDialog from '$cmps/alerts/alertDialog.svelte';
	import { Tooltip } from 'flowbite-svelte';

	let templates: ICampaignTemplate[] = [];
	let isLoading = true;
	let open = false;
	let edit = false;
	let add = false;
	let recordId = 0;
	let showAlert = false;
	let editor: any;
	let isValid = false;
	let busy = false;
	let pageInfo = new PageInfo();
	pageInfo.take = 12;

	async function fetchData(load = false) {
		try {
			if (load) isLoading = true;
			const ret = await readSmsTemplates();
			if (ret.success) {
				const data = ret.data;
				templates = data.items;
				pageInfo.hasNextPage = data.pageInfo.hasNextPage;
				pageInfo.hasPreviousPage = data.pageInfo.hasPreviousPage;
				pageInfo.nextPageUrl = data.pageInfo.nextPageUrl;
				pageInfo.previousPageUrl = data.pageInfo.previousPageUrl;
				pageInfo.totalRecords = data.totalCount;
			} else {
				showError(ret.message);
			}
		} catch (err: any) {
			console.log(err);
			showError(err?.message || err);
		} finally {
			isLoading = false;
		}
	}

	function handleCardClicked(id: number, name: 'edit' | 'delete' | 'view') {
		switch (name) {
			case 'view':
				recordId = id;
				if (edit) edit = false;
				if (add) add = false;
				open = true;
				break;
			case 'edit':
				recordId = id;
				edit = true;
				if (add) add = false;
				open = true;
				break;
			case 'delete':
				recordId = id;
				showAlert = true;
				break;

			default:
				break;
		}
	}

	function closeModal() {
		open = false;
		if (edit) edit = false;
		if (add) add = false;
		if (recordId) recordId = 0;
	}

	async function submitForm({ detail }: any) {
		try {
			busy = true;
			const { values } = detail;
			const res = edit
				? await updateSmsTemplates({ ...values, id: recordId })
				: await createSmsTemplates(values);

			if (res.success) {
				showInfo(res.message);
				closeModal();
				fetchData();
			} else {
				showError(res.message);
			}
		} catch (err: any) {
			console.log(err);
			showError(err?.message || err);
		} finally {
			busy = false;
		}
	}

	function closeAlert() {
		showAlert = false;
		recordId = 0;
	}

	async function handleAlert(id: number) {
		try {
			busy = true;
			const res = await deleteSmsTemplates(id);
			if (res.success) {
				showInfo(res.message);
				closeAlert();
				fetchData();
			} else {
				showError(res.message);
			}
		} catch (err: any) {
			console.log(err);
			showError(err?.message || err);
		} finally {
			busy = false;
		}
	}
	onMount(() => fetchData());
</script>

<div class="w-full h-full flex flex-col gap-4">
	<div class="flex gap-2 items-center justify-between xl:pr-4">
		<div class="w-full lg:w-[550px]">
			<!-- <TableSearchBox placeholder="Search name..." bind:value={query} /> -->
		</div>
		<div class="flex items-center gap-3">
			<!-- <Paginate
				onNextPage={() => debounceSearch(query)}
				onPreviousPage={() => debounceSearch(query)}
				currentPage={$currentPage}
				hasNextPage={$hasNextPage}
				hasPreviousPage={$hasPreviousPage}
				totalPages={$totalPages}
				refresh={() => debounceSearch(query)}
			/> -->
			<button
				on:click={() => {
					edit = false;
					add = true;
					open = true;
				}}
				class="hover:bg-gray-300 grid p-1.5 rounded-full place-content-center"
				><iconify-icon icon="icon-park-outline:add-one" style="font-size: 20px;" /></button
			>
			<Tooltip placement="left-end">New SMS Template</Tooltip>
		</div>
	</div>
	{#if isLoading}
		<div class="h-full w-full"><PageLoader /></div>
	{:else}
		<Box otherClasses="w-full h-full" transitionIn="slide">
			{#if templates.length}
				{#each templates as { name, category, isSystemTemplate, id }}
					<TemplateCard
						{name}
						notes={category}
						{isSystemTemplate}
						avatarIcon="fa6-solid:comment-sms"
						on:view={() => handleCardClicked(id, 'view')}
						on:edit={() => handleCardClicked(id, 'edit')}
						on:delete={() => handleCardClicked(id, 'delete')}
					/>
				{/each}
			{/if}
		</Box>
	{/if}
</div>

<SideModal
	{open}
	size="md"
	on:close={closeModal}
	title={edit ? 'Update SMS Template' : add ? 'New SMS Template' : 'View SMS Template'}
	showModalButtons={!add && !edit ? false : true}
	{isValid}
	{busy}
	on:submit={() => editor.submit()}
>
	<Editor
		bind:valid={isValid}
		bind:this={editor}
		on:submit={submitForm}
		readonly={!add && !edit ? true : false}
		{recordId}
	/>
</SideModal>

<AlertDialog
	bind:open={showAlert}
	on:cancel={closeAlert}
	on:yes={() => handleAlert(recordId)}
	message="Are you sure you want to delete this template?"
	{busy}
/>
