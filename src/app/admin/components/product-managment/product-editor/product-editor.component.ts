import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/buisness-objects/product/product.model';
import { ProductRepository } from 'src/app/model/buisness-objects/product/product.repository';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product;

  constructor(private productRepository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
    this.product = new Product(productRepository.getProductsNumber() + 1, '', '', '', 0);
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,
        this.productRepository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }

  save(form: NgForm) {
    this.productRepository.saveOrUpdate(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }

}
