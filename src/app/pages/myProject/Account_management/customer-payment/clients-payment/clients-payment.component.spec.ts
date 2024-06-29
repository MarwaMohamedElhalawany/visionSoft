import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPaymentComponent } from './clients-payment.component';

describe('ClientsPaymentComponent', () => {
  let component: ClientsPaymentComponent;
  let fixture: ComponentFixture<ClientsPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsPaymentComponent]
    });
    fixture = TestBed.createComponent(ClientsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
