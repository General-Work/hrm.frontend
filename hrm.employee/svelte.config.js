import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			// $houdini: path.resolve('.', '$houdini'),
			$svc: path.resolve('.', 'src', 'services'),
			$cmps: path.resolve('.', 'src', 'components'),
			$modules: path.resolve('.', 'src', 'modules'),
			$data: path.resolve('.', 'src', 'data'),
			$types: path.resolve('.', 'src', 'types'),
			$assets: path.resolve('.', 'src', 'assets')
		},
	}
};

export default config;
