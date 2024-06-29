import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { AmountsDueComponent } from './amounts-due/amounts-due.component';
import { ClientsPaymentComponent } from './clients-payment/clients-payment.component';

const routes: Routes = [
  {
    path: '',
   component: ClientsPaymentComponent
  },
  {
    path: 'invoices',
   component: CustomerInvoicesComponent
  },
  {
    path: 'paymentInvoice',
   component: AmountsDueComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPaymentRoutingModule { }




 