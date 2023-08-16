import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="customCenter">
      <p>
        This page does not exist !
      </p>
      <a routerLink="/products">Home page here</a>
    </div>
  `
})
export class PageNotFoundComponent {}
