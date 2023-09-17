import { defineConfig } from "astro/config";
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
	site: 'https://katokdoes.art/',

	vite: {
		resolve: {
			alias: {
				'scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
				'data': fileURLToPath(new URL('./src/data', import.meta.url)),
				'@': fileURLToPath(new URL('./src/components', import.meta.url)),
				'~': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			}
		}
	}
});
