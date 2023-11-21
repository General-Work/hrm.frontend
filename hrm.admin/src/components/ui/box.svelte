<script lang="ts" context="module">
	import { cubicOut } from 'svelte/easing';

	export function customSlide(
		node: any,
		{ show = false, delay = 0, duration = 400, easing = cubicOut, axis = 'y' } = {}
	) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const primary_property = axis === 'y' ? 'height' : 'width';
		const primary_property_value = parseFloat(style[primary_property]);
		const secondary_properties = axis === 'y' ? ['top', 'bottom'] : ['left', 'right'];
		const capitalized_secondary_properties = secondary_properties.map(
			(e) => `${e[0].toUpperCase()}${e.slice(1)}`
		);
		const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
		const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
		const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
		const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
		const border_width_start_value = parseFloat(
			style[`border${capitalized_secondary_properties[0]}Width`]
		);
		const border_width_end_value = parseFloat(
			style[`border${capitalized_secondary_properties[1]}Width`]
		);
		if (show) {
			return {
				delay,
				duration,
				easing,
				css: (t: number) =>
					'overflow: hidden;' +
					`opacity: ${Math.min(t * 20, 1) * opacity};` +
					`${primary_property}: ${t * primary_property_value}px;` +
					`padding-${secondary_properties[0]}: ${t * padding_start_value}px;` +
					`padding-${secondary_properties[1]}: ${t * padding_end_value}px;` +
					`margin-${secondary_properties[0]}: ${t * margin_start_value}px;` +
					`margin-${secondary_properties[1]}: ${t * margin_end_value}px;` +
					`border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;` +
					`border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
			};
		} else {
			return {};
		}
	}
</script>

<script lang="ts">
	import { componentClass } from '$lib/dev';

	export let otherClasses = '';
	export let bgWhite = false;
	export let rounded = false;
	export let padding = false;
	export let transitionIn: 'scale' | 'slide' | null = null;
</script>

<div
	class={componentClass(
		'w-full h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch overflow-y-auto ',
		otherClasses
	)}
	class:rounded-lg={rounded}
	class:bgWhite
	class:p-6={padding}
	in:customSlide={{ show: transitionIn === 'slide' ? true : false }}
>
	<slot />
</div>

<style lang="postcss">
	.bgWhite {
		@apply bg-white dark:bg-gray-900;
	}
</style>
