module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	plugins: [],
	rules: {
		// this rule does not make sense for nuxt projects, because of the nested group components
		// see in: https://nuxt.com/docs/guide/directory-structure/components#component-names
		'vue/multi-word-component-names': 0
	}
}
