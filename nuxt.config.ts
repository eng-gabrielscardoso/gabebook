// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Nuxt modules
	modules: [
		'@nuxtjs/color-mode',

		'@nuxt/content',

		'@nuxtjs/eslint-module',

		'@nuxt/image',

		'@nuxtjs/robots',

		'@vueuse/nuxt',

		'dayjs-nuxt',

		'nuxt-icon',

		'nuxt-lodash'
	],

	// Nuxt Extends
	extends: ['nuxt-seo-kit'],

	// Nuxt Runtime Configuration
	runtimeConfig: {
		public: {
			siteUrl: 'https://gabe-book.com',
			siteName: 'Gabebook',
			siteDescription:
				'Gabebook é um blog simples, com o intuito de partilhar minhas impressões de leituras com outras pessoas.',
			language: 'pt',
			'nuxt-seo-kit': {
				siteUrl: 'https://gabe-book.com',
				siteName: 'Gabebook',
				siteImage: '',
				siteDescription:
					'Gabebook é um blog simples, com o intuito de partilhar minhas impressões de leituras com outras pessoas.',
				language: 'pt',
				indexable: true
			}
		}
	},

	// Nuxt devtools
	devtools: {
		enabled: import.meta.env.MODE === 'development'
	},

	// Nuxt Colour Mode
	colorMode: {
		classSuffix: '',
		preference: 'system',
		fallback: 'dark'
	},

	// Nuxt Robots
	robots: {
		rules: [
			{
				UserAgent: '*',
				Disallow: ''
			}
		]
	},

	// Nuxt DayJS
	dayjs: {},

	// Tailwind and PostCSS Config
	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
})
