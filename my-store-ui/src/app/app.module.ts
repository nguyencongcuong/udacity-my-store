import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterContainerComponent } from './containers/footer-container/footer-container.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { LogoComponent } from './components/logo/logo.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { InternalLinkComponent } from './components/internal-link/internal-link.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductListContainerComponent } from './containers/product-list-container/product-list-container.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SigninContainerComponent } from './containers/signin-container/signin-container.component';
import { SignupContainerComponent } from './containers/signup-container/signup-container.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducers';
import { authReducer } from './store/auth/auth.reducers';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutContainerComponent } from './containers/checkout-container/checkout-container.component';
import { CheckoutConfirmationComponent } from './components/checkout-confirmation/checkout-confirmation.component';
import { CheckoutConfirmationContainerComponent } from './containers/checkout-confirmation-container/checkout-confirmation-container.component';
import { CheckoutConfirmationPageComponent } from './pages/checkout-confirmation-page/checkout-confirmation-page.component';
import { FloatingFeedbackComponent } from './components/floating-feedback/floating-feedback.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductDetailsContainerComponent } from './containers/product-details-container/product-details-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductCardComponent,
    SigninFormComponent,
    SignupFormComponent,
    AvatarComponent,
    HomePageComponent,
    CheckoutPageComponent,
    SignupPageComponent,
    ProductDetailsPageComponent,
    NavbarComponent,
    FooterContainerComponent,
    HeaderContainerComponent,
    HomeContainerComponent,
    LogoComponent,
    BlogPageComponent,
    InternalLinkComponent,
    ProductListContainerComponent,
    ProductDetailsComponent,
    SigninPageComponent,
    SigninContainerComponent,
    SignupContainerComponent,
    CheckoutComponent,
    CheckoutContainerComponent,
    CheckoutConfirmationComponent,
    CheckoutConfirmationContainerComponent,
    CheckoutConfirmationPageComponent,
    FloatingFeedbackComponent,
    CartItemComponent,
    ProductDetailsContainerComponent,
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		MatIconModule,
		StoreModule.forRoot({
			cart: cartReducer,
			auth: authReducer,
		}),
		ReactiveFormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
