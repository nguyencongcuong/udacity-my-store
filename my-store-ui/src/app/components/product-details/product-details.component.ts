import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { addToCart } from '../../store/cart/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {} as Product;
  isLoggedIn: boolean = false;
  isFeedbacked: boolean = false;
  private auth: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<{ auth: boolean }>
  ) {
    this.auth = store.select('auth');
  }

  ngOnInit(): void {
    this.auth.subscribe((res) => this.isLoggedIn = res);
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = routeParams.get('id');
    this.productService.getProducts().subscribe((res) => {
      if (res.length > 0) {
        this.product = res.find((item) => item.id === Number(productIDFromRoute)) as Product;
      }
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
