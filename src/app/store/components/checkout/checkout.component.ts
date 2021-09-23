import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "src/app/model/buisness-objects/order/order.model";
import { OrderRepository } from "src/app/model/buisness-objects/order/order.repository";

@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public orderRepository: OrderRepository, public order: Order) { }

    submitOrder(form: NgForm): void {
        this.submitted = true;
        if (form.valid) {
            this.orderRepository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}