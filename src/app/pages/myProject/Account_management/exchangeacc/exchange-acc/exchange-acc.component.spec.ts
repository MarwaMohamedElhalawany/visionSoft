import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAccComponent } from './exchange-acc.component';

describe('ExchangeAccComponent', () => {
  let component: ExchangeAccComponent;
  let fixture: ComponentFixture<ExchangeAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeAccComponent]
    });
    fixture = TestBed.createComponent(ExchangeAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
