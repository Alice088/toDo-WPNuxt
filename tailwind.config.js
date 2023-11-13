/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",

	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],

	theme: {
		extend: {
			screens: {
				"tablet": "540px",
				"laptop": "1024px",
				"desktop": "1280px",
			},

			colors: {
				"BabyPink": "#F0C9C4",
				"LightRed": "#F7D1D0",
				"PalePink": "#FFDAD8",
				"GraniteGray": "#616161",
				"BlackOlive": "#3B3738"
			},
		},
	},

	plugins: [],
};

