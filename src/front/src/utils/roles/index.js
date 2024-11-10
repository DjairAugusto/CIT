import getRoles from "./getRoles";
import hasRole from "./hasRole";
import isAdmin from "./isAdmin";

const Roles = {
	get: getRoles,
	has: hasRole,
	isAdmin: isAdmin,
};

export default Roles;
