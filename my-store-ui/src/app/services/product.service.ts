import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { API_URL } from '../enums/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL.PRODUCTS);
  }
}
