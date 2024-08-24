import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-[45px]">
      <input
        type="text"
        placeholder="🔍 Buscar produto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-1/3 w-full  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default SearchBar;
