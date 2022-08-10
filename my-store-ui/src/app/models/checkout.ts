import { Cart } from './cart';

export interface CheckOut {
  cart: Cart,
  totalPrice: number,
  totalCount: number;
  currency: string;
}
