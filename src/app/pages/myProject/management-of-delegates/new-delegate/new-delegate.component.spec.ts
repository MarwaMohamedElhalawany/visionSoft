import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDelegateComponent } from './new-delegate.component';

describe('NewDelegateComponent', () => {
  let component: NewDelegateComponent;
  let fixture: ComponentFixture<NewDelegateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDelegateComponent]
    });
    fixture = TestBed.createComponent(NewDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
