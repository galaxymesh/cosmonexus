import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: options.entry,
	outDir: options.outDir,
	dts: true,
	clean: true,
	format: ['esm', 'cjs'],
}));