import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION } from '../../models/navigation';

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.scss']
})
export class CheckoutConfirmationComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigateToProductPage() {
    this.router.navigate([NAVIGATION.HOME_PAGE]);
  }

}
