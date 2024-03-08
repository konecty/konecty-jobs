import { Injectable } from '@nestjs/common';
import { productsdata } from './productsdb';

@Injectable()
export class ProductsService {
  async findAll() {
    return productsdata;
  }

  async findOne(id: number) {
    return productsdata.find((product: { id: number }) => product.id === id);
  }

  async searchProducts(queryParams: any) {
    let filteredProducts = productsdata;

    if (queryParams.name) {
      filteredProducts = filteredProducts.filter((product: { name: string }) =>
        product.name.toLowerCase().includes(queryParams.name.toLowerCase()),
      );
    }

    if (queryParams.color) {
      filteredProducts = filteredProducts.filter(
        (product: { color: string }) =>
          product.color.toLowerCase() === queryParams.color.toLowerCase(),
      );
    }

    if (queryParams.category) {
      filteredProducts = filteredProducts.filter(
        (product: { category: string }) =>
          product.category.toLowerCase() === queryParams.category.toLowerCase(),
      );
    }

    if (queryParams.type) {
      filteredProducts = filteredProducts.filter(
        (product: { type: string }) =>
          product.type.toLowerCase() === queryParams.type.toLowerCase(),
      );
    }

    if (queryParams.brand) {
      filteredProducts = filteredProducts.filter(
        (product: { brand: string }) =>
          product.brand.toLowerCase() === queryParams.brand.toLowerCase(),
      );
    }

    return filteredProducts;
  }
}
