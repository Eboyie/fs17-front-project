import { z } from 'zod';

export type SingleProductType = {
  data: ProductsType;
};

export const storeSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: z.object({ rate: z.number(), count: z.number() }),
});

export type ProductsType = z.infer<typeof storeSchema>;

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
  loading: boolean;
  error: string | null;
};

export type CartItem = {
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  amount: number;
};
