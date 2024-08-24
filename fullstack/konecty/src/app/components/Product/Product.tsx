import { ISneaker } from "@/interfaces/ISneaker.interface";
import Image from "next/image";
import React from "react";

const Product = ({
  brand_name,
  name,
  grid_picture_url,
  retail_price_cents,
}: ISneaker): React.JSX.Element => {
  const price = (price: number) => {
    return price / 100;
  };
  return (
    <div className="flex min-h-[240px] w-full flex-col justify-between rounded-[15px] bg-white px-4 pb-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex justify-center">
        <Image
          src={grid_picture_url}
          alt={brand_name}
          width={160}
          height={160}
          priority={true}
          className="h-[200px] w-[200px] object-contain sm:h-[180px] sm:w-[180px] md:h-[140px] md:w-[140px] lg:h-[160px] lg:w-[160px]"
        />
      </div>
      <div className="flex flex-grow flex-col justify-end font-inter">
        <span className="text-base font-medium leading-[19px] text-black">
          {brand_name}
        </span>
        <span className="max-w-full truncate text-[13px] font-normal leading-4 text-[#7C7A7A]">
          {name}
        </span>
        <span className="text-sm font-medium leading-4 text-black">
          $ {price(retail_price_cents)}
        </span>
      </div>
    </div>
  );
};

export default Product;
