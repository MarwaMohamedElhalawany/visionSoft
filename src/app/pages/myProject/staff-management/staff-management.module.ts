import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaffManagementComponent,
    NewEmployeeComponent,
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    TranslateModule,
    DropdownModule,
    FormsModule

  ]
})
export class StaffManagementModule { }
