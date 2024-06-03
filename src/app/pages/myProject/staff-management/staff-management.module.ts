import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StaffManagementComponent,
    NewEmployeeComponent,
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    TranslateModule,

  ]
})
export class StaffManagementModule { }
