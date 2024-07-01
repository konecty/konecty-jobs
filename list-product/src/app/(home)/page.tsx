'use client';

import Products from "./products";
import SearchFilter from '../../components/search-filter';
import useProducts from '@/hooks/useProducts';
import useFilteredProducts from '@/hooks/useFilteredProducts';

export default function ListProducts() {
  const products = useProducts();
  const { filteredProducts, setFilteredProducts } = useFilteredProducts();

  return (
    <div className="container max-w-[672px] mx-auto sm:box-content">
      {/* <h2>Lista de Produtos</h2> */}
      <SearchFilter products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
      <Products filteredProducts={filteredProducts}/>
    </div>
  );
}