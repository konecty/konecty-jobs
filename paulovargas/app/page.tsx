import React from 'react';
import ProductList from '../components/ProductList';
import { getAllProducts } from '../api/products';

const Home: React.FC = () => {
  const products = getAllProducts();

  return (
    <div className="my-10 sm:mx-16">
      <ProductList products={products} />
    </div>
  );
};

export default Home;
