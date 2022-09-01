import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  COSTUMER = 'COSTUMER',
};


export interface User extends BaseModel{
  username: string;
  role: ROLES;
};
