import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  private log(response: any){
    console.table(response);
  }
  private handError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>('api/products').pipe(
      tap((productList) => this.log(productList)),
      catchError((eror) => this.handError(eror, []))
    );
  }

  deleteProductById(productId: number): Observable<null> {
    return this.http.delete(`api/products/${productId}`).pipe(
      tap((response) => this.log(response)),
      catchError((err) => this.handError(err, null))
    );
  }

}
