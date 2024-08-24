import React from "react";

interface CategoryFilterProps {
  brandNames: string[];
  selectedBrand: string;
  handleBrandClick: (brand: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  brandNames,
  selectedBrand,
  handleBrandClick,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:space-x-4 gap-2 lg:gap-0">
      {brandNames.map((brand, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full font-inter text-[16px] font-medium leading-[19.36px] text-left ${
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
