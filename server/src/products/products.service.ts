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
}
