import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementOfDelegatesComponent } from './management-of-delegates/management-of-delegates.component';
import { NewDelegateComponent } from './new-delegate/new-delegate.component';

const routes: Routes = [
  {
    path: '',
   component: ManagementOfDelegatesComponent
  },
  {
    path: 'newDelivery',
   component: NewDelegateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementOfDelegatesRoutingModule { }
