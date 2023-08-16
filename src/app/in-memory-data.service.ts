import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from './product/mock-product-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const products = PRODUCTS;
    return { products };
  }

}

// ce service ci dessus va simuler que les données viennent d'1 serveur distant