type TypeUser = {
	nickname: null | string
	id: null | number,
	password: null | string,
	email: null | string,
}

export const useUserAccountStore = defineStore("UserAccount", {
	state: () => {
		return {
			nickname: null,
			id: null,
			password: null,
			email: null,
		} as TypeUser;
	},
	
	actions: {
		async createUser(): Promise<{ result: boolean, message: string }> {
			const result: { message: string } = await $fetch("/api/createUser", {
				method: "POST",

				body: JSON.stringify({
					nickname: this.nickname,
					password: this.password,
					email: this.email,
				})
			});

			if(result.message === "Something went wrong") return { result: false, message: result.message };
			else {
				this.password = null;
				this.email = null;

				return { result: true, message: result.message };
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