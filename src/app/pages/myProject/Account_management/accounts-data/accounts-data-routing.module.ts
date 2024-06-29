import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { BanksComponent } from './banks/banks.component';
import { StorageComponent } from './storage/storage.component';
import { ElectronicWalletsComponent } from './electronic-wallets/electronic-wallets.component';

const routes: Routes = [
  {
    path: '',
   component: AllAccountsComponent
  },
  {
    path: 'banks',
   component: BanksComponent
  },
  {
    path: 'storage',
   component: StorageComponent
  },
  {
    path: 'electronicWallets',
   component: ElectronicWalletsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsDataRoutingModule { }
