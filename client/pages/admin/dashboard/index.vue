<template>
	<div class="min-h-screen">
		<header class="bg-white">
			<div class="flex items-center justify-between h-20 max-w-6xl mx-auto">
				<NuxtLink to="/admin/dashboard" class="font-serif font-semibold text-2xl"
					>Dashboard</NuxtLink
				>
			</div>
		</header>
		<main>
			<div class="max-w-6xl mx-auto pt-20">
				<h1 class="text-2xl font-semibold mb-5">
					<!-- Not sure if doing this is safe??? -->
					Hey <span>{{ customer?.user.name }}</span>
				</h1>
				<button @click="logout" class="btn">Logout</button>
			</div>
		</main>
	</div>
</template>

<script setup>
	const customer = useCustomer();
	const logout = async () => {
		try {
			await usePayloadLogout();
			// remove the user
			customer.value = null;
			//navigate to the login page
			await navigateTo("/");
			//Show feedback
			useToast().success("See you soon!");
		} catch (error) {
			console.log(error);
		}
	};

	// Set the title of the page
	useHead({
		title: `Welcome ${customer.value?.user.name}`,
		titleTemplate: "%s | Nuxt 3 Auth + PayloadCMS",
	});
</script>
