import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../store/cart/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem = {} as CartItem;

  public isFeedbacked: boolean = false;

  constructor(
    private store: Store<{ cart: Cart }>
  ) {

  }

  ngOnInit(): void {
  }

  async removeFromCart(product: Product) {
    this.isFeedbacked = true;
    await this.hideFeedback(true);
    this.store.dispatch(removeFromCart(product));
  }

  public async hideFeedback(isShown: boolean) {
    if (isShown) {
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(500);
      this.isFeedbacked = false;
    }
  }
}
