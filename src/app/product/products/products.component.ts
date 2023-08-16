import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{

  items: MenuItem[];

  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  layout: 'list'| 'grid';

  productList: Product[];

  constructor (
    private service: ProductService
  ){}

  ngOnInit(){
    this.items = [{ label: 'Home', routerLink: '/' },{ label: 'Products' }];

    this.service.getProductList()
    .subscribe(products => this.productList = products);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.layout = 'list';
  }

  // Pour définir le mode d'affichage entre liste et grille
  setLayout(layout: 'list' | 'grid') {
    this.layout = layout;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  getSeverity (product: Product): string | undefined {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return undefined;
    }
  };

}