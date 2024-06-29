import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { ReplacementShipmentsComponent } from './replacement-shipments/replacement-shipments.component';

const routes: Routes = [
  {
    path: '',
   component: ClientsComponent
  },
  {
    path: 'newClient',
   component: NewClientsComponent
  },
  {
    path: 'replacementShipments',
   component: ReplacementShipmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
