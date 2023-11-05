// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			title: "Gosha To Do",
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon-100.png" }
			]
		}
	},

	css: ["@/assets/style/main.scss"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@pinia/nuxt"],
});