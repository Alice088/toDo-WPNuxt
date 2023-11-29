export default defineNuxtRouteMiddleware((to) => {
	if (to.path === "/home" && !useUserAccountStore().auth) {
		return abortNavigation();
	}

	if ((to.path === "/" || to.path === "/authentication")  && useUserAccountStore().auth) {
		return abortNavigation();
	}
});