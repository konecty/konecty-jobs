import { Product } from "@/interfaces/Product"

export default class Database {
    // private static instance: Database
    private products: Product[] = [
    ]

    // private constructor() {}

    public add(product: Product) {
        this.products.push(product)
    }

    public findById(id: number): Product | undefined {
        return this.products.find(p => p.id === id)
    }

    public update(id: number, product: Product) {
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
            this.products[index] = product
        }
    }

    public delete(id: number) {
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
            this.products.splice(index, 1)
        }
    }

    public list(): Product[] {
        return this.products
    }
}