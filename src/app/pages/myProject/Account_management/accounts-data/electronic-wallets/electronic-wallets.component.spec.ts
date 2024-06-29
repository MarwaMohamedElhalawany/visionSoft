import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicWalletsComponent } from './electronic-wallets.component';

describe('ElectronicWalletsComponent', () => {
  let component: ElectronicWalletsComponent;
  let fixture: ComponentFixture<ElectronicWalletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicWalletsComponent]
    });
    fixture = TestBed.createComponent(ElectronicWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
