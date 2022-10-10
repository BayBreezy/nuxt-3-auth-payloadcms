import { buildConfig } from "payload/config";
import path from "path";
// Bring in collections
import Users from "./collections/Users";

// Import env package
import dotenv from "dotenv/config";
import Customers from "./collections/Customers";
import Media from "./collections/Media";
// Declare env variables outside of the config object
// We do this so that there is no error when generating the types from our payload collections

// Env vars that will be used by the admin panel show start with `PAYLOAD_PUBLIC_`
//if they don't, you will have issues
const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;
const clientURLS = JSON.parse(process.env.PAYLOAD_PUBLIC_CLIENT_URLS);

// Payload config
export default buildConfig({
	serverURL: serverURL,
	//we have to tell cors where to expect requests from
	// If we don't, we will not be able to send headers in the requests
	cors: clientURLS,
	// We have to tell payload what urls we want to accept cookies from
	// If we don't, we will not be able to get the logged in user
	// This also servers as a form of CSRF protection
	csrf: clientURLS,
	admin: {
		/// Tell payload what collection to use while storing admin users
		// These users will be able to log into the admin dashboard but not the frontend apps
		user: Users.slug,
	},
	// Tell payload how deep it should populate our query results
	defaultDepth: 1,
	// Tell payload whats the deepest it can populate our query results
	maxDepth: 5,
	collections: [
		Users,
		// Add customer collection
		Customers,
		// add media collection
		Media,
	],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	// Set upload options
	// Payload uses the `express-fileupload` package -> https://www.npmjs.com/package/express-fileupload
	// express-fileupload uses busboy. Here are the options - > https://github.com/mscdex/busboy#api
	upload: {
		limits: {
			fileSize: 10000000, // 10MB
		},
	},
});
