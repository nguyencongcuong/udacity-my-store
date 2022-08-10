import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Cart } from '../../models/cart';
import { Router } from '@angular/router';
import { NAVIGATION } from '../../models/navigation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Observable<Cart>;
  auth: Observable<boolean>;
  isLoggedIn: boolean = false;
  count: number = 0;

  constructor(
    private store: Store<{ cart: Cart, auth: boolean }>,
    private router: Router
  ) {
    this.cart = store.select('cart');
    this.auth = store.select('auth');
  }

  ngOnInit(): void {
    this.cart.subscribe((res) => {
      this.count = res.length;
    });
    this.auth.subscribe(res => this.isLoggedIn = res);
  }

  navigateToCheckoutPage() {
    this.router.navigate([NAVIGATION.CHECKOUT_PAGE]);
  }

}
