<template>
	<div class="w-full">
		<label class="text-sm font-semibold inline-block mb-1" :for="id">{{ label }}</label>
		<input
			v-model="value"
			@blur="handleBlur"
			@input="handleChange"
			:type="type"
			:name="name"
			:id="id"
			:placeholder="placeholder"
		/>
		<p class="text-xs text-red-500 mt-1">
			&nbsp;
			<span>{{ errorMessage }}</span>
		</p>
	</div>
</template>

<script setup>
	import { useField } from "vee-validate";

	const props = defineProps({
		id: [String, Number],
		label: [String, Number],
		placeholder: [String, Number],
		type: {
			type: String,
			default: "text",
		},
		rules: String,
		name: {
			type: String,
			required: true,
		},
		modelValue: [String, Number],
	});

	const { errorMessage, value, handleBlur, handleChange } = useField(ref(props.name), props.rules, {
		initialValue: props.modelValue,
		label: props.label || props.name,
	});
</script>

<style scoped></style>
