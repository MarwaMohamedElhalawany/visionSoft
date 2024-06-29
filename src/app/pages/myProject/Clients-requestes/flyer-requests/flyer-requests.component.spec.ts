import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerRequestsComponent } from './flyer-requests/flyer-requests.component';

describe('FlyerRequestsComponent', () => {
  let component: FlyerRequestsComponent;
  let fixture: ComponentFixture<FlyerRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerRequestsComponent]
    });
    fixture = TestBed.createComponent(FlyerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
