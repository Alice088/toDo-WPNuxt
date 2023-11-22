export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const config = useRuntimeConfig();

	return await $fetch(config.secretAPI + "/createUser", {
		method: "POST",
		body: body
	});
});