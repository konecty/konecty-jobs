"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ISneaker } from "@/interfaces/ISneaker.interface";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "@/app/components/CategoryFilter/CategoryFilter";
import ProductGrid from "@/app/components/Product/ProductGrid";
import Loading from "@/app/components/Loading/Loading";
import ErrorMessage from "@/app/components/ErrorMessage/ErrorMessage";

const SneakersPage = () => {
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [brandNames, setBrandNames] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("Todos");

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("/api/sneakers");
        if (!response.ok) {
          throw new Error("Failed to fetch sneakers");
        }
        const data = await response.json();
        setSneakers(data);

        const brands = data.map((sneaker: ISneaker) => sneaker.brand_name);
        const uniqueBrands = ["Todos", ...Array.from(new Set<string>(brands))];
        setBrandNames(uniqueBrands);
      } catch (error) {
        setError("Erro ao carregar os produtos");
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  const handleBrandClick = useCallback((brand: string) => {
    setSelectedBrand(brand);
  }, []);

  const filteredSneakers = useMemo(() => {
    return sneakers.filter((sneaker) => {
      const matchesSearch = sneaker.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesBrand =
        selectedBrand === "Todos" || sneaker.brand_name === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [sneakers, searchTerm, selectedBrand]);

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto w-full space-y-8 bg-[#F4F4F4] p-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        <h1 className="font-montserrat mb-[7px] text-left text-[30px] font-extrabold leading-[36.57px]">
          Tênis
        </h1>

        <p className="font-inter text-base font-normal text-black">
          {filteredSneakers.length} produtos encontrados
        </p>
      </div>
      <CategoryFilter
        brandNames={brandNames}
        selectedBrand={selectedBrand}
        handleBrandClick={handleBrandClick}
      />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ProductGrid sneakers={filteredSneakers} />
      )}
    </div>
  );
};

export default SneakersPage;
