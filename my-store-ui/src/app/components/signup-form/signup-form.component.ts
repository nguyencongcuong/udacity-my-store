import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
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
    this.authService.signup(payload).subscribe((res) => {
      if (res) {
        const { token } = res;
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
