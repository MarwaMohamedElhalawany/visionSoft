import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';

const routes: Routes = [
  {
    path: '',
   component: CustomerInvoicesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInvoicesRoutingModule { }
