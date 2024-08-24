import React from "react";
import { ISneaker } from "@/interfaces/ISneaker.interface";
import Product from "../Product/Product";

interface ProductGridProps {
  sneakers: ISneaker[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ sneakers }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sneakers.map((sneaker, key) => (
        <Product key={key} {...sneaker} />
      ))}
    </div>
  );
};

export default ProductGrid;
