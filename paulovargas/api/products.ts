export interface ProductData {
    id: number;
    brand: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  const products: ProductData[] = [
    {
      id: 1,
      brand: 'Nike',
      name: 'Nike',
      description: 'Description of Product 1',
      price: 96,
      image: './image/2.jpeg',
    },
    {
      id: 2,
      brand: 'Converse',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 85.5,
      image: './image/3.jpeg',
    },
    {
      id: 3,
      brand: 'Nike',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.99,
      image: './image/3.jpeg',
    },
    {
      id: 4,
      brand: 'Nike',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.99,
      image: './image/1.jpeg',
    },
    {
      id: 5,
      brand: 'Nike',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.99,
      image: './image/1.jpeg',
    },
    {
      id: 6,
      brand: 'Nike',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.99,
      image: './image/1.jpeg',
    },
    // Add more products as needed
  ];
  
  export const getAllProducts = (): ProductData[] => {
    return products;
  };
  