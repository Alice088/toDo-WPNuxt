export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const query = getQuery(event);

	return await $fetch(config.secretAPI + `/authenticationUser/${query.nickname}/${query.password}`, {
		method: "GET",
	});
});