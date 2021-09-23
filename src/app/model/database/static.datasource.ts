import { Injectable } from "@angular/core";
import { Product } from "../buisness-objects/product/product.model";
import { Observable, from } from "rxjs";
import { Order } from "../buisness-objects/order/order.model";
@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(2, "Produkt 2", "Kategoria 1", "Produkt 2 (Kategoria 1)", 100),
        new Product(3, "Produkt 3", "Kategoria 1", "Produkt 3 (Kategoria 1)", 100),
        new Product(4, "Produkt 4", "Kategoria 1", "Produkt 4 (Kategoria 1)", 100),
        new Product(5, "Produkt 5", "Kategoria 1", "Produkt 5 (Kategoria 1)", 100),
        new Product(6, "Produkt 6", "Kategoria 2", "Produkt 6 (Kategoria 2)", 100),
        new Product(7, "Produkt 7", "Kategoria 2", "Produkt 7 (Kategoria 2)", 100),
        new Product(8, "Produkt 8", "Kategoria 2", "Produkt 8 (Kategoria 2)", 100),
        new Product(9, "Produkt 9", "Kategoria 2", "Produkt 9 (Kategoria 2)", 100),
        new Product(10, "Produkt 10", "Kategoria 2", "Produkt 10 (Kategoria 2)", 100),
        new Product(11, "Produkt 11", "Kategoria 3", "Produkt 11 (Kategoria 3)", 100),
        new Product(12, "Produkt 12", "Kategoria 3", "Produkt 12 (Kategoria 3)", 100),
        new Product(13, "Produkt 13", "Kategoria 3", "Produkt 13 (Kategoria 3)", 100),
        new Product(14, "Produkt 14", "Kategoria 3", "Produkt 14 (Kategoria 3)", 100),
        new Product(15, "Produkt 15", "Kategoria 3", "Produkt 15 (Kategoria 3)", 100),
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
