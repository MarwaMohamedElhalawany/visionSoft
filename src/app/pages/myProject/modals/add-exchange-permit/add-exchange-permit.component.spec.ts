import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExchangePermitComponent } from './add-exchange-permit.component';

describe('AddExchangePermitComponent', () => {
  let component: AddExchangePermitComponent;
  let fixture: ComponentFixture<AddExchangePermitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExchangePermitComponent]
    });
    fixture = TestBed.createComponent(AddExchangePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
