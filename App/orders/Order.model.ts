import {Product} from '../products/Product.model';
import {User} from '../user/User.model';
import { BaseModel } from '../base.model';

export interface Order extends BaseModel{
  products: Product[];
  user: User;
};
