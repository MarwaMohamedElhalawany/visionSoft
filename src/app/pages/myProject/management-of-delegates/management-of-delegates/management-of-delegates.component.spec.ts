import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementOfDelegatesComponent } from './management-of-delegates.component';

describe('ManagementOfDelegatesComponent', () => {
  let component: ManagementOfDelegatesComponent;
  let fixture: ComponentFixture<ManagementOfDelegatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementOfDelegatesComponent]
    });
    fixture = TestBed.createComponent(ManagementOfDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
