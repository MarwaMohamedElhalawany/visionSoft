import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementShipmentsComponent } from './replacement-shipments.component';

describe('ReplacementShipmentsComponent', () => {
  let component: ReplacementShipmentsComponent;
  let fixture: ComponentFixture<ReplacementShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplacementShipmentsComponent]
    });
    fixture = TestBed.createComponent(ReplacementShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
