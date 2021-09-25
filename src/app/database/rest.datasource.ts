import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseURL + "products/", product, this.getOptions());
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(this.baseURL + "products" + `/${product.id}`, product, this.getOptions());
    }

    deleteProduct(productId: number): Observable<Product> {
        return this.http.delete<Product>(this.baseURL + "products" + `/${productId}`, this.getOptions());
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseURL + "orders", this.getOptions());
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(this.baseURL + "orders" + `/${order.id}`, this.getOptions());
    }

    deleteOrder(orderId: number): Observable<Order> {
        return this.http.delete<Order>(this.baseURL + "orders" + `/${orderId}`, this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({ 'Authorization': `Bearer<${this.auth_token}>` })
        }
    }

}