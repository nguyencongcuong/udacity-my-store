import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmationContainerComponent } from './checkout-confirmation-container.component';

describe('CheckoutConfirmationContainerComponent', () => {
  let component: CheckoutConfirmationContainerComponent;
  let fixture: ComponentFixture<CheckoutConfirmationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutConfirmationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutConfirmationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
