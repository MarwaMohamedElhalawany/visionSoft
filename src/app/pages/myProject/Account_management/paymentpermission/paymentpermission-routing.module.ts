import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPermissionComponent } from './payment-permission/payment-permission.component';

const routes: Routes = [
  {
    path: '',
   component: PaymentPermissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentpermissionRoutingModule { }
