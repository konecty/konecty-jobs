'use client';

import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import { Product } from "@/interfaces/Product";

export default function useFilteredProducts() {
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return {
    filteredProducts,
    setFilteredProducts
  }
}