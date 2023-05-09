export interface IProduct {
  product_id: string;
  product_name: string;
  product_category: string;
  product_desc: string;
  product_img: string;
  product_count: number;
  product_price: string;
}

export type ProductType = IProduct | undefined;
