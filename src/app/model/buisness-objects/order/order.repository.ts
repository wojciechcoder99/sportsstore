import { Order } from "./order.model";
import { StaticDataSource } from "src/app/database/static.datasource";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) { }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}