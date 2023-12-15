import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
	plugins: [
		sveltekit(),
		dynamicImportVars({
		  include: './src/routes/+layout.svelte'
		})
	]
});

