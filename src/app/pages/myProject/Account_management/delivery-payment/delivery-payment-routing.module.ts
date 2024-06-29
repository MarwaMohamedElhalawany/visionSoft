import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { PaymentFilesComponent } from './payment-files/payment-files.component';

const routes: Routes = [
  {
    path: '',
   component: DeliveryPaymentComponent
  },
  {
    path: 'record',
   component: PaymentFilesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryPaymentRoutingModule { }
