type TypeUser = {
	nickname: null | string
	id: null | number,
	password: null | string,
	email: null | string,
	auth: boolean,
	fetchingServer: boolean,
}

type responseServer = {
	message: string,
	result: boolean
}

export const useUserAccountStore = defineStore("UserAccount", {
	state: () => {
		return {
			nickname: null,
			id: null,
			password: null,
			email: null,
			auth: false,
			fetchingServer: false
		} as TypeUser;
	},
	
	actions: {
		async createUser(): Promise<responseServer> {
			const res: responseServer = await $fetch("/api/createUser", {
				method: "POST",

				body: JSON.stringify({
					nickname: this.nickname,
					password: this.password,
					email: this.email,
				})
			});

			if (!res.result) return res;
			else {
				this.password = null;
				this.email = null;
				this.auth = true;

				return res;
			}
		},

		async authenticationUser(): Promise<responseServer> {
			const res: responseServer = await $fetch(
				`/api/createUser/${this.nickname}/${this.password}`,
				{
					method: "GET",
				});
			
			if(res.result) return res;
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