import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent implements OnInit {
  year: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
