import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'tab',
      price: 12345,
    },
    {
      id: 2,
      name: 'Laptop',
      price: 1004,
    },
    {
      id: 3,
      name: 'Mobile',
      price: 1234,
    },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
