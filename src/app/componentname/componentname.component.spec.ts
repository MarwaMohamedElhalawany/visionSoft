import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentnameComponent } from './componentname.component';

describe('ComponentnameComponent', () => {
  let component: ComponentnameComponent;
  let fixture: ComponentFixture<ComponentnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentnameComponent]
    });
    fixture = TestBed.createComponent(ComponentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
