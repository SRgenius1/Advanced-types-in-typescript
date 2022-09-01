import { Category } from "../categories/Categories.model";
import { BaseModel } from "../base.model";

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Size;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
};

// type CreateProductDto =
// Omit<Product, 'id'| 'createAt' | 'updateAt' | 'category'>;

