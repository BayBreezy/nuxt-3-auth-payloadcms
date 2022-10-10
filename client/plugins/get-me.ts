export default defineNuxtPlugin(async (app) => {
	//Try to get a logged in user
	await useGetPayloadCustomer();
});
