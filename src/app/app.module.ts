import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/components/checkout/checkout.component';
import { CartSummaryComponent } from './store/components/cart-summary/cartSummary.component';
import { CartDetailComponent } from './store/components/cart-details/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
registerLocaleData(localePL);

@NgModule({
  imports: [BrowserModule, StoreModule, RouterModule.forRoot(
    [
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/store" }
    ]
  )],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
