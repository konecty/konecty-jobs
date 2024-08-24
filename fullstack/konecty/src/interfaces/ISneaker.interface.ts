interface ISneaker {
  id: number;
  brand_name: string;
  category: string[];
  grid_picture_url: string;
  main_picture_url: string;
  retail_price_cents: number;
  name: string;
  original_picture_url: string;
}

interface ISneakers {
  sneakers: ISneaker[];
}

export type { ISneaker, ISneakers };
