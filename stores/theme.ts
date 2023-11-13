export const useThemeStore = defineStore("theme", {
	state: () => {
		return {
			theme: "Dark"
		};
	},

	actions: {
		setDarkTheme() {
			document.documentElement.classList.add("dark");
			this.theme = "Dark";
		},

		setLightTheme() {
			document.documentElement.classList.remove("dark");
			this.theme = "Light";
		},

		detectAndSetTheme() {
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? this.setDarkTheme()
				: this.setLightTheme();
		}
	}
});