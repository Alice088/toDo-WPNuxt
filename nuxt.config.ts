// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	ssr: false,

	runtimeConfig: {

		graphqlAPI: "bebebe",

		public: {
			RandomQuoteUrl: "https://api.quotable.io/quotes/random?maxLength=200&minLength=100",
		}
	},

	build: {
		analyze: {}
	},

	app: {
		head: {
			htmlAttrs: { lang: "en-US" },
			title: "Gosha To Do",
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }
			]
		}
	},

	css: [
		"@/assets/style/fonts.scss",
		"@/assets/style/global.scss",
		"@/assets/style/reset.scss"
	],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@pinia/nuxt"],
});