import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInvoicesRoutingModule } from './customer-invoices-routing.module';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerInvoicesComponent
  ],
  imports: [
    CommonModule,
    CustomerInvoicesRoutingModule,
    
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerInvoicesModule { }
