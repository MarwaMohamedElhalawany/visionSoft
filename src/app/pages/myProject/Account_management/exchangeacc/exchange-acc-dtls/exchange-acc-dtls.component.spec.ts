import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAccDtlsComponent } from './exchange-acc-dtls.component';

describe('ExchangeAccDtlsComponent', () => {
  let component: ExchangeAccDtlsComponent;
  let fixture: ComponentFixture<ExchangeAccDtlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeAccDtlsComponent]
    });
    fixture = TestBed.createComponent(ExchangeAccDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
