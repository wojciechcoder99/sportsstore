import { NgModule } from "@angular/core";
import { Cart } from "./buisness-objects/cart/cart.model";
import { ProductRepository } from "./buisness-objects/product/product.repository";
import { StaticDataSource } from "./database/static.datasource";
import { OrderRepository } from "./buisness-objects/order/order.repository";
import { Order } from "./buisness-objects/order/order.model";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./database/rest.datasource";
@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, OrderRepository, Order,
        { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }
