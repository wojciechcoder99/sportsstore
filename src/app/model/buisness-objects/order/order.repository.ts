import { Order } from "./order.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { RestDataSource } from "src/app/database/rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) { }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    private loadOrders(): void {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => {
            this.orders = orders;
        })
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order): void {
        this.dataSource.updateOrder(order).subscribe(o => {
            this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1, o);
        })
    }

    deleteOrder(orderId: number): void {
        this.dataSource.deleteOrder(orderId).subscribe(o => {
            this.orders.splice(this.orders.findIndex(o => o.id === orderId));
        })
    }
}