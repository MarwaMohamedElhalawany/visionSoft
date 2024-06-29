import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeaccRoutingModule } from './exchangeacc-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExchangeAccComponent } from './exchange-acc/exchange-acc.component';
import { ExchangeAccDtlsComponent } from './exchange-acc-dtls/exchange-acc-dtls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ModalsModule } from '../../modals/modals.module';


@NgModule({
  declarations: [
    ExchangeAccComponent,
    ExchangeAccDtlsComponent
  ],
  imports: [
    CommonModule,
    ExchangeaccRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    ModalsModule

  ]
})
export class ExchangeaccModule { }
