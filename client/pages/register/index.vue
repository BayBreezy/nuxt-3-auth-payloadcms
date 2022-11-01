<template>
	<div class="min-h-screen flex items-center">
		<!-- Form Side -->
		<div class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-5 sm:px-10 lg:px-20">
			<div class="pt-20 mb-12">
				<h1 class="font-serif text-4xl font-bold mb-3">Join Today!</h1>
				<p class="text-gray-600 text-sm">Enter your email & password to get started</p>
			</div>

			<VForm @submit="submit">
				<div>
					<FormInput rules="required|min:2" name="name" id="name" label="Full name" />
				</div>
				<div>
					<FormInput rules="required|email" name="email" type="email" id="email" label="Email" />
				</div>
				<div class="mt-3">
					<FormInput
						rules="required|min:6"
						name="password"
						type="password"
						id="password"
						label="Password"
					/>
				</div>
				<div class="mt-5">
					<button class="btn">Create Account</button>
				</div>
				<div class="mt-7">
					<p class="text-xs text-gray-600">
						Already have an account?
						<NuxtLink class="font-bold text-primary" to="/">Sign in</NuxtLink>
					</p>
				</div>
			</VForm>
		</div>
		<!-- Image Side -->
		<div class="hidden md:block md:w-1/3 lg:w-1/2 xl:w-2/3 h-screen">
			<img
				src="https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Puppy Image"
				class="h-screen w-full object-cover object-center"
			/>
		</div>
	</div>
</template>

<script setup>
	const submit = async (values, ctx) => {
		try {
			//create user in
			const customer = await usePayloadRegister({
				email: values.email,
				password: values.password,
				name: values.name,
			});
			//navigate to dashboard
			await navigateTo("/admin/dashboard", { replace: true });
			//Show feedback
			useToast().success("Account created!");
		} catch (error) {
			console.log(error);
		}
	};

	useHead({
		title: "Register",
		titleTemplate: "%s | Nuxt 3 Auth + PayloadCMS",
	});
</script>

<style></style>
