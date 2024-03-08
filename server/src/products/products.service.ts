import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private async readProductsFile() {
    const filePath = path.resolve(__dirname, './products.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }

  async findAll() {
    return await this.readProductsFile();
  }

  async findOne(id: number) {
    const products = await this.readProductsFile();
    return products.find((product: { id: number }) => product.id === id);
  }

  async searchProducts(queryParams: any) {
    const products = await this.readProductsFile();
    let filteredProducts = products;

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
          product.brand.toLowerCase() === queryParams.type.toLowerCase(),
      );
    }

    return filteredProducts;
  }
}
