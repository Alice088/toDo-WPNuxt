export default defineEventHandler(async () => {
	const config = useRuntimeConfig();

	return await $fetch(config.secretAPI + "/authenticationUser", {
		method: "GET",
	});
});