type TypeUser = {
	nickname: null | string
	id: null | number,
	auth: boolean,
	fetchingServer: boolean,
}

export type responseServer = {
	message: string,
	result: boolean
}

export const useUserAccountStore = defineStore("UserAccount", {
	state: () => {
		return {
			id: null,
			auth: false,
			fetchingServer: false
		} as TypeUser;
	},
	
	actions: {
		async createUser(nickname: string, password: string, email: string) {
			const res: responseServer = await $fetch("/api/createUser", {
				method: "POST",

				body: JSON.stringify({
					nickname: nickname,
					password: password,
					email: email,
				})
			});

			if (!res.result) return res;
			else {
				this.auth = true;
				return res;
			}
		},

		async authenticationUser(nickname: string, password: string) {
			const res: responseServer = await $fetch(
				`/api/authenticationUser?nickname=${nickname}&password=${password}`,
				{ method: "GET" });
			
			if(!res.result) return res;
			else {
				this.auth = true;

				return res;
			}
		},

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// async updateUser(id: number, nickname?: string, email?: string) {
		// 	const { data: result, error: message } = await useFetchUserController("/createUser");
		// },

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		getUser(id: number) {
			//some fetch
		},

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		deleteUser(id: number) {
			//some fetch
		}
	}
});