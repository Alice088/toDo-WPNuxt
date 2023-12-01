// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	ssr: false,

	runtimeConfig: {
		secretAPI: process.env.SECRETAPI,

		public: {
			RandomQuoteUrl: "https://api.quotable.io/quotes/random?maxLength=200&minLength=100",
		}
	},

	build: {
		analyze: {}
	},

	app: {
		pageTransition: {
			name: "fadeTransition",
			mode: "out-in",
			appear: true,
			type: "transition"
		},

		head: {
			htmlAttrs: { lang: "en-US" },
			title: "Gosha To Do",
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }
			]
		},
	},

	css: [
		"@/assets/style/fonts.css",
		"@/assets/style/global.scss",
		"@/assets/style/reset.css",
		"@/assets/style/colors.scss",
	],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@pinia/nuxt"],
});