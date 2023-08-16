import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html'
})
export class ProductsAdminComponent implements OnInit{

  items: MenuItem[];

  productList: Product[];

  selectedProductList: Product[];

  constructor(
    private service: ProductService
  ){}

  ngOnInit(){
    this.items = [{ label: 'Home', routerLink: '/' },{ label: 'Admin' }];

    this.getAllProduct();
  }

  // on recupère la liste des produits
  getAllProduct() {
    this.service.getProductList()
    .subscribe(products => this.productList = products);
  }

  // on supprime un produit et on appelle getAllProduct() pour voir le changement directement 
  deleteProduct(product: Product) {
    this.service.deleteProductById(product.id)
    .subscribe(() => this.getAllProduct());
  }

  // ici, on supprime une liste de produits (les produits selectionnés par l'admin)
  deleteProductsList(products: Product[]) {
    if(products.length > 0) {
      const productsToDelete = products.slice();// copie superficielle du tableau products
      productsToDelete.forEach(product => this.deleteProduct(product));
      this.selectedProductList = [];
    }
  }

}
