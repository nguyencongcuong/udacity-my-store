import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  isLoggedIn: boolean = false;
  isFeedbacked: boolean = false;
  private cart: Observable<Cart>;
  private auth: Observable<boolean>;

  constructor(
    private store: Store<{ cart: Cart, auth: boolean }>
  ) {
    this.product = {} as Product;
    this.cart = store.select('cart');
    this.auth = store.select('auth');
  }

  ngOnInit(): void {
    this.auth.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  public async addToCart(product: Product) {
    this.store.dispatch(addToCart(product));
    await this.showFeedback();
    await this.hideFeedback(true);
  }

  public async showFeedback() {
    this.isFeedbacked = true;
  }

  public async hideFeedback(isShown: boolean) {
    if (isShown) {
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1000);
      this.isFeedbacked = false;
    }
  }

}
