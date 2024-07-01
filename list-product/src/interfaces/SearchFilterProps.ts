import { Dispatch, SetStateAction } from "react";
import { Product } from "./Product";

export interface SearchFilterProps {
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
  // onFilter: (brand: string) => void;
  // clearFilter: () => void;
}