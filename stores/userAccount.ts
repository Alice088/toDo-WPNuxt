type TypeStore = {
	nickname: null | string
	id: null | number,
	auth: boolean,
	fetchingServer: boolean,
}

export type responseServer = {
	message: string,
	result: boolean,
	id: number,
}

export const useUserAccountStore = defineStore("UserAccount", {
	state: () => {
		return {
			nickname: null,
			id: null,
			auth: false,
			fetchingServer: false
		} as TypeStore;
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
				const { id } = await this.getUserID(nickname, email);

				this.auth = true;
				this.nickname = nickname;
				this.id = id;

				return res;
			}
		},

		async authenticationUser(nickname: string, password: string) {
			const res: responseServer = await $fetch(
				`/api/authenticationUser?nickname=${nickname}&password=${password}`,
				{ method: "GET" }
			);
			
			if(!res.result) return res;
			else {
				this.id = res.id;
				this.nickname =  nickname;
				this.auth = true;

				return res;
			}
		},

		async getUserID(nickname: string, email: string): Promise<responseServer> {
			return await $fetch(
				`/api/getUserID?nickname=${nickname}&email=${email}`,
				{ method: "GET" }
			) as responseServer;
		},
	}
});