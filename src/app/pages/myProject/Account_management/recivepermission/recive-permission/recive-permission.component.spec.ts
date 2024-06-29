import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivePermissionComponent } from './recive-permission.component';

describe('RecivePermissionComponent', () => {
  let component: RecivePermissionComponent;
  let fixture: ComponentFixture<RecivePermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivePermissionComponent]
    });
    fixture = TestBed.createComponent(RecivePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
