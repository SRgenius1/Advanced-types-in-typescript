export const createProduct = (
  id: string | number,
  stock: number,
  isNew: boolean = true,
) => {
  return {
    id,
    stock: stock || 12,
    isNew,
  };
};

createProduct(1,2);
