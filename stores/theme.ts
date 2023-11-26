export const useThemeStore = defineStore("theme", {
	state: () => {
		return {
			theme: "Dark"
		};
	},

	actions: {
		setDarkTheme() {
			const allElements = document.querySelectorAll("*");

			for (let i = 0; i < allElements.length; i++) {
				allElements[i].classList.add("dark");
			}

			this.theme = "Dark";
		},

		setLightTheme() {
			const allElements = document.querySelectorAll("*");

			for (let i = 0; i < allElements.length; i++) {
				allElements[i].classList.remove("dark");
			}

			this.theme = "Light";
		},

		detectAndSetTheme() {
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? this.setDarkTheme()
				: this.setLightTheme();
		}
	}
});