import { defineRule, Form } from "vee-validate";
import { required, email, min, min_value } from "@vee-validate/rules";

export default defineNuxtPlugin((app) => {
	// register vee-validate's form component globally
	app.vueApp.component("VForm", Form);

	// Define global rules
	defineRule("required", required);
	defineRule("email", email);
	defineRule("min", min);
	defineRule("min_value", min_value);
});
