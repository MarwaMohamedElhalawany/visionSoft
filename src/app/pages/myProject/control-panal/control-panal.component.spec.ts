import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanalComponent } from './control-panal.component';

describe('ControlPanalComponent', () => {
  let component: ControlPanalComponent;
  let fixture: ComponentFixture<ControlPanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanalComponent]
    });
    fixture = TestBed.createComponent(ControlPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
