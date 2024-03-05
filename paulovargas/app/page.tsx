import React from 'react';
import ProductList from '../components/ProductList';
import { getAllProducts } from '../api/products';

const Home: React.FC = () => {
  const products = getAllProducts();

  return (
    <div className="container mx-auto my-10">
      <ProductList products={products} />
    </div>
  );
};

export default Home;
