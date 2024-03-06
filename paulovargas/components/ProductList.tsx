/* eslint-disable @next/next/no-img-element */
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
    <div className="ml-3 sm:ml-20">
      <div className="flex px-4 py-2 border border-white-300 rounded-md focus:outline-none bg-white w-80">
        <img
          src="./image/lupa.svg"
          alt="Ícone de busca"
          className="mr-5 bg-white"
        />
        <input
          type="text"
          placeholder=" Buscar produto"
          className=" bg-white border-none focus:border-none focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h1 className="text-4xl font-bold my-5">Tênis</h1>
      <h5 className="mb-5">{products.length} produtos encontrados</h5>
      <div className="flex space-x-4">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none border-gray-400 rounded-full shadow"
          onClick={(e) => setSearchTerm("")}
        >
          Todos
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none border-gray-400 rounded-full shadow"
          onClick={(e) => setSearchTerm("Nike")}
        >
          Nike
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none border-gray-400 rounded-full shadow"
          onClick={(e) => setSearchTerm("Converse")}
        >
          Converse
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none border-gray-400 rounded-full shadow"
          onClick={(e) => setSearchTerm("NewBalance")}
        >
          New Balance
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none border-gray-400 rounded-full shadow"
          onClick={(e) => setSearchTerm("Asics")}
        >
          Asics
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 sm:w-3/5">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
