import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (term: string) => void;
}

const SearchBar = ({
  search,
  setSearch,
}: SearchBarProps): React.JSX.Element => {
  return (
    <div className="mt-[45px]">
      <input
        type="text"
        placeholder="🔍 Buscar produto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 md:w-1/3"
      />
    </div>
  );
};

export default SearchBar;
