import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../../enums/navigation';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  home: string;
  blog: string;
  signin: string;
  signup: string;
  auth: Observable<boolean>;
  isLoggedIn: boolean = false;

  constructor(
    private store: Store<{ auth: boolean }>,
    private authService: AuthService,
  ) {
    this.home = NAVIGATION.HOME;
    this.blog = NAVIGATION.BLOG;
    this.signin = NAVIGATION.SIGNIN;
    this.signup = NAVIGATION.SIGNUP;
    this.auth = store.select('auth');
  }

  ngOnInit(): void {
    this.auth.subscribe(res => this.isLoggedIn = res);
  }

  logout() {
    this.authService.logout();
  }

}
