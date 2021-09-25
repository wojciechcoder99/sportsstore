import { Injectable } from "@angular/core";
import { RestDataSource } from "src/app/database/rest.datasource";
import { StringUtils } from "../../../utils/StringUtils";
import { Product } from "./product.model";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, i, array) => array.indexOf(c) == i).sort();
        })
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

    getProductsNumber(): number {
        return this.products.length;
    }

    getProductsByCategory(category: string): Product[] {
        return this.products.filter(p => p.category == category || category == StringUtils.EMPTY_STRING);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getCategories(): string[] {
        return this.categories;
    }

    saveOrUpdate(product: Product): void {
        if (product.id != null || product.id == 0) {
            this.saveProduct(product);
        }
        else {
            this.updateProduct(product);
        }
    }

    private saveProduct(product: Product) {
        this.dataSource.saveProduct(product).subscribe(p => {
            this.products.push(product);
        })
    }

    private updateProduct(product: Product) {
        this.dataSource.updateProduct(product).subscribe(p => {
            this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
        })
    }

    deleteProduct(productId: number): void {
        this.dataSource.deleteProduct(productId).subscribe(p => {
            this.products.splice(this.products.findIndex(p => p.id == productId), 1);
        })
    }

}



