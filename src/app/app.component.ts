import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid">
      <div class="col-2 customBg1">
        <p class="customTitre"><i class="fa-brands fa-angular mr-1" style="color: #e13137;"></i><span>Alten Shop</span></p>
      </div>
      <div class="col-10 customBg2">
        <p class="customUser">John Doe</p>
      </div>
    </div>

    <div class="grid">
      <div class="col-2 customBg3">
        <div (click)="goToProducts()" class="customNav">
          <i class="pi pi-shopping-cart m-3"></i>Products
        </div>
        <div (click)="goToAdminProducts()" class="customNav">
          <i class="pi pi-users m-3"></i>Admin
        </div>
      </div>
      <div class="col-10 customBg4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {

  constructor (
    private router: Router
  ) {}

  goToProducts(){
    this.router.navigate(['products']);
  }

  goToAdminProducts(){
    this.router.navigate(['admin/products']);
  }

}
