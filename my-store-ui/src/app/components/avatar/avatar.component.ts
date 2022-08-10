import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;

  auth: Observable<boolean>;

  isLoggedIn: boolean = false;

  constructor(
    private store: Store<{ auth: boolean }>
  ) {
    this.src = '';
    this.alt = '';
    this.auth = store.select('auth');
  }

  ngOnInit(): void {
    this.auth.subscribe(res => this.isLoggedIn = res);
  }

}
