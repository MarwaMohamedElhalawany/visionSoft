import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {
    path: '',
   component: StaffManagementComponent
  },
  {
    path: 'employeeDetails',
   component: NewEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
