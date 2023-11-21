<script lang="ts" context="module">
	export interface IButtonConfig {
		kind: string;
		label: string;
		subLabel: string;
	}
	const kinds = {
		generic: {
			icon: 'solar:verified-check-bold',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		accept: {
			icon: 'ph:check-circle',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		approve: {
			icon: 'ph:check-circle',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		reject: {
			icon: 'ph:x-circle',
			iconBgColor: 'bg-red-400',
			iconSize: 25,
			iconColor: 'text-white',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		transfer: {
			icon: 'mdi:file-sync',
			iconBgColor: 'bg-sky-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		recommendation: {
			icon: 'material-symbols:recommend-outline',
			iconBgColor: 'bg-yellow-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		file: {
			icon: 'ph:file-text',
			iconBgColor: 'bg-gray-200',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		form: {
			icon: 'game-icons:archive-register',
			iconBgColor: 'bg-teal-100',
			iconSize: 25,
			iconColor: 'text-blue-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		}
	};
</script>

<script lang="ts">
	import { componentClass } from '$lib/dev';

	export let icon = '';
	export let iconBgColor = '';
	export let iconSize = 0;
	export let iconColor = '';
	export let label = '';
	export let subLabel = '';
	export let showBg: boolean | null = null;
	export let showArrow = false;
	export let showIconHover = false;
	export let moreHeight = false;

	export let kind:
		| 'generic'
		| 'accept'
		| 'approve'
		| 'reject'
		| 'recommendation'
		| 'file'
		| 'transfer'
		| 'form' = 'generic';

	$: if (kind) {
		const config = (kinds as any)[kind] ?? kinds.generic;
		icon ||= config.icon;
		iconBgColor ||= config.iconBgColor;
		iconSize ||= config.iconSize;
		iconColor ||= config.iconColor;
		label ||= config.label;
		subLabel ||= config.subLabel;
		showBg = showBg === null || showBg === undefined ? config.showBg : false;
		showArrow ||= config.showArrow;
		showIconHover ||= config.showIconHover;
		moreHeight ||= config.moreHeight;
	}
</script>

<button
	class=" rounded-[6px] border-gray-400/40 pl-4 py-2.5 {!showBg && 'hover:bg-blue-200/40'}  min-w-fit"
	class:bg-white={showBg}
	class:shadow={showBg}
	class:hover:scale-95={showBg}
	class:h-20={moreHeight}
	on:click
>
	<div class="flex justify-between items-center">
		<div class="flex justify-start items-center gap-3">
			<div class={componentClass(' grid place-content-center p-2.5 rounded-[5px]', iconBgColor)}>
				<iconify-icon {icon} style="font-size: {iconSize}px;" class={iconColor} />
			</div>
			<div class="flex flex-col text-left">
				<span class="font-medium truncate w-52">{label}</span>
				<span class="text-sm text-gray-500 truncate w-52">{subLabel}</span>
			</div>
		</div>
		<button
			on:click
			class=" rounded-full w-9 h-9 grid place-content-center"
			class:hover:bg-gray-200={showIconHover}
			class:hidden={!showArrow}
		>
			<iconify-icon icon="iconamoon:arrow-right-2-light" style="font-size: 25px;" />
		</button>
	</div>
</button>
