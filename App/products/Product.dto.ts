import { Product } from "./Product.model";

export interface CreateProductDto extends Omit<Product, 'id'| 'createAt' | 'updateAt' | 'category'> {
  categoryId: string;
};

// export interface CreateProductDto extends Pick<Product, 'id'> {
  //code.. (with PICK)
// };

export interface updateProductDto extends Partial<CreateProductDto> {};


// export interface updateProductDto extends Requeried<CreateProductDto> {
// }

export interface FindProduct extends Readonly<Partial<Omit<Product, 'tags'>>> {
  tags: ReadonlyArray<string>;
};

