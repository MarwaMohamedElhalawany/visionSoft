import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentpermissionRoutingModule } from './paymentpermission-routing.module';
import { PaymentPermissionComponent } from './payment-permission/payment-permission.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalsModule } from '../../modals/modals.module';
// import { ModalsModule } from '../../../modals/modals.module';


@NgModule({
  declarations: [
    PaymentPermissionComponent
  ],
  imports: [
    CommonModule,
    PaymentpermissionRoutingModule,

   ModalsModule,
    TranslateModule,

  ]
})
export class PaymentpermissionModule { }
