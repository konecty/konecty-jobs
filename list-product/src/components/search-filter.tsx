// app/components/SearchFilter.tsx
'use client'

import { useEffect, useState } from 'react';
import { SearchFilterProps } from '../interfaces/SearchFilterProps';
import { Product } from '@/interfaces/Product';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function SearchFilter({ products, filteredProducts, setFilteredProducts }: SearchFilterProps) {

  // const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brands = Array.from(new Set(products.map((product: Product) => product.brand)));
  // setBrands(uniqueBrands)

  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    setFilteredProducts(products.filter(product =>
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    ));
    console.log(filteredProducts)
  };


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };


  const handleFilter = (brand: string) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
      setFilteredProducts(products);
    } else {
      setSelectedBrand(brand);
      setFilteredProducts(products.filter(product => product.brand === brand));
    }
  };

  const clearFilter = () => {
    setFilteredProducts(products)
    setSelectedBrand(null);
  }

  return (
    <div className="space-y-6 mb-6">
      <div className='p-2 border rounded-xl mt-8 bg-white flex items-center gap-2 w-max'>
      <FontAwesomeIcon icon={faSearch} className="left-3 top-1/2 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Buscar produtos..."
        className="outline-none w-56"
      />
      </div>
      <div>
        <h2 className='text-3xl font-bold'>Tênis</h2>
        <p className='text-base'>{filteredProducts.length} produtos encontrados</p>
      </div>
      <div className="flex gap-4 whitespace-nowrap overflow-auto scrollbar-hide">
        <button
          onClick={clearFilter}
          className={`py-2 px-4 rounded-full ${selectedBrand === null ? 'bg-[#51BAE8] text-white' : 'bg-white text-black'}`}
        >
          Todos
        </button>
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => handleFilter(brand)}
            className={`py-2 px-4 rounded-full ${selectedBrand === brand ? 'bg-[#51BAE8] text-white' : 'bg-white text-black'}`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
