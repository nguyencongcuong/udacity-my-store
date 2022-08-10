import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import {
  CheckoutConfirmationPageComponent
} from './pages/checkout-confirmation-page/checkout-confirmation-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'product/:id', component: ProductDetailsPageComponent },
  { path: 'checkout-confirmation', component: CheckoutConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
