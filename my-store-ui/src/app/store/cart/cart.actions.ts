import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product';

export const addToCart = createAction('Add Product', props<Product>());
export const removeFromCart = createAction('Remove Product', props<Product>());
export const resetCart = createAction('Clear Cart');
