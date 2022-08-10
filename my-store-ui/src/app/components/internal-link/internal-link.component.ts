import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-link',
  templateUrl: './internal-link.component.html',
  styleUrls: ['./internal-link.component.scss']
})
export class InternalLinkComponent implements OnInit {
  @Input() title: string;
  @Input() route: string;

  constructor() {
    this.title = '';
    this.route = '';
  }

  ngOnInit(): void {
  }

}
