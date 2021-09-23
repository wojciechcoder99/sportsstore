import { Injectable } from "@angular/core";
import { StaticDataSource } from "src/app/model/database/static.datasource";
import { StringUtils } from "../../../utils/StringUtils";
import { Product } from "./product.model";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, i, array) => array.indexOf(c) == i).sort();
        })
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


}