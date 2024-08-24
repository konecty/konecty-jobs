interface ISneaker {
  brand_name: string;
  category: string[];
  grid_picture_url: string;
  retail_price_cents: number;
  name: string;
}

interface ISneakers {
  sneakers: ISneaker[];
}

export type { ISneaker, ISneakers };
