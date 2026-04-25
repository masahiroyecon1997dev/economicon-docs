// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Economicon',
			favicon: '/icon.ico',
			defaultLocale: 'root',
			locales: {
				root: { label: '日本語', lang: 'ja' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: '' }],
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
