import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts} from "./products/Products.service";

for (let index = 0; index < 50; index++) {
    addProduct({
        title: faker.commerce.productName(),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        size: faker.helpers.arrayElement(['M','S','L', 'XL']),
        stock: faker.datatype.number({min: 10, max: 100}),
        color: faker.commerce.color(),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElement(),
        categoryId: faker.datatype.uuid(),
  });
};

console.log(products);
const product = products[0];
updateProduct(product.id, {title: 'new Title', stock: 80,});

findProducts({
  title: 'p1',
  color: 'red',
  createAt: new Date(),
});
