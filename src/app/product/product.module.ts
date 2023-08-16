import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';


const productRoutes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'admin/products', component: ProductsAdminComponent}
];

@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
    TableModule,
    ButtonModule,
    BreadcrumbModule,
    DataViewModule,
    RatingModule,
    TagModule,
    DropdownModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {}
