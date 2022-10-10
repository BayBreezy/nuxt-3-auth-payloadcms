import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
	// tell payload what slug to use when performing queries on this collection
	slug: "media",
	// Add fileds key, even if you are not registering any
	fields: [],
	admin: {
		// By default, payload will put all collections under a group called `Collections`
		// You can change that group name by specifying it here
		group: "Media",
		description: "A list of all uploaded files",
	},
	// this will turn the collection into an upload collection
	upload: {
		// The folder to store your files in
		// make the path relative to the `payload.config.ts` file
		staticDir: "media",
		//The url path to use when accessing uploaded files from the API
		staticURL: "/media",

		// Tell payload how you want your images to be transformed
		// Uses the `sharp` package under the hood
		// Each image that is upload will have these versions created
		// The version will not be created if the image dimensions don't allow it
		// An image that is 350 X 480 will not have a `card` sized image
		imageSizes: [
			{
				name: "avatar",
				width: 150,
				height: 150,
				position: "centre",
			},
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "card",
				width: 768,
				height: 1024,
				position: "centre",
			},
			{
				name: "tablet",
				width: 1024,
				// By specifying `null` or leaving a height undefined,
				// the image will be sized to a certain width,
				// but it will retain its original aspect ratio
				// and calculate a height automatically.
				height: null,
				position: "centre",
			},
		],
		// Tell the admin UI which image version to use as the thumbnail
		adminThumbnail: "thumbnail",
	},
};

export default Media;
