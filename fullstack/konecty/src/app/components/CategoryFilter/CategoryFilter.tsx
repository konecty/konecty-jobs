import React from "react";

interface CategoryFilterProps {
  brandNames: string[];
  selectedBrand: string;
  handleBrandClick: (brand: string) => void;
}

const CategoryFilter = ({
  brandNames,
  selectedBrand,
  handleBrandClick,
}: CategoryFilterProps): React.JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:gap-0 lg:space-x-4">
      {brandNames.map((brand, index) => (
        <button
          key={index}
          className={`rounded-[32px] px-4 py-2 font text-base font-medium leading-[19.36px] ${
            selectedBrand === brand
              ? "bg-[#51BAE8] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleBrandClick(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
