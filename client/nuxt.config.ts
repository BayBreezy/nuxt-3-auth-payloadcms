// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// Registe rthe modules
	modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
	// Font config
	googleFonts: {
		families: {
			"Source Serif Pro": [200, 300, 400, 600, 700, 900],
			Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
		// Use stylesheet instead of downloading the fonts to node_modules
		useStylesheet: true,
		// Dont download anything
		download: false,
	},
	// Add tailwind conig
	tailwindcss: {
		cssPath: "~/assets/main.css",
	},
	// / Register env variables on server and client
	runtimeConfig: {
		//ONLY available on server side
		API_URL: process.env.API_URL,
		API_PREFIX: process.env.API_PREFIX,
		// Expose the variables on client side
		public: {
			API_URL: process.env.API_URL,
			API_PREFIX: process.env.API_PREFIX,
		},
	},
});
