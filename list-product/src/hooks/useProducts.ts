'use client';

import { Product } from '@/interfaces/Product';
import { useState, useEffect } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      }).catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  return products;
}
