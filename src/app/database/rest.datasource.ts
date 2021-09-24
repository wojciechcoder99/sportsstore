import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/buisness-objects/product/product.model";
import { Observable } from "rxjs";
import { Order } from "../model/buisness-objects/order/order.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    private baseURL: string;
    public auth_token: string | null = null;

    constructor(private http: HttpClient) {
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL + "products");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseURL + "orders", order);
    }

    authenticate(username: string | null, password: string | null): Observable<boolean> {
        return this.http.post<any>(this.baseURL + "/login", {
            name: username, password: password
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

}