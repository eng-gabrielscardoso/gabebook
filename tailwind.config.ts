/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	theme: {
		extend: {
			colors: {
				primary: '#3d211f',
				secondary: '#8c7c7c',
				accent: '#c7796f',
				neutral: '#e6cec1',
				positive: '#36b368',
				negative: '#e14e4b',
				warning: '#ffc400',
				default: '#373a3c'
			}
		}
	},
	plugins: []
}
