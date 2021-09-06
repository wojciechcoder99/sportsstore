import { Component } from "@angular/core";
import { Product } from "../model/Product";
import { ProductRepository } from "../model/product.repository";
import { StringUtils } from "../utils/StringUtils";

@Component({
    selector: 'store',
    templateUrl: 'store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent {
    public selectedCategory: string = StringUtils.EMPTY_STRING;
    constructor(private productRepository: ProductRepository) { }

    get products(): Product[] {
        console.log(this.selectedCategory);
        return this.productRepository.getProductsByCategory(this.selectedCategory);
    }

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    changeCategory(newCategory: string = StringUtils.EMPTY_STRING): void {
        this.selectedCategory = newCategory;
    }
}