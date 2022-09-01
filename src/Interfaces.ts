interface Product  {
  id: string | number;
  title: string;
  createAt: string;
  stock: number;
  size: 'S' | 'M' | 'L' | 'XL';
};

type userId = string | number;

const products: Product[] = [];

products.push({
  id: 1,
  title: 'wolas',
  createAt: '12,23',
  stock: 12,
  size: 'L',
});

