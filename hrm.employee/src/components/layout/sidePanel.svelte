<script lang="ts">
	import type { IMenuItems } from '$types/appTypes';
	import { DropdownDivider } from 'flowbite-svelte';
	import SideNav from './sideNav.svelte';
	import UserContent from './userContent.svelte';

	const menuItems: IMenuItems[] = [
		{ label: 'Home', icon: 'radix-icons:dashboard', path: '/private/home' },
		{ label: 'Membership', icon: 'medical-icon:i-registration', path: '/private/membership' },
		{ label: 'Leave', icon: 'clarity:calendar-line', path: '/private/leave' },
		{
			label: 'Apprisal',
			icon: 'healthicons:register-book',
			path: '/private/apprisal',
			iconSize: 25
		},
		{
			label: 'Support',
			icon: 'fluent:chat-mail-20-regular',
			path: '/private/support',
			iconSize: 25
		}
	];

	const adminItems: IMenuItems[] = [];
</script>

<aside class="w-full h-full bg-gray-100/50 px-4 pt-8">
	<div class="flex flex-col h-full">
		<div class="w-full h-full flex flex-col gap-6 flex-grow">
			<UserContent />
			<DropdownDivider divClass="my-1 h-px bg-gray-200 dark:bg-gray-600" />
			<div class="flex flex-col gap-10">
				<div class="flex flex-col gap-3">
					<span class="text-sm text-gray-500 font-thin pl-2"> Basics </span>
					<SideNav {menuItems} />
				</div>
				<div class="flex flex-col gap-3 ">
					<span class="text-sm text-gray-500 font-thin pl-2"> Admin </span>
					<SideNav menuItems={adminItems} />
				</div>
			</div>
		</div>
		<div class="pb-4">
			<div class="bg-pink-100 h-52 rounded-xl">here</div>
		</div>
	</div>
</aside>
