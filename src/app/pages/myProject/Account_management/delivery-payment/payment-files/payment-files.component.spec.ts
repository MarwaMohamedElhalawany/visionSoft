import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFilesComponent } from './payment-files.component';

describe('PaymentFilesComponent', () => {
  let component: PaymentFilesComponent;
  let fixture: ComponentFixture<PaymentFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFilesComponent]
    });
    fixture = TestBed.createComponent(PaymentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
