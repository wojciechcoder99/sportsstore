import { Component } from "@angular/core";
import { Cart } from "../../../model/buisness-objects/cart/cart.model";

@Component({
    selector: 'cart-detail',
    templateUrl: 'cartDetail.component.html',
})

export class CartDetailComponent {
    constructor(public cart: Cart) { }
}