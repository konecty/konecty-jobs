"use client";

import React, { useState } from "react";
import Product from "./Product";
import { ProductData } from "../api/products";

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar produto"
        className="w-52 px-4 py-2 border border-white-300 rounded-md focus:outline-none focus:border-black-500 bg-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h1 className="text-2xl font-bold my-5">Tênis</h1>
      <h5 className="mb-5">{products.length} produtos encontrados</h5>

      <div className="grid grid-cols-4 gap-5 mt-5">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
