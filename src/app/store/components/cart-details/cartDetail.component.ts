import { Component } from "@angular/core";
import { ConnectionService } from "src/app/services/connection.service";
import { Cart } from "../../../model/buisness-objects/cart/cart.model";

@Component({
    selector: 'cart-detail',
    templateUrl: 'cartDetail.component.html',
})

export class CartDetailComponent {
    public connected: boolean = true;

    constructor(public cart: Cart, private connection: ConnectionService) {
        this.connected = this.connection.connected;
        connection.changes.subscribe((state) => this.connected = state);
    }
}