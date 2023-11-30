export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const query = getQuery(event);

	return await $fetch(config.secretAPI + `/getUserID/${query.nickname}/${query.email}`, {
		method: "GET",
	});
});