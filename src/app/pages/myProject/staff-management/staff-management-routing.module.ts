import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffManagementComponent } from './staff-management/staff-management.component';

const routes: Routes = [
  {
    path: 'AllEmployees',
   component: StaffManagementComponent
  },
  {
    path: '',
    redirectTo: '/AllEmployees',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
