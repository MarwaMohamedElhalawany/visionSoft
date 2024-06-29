import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryPaymentRoutingModule } from './delivery-payment-routing.module';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { PaymentFilesComponent } from './payment-files/payment-files.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeliveryPaymentComponent,
    PaymentFilesComponent
  ],
  imports: [
    CommonModule,
    DeliveryPaymentRoutingModule,
    
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DeliveryPaymentModule { }
