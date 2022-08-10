import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { CheckOut } from '../../models/checkout';
import { resetCart } from '../../store/cart/cart.actions';
import { Router } from '@angular/router';
import { NAVIGATION } from '../../models/navigation';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { wordValidator } from '../../directives/wordValidator.directive';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public checkoutData = {} as CheckOut;
  private cart: Observable<Cart>;
  checkoutForm = new FormGroup({
    receiverName: new FormControl('', [Validators.required, Validators.minLength(6), wordValidator(/\d/g)]),
    receiverMobilePhone: new FormControl('', [Validators.required, Validators.minLength(6)]),
    receiverAddress: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cardHolderName: new FormControl('', [Validators.required, Validators.minLength(6), wordValidator(/\d/g)]),
    cardHolderNumber: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    cardHolderExpiryDate: new FormControl('', [Validators.required]),
    cardHolderSecurityNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })

  constructor(
    private store: Store<{ cart: Cart }>,
    private router: Router,
  ) {
    this.cart = this.store.select('cart');
  }

  ngOnInit(): void {
    this.cart.subscribe(res => {
      let totalCount = 0;
      let totalPrice = 0;

      res.forEach((item) => {
        totalCount += item.count;
        totalPrice += item.product.price * item.count;
      });

      this.checkoutData = {
        cart: res,
        totalCount: totalCount,
        totalPrice: totalPrice,
        currency: 'USD'
      };
    });


  }

  checkout() {
    if(this.checkoutForm.valid) {
      // Do more logic for checkout here
      this.store.dispatch(resetCart());
      this.router.navigate([NAVIGATION.CHECKOUT_CONFIRMATION_PAGE]);
    }
  }

  submitForm() {
    this.checkout();
  }

}
