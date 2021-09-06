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
    public productsPerPage: number = 4;
    public selectedPage: number = 1;

    constructor(private productRepository: ProductRepository) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository.getProductsByCategory(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    changeCategory(newCategory: string = StringUtils.EMPTY_STRING): void {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number): void {
        this.selectedPage = newPage;
    }

    changePageSize(event: Event): void {
        const element = event.target as HTMLInputElement;
        const value = element.value;
        this.productsPerPage = Number(value);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.productRepository
            .getProductsByCategory(this.selectedCategory).length / this.productsPerPage);
    }
}