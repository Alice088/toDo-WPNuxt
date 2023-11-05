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
				//light
				"strongBlue": "#5680e9",
				"middleBlue": "#5AB9EA",
				"weakBlue": "#84CEEB",
				"whitePurple": "#C1C8E4",
				"megaPurple": "#8860D0",

				//dark
				"strongBlack": "#0B0C10",
				"middleBlack": "#1F2833",
				"whiteBlack": "#C5C6C7",
				"strongOceanBlue": "#66FCF1",
				"weakOceanBlue": "#45A29E",
			},

			fontFamily: {
				"avenir": ["avenir", "sans-serif"],
			}
		},
	},

	plugins: [],
};

