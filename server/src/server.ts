import express from "express";
import payload from "payload";

// Register env file
require("dotenv").config();
//Create the express app
// This can be used all over the application
// We create it here so that we can pass it to the payload init function
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

// Initialize Payload
payload.init({
	secret: process.env.PAYLOAD_SECRET,
	mongoURL: process.env.MONGODB_URI,
	express: app,
	onInit: () => {
		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
	},
});

// Add your own express routes here
app.listen(process.env.PORT);
