import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPaymentRoutingModule } from './customer-payment-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { AmountsDueComponent } from './amounts-due/amounts-due.component';
import { CustomerPaymentComponent } from './customer-payment.component';
import { ClientsPaymentComponent } from './clients-payment/clients-payment.component';


@NgModule({
  declarations: [
CustomerPaymentComponent,
    CustomerInvoicesComponent,
    AmountsDueComponent,
    ClientsPaymentComponent
  ],
  imports: [
    CommonModule,
    CustomerPaymentRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerPaymentModule { }
