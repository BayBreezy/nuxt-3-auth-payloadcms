const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: "class",
	theme: {
		// Declaring variables inside the extend key will not override the default tailwind values
		extend: {
			colors: {
				// Set a custom primary color
				primary: {
					DEFAULT: colors.violet[600],
					...colors.violet,
				},
				// Set custom dark background color
				"bg-dark": "#0B0514",
			},
			fontFamily: {
				// Set custom font family
				sans: ["Inter"],
				serif: ["'Source Serif Pro'"],
			},
		},
	},
	// Add form plgin to help with form styles
	plugins: [require("@tailwindcss/forms")],
};
