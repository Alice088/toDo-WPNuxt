export const useThemeStore = defineStore("theme", {
	state: () => {
		return {
			theme: "dark"
		};
	},

	actions: {
		setDarkTheme() {
			document.documentElement.classList.add("dark");
			this.theme = "dark";
		},

		setLightTheme() {
			document.documentElement.classList.remove("dark");
			this.theme = "light";
		},

		detectAndSetTheme() {
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? this.setDarkTheme()
				: this.setLightTheme();
		}
	}
});