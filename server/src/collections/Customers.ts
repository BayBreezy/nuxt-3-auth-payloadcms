import { CollectionConfig } from "payload/types";
import { selfOrAdmin } from "../access/customers.access";
import Media from "./Media";
import Users from "./Users";

const Customers: CollectionConfig = {
	// tell payload what slug to use when performing queries on this collection
	slug: "customers",
	// Can be an object or boolean
	//This tells payload that it should add auth endpoints to this collection
	auth: {
		//This will set the exp time for the HTTP-Only cookie that payload will set for our logged in user
		// This will only affect users that log into the `customers` collection
		tokenExpiration: 60 * 60 * 24 * 3,
	},
	//Labels that will be displayed for our collection inside the admin UI
	labels: {
		plural: "Customers",
		singular: "Customer",
	},
	admin: {
		// The first column that will be clickable in our table in the admin UI
		// This email field is present when you set `auth: true`
		useAsTitle: "email",
		// By default, payload will put all collections under a group called `Collections`
		// You can change that group name by specifying it here
		group: "Customers",
		description: "A list of all our fron-end customers",
	},
	// Tell payload what operations can be performed on the collection
	// The functions should always return a boolean / a query contraint to determine how the collection should be accessed
	// By default, all logged in users can interact with collections
	access: {
		// State who can read the information from this collection
		// here want only admins & customers who own the acount to be able to read
		// BEST PRACTICE: Move these functions into their own files
		// read: selfOrAdmin,
		// Same as read, only admin and the owner can update
		update: selfOrAdmin,
		// Let any create a customer account
		create: () => true,
	},
	// A list of fields that will be stored inside this collection
	// Each field must have a name & type property
	// Depending on the type, other properties may be required
	fields: [
		// Email added by default
		// Add more fields as needed
		{
			//Key that will be stored in collection
			name: "name",
			// The type of value to accept
			type: "text",
			// A custom label that will only be present in the adminUI provided by payload
			label: "Full name",
			// All customers will have to enter theri name
			required: true,
			// Configuration that will only affect the admin UI provided by payload
			admin: {
				placeholder: "Enter your full name",
			},
		},
		// After creating the media collection, we can now tell other fields in other collections to upload files to it
		{
			//Key that will be stored in collection
			name: "image",
			// The type of value to accept
			type: "upload",
			//The upload type requires the slug of the upload/media colection that was created
			relationTo: Media.slug,
			// A custom label that will only be present in the adminUI provided by payload
			label: "Image",
		},
	],
};

export default Customers;
