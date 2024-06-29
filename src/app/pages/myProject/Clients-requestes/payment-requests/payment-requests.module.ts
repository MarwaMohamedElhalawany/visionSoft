import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaymentRequestsComponent } from './payment-requests.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaymentRequestsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
FormsModule,
ReactiveFormsModule,
 DropdownModule ,
 RouterModule.forChild([
  {
    path: '',
    component: PaymentRequestsComponent,
  },
]),
  ]
})
export class PaymentRequestsModule { }
