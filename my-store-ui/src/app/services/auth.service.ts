import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../enums/api';
import { Auth } from '../models/auth';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';
import { resetCart } from '../store/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private store: Store<{ auth: boolean }>
  ) {
    this.auth = store.select('auth');
  }

  signup(payload: User): Observable<Auth> {
    return this.http.post<Auth>(API_URL.CREATE_USER, payload);
  }

  login(payload: User): Observable<Auth> {
    return this.http.post<Auth>(API_URL.SIGNIN, payload);
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(resetCart());
    this.store.dispatch(logout());
  }
}
