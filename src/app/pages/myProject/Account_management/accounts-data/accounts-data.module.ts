import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsDataRoutingModule } from './accounts-data-routing.module';
import { StorageComponent } from './storage/storage.component';
import { BanksComponent } from './banks/banks.component';
import { ElectronicWalletsComponent } from './electronic-wallets/electronic-wallets.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { ModalsModule } from '../../modals/modals.module';
import { AddAcountComponent } from '../../modals/add-acount/add-acount/add-acount.component';


@NgModule({
  declarations: [
    StorageComponent,
    BanksComponent,
    ElectronicWalletsComponent,
    AllAccountsComponent,
    
  ],
  imports: [
    CommonModule,
    AccountsDataRoutingModule,   
    TranslateModule,
FormsModule,
ReactiveFormsModule,
 DropdownModule,
 ModalsModule,

  ]
})
export class AccountsDataModule { }
