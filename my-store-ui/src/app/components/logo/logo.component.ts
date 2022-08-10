import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  src: string;
  alt: string;
  width: string;
  height: string;
  name: string;

  constructor() {
    this.src = './assets/images/logo.png';
    this.alt = 'My Store';
    this.width = '60';
    this.height = '60';
    this.name = 'My store';
  }

  ngOnInit(): void {
  }

}
