type TypeAuthState = { dataUser: { name: string, id: string } | null }

export const useAuthStore = defineStore("Authorization", {
	state: (): TypeAuthState => {
		return {
			dataUser: null
		};
	},

	actions: {
		logIn(dataUser: TypeAuthState["dataUser"] ) {
			localStorage.setItem("auth", "true");
			this.dataUser = dataUser;
		},

		outFromAccount() {
			localStorage.setItem("auth", "");
			this.dataUser = null;
		}
	}
});