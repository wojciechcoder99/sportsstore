import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Cart } from "../model/buisness-objects/cart/cart.model";
import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./components/cart-details/cartDetail.component";
import { CartSummaryComponent } from "./components/cart-summary/cartSummary.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CounterDirective } from "./counter.directive";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }