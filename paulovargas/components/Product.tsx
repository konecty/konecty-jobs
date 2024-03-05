/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ProductProps {
  name: string;
  brand: string;
  description: string;
  price: number;
  image: string;
}

const Product: React.FC<ProductProps> = ({ name, brand, price, image }) => {
  return (
    <div className="border p-4 rounded-xl bg-white max-w-40">
      <img src={image} alt={name} className="w-full mb-2 max-w-40 max-h-24"/>
      <p className="font-semibold bg-white">{brand}</p>
      <p className="bg-white">{name}</p>
      <p className="bg-white">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
