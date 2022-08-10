import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingFeedbackComponent } from './floating-feedback.component';

describe('FloatingFeedbackComponent', () => {
  let component: FloatingFeedbackComponent;
  let fixture: ComponentFixture<FloatingFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
