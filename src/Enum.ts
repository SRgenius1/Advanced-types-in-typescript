export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  COSTUMER = 'COSTUMER',
};


export type User = {
  username: string;
  role: ROLES;
};

const juanUser:User = {
  username: 'Juan david el MACHO',
  role: ROLES.COSTUMER,
}
