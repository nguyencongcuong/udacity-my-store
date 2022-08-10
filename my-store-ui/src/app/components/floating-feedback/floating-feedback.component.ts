import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floating-feedback',
  templateUrl: './floating-feedback.component.html',
  styleUrls: ['./floating-feedback.component.scss']
})
export class FloatingFeedbackComponent implements OnInit {

  @Input() isShown: boolean = false;
  @Input() message: string = '';
  @Output() isShownEvent: EventEmitter<any> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleIsShown(value: boolean) {
    this.isShownEvent.emit(value);
  }

}
