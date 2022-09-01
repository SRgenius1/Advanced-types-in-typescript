import { User, ROLES } from "./Enum";

const currentUser: User = {
  username: 'Juandis',
  role: ROLES.COSTUMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  };

  return false;
};

console.log(checkAdminRole());
