import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionUsersComponent } from './vision-users.component';

describe('VisionUsersComponent', () => {
  let component: VisionUsersComponent;
  let fixture: ComponentFixture<VisionUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionUsersComponent]
    });
    fixture = TestBed.createComponent(VisionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
