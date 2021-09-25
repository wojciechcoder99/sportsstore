import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/buisness-objects/product/product.model';
import { ProductRepository } from 'src/app/model/buisness-objects/product/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  constructor(private productRepository: ProductRepository) { }

  get products(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(id: number): void {
    this.productRepository.deleteProduct(id);
  }

}
