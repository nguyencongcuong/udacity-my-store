import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: boolean }>
  ) {
  }

  ngOnInit(): void {

  }

  async submitForm(): Promise<void> {
    const payload = {
      username: this.username,
      password: this.password
    };
    this.authService.login(payload).subscribe((res) => {
      const { token } = res;
      if (token) {
        localStorage.setItem('token', token);
        this.store.dispatch(login());
        this.router.navigate(['/']);
      }
    });
  }

  handleUsername() {
    console.log(this.username);
  }

  handlePassword() {
    console.log(this.password);
  }

}
