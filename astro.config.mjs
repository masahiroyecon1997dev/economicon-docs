// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://masahiroyecon1997dev.github.io',
	base: '/economicon-docs',
	integrations: [
		starlight({
			title: 'Economicon',
			favicon: 'icon.ico',
			customCss: ['/src/style/costom.css'],
			defaultLocale: 'ja',
			locales: {
				ja: { label: '日本語', lang: 'ja' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/masahiroyecon1997dev/economicon',
				},
			],
			sidebar: [
				{
					label: 'Economiconについて',
					autogenerate: { directory: 'about' },
				},
				{
					label: 'ガイド',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'リファレンス',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
