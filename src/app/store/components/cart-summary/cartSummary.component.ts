import { Component } from "@angular/core";
import { Cart } from "../../../model/buisness-objects/cart/cart.model";

@Component({
    selector: 'cart-summary',
    templateUrl: './cartSummary.component.html'
})

export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}