type TypeUser = {
	nickname: null | string
	id: null | number
}

export const useUserAccountStore = defineStore("UserAccount", {
	state: () => {
		return {
			nickname: null,
			id: null
		} as TypeUser;
	},
	
	actions: {
		async createUser(nickname: string, password: string, email: string) {
			return await $fetch("/api/createUser", {
				method: "POST",

				body: JSON.stringify({
					nickname: nickname,
					password: password,
					email: email,
				})
			});
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