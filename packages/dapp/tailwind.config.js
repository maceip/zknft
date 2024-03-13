const deftaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Arimo', ...deftaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
};
