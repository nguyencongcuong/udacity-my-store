import { Product } from './product';

export type Cart = CartItem[]

export type CartItem = {
  product: Product,
  count: number
}
