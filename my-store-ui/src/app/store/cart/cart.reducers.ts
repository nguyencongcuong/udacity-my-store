import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, resetCart } from './cart.actions';
import { Cart } from '../../models/cart';

export const initialState: Cart = [];

export const cartReducer = createReducer(
  initialState,
  on(resetCart, state => initialState),
  on(addToCart, (state, product): Cart => {
    const found = state.find(item => item.product.id === product.id);
    if (found) {
      return state.map((item) => {
        if (item.product.id === found.product.id) {
          item = {
            product: item.product,
            count: item.count + 1
          };
          return item;
        }
        return item;
      });
    } else {
      return state.concat({ product, count: 1 });
    }
  }),
  on(removeFromCart, (state, product): Cart => {
    return state.filter((item) => item.product.id !== product.id);
  })
);
