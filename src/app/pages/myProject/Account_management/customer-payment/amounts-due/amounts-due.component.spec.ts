import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountsDueComponent } from './amounts-due.component';

describe('AmountsDueComponent', () => {
  let component: AmountsDueComponent;
  let fixture: ComponentFixture<AmountsDueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmountsDueComponent]
    });
    fixture = TestBed.createComponent(AmountsDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
