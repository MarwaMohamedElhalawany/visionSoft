import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeAccComponent } from './exchange-acc/exchange-acc.component';
import { ExchangeAccDtlsComponent } from './exchange-acc-dtls/exchange-acc-dtls.component';

const routes: Routes = [
  {
    path: '',
   component: ExchangeAccComponent
  },
  {
    path: 'exchangeAccDtls',
   component: ExchangeAccDtlsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeaccRoutingModule { }
