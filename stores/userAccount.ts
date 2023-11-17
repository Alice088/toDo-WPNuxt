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
		createUser() {
			//some fetch
		},

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		updateUser(id: number, nickname?: string, email?: string) {
			//some fetch
		},

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