import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
	// tell payload what slug to use when performing queries on this collection
	slug: "admin-users",
	// Can be an object or boolean
	//This tells payload that it should add auth endpoints to this collection
	auth: true,
	//Labels that will be displayed for our collection inside the admin UI
	labels: {
		plural: "Admin Users",
		singular: "Admin User",
	},
	admin: {
		// The first column that will be clickable in our table in the admin UI
		// This email field is present when you set `auth: true`
		useAsTitle: "email",
		// By default, payload will put all collections under a group called `Collections`
		// You can change that group name by specifying it here
		group: "Admin",
		description: "A list of all our admin users",
	},
	// Tell payload what operations can be performed on the collection
	// The functions should always return a boolean / a query contraint to determine how the collection should be accessed
	// By default, all logged in users can interact with collections
	access: {
		// State who can read the information from this collection
		// here want anyone to be able to see the admin users
		read: () => true,
	},
	// A list of fields that will be stored inside this collection
	// Each field must have a name & type property
	// Depending on the type, other properties may be required
	fields: [
		// Email added by default
		// Add more fields as needed
		{
			//Key that will be store in collection
			name: "fullName",
			// The type of value to accept
			type: "text",
			// A custom label that will only be present in the adminUI provided by payload
			label: "Full name",
			// Configuration that will only affect the admin UI provided by payload
			admin: {
				placeholder: "Enter your full name",
			},
		},
	],
};

export default Users;
