import { Access } from "payload/config";
import Users from "../collections/Users";

/**
 * Method used to determine whoe can access the data
 * @param object - Request object from express
 * @param string - id of te record, may not be present
 * @returns A boolean or query constraint
 */
export const selfOrAdmin: Access = ({
	req: /**The Request object from Express */ { user /**The user that is logged in */ },
	id /**The id that may come with a findOne req */,
}) => {
	//Let all users from the `admin-users` collection be able to read
	if (user?.collection == Users.slug) {
		return true;
	}
	// allow read if the person owns the account
	return user?.id === id; /** <-- this id is the id passed in by the function */
};
