import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecivePermissionComponent } from './recive-permission/recive-permission.component';

const routes: Routes = [
  {
    path: '',
   component: RecivePermissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecivepermissionRoutingModule { }
